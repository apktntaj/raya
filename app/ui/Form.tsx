"use client";

import React, { useState } from "react";
import { createRayaCare } from "../lib/actions";

export default function Form() {
  const [isSleep, setIsSleep] = useState<boolean>(false);
  const [pampersUsed, setPampersUsed] = useState<number>(0);
  const [milk, setMilk] = useState<number>(0);
  const [milkLeft, setMilkLeft] = useState<number>(0);

  const badges = [60, 90, 120, 0];

  return (
    <form action={createRayaCare}>
      <div className='hidden'>
        <input
          name='sleep'
          type='text'
          defaultValue={isSleep ? "Tidur" : "Bangun"}
        />
        <input type='text' defaultValue={pampersUsed} />
        <input type='text' defaultValue={milk} />
        <input type='text' defaultValue={milkLeft} />
      </div>
      <div className='container mx-auto'>
        <button
          className='btn btn-primary btn-outline'
          onClick={() => setIsSleep(!isSleep)}
        >
          {isSleep ? "Bangun" : "Tidur"}
        </button>{" "}
        <div className='join'>
          <button
            className='btn join-item btn-primary btn-outline'
            onClick={() => setPampersUsed(pampersUsed + 1)}
          >
            Ganti Pampers
          </button>
          <button
            className='btn join-item btn-primary btn-outline'
            onClick={() => setPampersUsed(pampersUsed + 1)}
          >
            PUP
          </button>
        </div>
        <div className='join'>
          {badges.map((b, i) => (
            <button
              key={i}
              className='btn join-item btn-primary btn-outline'
              onClick={() => {
                if (b === 0) {
                  const userInput = prompt("Masukkan ukuran susu:");
                  const userMilkSize = parseInt(userInput || "0", 10);
                  if (!isNaN(userMilkSize) && userMilkSize > 0) {
                    setMilk(milk + userMilkSize);
                  }
                } else {
                  setMilk(milk + b);
                }
              }}
            >
              {b === 0 ? "Custom" : b}
            </button>
          ))}
        </div>
        <button
          type='button'
          className='btn btn-primary btn-outline'
          onClick={() => {
            const userInput = prompt("Masukkan sisa susu:");
            const userMilkSize = parseInt(userInput?.trim() || "0", 10);
            if (!isNaN(userMilkSize) && userMilkSize > 0) {
              setMilkLeft(milkLeft + userMilkSize);
            }
          }}
        >
          Sisa susu
        </button>
      </div>
      <button className='btn btn-link btn-accent' type='submit'>
        Kirim
      </button>
    </form>
  );
}
