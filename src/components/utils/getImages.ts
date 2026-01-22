import type { Car } from "../../types";

const getImages = (car: Car, angle?: string, background?: boolean): string => {
  const url = new URL("https://cdn.imagin.studio/getImage");

  url.searchParams.set("customer", "hrjavascript-mastery");
  url.searchParams.set("make", car.make);
  url.searchParams.set("modelFamily", car.model);
  url.searchParams.set("modelYear", car.year);
  url.searchParams.set("zoomType", "fullscreen");

  if (angle) {
    url.searchParams.set("angle", angle);
  }
  if (background) {
    url.searchParams.set("surrounding", "sur3");
    url.searchParams.set("viewPoint", "1");
    url.searchParams.set("aspectRatio", "16:10");
    url.searchParams.set("overlayArea", "none");
  }
  return url.href;
};

export default getImages;
