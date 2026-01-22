import React, { type FC } from "react";
import type { Car } from "../../types";
import getImages from "../utils/getImages";

interface Props {
  car: Car;
}

const Images: FC<Props> = ({ car }) => {
  return (
    <div className="flex-1 flex flex-col gap-3">
      <div className="w-full h-60">
        <img
          src={getImages(car, undefined, true)}
          alt="car"
          className="size-full object-cover rounded-md"
        />
      </div>

      <div className="flex gap-3 my-3">
        <div className="rounded flex-1 flex relative h-30 bg-primary-blue-100">
          <img
            src={getImages(car, "29", undefined)}
            alt="car"
            className="mx-auto object-contain"
          />
        </div>

        <div className="rounded flex-1 flex relative h-30 bg-primary-blue-100">
          <img
            src={getImages(car, "33", undefined)}
            alt="car"
            className="mx-auto object-contain"
          />
        </div>

        <div className="rounded flex-1 flex relative h-30 bg-primary-blue-100">
          <img
            src={getImages(car, "13", undefined)}
            alt="car"
            className="mx-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Images;
