export function formatDateRange(startDate: string, endDate: string): string {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const sameYear = start.getFullYear() === end.getFullYear();

  const dayMonth = new Intl.DateTimeFormat("es", { day: "numeric", month: "short" });
  const dayMonthYear = new Intl.DateTimeFormat("es", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  const startLabel = sameYear ? dayMonth.format(start) : dayMonthYear.format(start);
  const endLabel = dayMonthYear.format(end);

  return `${startLabel} – ${endLabel}`;
}

export function formatAudPerWeek(amount: number): string {
  const formatted = new Intl.NumberFormat("es-AU", {
    style: "currency",
    currency: "AUD",
    maximumFractionDigits: 0,
  }).format(amount);
  return formatted;
}
