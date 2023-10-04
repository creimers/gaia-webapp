export default function Page() {
  return (
    <div className="prose">
      <h1>Methods</h1>
      <h2>Data Sources</h2>
      <p>
        Gridded data on soil properties, crop harvested area, and physical
        production were used to estimate the crop production of acid soils after
        liming across sub-Saharan Africa. Soil data for the top 30cm of the soil
        profile were obtained from Hengl2017 for soil pH in water, effective
        cation exchange capacity (ECEC) and its constituents, and soil bulk
        density. We refer to the sum of K, Ca, Mg, and Na as exchangeable bases
        and to the sum of H and Al as exchangeable acidity Sanchez2019. ECEC was
        calculated as the sum of exchangeable bases and exchangeable acidity.
        Acidity saturation (\% of ECEC) was calculated as the ratio between
        exchangeable acidity and ECEC. Gridded crop-specific data on harvested
        area and physical production were obtained for 23 crops in the SPAM
        database Yu2020. We classified these crops into three categories:
        cereals (maize, barley, wheat, sorghum, pearl millet, and finger
        millet), legumes (common bean, groundnut, cowpea, pigeonpea, soybean,
        chickpea, and lentil), and other crops (cassava, potato, sweet potato,
        coffee, tea, cocoa, cotton, sugarcane, and tobacco). We refer to the sum
        of harvested area for all the 23 crops across sub-Saharan Africa as
        total harvested area (i.e., 145.5 M ha). The total harvested area was
        also estimated per crop type amounting to 81.3, 31.7, and 32.5 M ha for
        cereal, legume, and other crops. All gridded data had a spatial
        resolution of 30-arc seconds or higher and were warped to a
        longitude/latitude grid at 30-arc seconds spatial resolution. The
        cropland distribution mask from Walsh2022 was used to exclude from the
        analysis grid cells with less than 10\% probability of cropland
        presence.
      </p>

      <p>
        Crop price data for sub-Saharan Africa were obtained from the Food and
        Agricultural Organization of the United Nations for the period 1991-2021
        (FAOSTAT, 2023). Due to incomplete price data for many crop-by-country
        combinations, the median crop price across all countries for the last
        five years (2016-2020) was used throughout the analysis. Likewise, due
        to unavailability of country-specific lime prices, a fixed lime price of
        US100 ton was used in the analysis, which is about the price of lime
        across the region Dalberg2021.
      </p>
    </div>
  );
}
