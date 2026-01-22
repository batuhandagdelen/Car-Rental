import type { Car } from "../types";

export const getPrice = (car: Car): string => {
  const { city08, year, make, drive } = car;

  let basePrice = 2500;

  const carYear = parseInt(year);
  const currentYear = new Date().getFullYear();
  const age = currentYear - carYear;

  basePrice -= age * 35;

  basePrice -= city08 * 5;

  const premiumMakes = [
    "BMW",
    "Mercedes-Benz",
    "Audi",
    "Porsche",
    "Land Rover",
    "Jaguar",
  ];
  if (premiumMakes.includes(make)) {
    basePrice += 1500; //
  }

  if (drive === "All-Wheel Drive" || drive === "4-Wheel Drive") {
    basePrice += 500;
  }

  if (basePrice < 1500) {
    basePrice = 1500;
  }

  return basePrice.toFixed(0);
};
