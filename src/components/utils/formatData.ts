import type { Car } from "../../types";

const formatData = (car: Car) => {
  const accepted = [
    "make",
    "model",
    "year",
    "fueltype",
    "cylinders",
    "drive",
    "trany",
    "vclass",
    "tcharger",
    "startstop",
    "co2",
    "displ",
    "atvtype",
  ];

  const arr = Object.entries(car).filter(([key]) => accepted.includes(key));

  return arr;
};

export default formatData;
