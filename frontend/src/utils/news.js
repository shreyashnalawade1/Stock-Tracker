export const genralNews = async function () {
  const res = await fetch(
    "https://nice-dirndl-bull.cyclic.app/api/v1/news/genral"
  );
  const data = await res.json();
  return data;
};

export const getCompanyNews = async function (ticker) {
  const res = await fetch(
    `https://nice-dirndl-bull.cyclic.app/api/v1/news/company?ticker=${ticker}`
  );
  const data = await res.json();
  return data;
};
