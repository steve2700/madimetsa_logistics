import sharp from 'sharp'
import { writeFileSync } from 'node:fs'
import { join } from 'node:path'

const pub = join(process.cwd(), 'public')
const src = join(pub, 'icon-512.png')

const pngSizes = [
  ['favicon-16x16.png', 16],
  ['favicon-32x32.png', 32],
  ['favicon-48x48.png', 48],
  ['apple-touch-icon.png', 180],
  ['mstile-150x150.png', 150],
  ['android-chrome-192x192.png', 192],
  ['android-chrome-512x512.png', 512],
]

for (const [name, size] of pngSizes) {
  await sharp(src)
    .resize(size, size, { fit: 'cover' })
    .png()
    .toFile(join(pub, name))
  console.log('[v0] wrote', name)
}

// favicon.ico from a 32x32 raster (ICO can wrap PNG data)
const ico32 = await sharp(src).resize(32, 32, { fit: 'cover' }).png().toBuffer()
const png16 = await sharp(src).resize(16, 16, { fit: 'cover' }).png().toBuffer()

// Build a minimal ICO container holding the 16 and 32 PNG images
function buildIco(images) {
  const header = Buffer.alloc(6)
  header.writeUInt16LE(0, 0) // reserved
  header.writeUInt16LE(1, 2) // type: icon
  header.writeUInt16LE(images.length, 4)

  const dirSize = 16 * images.length
  let offset = 6 + dirSize
  const dir = Buffer.alloc(dirSize)
  const bodies = []

  images.forEach((img, i) => {
    const base = i * 16
    dir.writeUInt8(img.size >= 256 ? 0 : img.size, base + 0) // width
    dir.writeUInt8(img.size >= 256 ? 0 : img.size, base + 1) // height
    dir.writeUInt8(0, base + 2) // palette
    dir.writeUInt8(0, base + 3) // reserved
    dir.writeUInt16LE(1, base + 4) // color planes
    dir.writeUInt16LE(32, base + 6) // bpp
    dir.writeUInt32LE(img.data.length, base + 8) // size
    dir.writeUInt32LE(offset, base + 12) // offset
    offset += img.data.length
    bodies.push(img.data)
  })

  return Buffer.concat([header, dir, ...bodies])
}

const ico = buildIco([
  { size: 16, data: png16 },
  { size: 32, data: ico32 },
])
writeFileSync(join(pub, 'favicon.ico'), ico)
console.log('[v0] wrote favicon.ico')
