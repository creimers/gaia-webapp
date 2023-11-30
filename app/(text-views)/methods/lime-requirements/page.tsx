export default function Page() {
  return (
    <div className="prose">
      <h1>Lime requirements</h1>
      <p>
        The amount of lime required to overcome crop production constraints
        caused by soil acidity was estimated with the lime requirement model of
        (Aramburu Merlos et al., 2022). This model estimates the lime rate
        needed to reach a target acidity saturation (TAS) in the soil by
        multiplying the target decrease in exchangeable acidity by a ‘lime
        factor’, which can be defined as a continuous function of the TAS with
        parameters a=0.60 and b=0.92 calibrated from legacy soil incubation data
        (see Aramburu Merlos et al., 2022, for further details). Defining lime
        rate as a function of TAS makes it possible to consider the relative
        tolerance of different crops to soil acidity when calculating lime
        rates.
      </p>
      <p>
        Lime requirements were estimated by applying the Aramburu Merlos et al.
        (2022) model to gridded soil data on exchangeable acidity and ECEC (and
        its constituents) from (Hengl et al., 2017). The model also requires
        crop-specific values of TAS, which were considered in the analysis as
        per Table 1 (see also Fageria et al., 2008). Lime rates were converted
        to ton CaCO3/ha assuming a soil depth of 20cm (the most feasible
        incorporation depth under smallholder farming in sub-Saharan Africa) and
        using gridded soil bulk density data from (Hengl et al., 2017).
      </p>
      <figure className="max-w-full w-full overflow-x-scroll">
        <figcaption>
          Table 1 | Suggested target and maximum acidity saturation values for
          23 major crops. Crop type specific parameters acknowledge the similar
          tolerance to exchangeable acidity of specific groups of crops (cereals
          and legumes) and reflect knowledge gaps on the tolerance to acidity of
          other crops (e.g., cotton and tobacco).
        </figcaption>
        <table>
          <thead>
            <tr>
              <th className="whitespace-nowrap">Crop codes</th>
              <th>Crop names</th>
              <th>Crop type</th>
              <th>Target acidity sat. (TAS, % of ECEC)</th>
              <th>Maximum acidity sat. (TAS, % of ECEC)</th>
            </tr>
          </thead>
          <tbody style={{ borderBottom: "1px solid black" }}>
            <tr>
              <td>MAIZ</td>
              <td>Maize</td>
              <td>Cereal</td>
              <td className="text-center">20</td>
              <td className="text-center">70</td>
            </tr>
            <tr>
              <td>SORG</td>
              <td>Sorghum</td>
              <td>Cereal</td>
              <td className="text-center">20</td>
              <td className="text-center">70</td>
            </tr>
            <tr>
              <td>PMIL</td>
              <td>Pearl millet</td>
              <td>Cereal</td>
              <td className="text-center">20</td>
              <td className="text-center">70</td>
            </tr>
            <tr>
              <td>SMIL</td>
              <td>Finger millet</td>
              <td>Cereal</td>
              <td className="text-center">20</td>
              <td className="text-center">70</td>
            </tr>
            <tr>
              <td>WHEA</td>
              <td>Wheat</td>
              <td>Cereal</td>
              <td className="text-center">20</td>
              <td className="text-center">70</td>
            </tr>
            <tr>
              <td>BARL</td>
              <td>Barley</td>
              <td>Cereal</td>
              <td className="text-center">20</td>
              <td className="text-center">70</td>
            </tr>
          </tbody>
          <tbody style={{ borderBottom: "1px solid black" }}>
            {/* BEAN	Bean	Legume	10	50 */}
            <tr>
              <td>BEAN</td>
              <td>Bean</td>
              <td>Legume</td>
              <td className="text-center">10</td>
              <td className="text-center">50</td>
            </tr>
            {/* GROU	Groundnut	Legume	10	50 */}
            <tr>
              <td>GROU</td>
              <td>Groundnut</td>
              <td>Legume</td>
              <td className="text-center">10</td>
              <td className="text-center">50</td>
            </tr>
            {/* COWP	Cowpea	Legume	20	50 */}
            <tr>
              <td>COWP</td>
              <td>Cowpea</td>
              <td>Legume</td>
              <td className="text-center">20</td>
              <td className="text-center">50</td>
            </tr>
            {/* SOYB	Soybean	Legume	20	50 */}
            <tr>
              <td>SOYB</td>
              <td>Soybean</td>
              <td>Legume</td>
              <td className="text-center">20</td>
              <td className="text-center">50</td>
            </tr>
            {/* PIGE	Pigeon pea	Legume	10	50 */}
            <tr>
              <td>PIGE</td>
              <td>Pigeon pea</td>
              <td>Legume</td>
              <td className="text-center">10</td>
              <td className="text-center">50</td>
            </tr>
            {/* CHIC	Chickpea	Legume	10	50 */}
            <tr>
              <td>CHIC</td>
              <td>Chickpea</td>
              <td>Legume</td>
              <td className="text-center">10</td>
              <td className="text-center">50</td>
            </tr>
            {/* LENT	Lentil	Legume	10	50 */}
            <tr>
              <td>LENT</td>
              <td>Lentil</td>
              <td>Legume</td>
              <td className="text-center">10</td>
              <td className="text-center">50</td>
            </tr>
          </tbody>
          <tbody style={{ borderBottom: "1px solid black" }}>
            {/*POTA	Potato	Root & tuber	20	70  */}
            <tr>
              <td>POTA</td>
              <td>Potato</td>
              <td>Root & tuber</td>
              <td className="text-center">20</td>
              <td className="text-center">70</td>
            </tr>
            {/* SWPO	Sweet potato	Root & tuber	20	80 */}
            <tr>
              <td>SWPO</td>
              <td>Sweet potato</td>
              <td className="whitespace-nowrap">Root & tuber</td>
              <td className="text-center">20</td>
              <td className="text-center">80</td>
            </tr>
            {/* CASS	Cassava	Root & tuber	40	120 */}
            <tr>
              <td>CASS</td>
              <td>Cassava</td>
              <td>Root & tuber</td>
              <td className="text-center">40</td>
              <td className="text-center">120</td>
            </tr>
          </tbody>
          <tbody>
            {/* ACOF	Coffee (arabica)	Commodity	30	90 */}
            <tr>
              <td>ACOF</td>
              <td className="whitespace-nowrap">Coffee (arabica)</td>
              <td>Commodity</td>
              <td className="text-center">30</td>
              <td className="text-center">90</td>
            </tr>
            {/* RCOF	Coffee (robusta)	Commodity	30	90 */}
            <tr>
              <td>RCOF</td>
              <td className="whitespace-nowrap">Coffee (robusta)</td>
              <td>Commodity</td>
              <td className="text-center">30</td>
              <td className="text-center">90</td>
            </tr>
            {/* COCO	Cocoa beans	Commodity	40	90 */}
            <tr>
              <td>COCO</td>
              <td>Cocoa beans</td>
              <td>Commodity</td>
              <td className="text-center">40</td>
              <td className="text-center">90</td>
            </tr>
            {/* TEAS	Tea leaves	Commodity	40	90 */}
            <tr>
              <td>TEAS</td>
              <td>Tea leaves</td>
              <td>Commodity</td>
              <td className="text-center">40</td>
              <td className="text-center">90</td>
            </tr>
            {/* SUGC	Sugarcane	Commodity	40	90 */}
            <tr>
              <td>SUGC</td>
              <td>Sugarcane</td>
              <td>Commodity</td>
              <td className="text-center">40</td>
              <td className="text-center">90</td>
            </tr>
            {/* COTT	Cotton seed	Commodity	30	90 */}
            <tr>
              <td>COTT</td>
              <td>Cotton seed</td>
              <td>Commodity</td>
              <td className="text-center">30</td>
              <td className="text-center">90</td>
            </tr>
            {/* TOBA	Tobacco	Commodity	30	90 */}
            <tr>
              <td>TOBA</td>
              <td>Tobacco</td>
              <td>Commodity</td>
              <td className="text-center">30</td>
              <td className="text-center">90</td>
            </tr>
          </tbody>
        </table>
      </figure>
      <h2>References</h2>
      <p>
        Aramburu Merlos, F., Silva, J.V., Baudron, F. & Hijmans, R.J. (2023).
        Estimating lime requirements for tropical soils: Model comparison and
        development. Geoderma, 432, 116421.
      </p>
      <p>
        Fageria, N.K. & Baligar, V.C. (2008). Chapter 7 Ameliorating soil
        acidity of tropical Oxisols by liming for sustainable crop production.
        Advances in Agronomy, 99, 345–399.
      </p>
      <p>
        Hengl, T., Mendes de Jesus, J., Heuvelink, G.B.M., Ruiperez Gonzalez,
        M., Kilibarda, M., Blagotic, A., Shangguan, W., Wright, M.N., Geng, X.,
        Bauer-Marschallinger, B., Guevara, M.A., Vargas, R., MacMillan, R.A.,
        Batjes, N.H., Leenaars, J.G.B., Ribeiro, E., Wheeler, I., Mantel, S. &
        Kempen, B. (2017). SoilGrids250m: Global gridded soil information based
        on machine learning. PLOS ONE, 12, 1 – 40.
      </p>
    </div>
  );
}
