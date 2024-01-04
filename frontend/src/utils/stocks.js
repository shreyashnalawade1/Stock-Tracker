export const stockHome = async function () {
  const res = await fetch(
    "https://nice-dirndl-bull.cyclic.app/api/v1/timeSeries/home"
  );
  const data = await res.json();
  const processed = [];
  //   console.log(data?.data?.recordset);
  for (let i = 0; i < data?.data?.recordset?.length; i += 2) {
    const cur = {};
    cur.ticker = data?.data?.recordset[i]?.ticker;
    cur.high = data?.data?.recordset[i]?.high_val;
    cur.low = data?.data?.recordset[i]?.low_val;
    cur.open = data?.data?.recordset[i]?.open_val;
    cur.close = data?.data?.recordset[i]?.close_val;
    cur.diff =
      data?.data?.recordset[i]?.close_val -
      data?.data?.recordset[i + 1]?.close_val;
    cur.company = data?.data?.recordset[i]?.company_name;
    processed.push(cur);
  }
  return processed;
};
export const indexHome = async function () {
  const res = await fetch(
    "https://nice-dirndl-bull.cyclic.app/api/v1/timeSeries/index"
  );
  const data = await res.json();
  return data?.data?.markets;
};

export const getTimeSeries = async function (ticker, numDays) {
  const res = await fetch(
    `https://nice-dirndl-bull.cyclic.app/api/v1/timeSeries?ticker=${ticker}&numDays=${numDays}`
  );
  const data = await res.json();

  return data?.data?.recordset;
};

export const getBarSeries = async function (ticker) {
  const res = await fetch(
    `https://nice-dirndl-bull.cyclic.app/api/v1/timeSeries/bar?ticker=${ticker}`
  );
  const data = await res.json();
  return data?.data?.recordset;
};
