export function getImageMetadataFixture(
  overrides: Partial<ImageMetadata> = {},
): ImageMetadata {
  return {
    src: "/images/test.svg",
    width: 100,
    height: 100,
    format: "svg",
    ...overrides,
  };
}
