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

    //To make sure our number Input is always greater 0
    // So our calculation won't break!
    if (value > 0) {
      setLoanForm((prevState) => {
        return { ...prevState, [name]: parseInt(value) };
      });
    }
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
        <section className="flex justify-around w-full items-center">
          <div className="w-2/5 h-[350px] mb-28 flex flex-col items-start justify-between">
            <p className="text-3xl font-semibold text-gray-700 my-5 pl-1">
              Easy Way To Calculate Your EMI. ₹
            </p>
            <div className="w-full border h-[30rem] flex items-stretch justify-between gap-2 bg-slate-100 shadow-md rounded-md p-3">
              <div className="flex gap-3  flex-col items-center justify-between">
                <Input
                  value={
                    !loanForm.principalAmount
                      ? defaultLoanForm.principalAmount
                      : loanForm.principalAmount
                  }
                  onChange={handleChange}
                  labelText="Principal Amount ₹"
                  type="number"
                  id="principalAmount"
                  name="principalAmount"
                  min={"1"}
                />
                <Input
                  value={
                    !loanForm.interestRate
                      ? defaultLoanForm.interestRate
                      : loanForm.interestRate
                  }
                  onChange={handleChange}
                  min={"1"}
                  max={"20"}
                  type="number"
                  id="interestRate"
                  name="interestRate"
                  labelText="Interest Rate %"
                />

                <Input
                  value={
                    !loanForm.tentureYears
                      ? defaultLoanForm.tentureYears
                      : loanForm.tentureYears
                  }
                  onChange={handleChange}
                  min={"1"}
                  max={"20"}
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
          <div className="w-2/5">
            <img src={sectionImage} alt="Bussiness Management" />
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
