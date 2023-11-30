import Link from "next/link";
export default function Home() {
  return (
    <>
      <div className="prose mb-8">
        <h1>About</h1>
        <iframe
          className="aspect-video w-full"
          src="https://www.youtube.com/embed/tB0MCduhOpA?si=9q3jNl5nHev16u1z"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
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
        {/* <div className="rounded-lg bg-green-200 border-green-700 border text-green-700 p-6 space-y-2">
          <div className="font-semibold text-lg">Business disclaimer</div>
          <div>The content of this disclaimer still needs to be discussed.</div>
        </div> */}
        <h2>
          Interested to know more about acid soil management in sub-Saharan
          Africa?
        </h2>
        <p>
          Our <Link href="/data">dashboard</Link> provides state-of-the-art data
          and information on acid soil management for the major cereal, legume,
          root and tuber, and commodity crops in sub-Saharan Africa. The
          following can be found and downloadable open access from our dashboard
          either as a spatial product or tabular summaries disaggregated for
          different administrative units:
        </p>
        <ol>
          <li>
            Distribution and characterization acid soils (soil pH, exchangeable
            acidity, ECEC).
          </li>
          <li>
            Lime rates required to increase crop production and expected crop
            yield responses.
          </li>
          <li>
            Profitability of liming under different lime price assumptions.
          </li>
          <li>
            State-of-the-art technical and scientific resources on soil acidity
            and acid soil management.
          </li>
        </ol>
        <p>
          These resources can support (a) prioritization of research and
          development activities, (b) strategic decision making, and (c)
          public-private investments on soil health initiatives across the
          region.
        </p>
        <h2>Our &apos;agronomy-to-scale&apos; approach</h2>
        <p>
          Soil acidity can negatively impact crop production and fertilizer use
          efficiency through a series of soil chemical and biological conditions
          associated with low pH, most notably aluminum toxicity. Our
          ‘agronomy-to-scale’ approach to understand and tackle this problem
          encompasses an ex-ante assessment to prioritize crop by geography
          combinations benefiting most from acid soil management followed by
          local validation through agronomy and socio-economic research with
          regional partners and authorities. See an example of our activities in
          Tanzania{" "}
          <a
            href="https://www.youtube.com/watch?v=hL6HLjDQ7y0"
            target="_blank"
            rel="noopener noreferrer"
          >
            on youtube
          </a>
          .
        </p>
        <h2>Our team and expertise</h2>
        <p>
          Our team is composed of agronomists, soil scientists, and economists
          from international and national research organizations that ensure the
          development of sound data and knowledge products and local engagements
          with farmers, private sector, and governments. See our list of
          partners here. We can support future investments in:
        </p>
        <ol>
          <li>
            understanding acid soils and their impact on crop production in
            sub-Saharan Africa’s cropping systems.
          </li>
          <li>
            prioritizing acid soil management strategies in the context of a
            broader agenda on soil health.
          </li>
          <li>
            supporting the development of policies and directives related to
            soil acidity and lime value chains.
          </li>
        </ol>
      </div>
    </>
  );
}
