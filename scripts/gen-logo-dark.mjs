import sharp from 'sharp'
import { join } from 'node:path'

const pub = join(process.cwd(), 'public')
const src = join(pub, 'logo-horizontal.png')

const { data, info } = await sharp(src)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true })

const { width, height, channels: c } = info
const out = Buffer.from(data)

// Everything left of this ratio is the truck emblem (gold "M", white truck,
// road). Keep that region 100% original. Only the "MADIMETSA" wordmark, which
// sits to the right of the gold divider (~38.7% of the width), gets remapped
// to a light silver so it reads on the near-black header.
const wordmarkStartX = Math.round(width * 0.4)

for (let i = 0; i < width * height; i++) {
  const x = i % width
  if (x < wordmarkStartX) continue // preserve the emblem exactly as-is

  const o = i * c
  const r = data[o], g = data[o + 1], b = data[o + 2], a = data[o + 3]
  if (a < 8) continue // transparent, skip

  const lum = 0.299 * r + 0.587 * g + 0.114 * b
  const isGold = r > 120 && r > b + 40 && g > b // gold "LOGISTICS" text + divider
  const isBright = lum > 150

  if (isGold || isBright) continue // keep gold + bright highlights as-is

  // Dark navy "MADIMETSA" letters -> light silver.
  const target = 232 - Math.min(lum, 120) * 0.35 // ~190..232 light silver
  out[o] = target
  out[o + 1] = target
  out[o + 2] = Math.min(255, target + 4) // faint cool tint
}

await sharp(out, { raw: { width, height, channels: c } })
  // Header renders the logo small; downscale + compress for fast loading
  // while staying crisp on high-DPI screens.
  .resize({ width: 700, withoutEnlargement: true })
  .png({ compressionLevel: 9, palette: true, quality: 90 })
  .toFile(join(pub, 'logo-horizontal-light.png'))

console.log('[v0] wrote logo-horizontal-light.png (emblem preserved, wordmark silver)')
