import { useEffect, useState } from "react";
import { getCompanyProfile } from "../utils/companyProfile";
import { useParams } from "react-router";

export default function CompanyProfile() {
  const { ticker } = useParams();
  const [profile, setProfile] = useState();
  useEffect(() => {
    (async () => {
      const {
        data: { recordset },
      } = await getCompanyProfile(ticker.toUpperCase());
      console.log(recordset);
      setProfile(...recordset);
    })();
    console.log(profile);
  }, [ticker]);
  return (
    <div className=" lg:col-span-1 lg:row-span-6 bg-slate-800 p-8 pt-4 m-3 rounded-2xl lg:w-full lg:h-full">
      <h3 className="border-solid border-b pb-1 border-white">
        Company Profile
      </h3>
      <div className="grid grid-cols-5 py-2 flex-grow  overflow-y-scroll p-4 no-scrollbar ">
        <h3 className="col-span-2">Name:</h3>
        <h3 className="col-span-3">{profile?.company_name}</h3>
        <h3 className="col-span-2">Ticker:</h3>
        <h3 className="col-span-3">{profile?.ticker[0]}</h3>
        <h3 className="col-span-2">Industry:</h3>
        <h3 className="col-span-3">{profile?.industry}</h3>
        <h3 className="col-span-2">Employees:</h3>
        <h3 className="col-span-3">{profile?.no_emp}</h3>
        <h3 className="col-span-2">Address:</h3>
        <h3 className="col-span-3">{profile?.address_val}</h3>
        <h3 className="col-span-2">Telephone:</h3>
        <h3 className="col-span-3">{profile?.telphone}</h3>
        <h3 className="col-span-2">Website:</h3>
        <h3 className="col-span-3">
          <a href={profile?.website} target="_blank" rel="noopener noreferrer">
            {profile?.website}
          </a>
        </h3>
      </div>
    </div>
  );
}
