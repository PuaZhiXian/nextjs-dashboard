import AcmeLogo from '@/app/ui/acme-logo';
import {ArrowRightIcon} from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from "next/image";

export default function Page() {
    return (
        <main className="flex min-h-screen flex-col p-6">
            {/* <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
                 <AcmeLogo />
            </div>
            <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
                <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
                    <p className={`text-xl text-gray-800 md:text-3xl md:leading-normal`}>
                        <strong>Welcome to Acme.</strong> This is the example for the{' '}
                        <a href="https://nextjs.org/learn/" className="text-blue-500">
                            Next.js Learn Course
                        </a>
                        , brought to you by Vercel.
                    </p>
                    <Link
                        href="/login"
                        className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
                    >
                        <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6"/>
                    </Link>
                </div>
                <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
                    <Image
                        src="/hero-desktop.png"
                        width={1000}
                        height={760}
                        className="hidden md:block"
                        alt="Screenshots of the dashboard project showing desktop version"
                    />
                </div>
            </div> */}
            <HikingItinerary></HikingItinerary>
        </main>
    );
}
const HikingItinerary = () => {
  return (
    <div className="p-4">
      <h1>Hiking Tour Itinerary</h1>

      <h2>Day 1</h2>
      <ul>
        <li>
          <strong>Bukit Tunggul</strong> <br />
          <a
            href="https://maps.app.goo.gl/WqP2ip1H6Cme9k738"
            target="_blank"
            rel="noopener noreferrer"
          >
            📍 Google Maps
          </a>
          <br />
          <a
            href="https://ul.waze.com/ul?place=ChIJI2iOTtTHzTERQNacJzAl_34&ll=2.87333330%2C101.74861110&navigate=yes"
            target="_blank"
            rel="noopener noreferrer"
          >
            🚗 Waze
          </a>
        </li>
        <li>
          <strong>Bukit Melati</strong> <br />
          <a
            href="https://maps.app.goo.gl/RUgZrgzPwj6wrBrx5"
            target="_blank"
            rel="noopener noreferrer"
          >
            📍 Google Maps
          </a>
          <br />
          <a
            href="https://ul.waze.com/ul?place=ChIJ0_KWK-bGzTERWGR0BPByfZU&ll=2.81623990%2C101.76419960&navigate=yes"
            target="_blank"
            rel="noopener noreferrer"
          >
            🚗 Waze
          </a>
        </li>
        <li>
          <strong>Bukit Kepayang Hiking Trail</strong> <br />
          <a
            href="https://maps.app.goo.gl/D8M235zESf7Qs6Zw5"
            target="_blank"
            rel="noopener noreferrer"
          >
            📍 Google Maps
          </a>
          <br />
          <a
            href="https://ul.waze.com/ul?place=ChIJGcIFnb7nzTERoy4Ng_nAkeQ&ll=2.71512720%2C101.90574380&navigate=yes"
            target="_blank"
            rel="noopener noreferrer"
          >
            🚗 Waze
          </a>
        </li>
        <li>
          <strong>Hotel: Time Hotel Seremban</strong> <br />
          <a
            href="https://www.agoda.com/time-hotel-seremban/hotel/seremban-my.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            🔗 Agoda
          </a>
          <br />
          <a
            href="https://maps.app.goo.gl/6HZd2W4w3n6Huerz5"
            target="_blank"
            rel="noopener noreferrer"
          >
            📍 Google Maps
          </a>
        </li>
      </ul>

      <h2>Day 2</h2>
      <ul>
        <li>
          <strong>Gunung Angsi</strong> <br />
          <a
            href="https://maps.app.goo.gl/sakoM2LigPRezHHb9"
            target="_blank"
            rel="noopener noreferrer"
          >
            📍 Google Maps
          </a>
          <br />
          <a
            href="https://ul.waze.com/ul?place=ChIJQcdqkcPfzTEROcdKm9hK3C0&ll=2.72734410%2C102.05623450&navigate=yes"
            target="_blank"
            rel="noopener noreferrer"
          >
            🚗 Waze
          </a>
        </li>
        <li>
          <strong>Bukit Taisho</strong> <br />
          <a
            href="https://maps.app.goo.gl/JTSGwiqsbtcjkSsy5"
            target="_blank"
            rel="noopener noreferrer"
          >
            📍 Google Maps
          </a>
          <br />
          <a
            href="https://ul.waze.com/ul?place=ChIJ89uEjkhpzjERYvGH3aYemLM&ll=2.79988740%2C102.39636210&navigate=yes"
            target="_blank"
            rel="noopener noreferrer"
          >
            🚗 Waze
          </a>
        </li>
        <li>
          <strong>Hotel: Thong Hong Hotel</strong> <br />
          <a
            href="https://www.agoda.com/omah-perengkembang-by-secoms/hotel/bahau-my.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            🔗 Agoda
          </a>
          <br />
          <a
            href="https://maps.app.goo.gl/oxGMdKQ8AiTBLd2e7"
            target="_blank"
            rel="noopener noreferrer"
          >
            📍 Google Maps
          </a>
        </li>
      </ul>

      <h2>Day 3</h2>
      <ul>
        <li>
          <strong>Bukit Batu Sawa</strong> <br />
          <a
            href="https://maps.app.goo.gl/RBftTn4vMXZ8Ahno8"
            target="_blank"
            rel="noopener noreferrer"
          >
            📍 Google Maps
          </a>
          <br />
          <a
            href="https://ul.waze.com/ul?place=ChIJ2eai5Sh_zjERf0P10UnjUWw&ll=2.97468850%2C102.13592370&navigate=yes"
            target="_blank"
            rel="noopener noreferrer"
          >
            🚗 Waze
          </a>
        </li>
        <li>
          <strong>Taman Bukit Kristal</strong> <br />
          <a
            href="https://maps.app.goo.gl/5FjXBBUooW3gBCDR6"
            target="_blank"
            rel="noopener noreferrer"
          >
            📍 Google Maps
          </a>
          <br />
          <a
            href="https://ul.waze.com/ul?venue_id=66781211.667746579.26410322"
            target="_blank"
            rel="noopener noreferrer"
          >
            🚗 Waze
          </a>
        </li>
      </ul>
    </div>
  );
};