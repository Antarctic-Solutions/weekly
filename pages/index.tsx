import dynamic from "next/dynamic";
import Head from "../components/head/Head";
// import poppins font from google fonts
import { Poppins } from "@next/font/google";
import Link from "next/link";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: "normal",
});

// import ConfettiOverlay with ssr: false
const ConfettiOverlay = dynamic(() => import("../components/Confetti"), {
  ssr: false,
});

export default function Home() {
  // get time from first week
  const week =
    new Date().getTime() - new Date("2022-11-06T23:59:59.9").getTime();
  // new Date().getTime() - new Date("2022-11-09T23:59:59.9").getTime();

  // if weekType is 0, then it is marketing week otherwise it is development week since we are taking the floor
  const weekType = Math.floor(week / 604800000) % 2;

  // console.log(weekType);

  return (
    <div className="bg-primary text-secondary">
      <Head weekType={weekType} />
      <main className={poppins.className}>
        <ConfettiOverlay />
        <div className="flex items-center justify-center h-screen w-screen">
          <h1 className="text-center font-bold text-8xl px-12 mb-12 z-50">
            {weekType ? "It's Coding Week" : "It's Morbeting Week"}
          </h1>
        </div>
      </main>
      {/* read more floating footer */}
      <footer className="fixed bottom-0 z-50 w-full mb-12">
        <div className="flex justify-center">
          <p className="text-4xl text-center">
            {/* TODO: change depending on which blog it is */}
            <Link href={weekType ? "#" : "#"}>Read More</Link>
          </p>
        </div>
      </footer>
    </div>
  );
}
