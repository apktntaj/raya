"use client";

import { DiapersForm, MilkForm, SleepForm } from "./ui/Form";

const milks = [
  {
    id: 1,
    time: new Date(),
    type: "ASI",
    make: 180,
    left: 120,
    amount: 60,
    desc: "ASI 60ml",
  },
  {
    id: 2,
    time: new Date(),
    type: "ASI",
    make: 180,
    left: 120,
    amount: 60,
    desc: "ASI 60ml",
  },
  {
    id: 3,
    time: new Date(),
    type: "ASI",
    make: 180,
    left: 120,
    amount: 60,
    desc: "ASI 60ml",
  },
  {
    id: 4,
    time: new Date(),
    type: "ASI",
    make: 180,
    left: 120,
    amount: 60,
    desc: "ASI 60ml",
  },
];

const sleeps = [
  {
    id: 1,
    startAt: new Date(),
    endAt: new Date(),
    duration: 60,
    desc: "Tidur siang",
  },
  {
    id: 2,
    startAt: new Date(),
    endAt: new Date(),
    duration: 60,
    desc: "Tidur siang",
  },
  {
    id: 3,
    startAt: new Date(),
    endAt: new Date(),
    duration: 60,
    desc: "Tidur siang",
  },
  {
    id: 4,
    startAt: new Date(),
    endAt: new Date(),
    duration: 60,
    desc: "Tidur siang",
  },
];

const diapers = [
  {
    id: 1,
    type: "PUP",
    changeAt: new Date(),
    total: 1,
    desc: "PUP",
  },
  {
    id: 2,
    type: "PUP",
    changeAt: new Date(),
    total: 2,
    desc: "PUP",
  },
  {
    id: 3,
    type: "PUP",
    changeAt: new Date(),
    total: 3,
    desc: "PUP",
  },
  {
    id: 4,
    type: "PUP",
    changeAt: new Date(),
    total: 4,
    desc: "PUP",
  },
];

export default function Home() {
  return (
    <main className='container mx-auto h-screen'>
      <div className='container'>Developer Bercerita</div>
      <App />
      <div className='container'>Footer</div>
    </main>
  );
}

function App() {
  return (
    <>
      <div>
        <div>
          <p>Form</p>
          <MilkForm />
          <SleepForm />
          <DiapersForm />
        </div>
        <p>
          <span>Milk</span>
          <span>Sleep</span>
          <span>Diapers</span>
        </p>
      </div>
    </>
  );
}
