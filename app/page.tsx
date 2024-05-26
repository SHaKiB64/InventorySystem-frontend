import Image from "next/image";
import Link from "next/link";
import heroImage from "../public/8615007.jpg";

export default function Home() {
  return (
    <div className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <Image
            src={heroImage}
            alt="hero"
            className="object-cover object-center rounded"
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Before they sold out
            <br className="hidden lg:inline-block" />
            Track Your Product
          </h1>
          <p className="mb-8 leading-relaxed">
            Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
            plant cold-pressed tacos poke beard tote bag. Heirloom echo park
            mlkshk tote bag selvage hot chicken authentic tumeric truffaut
            hexagon try-hard chambray.
          </p>
          <div className="flex justify-center">
            <Link href="../registration">
              <button className="inline-flex btn btn-md text-white rounded-full bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 text-lg">
                SIGN UP
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
