import Image from "next/image";

export default function Page() {
  return (
    <div className="prose">
      <h1>Crop yield response</h1>
      <p>
        Crop yield response to changes in acidity saturation due to liming were
        derived from empirical plateau-linear decay functions (Figure 1). Prior
        experimental evidence on crop yield losses due to acidity saturation in
        acid tropical soils showed crop yield is not affected by soil acidity
        until the acidity saturation reaches a crop-specific threshold (see
        here), above which crop yield linearly decreases, reaching zero at a
        high saturation level (e.g., Farina et al., 1991; Lollato et al. 2019).
        The acidity saturation threshold that distinguishes the plateau (maximum
        yield) from the linear yield decay can also be used as a target acidity
        saturation (TAS) for liming recommendations (Cochrane et al., 1980;
        Aramburu Merlos et al., 2022). These plateau-linear decay functions were
        used to estimate the current yield loss (% of maximum yield) due to high
        acidity saturation.
      </p>
      <figure>
        <Image
          src="/methods/crop-yield-response-figure-1.png"
          width="742"
          height="641"
          alt="figure 1"
          className="w-2/3"
        />
        <figcaption>
          Figure 1 | Methodological approach to estimate crop yield response to
          changes in acidity saturation due to liming using empirical
          plateau-linear decay functions. TAS = target acidity saturation,
          SoiliAS = acidity saturation of grid cell i, MAS = maximum acidity
          saturation.
        </figcaption>
      </figure>
      <p>
        The extra yield that can be achieved after soil acidity remediation was
        estimated by assuming that actual yields (from Yu et al., 2020) in acid
        tropical soils are a fraction of the yield that would be achieved in a
        non-acidic soil, with that fraction equal to the estimated yield loss.
        For example, if the actual yield is 1 t/ha and the estimated yield loss
        is 20%, the actual yield was assumed to be 80% of the yield that would
        be achieved in a non-acidic soil hence, the estimated yield response to
        liming would be 250 kg/ha (Figure 1).
      </p>
      <p>
        There are well-known effects of lime on crop production beyond the year
        of application, which depends on he product and rates applied as well as
        on soil type and other management practices (Sanchez et al., 2019). Yet,
        there is no robust field agronomy data to model such effects across
        large scales in sub-Saharan Africa. The crop production benefits from
        liming were thus only assessed for the year of application, which
        underestimates the true potential benefits of liming in terms of
        production increases and economic benefits.
      </p>
      <h2>References</h2>
      <p>
        Aramburu Merlos, F., Silva, J.V., Baudron, F. & Hijmans, R.J. (2023).
        Estimating lime requirements for tropical soils: Model comparison and
        development. Geoderma, 432, 116421.
      </p>
      <p>
        Cochrane, T.T., Salinas, J.G. & Sanchez, P.A. (1980). An equation for
        liming acid mineral soils to compensate crop aluminium tolerance.
        Tropical Agriculture, 57, 133 – 140.
      </p>
      <p>
        Farina, M.P.W. & Channon, P. (1991). A field comparison of lime
        requirement indices for maize. Plant and Soil, 134, 127 – 135.
      </p>
      <p>
        Lollato, R.P., Ochsner, T.E., Arnall, D.B., Griffin, T.W. & Edwards,
        J.T. (2019). From field experiments to regional forecasts: Upscaling
        wheat grain and forage yield response to acidic soils. Agronomy Journal,
        111, 287 – 302.
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
