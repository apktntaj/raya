import { Milk } from "./definitions";

export function minuteAndSencond(time: Date): string {
  return time.toLocaleTimeString("ID-id", {
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function expired(m: Milk): number {
  if (m.type === "ASI") return m.date.getHours() + 4;
  return m.date.getHours() + 2;
}
