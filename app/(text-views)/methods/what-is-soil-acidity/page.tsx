import Image from "next/image";

export default function Page() {
  return (
    <div className="prose">
      <h1>What is soil acidity?</h1>
      <p>
        Soil acidity can negatively impact crop production through different
        soil chemical conditions associated with low pH. These conditions
        include aluminum (Al) toxicity and deficiency of calcium (Ca), magnesium
        (Mg), and other micronutrients (Sanchez et al., 2019). Soil acidity can
        also constrain nutrient uptake due to poor root development (associated
        with Al toxicity) and immobilization of nutrients, particularly
        phosphorus (Sanchez and Salinas, 1981). Soils in (sub-)humid tropical
        regions are frequently acidic due to long-term weathering. Acid tropical
        soils with a pH below 5.5 often have high acidity saturation, i.e., a
        high proportion of soil exchangeable cations being represented by Al and
        hydrogen (H) cations (Figure 1). High acidity saturation is associated
        with Al toxicity problems and severe yield losses (Sanchez et al., 2019,
        Kamprath, 1970).
      </p>
      <figure>
        <Image
          src="/methods/what-is-soil-acidity-figure-1.png"
          width="2000"
          height="973"
          alt="figure 1"
        />
        <figcaption>
          Figure 1 | Relationship between soil pH and exchangeable acidity
          saturation is shown for (A) gridded soil data (Hengl et al., 2017) and
          (B) wet chemistry soil samples from the Africa Soil Information
          Service project. Solid lines represent negative exponential
          regressions fitted to the data and dashed vertical lines indicate a
          soil pH equal to 5.5.
        </figcaption>
      </figure>
      <p>
        Acid soils can be managed by adding neutralizing agents such as wood
        ash, compost, and agricultural lime (Sanchez et al. 2019, de Pauw,
        1994). In prior decades, liming facilitated the agricultural expansion
        in the highly acidic Oxisols of the Brazilian Cerrado (Goedert et al.
        1983, Yamada et al. 2005). Lime products are rich in Ca and Mg and react
        as bases (Coleman et al. 1959). In doing so, they reduce the
        concentration of exchangeable acidity in the topsoil (Sanchez et al.,
        2019) and increase the availability of nutrients to plants. Organic
        amendments like manure and compost can also reduce exchangeable acidity
        and solve nutrient deficiencies, but this is highly dependent on the
        rate and quality of the products applied (Fageria et al., 2008). Gypsum
        is mostly used to address subsoil acidity due to its high mobility in
        the soil profile. Finally, the effect of soil acidity can also be
        managed with Al-tolerant crop species and varieties (e.g, Mendes et al.,
        1985).
      </p>
      <h2>References</h2>
      <p>
        Coleman, N.T., Kamprath, E.J. & Weed, S.B. (1959). Liming. Advances in
        Agronomy, 10, 475 – 522.
      </p>
      <p>
        Fageria, N.K. & Baligar, V.C. (2008). Chapter 7 Ameliorating soil
        acidity of tropical Oxisols by liming for sustainable crop production.
        Advances in Agronomy, 99, 345–399.
      </p>
      <p>
        Goedert, W.J. (1983). Management of the Cerrado soils of Brazil: a
        review. Journal of Soil Science, 34, 405 – 428.
      </p>
      <p>
        Hengl, T., Mendes de Jesus, J., Heuvelink, G.B.M., Ruiperez Gonzalez,
        M., Kilibarda, M., Blagotic, A., Shangguan, W., Wright, M.N., Geng, X.,
        Bauer-Marschallinger, B., Guevara, M.A., Vargas, R., MacMillan, R.A.,
        Batjes, N.H., Leenaars, J.G.B., Ribeiro, E., Wheeler, I., Mantel, S. &
        Kempen, B. (2017). SoilGrids250m: Global gridded soil information based
        on machine learning. PLOS ONE, 12, 1 – 40.
      </p>
      <p>
        Kamprath, E.J. (1970). Exchangeable aluminum as a criterion for liming
        leached mineral soils. Soil Science Society of America, 11, 1 – 40.
      </p>
      <p>
        Mendes, A.P., Farina, M.P.W., Channon, P. & Smith, M. (1985). A field
        evaluation of the differential tolerance to soil acidity of forty-eight
        South African maize cultivars. South African Journal of Plant and Soil,
        2, 215–220.
      </p>
      <p>
        de Pauw, E.F (1994). The management of acid soils in Africa. Outlook on
        Agriculture, 23, 11 – 16.
      </p>
      <p>
        Sanchez, P.A. & Salinas, J.G. (1981). Low-input technology for managing
        Oxisols and Ultisols in Tropical America. Advances in Agronomy, 34,
        279–406.
      </p>
      <p>
        Sanchez, P.A. (2019). Properties and Management of Soils in the Tropics,
        Cambridge University Press, chap. Chapter 9 - Soil Acidity, pp. 210 –
        235.
      </p>
      <p>
        Yamada, T. (2005). The Cerrado of Brazil: A success story of production
        on acid soils. Soil Science and Plant Nutrition, 51, 617 – 620.
      </p>
    </div>
  );
}
