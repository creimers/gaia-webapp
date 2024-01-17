import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="prose">
      <h1>Framework</h1>
      <p>
        Our approach to assess how profitable investments in agricultural lime
        are in sub-Saharan Africa consisted of 3 main steps (Figure 1), as
        explained below and in the respective pages. Information about the data
        sources and software used in each step can be found{" "}
        <Link href="/methods/data-sources">here</Link>. First, the amount of
        lime required to remediate acid soils (i.e., the lime rate required to
        overcome crop-specific production constraints due to soil acidity) was
        estimated from gridded soil data with different lime requirement models.
        See further information{" "}
        <Link href="/methods/lime-requirements">here</Link>. Second, the{" "}
        <Link href="/methods/crop-yield-response">yield response</Link> of 23
        crops to liming was estimated with empirical functions using gridded
        soil data. Together with gridded data on crop harvested area and
        physical production, these yield responses were used to estimate local
        crop production increases from remediation of acid soils. Finally, the
        amount of lime required and the additional production attributable to
        such lime applications were combined with crop and lime price data to
        assess the <Link href="/methods/profitability">profitability</Link> and
        returns on investments to liming. A sensitivity analysis was conducted
        to test the robustness of the results to modeling assumptions.
      </p>
      <figure>
        <Image
          src="/methods/framework-figure-1.png"
          width="935"
          height="510"
          alt="figure 1"
        />
        <figcaption>
          Figure 1 | Methodological approach to assess the economic benefit of
          liming in sub-Saharan Africa. Input data included gridded crop
          harvested area and physical production, gridded soil properties, and
          crop and lime prices. Lime rates to overcome crop-specific production
          constraints due to soil acidity were estimated with different lime
          requirement models. The additional crop production due to liming was
          estimated with plateau-linear decay functions characterizing crop
          yield response to acidity saturation. Additional crop production and
          lime requirements to remediate acid soils were combined with crop and
          lime price data to assess the economic benefit of liming.
        </figcaption>
      </figure>
      <p>
        The workflow presented in Figure 1 was implemented within the R
        programming environment. The R package terra (Hijmans, 2022) was used
        for geospatial analysis and mapping. The R packages Recocrop (Hijmans,
        2021) and limer (Aramburu Merlos, 2021) were used to estimate crop yield
        response to acidity saturation and lime requirements for acid soil
        remediation, respectively. All R scripts will be made available at{" "}
        <a
          href="https://github.com/EiA2030-ex-ante"
          target="_blank"
          rel="noopener noreferrer"
        >
          github.com/EiA2030-ex-ante
        </a>
        .
      </p>
      <h2>References</h2>
      <p>
        Aramburu Merlos, F. (2022). limer: Acidic soil management for
        agriculture. R package version 0.1-1.
      </p>
      <p>
        Hijmans, R.J. (2021). Recocrop: Estimating Environmental Suitability for
        Plants. R package version 0.4-0.
      </p>
      <p>
        Hijmans, R.J. (2022). terra: Spatial Data Analysis. R package version
        1.6-17.
      </p>
    </div>
  );
}
