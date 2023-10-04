import Logo from "@/components/layout/header/logo";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="prose mb-8">
        <h1>About</h1>
        <p>
          <strong>
            Guiding Acid Soil Management Investments in Africa (GAIA)
          </strong>{" "}
          is a research-for-development project led by the International Maize
          and Wheat Improvement Center (CIMMYT) and supported by the Bill and
          Melinda Gates Foundation.
        </p>
        <p>
          The project aims to identify and address key knowledge gaps related to
          soil acidity management for sustainable agricultural productivity and
          maintenance of soil health. GAIA is focused on the development of
          scalable innovations to provide reliable, timely and actionable data
          and insights on acidity-related soil health and crop performance, at
          farm and regional levels. The project has undertaken broad-scale
          analysis for all of sub-Saharan Africa, with more focused field and
          policy-engagement activities in Ethiopia, Kenya, Rwanda and Tanzania.
        </p>
        <p>
          Regional partners include: the Ethiopian Institute of Agricultural
          Research (EIAR), the Kenya Agricultural and Livestock Research
          Organization (KALRO), the Rwanda Agriculture and Animal Resources
          Development Board (RAB), the Tanzania Agricultural Research Institute
          (TARI), the Southern Agricultural Growth Corridor of Tanzania
          (SAGCOT).
        </p>
        <p>
          Find out more at{" "}
          <a href="https://www.cimmyt.org/projects/gaia/">
            www.cimmyt.org/projects/gaia
          </a>
        </p>
      </div>
      <div className="grid grid-cols-6 gap-8">
        <div className="col-span-6 font-semibold text-lg">
          Leadership and Funding
        </div>
        <div className="col-span-3 flex justify-center items-center">
          <Logo />
        </div>
        <div className="col-span-3 flex justify-center items-center">
          <Image
            src="/logos/bill-melinda-gates.svg"
            height={64}
            width={250}
            alt="Bill Melinda Gates logo"
          />
        </div>
        <div className="col-span-6 font-semibold text-lg">
          Africa Based Partners
        </div>
        <div className="flex items-center justify-center">
          <Image
            src="/logos/agra.png"
            height={341}
            width={1000}
            alt="AGRA logo"
          />
        </div>
        <div className="flex items-center justify-center">
          <Image
            src="/logos/eiar.png"
            height={762}
            width={443}
            alt="EIAR logo"
          />
        </div>
        <div className="flex items-center justify-center">
          <Image
            src="/logos/kalro.png"
            height={709}
            width={1000}
            alt="KALRO logo"
          />
        </div>
        <div className="flex items-center justify-center">
          <Image
            src="/logos/rab.png"
            height={970}
            width={1000}
            alt="RAB logo"
          />
        </div>
        <div className="flex items-center justify-center">
          <Image
            src="/logos/tari.png"
            height={563}
            width={1000}
            alt="TARI logo"
          />
        </div>
        <div className="flex items-center justify-center">
          <Image
            src="/logos/sagcot.png"
            height={583}
            width={1000}
            alt="SAGCOT logo"
          />
        </div>
        <div className="col-span-6 font-semibold text-lg">
          Non-Africa Based Partners
        </div>
        <div className="flex items-center justify-center col-span-2">
          <Image
            src="/logos/ucd.png"
            height={256}
            width={1000}
            alt="ucd logo"
          />
        </div>
        <div className="flex items-center justify-center col-span-2">
          <Image
            src="/logos/wur.png"
            height={248}
            width={1000}
            alt="wur logo"
          />
        </div>
      </div>
    </>
  );
}
