import prisma from "./lib/prisma";
import Card from "./ui/Card";
import Hero from "./ui/Hero";

export default async function Home() {
  const today: Date = new Date();
  const milks = await prisma.milk.findMany({
    where: {
      madeAt: {
        gte: new Date(today.setHours(0, 0, 0, 0)),
        lte: new Date(today.setHours(59, 59, 59, 59)),
      },
    },
  });
  const cards = milks.map((m, i) => <Card key={i} milk={m} />);
  const view = cards.length ? cards : <Alert message='Data belum ada' />;

  const totalAmount = milks.reduce(
    (init: number, m) => init + (m.qty - m.left),
    0
  );
  const coverage = (totalAmount / 180) * 4;

  return (
    <>
      <Hero />

      <div className='flex gap-2 mb-3'>
        <p className='badge badge-warning shadow-md p-3 prose-p:*'>
          Total konsumsi harian: {totalAmount} ml
        </p>
        <p className='badge badge-warning shadow-md p-3 prose-p:*'>
          Coverage: {Math.round(coverage)} Jam
        </p>
      </div>
      <div className='flex gap-3'>{view}</div>
    </>
  );
}

function Alert({ message }: { message: string }) {
  return (
    <div role='alert' className='alert alert-warning'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-6 w-6 shrink-0 stroke-current'
        fill='none'
        viewBox='0 0 24 24'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          d='M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z'
        />
      </svg>
      <span>{message}</span>
    </div>
  );
}
