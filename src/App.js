import { useState } from "react";
import Button from "./components/Button";
import EMIReport from "./components/EMIReport";
import Input from "./components/Input";
import Navbar from "./components/Navbar";
import calculateEMI from "./utils/EMICalculation";

const sectionImage = `${process.env.PUBLIC_URL}./business-analysis.png`;

const defaultLoanForm = {
  principalAmount: 1000000,
  interestRate: 2,
  tentureYears: 1,
};

function App() {
  const [loanForm, setLoanForm] = useState(defaultLoanForm);
  const [loanReport, setLoanReport] = useState({});

  const handleChange = (event) => {
    let { name, value } = event.target;

    setLoanForm((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const generateLoanReport = () => {
    let report = calculateEMI(loanForm);
    setLoanReport(report);
  };

  const resetLoanForm = () => {
    setLoanForm(defaultLoanForm);

    setLoanReport({});
  };

  return (
    <>
      <Navbar />
      <div className="w-screen  p-4 ">
        <section className="flex flex-col md:flex-row justify-around w-full items-center">
          <div className="w-full sm:w-3/5 lg:w-2/5  md:h-[350px] md:mb-28 flex flex-col items-center lg:items-start justify-between">
            <p className="text-lg md:text-2xl  font-semibold text-gray-700 my-5 pl-1">
              Easy Way To Calculate Your EMI ₹
            </p>
            <div className="w-full  border h-auto md:h-[30rem] flex flex-col sm:flex-row items-stretch justify-between gap-2 bg-slate-100 shadow-md rounded-md p-3">
              <div className="flex gap-3 mb-2 sm:mb-0 flex-col items-center justify-between">
                <Input
                  value={loanForm.principalAmount}
                  onChange={handleChange}
                  labelText="Principal Amount ₹"
                  type="number"
                  id="principalAmount"
                  name="principalAmount"
                />
                <Input
                  value={loanForm.interestRate}
                  onChange={handleChange}
                  min={"1"}
                  max={"20"}
                  type="number"
                  id="interestRate"
                  name="interestRate"
                  labelText="Interest Rate %"
                />

                <Input
                  value={loanForm.tentureYears}
                  onChange={handleChange}
                  min={"1"}
                  max={"5"}
                  type="number"
                  id="tentureYears"
                  labelText="Loan Tenture (Years)"
                  name="tentureYears"
                />

                <div className="flex gap-2 items-center justify-start w-full">
                  <Button
                    onClick={generateLoanReport}
                    className="hover:bg-sky-600 bg-sky-500 text-white"
                  >
                    Calculate
                  </Button>

                  <Button
                    onClick={resetLoanForm}
                    className="hover:bg-slate-200 bg-white text-gray-700 "
                  >
                    Reset
                  </Button>
                </div>
              </div>
              <EMIReport report={loanReport} />
            </div>
          </div>
          <div className="hidden lg:block w-2/5">
            <img src={sectionImage} alt="Bussiness Management" />
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
