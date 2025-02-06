"use client";

export function MilkForm() {
  return (
    <form>
      <label htmlFor='type'>
        Jenis ASI:
        <select name='type'>
          <option value='ASI'>ASI</option>
          <option value='Sufor'>Sufor</option>
        </select>
      </label>
      <label htmlFor='time'>
        Made at:
        <input type='time' placeholder='madeAt' />
      </label>
      <label htmlFor='expiredAt'>
        <input
          type='time'
          name='expiredAt'
          placeholder='Susu expired'
          disabled
        />
      </label>
      <label htmlFor='madeAmount'>
        Jumlah susu yang dibuat:
        <input type='number' name='madeAmount' placeholder='Milk amount' />
      </label>
      <label htmlFor='leftAmount'>
        Sisa susu:
        <input type='number' name='leftAmount' placeholder='Left amount' />
      </label>
      <label htmlFor='amount'>
        Jumlah yang diminum:
        <input type='number' name='amount' placeholder='Amount' />
      </label>
      <label htmlFor='desc'>
        Deskripsi:
        <input type='text' name='desc' placeholder='Description' />
      </label>
      <button className='btn btn-primary btn-outline' type='submit'>
        Submit
      </button>
    </form>
  );
}

export function SleepForm() {
  return (
    <form>
      <label htmlFor='startAt'>
        Start at:
        <input type='time' name='startAt' placeholder='Start at' />
      </label>
      <label htmlFor='endAt'>
        End at:
        <input type='time' name='endAt' placeholder='End at' />
      </label>
      <label htmlFor='duration'>
        Durasi:
        <input
          type='number'
          name='duration'
          placeholder='endAt dikurangi startAt'
          disabled
        />
      </label>
      <label htmlFor='desc'>
        Deskripsi:
        <input type='text' name='desc' placeholder='Description' />
      </label>
      <button className='btn btn-primary btn-outline' type='submit'>
        Submit
      </button>
    </form>
  );
}

export function DiapersForm() {
  return (
    <form>
      <label htmlFor='type'>
        Diganti karena:
        <select name='type'>
          <option value='cloth'>PUP</option>
          <option value='disposable'>POO</option>
        </select>
      </label>
      <label htmlFor='time'>
        Waktu:
        <input type='time' name='time' placeholder='Time' />
      </label>
      <label htmlFor='time'>
        Total:
        <input type='number' name='total' placeholder='Total' disabled />
      </label>
      <label htmlFor='desc'>
        Deskripsi:
        <input type='text' name='desc' placeholder='Description' />
      </label>
      <button className='btn btn-primary btn-outline' type='submit'>
        Submit
      </button>
    </form>
  );
}
