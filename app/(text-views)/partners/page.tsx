import Logo from "@/components/layout/header/logo";
import Image from "next/image";

type Partner = {
  name: string;
  logo: React.ReactNode;
  homepage: string;
  team: {
    name: string;
    location: string;
    affiliation?: string;
  }[];
};

const sections: { [key: string]: Partner[] } = {
  "Coordinating partner": [
    {
      name: "International Maize and Wheat Improvement Center (CIMMYT)",
      homepage: "https://www.cimmyt.org/",
      logo: <Logo />,
      team: [
        {
          name: "João Vasco Silva",
          location: "Harare, Zimbabwe",
        },
        {
          name: "Jordan Chamberlin",
          location: "Nairobi, Kenya",
        },

        {
          name: "Frédéric Baudron",
          affiliation: "CIRAD",
          location: "Montpellier, France",
        },
        {
          name: "Samuel Gameda",
          location: "Addis Ababa, Ethiopia",
        },
        {
          name: "Tesfaye Sida",
          location: "Addis Ababa, Ethiopia",
        },
        {
          name: "Moti Jaleta",
          location: "Addis Ababa, Ethiopia",
        },
        { name: "Rahel Assefa", location: "Addis Ababa, Ethiopia" },
      ],
    },
  ],
  "Funding partners": [
    {
      name: "Bill & Melinda Gates Foundation (BMGF)",
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
    {
      name: "OneCGIAR initiative on Excellence in Agronomy (EiA)",
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
      team: [
        {
          name: "Meklit Chernet",
          affiliation: "Alliance Bioversity-CIAT",
          location: "Brussels, Belgium",
        },
        {
          name: "Medha Devare",
          affiliation: "IITA",
          location: "Montpellier, France",
        },
      ],
    },
  ],
  "Regional partners": [
    {
      name: "Alliance for a Green Revolution in Africa (AGRA)",
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
      team: [{ name: "Asseta Diallo", location: "Accra, Ghana" }],
    },
    {
      name: "Ethiopian Institute of Agricultural Research (EIAR)",
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
      name: "Kenya Agricultural and Livestock Research Organisation (KALRO)",
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
      name: "Rwanda Agriculture and Animal Resources Development Board (RAB)",
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
      team: [{ name: "Vicky Ruganzu", location: "Kigali, Rwanda" }],
    },
    {
      name: "Southern Agricultural Growth Corridor of Tanzania (SAGCOT)",
      homepage: "https://sagcot.co.tz",

      logo: (
        <Image
          src="/logos/sagcot.png"
          height={583}
          width={1000}
          alt="SAGCOT logo"
          className="max-h-full w-auto"
        />
      ),
      team: [
        { name: "Geoffrey Kirenga", location: "Dar es Salaam, Tanzania" },
        { name: "Maria Ijumba", location: "Dar es Salaam, Tanzania" },
        { name: "Adam Ndatulu", location: "Dar es Salaam, Tanzania" },
      ],
    },
    {
      name: "Tanzania Agricultural Research Institute (TARI)",
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
      team: [
        { name: "Joel Meliyo", location: "Dodoma, Tanzania" },
        { name: "Sibaway Mwango", location: "Tanga, Tanzania" },
      ],
    },
  ],
  "Advanced academic institutions": [
    {
      name: "University of California-Davis (UC-Davis)",
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
        {
          name: "Fernando Aramburu-Merlos",
          affiliation: "UNL",
          location: "Lincoln, United States of America",
        },
      ],
    },
    {
      name: "Wageningen University and Research (WUR)",
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
      team: [
        { name: "Ken Giller", location: "Wageningen, Netherlands" },
        { name: "Tom Schut", location: "Wageningen, Netherlands" },
      ],
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
                className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-gray-100 rounded-xl p-8"
              >
                <div className="max-h-[85px] h-full not-prose">
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
                        <span>
                          {member.name}{" "}
                          {member.affiliation && `(${member.affiliation})`}
                        </span>
                        <span className="text-xs">{member.location}</span>
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
