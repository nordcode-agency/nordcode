const formatter = new Intl.DateTimeFormat("de", {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
});

export const formatDateString = (dateString: string) => {
  const date = new Date(dateString);
  return formatter.format(date);
};

const moneyFormatter = new Intl.NumberFormat("de", {
  style: "currency",
  currency: "EUR",
});

export const formatMoney = (amount: number) => {
  return moneyFormatter.format(amount);
};
