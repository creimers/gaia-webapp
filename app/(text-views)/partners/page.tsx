import Logo from "@/components/layout/header/logo";
import Image from "next/image";

const TEAM = [
  {
    name: "João Vasco Silva",
    affiliation: "International Maize and Wheat Improvement Center",
    location: "Harare, Zimbabwe",
    email: "",
  },
  {
    name: "Fernando Aramburu-Merlos",
    affiliation: "University of Nebraska-Lincoln",
    location: "Lincoln, United States of America",
    email: "",
  },
  {
    name: "Frédéric Baudron",
    affiliation:
      "French Agricultural Research Centre for International Development",
    location: "Montpellier, France",
    email: "",
  },
  {
    name: "Samuel Gameda",
    affiliation: "International Maize and Wheat Improvement Center",
    location: "Addis Ababa, Ethiopia",
    email: "",
  },
  {
    name: "Joel Meliyo",
    affiliation: "Tanzania Agricultural Research Institute",
    location: "Dodoma, Tanzania",
    email: "",
  },
  {
    name: "Vicky Ruganzu",
    affiliation: "Rwanda Agriculture and Animal Resources Development Board",
    location: "Kigali, Rwanda",
    email: "",
  },
  {
    name: "Temesgn Desalegn",
    affiliation: "Ethiopian Institute of Agricultural Research",
    location: "Addis Ababa, Ethiopia",
    email: "",
  },
  {
    name: "Tesfaye Sida",
    affiliation: "International Maize and Wheat Improvement Center",
    location: "Addis Ababa, Ethiopia",
    email: "",
  },
  {
    name: "Moti Jaleta",
    affiliation: "International Maize and Wheat Improvement Center",
    location: "Addis Ababa, Ethiopia",
    email: "",
  },
  {
    name: "Jordan Chamberlin",
    affiliation: "International Maize and Wheat Improvement Center",
    location: "Nairobi, Kenya",
    email: "",
  },
  {
    name: "Robert J. Hijmans",
    affiliation: "University of California-Davis",
    location: "Davis, United States of America",
    email: "",
  },
];
export default function Team() {
  return (
    <div className="prose">
      <h1>Partners</h1>
      <div className="not-prose space-y-6">
        {TEAM.map((member) => (
          <div key={member.name} className="space-y-2">
            <h2 className="font-semibold text-xl">{member.name}</h2>
            <p className="text-gray-700">{member.affiliation}</p>
            <p className="text-gray-500">{member.location}</p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-6 gap-8">
        <div className="col-span-2 flex justify-center items-center">
          <Logo />
        </div>
        <div className="col-span-2 flex justify-center items-center">
          <Image src="/logos/eia.png" height={263} width={320} alt="EiA logo" />
        </div>
        <div className="col-span-2 flex justify-center items-center">
          <Image
            src="/logos/bill-melinda-gates.svg"
            height={64}
            width={250}
            alt="Bill Melinda Gates logo"
          />
        </div>
        <div className="flex items-center justify-center col-span-2 md:col-span-1">
          <Image
            src="/logos/agra.png"
            height={341}
            width={1000}
            alt="AGRA logo"
          />
        </div>
        <div className="flex items-center justify-center col-span-2 md:col-span-1">
          <Image
            src="/logos/eiar.png"
            height={762}
            width={443}
            alt="EIAR logo"
          />
        </div>
        <div className="flex items-center justify-center col-span-2 md:col-span-1">
          <Image
            src="/logos/kalro.png"
            height={709}
            width={1000}
            alt="KALRO logo"
          />
        </div>
        <div className="flex items-center justify-center col-span-2 md:col-span-1">
          <Image
            src="/logos/rab.png"
            height={970}
            width={1000}
            alt="RAB logo"
          />
        </div>
        <div className="flex items-center justify-center col-span-2 md:col-span-1">
          <Image
            src="/logos/tari.png"
            height={563}
            width={1000}
            alt="TARI logo"
          />
        </div>
        <div className="flex items-center justify-center col-span-2 md:col-span-1">
          <Image
            src="/logos/sagcot.png"
            height={583}
            width={1000}
            alt="SAGCOT logo"
          />
        </div>
        <div className="flex items-center justify-center col-span-3 md:col-span-2">
          <Image
            src="/logos/ucd.png"
            height={256}
            width={1000}
            alt="ucd logo"
          />
        </div>
        <div className="flex items-center justify-center col-span-3 md:col-span-2">
          <Image
            src="/logos/wur.png"
            height={248}
            width={1000}
            alt="wur logo"
          />
        </div>
      </div>
    </div>
  );
}
