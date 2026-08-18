import sharp from 'sharp'
import { join } from 'node:path'

const pub = join(process.cwd(), 'public')
const src = join(pub, 'logo-horizontal.png')

const { data, info } = await sharp(src)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true })

const c = info.channels
const out = Buffer.from(data)

for (let i = 0; i < info.width * info.height; i++) {
  const o = i * c
  const r = data[o], g = data[o + 1], b = data[o + 2], a = data[o + 3]
  if (a < 8) continue // transparent, skip

  const lum = 0.299 * r + 0.587 * g + 0.114 * b
  const isGold = r > 120 && r > b + 40 && g > b // warm/gold tones
  const isBright = lum > 150 // white truck body etc.

  if (isGold || isBright) {
    // keep brand gold and bright highlights as-is
    continue
  }

  // Dark navy/black areas (wordmark + M outline + truck detailing):
  // remap to a light silver so they read on a near-black header.
  const target = 232 - Math.min(lum, 120) * 0.35 // ~190..232 light silver
  out[o] = target
  out[o + 1] = target
  out[o + 2] = Math.min(255, target + 4) // faint cool tint
}

await sharp(out, { raw: { width: info.width, height: info.height, channels: c } })
  .png()
  .toFile(join(pub, 'logo-horizontal-light.png'))

console.log('[v0] wrote logo-horizontal-light.png')
