const LOCALE = "de-DE";

export const priceFormatter = new Intl.NumberFormat(LOCALE, {
  style: "currency",
  currency: "EUR",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

export const formatPrice = (value: number): string => {
  return priceFormatter.format(value);
};

const availableUnits = Intl.supportedValuesOf("unit");
export type TAvailableUnits = (typeof availableUnits)[number];

/**
 * Formats a distance value into a localized string representation.
 * @param value The distance value to format.
 * @param unit The unit of measurement for the distance (e.g., "km", "m", "mi").
 * @returns The formatted distance string.
 *
 * @example ```js
 * formatDistance(5, "km"); // "5 km"
 * ```
 */
export const formatDistance = (value: number, unit: string): string => {
  let ecmaUnit = null;
  if (unit === "km" || unit === "kilometers" || unit === "kilometer") {
    ecmaUnit = "kilometer";
  } else if (unit === "m" || unit === "meters" || unit === "meter") {
    ecmaUnit = "meter";
  } else if (unit === "mi" || unit === "miles" || unit === "mile") {
    ecmaUnit = "mile";
  } else {
    return `${value}\u202F${unit}`;
  }
  
  return value.toLocaleString(LOCALE, {
    style: "unit",
    unit: ecmaUnit,
    unitDisplay: "short",
  });
};
