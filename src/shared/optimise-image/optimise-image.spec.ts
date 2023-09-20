import { optimiseImage } from "@shared/optimise-image";
import { getImage } from "astro:assets";
import { getImageMetadataFixture } from "src/testing/fixtures/image-meta-data.fixture";
import { vi } from "vitest";

vi.mock("astro:assets", async () => {
  const actual =
    await vi.importActual<typeof import("astro:assets")>("astro:assets");

  return {
    ...actual,
    getImage: vi.fn(),
  };
});

describe(optimiseImage.name, () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it("should return an array of two optimised images, one at half the size of the original, and one at the original size.", async () => {
    const getImageMock = vi.mocked(getImage);
    const image = getImageMetadataFixture();

    await optimiseImage(image);

    expect(getImageMock).toHaveBeenNthCalledWith(1, {
      src: image,
      width: image.width / 2,
      height: image.height / 2,
      quality: undefined,
    });
    expect(getImageMock).toHaveBeenNthCalledWith(2, {
      src: image,
      quality: undefined,
    });
  });

  it("should allow to override the quality of the optimised images by passing a number", async () => {
    const getImageMock = vi.mocked(getImage);
    const image = getImageMetadataFixture();
    const quality = 50;

    await optimiseImage(image, { quality });

    expect(getImageMock).toHaveBeenNthCalledWith(1, {
      src: image,
      width: image.width / 2,
      height: image.height / 2,
      quality,
    });
    expect(getImageMock).toHaveBeenNthCalledWith(2, {
      src: image,
      quality,
    });
  });

  it('should allow to override quality for each image separately by passing an object with "x1" and "x2" properties', async () => {
    const getImageMock = vi.mocked(getImage);
    const image = getImageMetadataFixture();
    const quality = { x1: 50, x2: 100 };

    await optimiseImage(image, { quality });

    expect(getImageMock).toHaveBeenNthCalledWith(1, {
      src: image,
      width: image.width / 2,
      height: image.height / 2,
      quality: quality.x1,
    });
    expect(getImageMock).toHaveBeenNthCalledWith(2, {
      src: image,
      quality: quality.x2,
    });
  });

  it("should allow to override image format", async () => {
    const getImageMock = vi.mocked(getImage);
    const image = getImageMetadataFixture();
    const options = { format: "png" };

    await optimiseImage(image, options);

    expect(getImageMock).toHaveBeenNthCalledWith(1, {
      src: image,
      width: image.width / 2,
      height: image.height / 2,
      quality: undefined,
      format: "png",
    });
    expect(getImageMock).toHaveBeenNthCalledWith(2, {
      src: image,
      quality: undefined,
      format: "png",
    });
  });
});
