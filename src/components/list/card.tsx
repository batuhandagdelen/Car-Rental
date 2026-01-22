import { type FC, useState } from "react";
import type { Car } from "../../types";
import Info from "./info";
import Button from "../button";
import Modal from "../modal";
import { getPrice } from "../utils/getPrice";
import getImages from "../utils/getImages";
interface Props {
  car: Car;
}

const Card: FC<Props> = ({ car }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const close = () => setIsOpen(false);

  return (
    <>
      <div className="car-card group">
        <h2 className="car-card-content-title">
          {car.make} {car.model}
        </h2>

        <div className="flex mt-6 text-[19px]">
          <span className="font-semibold">₺</span>
          <span className="text-[32px]">{getPrice(car)}</span>
          <span
            className="font-semibold
        self-end"
          >
            /gün
          </span>
        </div>

        <div>
          <img
            src={getImages(car)}
            alt="car"
            className="size-full object-contain min-h-[200px]"
          />
        </div>

        <div className="w-full">
          <div className="w-full group-hover:hidden">
            <Info car={car} />
          </div>
          <div className="hidden group-hover:block">
            <Button
              text="Daha Fazla"
              designs="w-full mt-[0.5px]"
              fn={() => setIsOpen(true)}
            />
          </div>
        </div>
      </div>
      <Modal isOpen={isOpen} close={close} car={car} />
    </>
  );
};

export default Card;
