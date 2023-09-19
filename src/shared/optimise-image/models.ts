import type { GetImageResult, ImageOutputFormat } from "astro";

export type OptimisedImages = readonly [GetImageResult, GetImageResult];

export interface OptimiseImageOptions {
  quality?: number | { x1?: number; x2?: number };
  format?: ImageOutputFormat;
}
