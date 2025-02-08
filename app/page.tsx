"use client";

import { Milk } from "./lib/definitions";
import { expired, minuteAndSencond } from "./lib/utils";
import Card from "./ui/Card";
import { MilkForm } from "./ui/Form";

export default function Home() {
  return (
    <main className='container mx-auto h-screen'>
      <MilkCard />
    </main>
  );
}

function MilkCard() {
  const m: Milk = {
    type: "ASI",
    date: new Date(),
  };

  return (
    <>
      <p>{m.type}</p>
      <p>{minuteAndSencond(m.date)}</p>
      <p>Expired: {expired(m)}</p>

      <Card />
    </>
  );
}
