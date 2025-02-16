import Time from "../ui/Time";
import TitlePage from "../ui/TitlePage";

export default function BerbintangPage() {
  return (
    <div>
      <TitlePage title='Logika berbintang' />
      <Time />
      <video controls src='https://youtu.be/DA352qSWkek'></video>
      <iframe
        width='1228'
        height='480'
        src='https://www.youtube.com/embed/jOq7b7Dw2cA'
        title='Doa dan istiqfar sebelum buka puasa RRI Makassar jadul asli'
        // allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
      ></iframe>
    </div>
  );
}
