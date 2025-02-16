import React, { useMemo } from "react";
import { Milk } from "../lib/definitions";

export default function Card({ milk }: { milk: Milk }) {
  function addHours(m: Milk) {
    let duration: number = m.type === "ASI" ? 4 : 2;
    const newDate = new Date(m.madeAt);

    newDate.setHours(newDate.getHours() + duration);
    return newDate;
  }

  function dateFormatter(d: Date): string {
    return d
      .toLocaleTimeString("id-ID", {
        hour: "2-digit",
        minute: "2-digit",
      })
      .replace(/\./, ":");
  }

  const expired = useMemo(() => addHours(milk), [milk.madeAt, milk.type]);

  return (
    <article className='card bg-base-100 w-96 shadow-xl text-gray-600'>
      <div className='card-body'>
        <span className='badge badge-accent'>{milk.type}</span>
        <p>
          Made at:{" "}
          <span className='badge badge-secondary'>
            {dateFormatter(milk.madeAt)}
          </span>
        </p>
        <p>
          Expired at:{" "}
          <span className='badge badge-secondary'>
            {dateFormatter(expired)}
          </span>
        </p>
        <p>
          Dibuat:{" "}
          <span className='badge badge-secondary'>{`${milk.qty} ml`}</span>
        </p>
        <p>
          Terbuang:{" "}
          <span className='badge badge-secondary'>{`${milk.left} ml`}</span>
        </p>
      </div>
    </article>
  );
}
