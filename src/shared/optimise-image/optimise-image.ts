import type {
  OptimiseImageOptions,
  OptimisedImages,
} from "@shared/optimise-image";
import { getImage } from "astro:assets";

// Returns an array of two optimised images, one at half the size of the original, and one at the original size.
// The first image is intended for use on regular pixel density screens, and the second image is intended for use on
// high pixel density screens.
export async function optimiseImage(
  image: ImageMetadata,
  { quality, ...otherOptions }: OptimiseImageOptions = {},
): Promise<OptimisedImages> {
  const isSharedQualityConfig = typeof quality === "number";
  const quality1x = isSharedQualityConfig ? quality : quality?.x1;
  const quality2x = isSharedQualityConfig ? quality : quality?.x2;

  return [
    await getImage({
      src: image,
      width: image.width / 2,
      height: image.height / 2,
      quality: quality1x,
      ...otherOptions,
    }),
    await getImage({ src: image, quality: quality2x, ...otherOptions }),
  ];
}
