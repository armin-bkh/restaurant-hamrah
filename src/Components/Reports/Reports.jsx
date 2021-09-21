import { useState } from "react";

const Reports = () => {
    const [reports, setReports] = useState(null);
    const [reportList, setReportList] = useState(null);

  return (
    <main className={`min-h-screen p-5`}>
      <section>
        <h1 className={`color-gradient text-5xl Casablanca`}>گزارشات</h1>
      </section>
    </main>
  );
};

export default Reports;
