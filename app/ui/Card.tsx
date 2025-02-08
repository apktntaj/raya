import React from "react";

export default function Card() {
  const temp = {
    time: new Date(),
    type: "ASI",
  };

  const addHours = (date: Date, hours: number) => {
    const newDate = new Date(date);
    newDate.setHours(newDate.getHours() + hours);
    return newDate;
  };

  function dateFormatter(d: Date): string {
    return d.toLocaleTimeString("id-ID", {
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  // Add 2 hours to the current time
  const newTime = addHours(temp.time, 2);

  return (
    <div className='card bg-base-100 w-96 shadow-xl'>
      <div className='card-body'>
        <span className='badge badge-accent'>{temp.type}</span>
        <p>
          Made at:{" "}
          <span className='badge badge-secondary'>
            {temp.time.toLocaleTimeString("id-ID", {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </span>
        </p>
        <p>
          Expired at:{" "}
          <span className='badge badge-secondary'>
            {newTime.toLocaleTimeString("id-ID", {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </span>
        </p>
      </div>
    </div>
  );
}
