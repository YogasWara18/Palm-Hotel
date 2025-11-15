export const formatDate = (dateStr: string) => {
  const date = new Date(dateStr);
  const formatter = new Intl.DateTimeFormat("es-ES", {
    dateStyle: "medium",
  });
  return formatter.format(date);
};

export const formatCurrency = (amount: number) => {
  const formatter = new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
    maximumSignificantDigits: 4,
  });
  return formatter.format(amount);
};
