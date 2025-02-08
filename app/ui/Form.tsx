"use client";

import React, { useState } from "react";
import { recordMilk } from "../lib/actions";
import styles from "./form.module.css"; // Import your CSS module

export function MilkForm() {
  const [milkMadeAt, setMilkMadeAt] = useState<Date>();

  console.log(milkMadeAt);
  return (
    <form action={recordMilk} className={styles.form}>
      <div className={styles.radioGroup}>
        <div className='form-control'>
          <label className='label cursor-pointer'>
            <span className='label-text'>ASI</span>
            <input
              type='radio'
              name='type'
              defaultValue={"ASI"}
              className='radio checked:bg-red-500'
              defaultChecked
            />
          </label>
        </div>
        <div className='form-control'>
          <label className='label cursor-pointer'>
            <span className='label-text'>SUFOR</span>
            <input
              type='radio'
              defaultValue={"SUFOR"}
              name='type'
              className='radio checked:bg-blue-500'
            />
          </label>
        </div>
      </div>
      <label htmlFor='amount'>
        Amount
        <input
          type='number'
          placeholder='Type here'
          name='amount'
          className='input input-bordered w-full max-w-xs'
        />
      </label>

      <label htmlFor='madeAt'>
        <input
          className='hidden'
          type='text'
          name='madeAt'
          defaultValue={milkMadeAt?.toLocaleString()}
        />
      </label>
      <button
        type='button'
        className='btn btn-primary'
        onClick={() => setMilkMadeAt(new Date())}
      >
        Submit
      </button>
    </form>
  );
}
