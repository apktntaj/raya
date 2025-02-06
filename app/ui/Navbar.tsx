import Link from "next/link";

export default function Navbar() {
  return (
    <nav className='container flex justify-center items-center'>
      <ul className='menu menu-horizontal bg-base-200 rounded-box mt-6 border-blue-800'>
        <li>
          <Link href={"milk"} className='tooltip' data-tip='Milk'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='currentColor'
              className='h-5 w-5'
            >
              <path d='M12 2C10.8954 2 10 2.89543 10 4V5H8C7.44772 5 7 5.44772 7 6V8C7 8.55228 7.44772 9 8 9H16C16.5523 9 17 8.55228 17 8V6C17 5.44772 16.5523 5 16 5H14V4C14 2.89543 13.1046 2 12 2ZM8 11V20C8 21.1046 8.89543 22 10 22H14C15.1046 22 16 21.1046 16 20V11H8Z' />
            </svg>
          </Link>
        </li>
        <li>
          <Link href={"/pampers"} className='tooltip' data-tip='Pampers'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='currentColor'
              className='h-5 w-5'
            >
              <path d='M20.39 4.61C19.27 3.49 17.73 3 16.17 3H7.83C6.27 3 4.73 3.49 3.61 4.61C2.49 5.73 2 7.27 2 8.83V15.17C2 16.73 2.49 18.27 3.61 19.39C4.73 20.51 6.27 21 7.83 21H16.17C17.73 21 19.27 20.51 20.39 19.39C21.51 18.27 22 16.73 22 15.17V8.83C22 7.27 21.51 5.73 20.39 4.61ZM20 15.17C20 16.34 19.56 17.44 18.76 18.24C17.96 19.04 16.86 19.48 15.69 19.48H8.31C7.14 19.48 6.04 19.04 5.24 18.24C4.44 17.44 4 16.34 4 15.17V8.83C4 7.66 4.44 6.56 5.24 5.76C6.04 4.96 7.14 4.52 8.31 4.52H15.69C16.86 4.52 17.96 4.96 18.76 5.76C19.56 6.56 20 7.66 20 8.83V15.17Z' />
            </svg>
          </Link>
        </li>
        <li>
          <Link href={"tidur"} className='tooltip' data-tip='Sleep'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='currentColor'
              className='h-5 w-5'
            >
              <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-1.85.63-3.55 1.69-4.9l11.21 11.21C15.55 19.37 13.85 20 12 20zm6.31-3.1L7.1 5.69C8.45 4.63 10.15 4 12 4c4.41 0 8 3.59 8 8 0 1.85-.63 3.55-1.69 4.9z' />
            </svg>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
