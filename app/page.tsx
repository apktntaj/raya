import Time from "./ui/Time";
import Form from "./ui/Form";
import { Activity, BabyCare } from "./lib/definitions";

const activities: Activity[] = [
  { id: 1, time: new Date(), name: "Tidur" },
  { id: 2, time: new Date(), name: "Bangun" },
  { id: 3, time: new Date(), name: "Susu" },
  { id: 4, time: new Date(), name: "Sisa" },
  { id: 5, time: new Date(), name: "Pup" },
  { id: 6, time: new Date(), name: "Pampers" },
];

const babyCares: BabyCare[] = [
  { id: 1, date: new Date(), susu: 100, sisa: 50, pampers: 1 },
  { id: 2, date: new Date(), susu: 150, sisa: 100, pampers: 2 },
  { id: 3, date: new Date(), susu: 200, sisa: 150, pampers: 3 },
  { id: 4, date: new Date(), susu: 250, sisa: 200, pampers: 4 },
];

export default function Home() {
  return (
    <main className='container mx-auto h-screen'>
      <h1 className='text-center text-6xl font-bold m-4 shadow-sm'>
        Ayda Raya Masyitah
      </h1>

      <blockquote className='text-center text-xl italic m-4'>
        "Anak adalah titipan. Dijaga tapi jangan merasa memiliki"
      </blockquote>

      <div className='container mx-auto text-center mt-8'>
        <Time />
      </div>

      <div className='container mx-auto text-center mt-8'>
        <Form activities={activities} />
      </div>
    </main>
  );
}
