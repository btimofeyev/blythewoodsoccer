function toStartOfDay(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function parseConfigDate(value: string): Date {
  const [year, month, day] = value.split("-").map(Number);
  return new Date(year, month - 1, day);
}

export function isWithinDateWindow(
  windowStart: string,
  windowEnd: string,
  now = new Date(),
): boolean {
  const today = toStartOfDay(now);
  const start = toStartOfDay(parseConfigDate(windowStart));
  const end = toStartOfDay(parseConfigDate(windowEnd));

  return today >= start && today <= end;
}
