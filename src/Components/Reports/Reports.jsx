import { useContext, useEffect, useState } from "react";
import UserJobContext from "../../Context/UserJobContext";

const Reports = ({ history }) => {
    const [reports, setReports] = useState(null);
    const [reportList, setReportList] = useState(null);
    const userJob = useContext(UserJobContext);

    useEffect(()=>{
      if(userJob === "حسابدار" || userJob === "مدیریت") {
        return;
      } else { history.push('/manage') }
    }, [])

  return (
    <main className={`min-h-screen p-5`}>
      <section>
        <h1 className={`color-gradient text-5xl Casablanca`}>گزارشات</h1>
      </section>
    </main>
  );
};

export default Reports;
