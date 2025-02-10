export default function Page() {
  return (
    <div className="prose">
      <h1>Data Sources</h1>
      <p>
        Gridded data on (1) soil properties and (2) crop harvested area and
        physical production were used to estimate the crop production of acid
        soils after liming across sub-Saharan Africa. All data were sourced from
        the geodata R package (Hijmans et al., 2023). The cropland distribution
        mask from (Walsh et al., 2022) was used to exclude grid cells with less
        than 10% probability of cropland presence.
      </p>
      <p>
        Soil data for the top 30cm of the soil profile were obtained from Hengl
        et al. (2017) for soil pH in water, effective cation exchange capacity
        (ECEC) and its constituents (i.e., K+, Ca2+, Mg2+, Na+, H+, and Al3+),
        and soil bulk density. The sum of +, Ca2+, Mg2+, and Na+ is known as
        exchangeable bases and the sum of H H+, and Al3+ as exchangeable acidity
        (see also Sanchez et al., 2019). ECEC was calculated as the sum of
        exchangeable bases and exchangeable acidity. Acidity saturation (% of
        ECEC) was calculated as the ratio between exchangeable acidity and ECEC.
      </p>
      <p>
        Gridded crop-specific data on harvested area and physical production
        were obtained for 23 crops in the SPAM database (Yu et al., 2020). These
        23 crops were classified into three categories: cereals (maize, barley,
        wheat, sorghum, pearl millet, and finger millet), legumes (common bean,
        groundnut, cowpea, pigeonpea, soybean, chickpea, and lentil), and other
        crops (cassava, potato, sweet potato, coffee, tea, cocoa, cotton,
        sugarcane, and tobacco). Crop area data were used to compute weighted
        averages of lime requirements, yield response, and gross margins across
        crops.
      </p>
      <p>
        Crop price data for sub-Saharan Africa were obtained from the Food and
        Agricultural Organization of the United Nations for the period 1991-2021
        (FAOSTAT, 2023). Due to incomplete price data for many crop-by-country
        combinations, the median crop price across all countries for the last
        five years (2016-2020) was used in the profitability assessment.
        Likewise, due to unavailability of country-specific lime prices, a fixed
        lime price of 100 $US/ton was considered.
      </p>
      <p>
        Administrative boundaries adopted in the results were obtained from the
        Database of Global Administrative Areas (GADM, see{" "}
        <a href="https://en.wikipedia.org/wiki/GADM">
          https://en.wikipedia.org/wiki/GADM
        </a>
        )
      </p>
      <h2>References</h2>
      <p>
        Hengl, T., Mendes de Jesus, J., Heuvelink, G.B.M., Ruiperez Gonzalez,
        M., Kilibarda, M., Blagotic, A., Shangguan, W., Wright, M.N., Geng, X.,
        Bauer-Marschallinger, B., Guevara, M.A., Vargas, R., MacMillan, R.A.,
        Batjes, N.H., Leenaars, J.G.B., Ribeiro, E., Wheeler, I., Mantel, S. &
        Kempen, B. (2017). SoilGrids250m: Global gridded soil information based
        on machine learning. PLOS ONE, 12, 1 – 40.
      </p>
      <p>
        Hijmans, R.J., Barbosa, M., Ghosh, A., Mandel, A. (2023). geodata:
        Download Geographic Data. R package version 0.5-9.
      </p>
      <p>
        Sanchez, P.A. (2019). Properties and Management of Soils in the Tropics,
        Cambridge University Press, chap. Chapter 9 - Soil Acidity, pp. 210 –
        235.
      </p>
      <p>
        Walsh, M.G., Wu, W. & Walsh, B. (2022). Geosurvey data prediction
        workflows. Tech. rep., OSF.
      </p>
      <p>
        Yu, Q., You, L., Wood-Sichra, U., Ru, Y., Joglekar, A.K.B., Fritz, S.,
        Xiong, W., Lu, M., Wu, W., & Yang, P. (2020). A cultivated planet in
        2010: 2. the global gridded agricultural production maps. Earth System
        Science Data, 34, 252 – 254.
      </p>
    </div>
  );
}
