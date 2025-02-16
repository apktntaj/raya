import Time from "./Time";

export default function Hero() {
  return (
    <>
      <h1 className='text-center text-6xl font-bold m-4 shadow-sm prose-headings bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text'>
        Ayda Raya Masyitah
      </h1>

      <blockquote className='text-center text-xl italic m-4 bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text'>
        "Anak adalah titipan. Dijaga tapi jangan merasa memiliki"
      </blockquote>

      <div className='container mx-auto text-center mt-8'>
        <Time />
      </div>
    </>
  );
}
