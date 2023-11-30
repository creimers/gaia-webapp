export default function Page() {
  return (
    <div className="prose">
      <h1>Profitability</h1>
      <p>
        The economic benefit from liming (US$/ha) for each crop refers to the
        additional crop yield after remediation of acid soils (see here)
        multiplied by the median crop price across sub-Saharan Africa between
        2016-2020 (FAOSTAT, 2023 – see here for more information). The cost
        associated with liming (US$/ha) for each crop refers to the estimated
        lime rate (see here) multiplied with a fixed lime price of 100 US$/t.
        Gross margins (US$/ha) from liming were estimated for each crop as the
        difference between the economic benefit and the lime cost. A sensitivity
        analysis was conducted to quantify the impact of changes in lime price,
        ranging between 0 and 100 US$/t, in steps of 20 US$/t, on the gross
        margins from liming.{" "}
      </p>
    </div>
  );
}
