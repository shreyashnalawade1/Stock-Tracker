export const getCompanyProfile = async (ticker) => {
  const res = await fetch(
    `https://nice-dirndl-bull.cyclic.app/api/v1/companyProfile/one?ticker=${ticker}`
  );
  const data = res.json();
  return data;
};
