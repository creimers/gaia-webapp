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

type Partner = {
  name: string;
  logo: React.ReactNode;
  homepage: string;
  team: {
    name: string;
    location: string;
  }[];
};

const sections: { [key: string]: Partner[] } = {
  "Coordinating partner": [
    {
      name: "International Maize and Wheat Improvement Center",
      homepage: "https://www.cimmyt.org/",
      logo: <Logo />,
      team: [
        {
          name: "João Vasco Silva",
          location: "Harare, Zimbabwe",
        },
        {
          name: "Samuel Gameda",
          location: "Addis Ababa, Ethiopia",
        },
        {
          name: "Jordan Chamberlin",
          location: "Nairobi, Kenya",
        },
        {
          name: "Tesfaye Sida",
          location: "Addis Ababa, Ethiopia",
        },
        {
          name: "Moti Jaleta",
          location: "Addis Ababa, Ethiopia",
        },
      ],
    },
  ],
  "Founding partners": [
    {
      name: "EiA",
      homepage: "https://www.ei-a.org/",
      logo: (
        <Image
          src="/logos/eia.png"
          height={263}
          width={320}
          alt="EiA logo"
          className="max-h-full w-auto"
        />
      ),
      team: [],
    },
    {
      name: "Bill & Melinda Gates Foundation",
      homepage: "https://www.gatesfoundation.org/",
      logo: (
        <Image
          src="/logos/bill-melinda-gates.svg"
          height={64}
          width={250}
          alt="Bill Melinda Gates logo"
        />
      ),
      team: [],
    },
  ],
  "Regional partners": [
    {
      name: "AGRA",
      homepage: "https://agra.org/",
      logo: (
        <Image
          src="/logos/agra.png"
          height={341}
          width={1000}
          alt="AGRA logo"
          className="max-h-full w-auto"
        />
      ),
      team: [],
    },
    {
      name: "Ethiopian Institute of Agricultural Research",
      homepage: "https://www.eiar.gov.et/",
      logo: (
        <Image
          src="/logos/eiar.png"
          height={762}
          width={443}
          alt="EIAR logo"
          className="max-h-full w-auto"
        />
      ),
      team: [{ name: "Temesgn Desalegn", location: "Addis Ababa, Ethiopia" }],
    },
    {
      name: "Kenya Agricultural and Livestock Research Organisation",
      homepage: "https://www.kalro.org/",
      logo: (
        <Image
          src="/logos/kalro.png"
          height={709}
          width={1000}
          alt="KALRO logo"
          className="max-h-full w-auto"
        />
      ),
      team: [],
    },
    {
      name: "Rwanda Agriculture and Animal Resources Development Board",
      homepage: "https://rab.gov.rw/",
      logo: (
        <Image
          src="/logos/rab.png"
          height={970}
          width={1000}
          alt="RAB logo"
          className="max-h-full w-auto"
        />
      ),
      team: [],
    },
    {
      name: "Tanzania Agricultural Research Institute",
      homepage: "https://www.tari.go.tz/",
      logo: (
        <Image
          src="/logos/tari.png"
          height={563}
          width={1000}
          alt="TARI logo"
          className="max-h-full w-auto"
        />
      ),
      team: [],
    },
  ],
  "Advanced academic institutions": [
    {
      name: "UC Davis",
      homepage: "https://www.ucdavis.edu/",
      logo: (
        <Image
          src="/logos/ucd.png"
          height={256}
          width={1000}
          alt="ucd logo"
          className="max-h-full w-auto"
        />
      ),
      team: [
        {
          name: "Robert J. Hijmans",
          location: "Davis, United States of America",
        },
      ],
    },
    {
      name: "WUR",
      homepage: "https://www.wur.nl/",
      logo: (
        <Image
          src="/logos/wur.png"
          height={248}
          width={1000}
          alt="wur logo"
          className="max-h-full w-auto"
        />
      ),
      team: [],
    },
  ],
};

export default function Team() {
  return (
    <div className="prose">
      <h1>Partners</h1>
      {Object.keys(sections).map((section) => (
        <div key={section}>
          <h2>{section}</h2>
          <div className="space-y-4">
            {sections[section].map((partner) => (
              <div
                key={partner.name}
                className="grid grid-cols-2 gap-8 bg-gray-100 rounded-xl p-8"
              >
                <div className="max-h-[85px] w-auto not-prose">
                  {partner.logo}
                </div>
                <div className="not-prose">
                  <h3 className="font-semibold mb-2">
                    <a
                      href={partner.homepage}
                      className="hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {partner.name}
                    </a>
                  </h3>
                  <ul className="space-y-2">
                    {partner.team.map((member) => (
                      <li key={member.name} className="flex flex-col">
                        <span>{member.name}</span>
                        <span className="text-xs">({member.location})</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
