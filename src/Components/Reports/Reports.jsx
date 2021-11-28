import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const Reports = () => {
  const [reports, setReports] = useState(null);
  const [reportList, setReportList] = useState(null);
  const { job } = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "مدیریت";
    if (job === "حسابدار" || job === "مدیریت") {
      return;
    } else {
      navigate("/manage");
    }
  }, []);

  return (
    <main className={`min-h-screen p-5`}>
      <section>
        <h1 className={`color-gradient text-5xl Casablanca`}>گزارشات</h1>
      </section>
    </main>
  );
};

export default Reports;
