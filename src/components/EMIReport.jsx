import React from "react";
import humanRead from "../utils/HumanRead";
import Input from "./Input";

const EMIReport = (props) => {
  const { report } = props;
  const { emi, totalInterest } = report;

  return (
    <div className="flex w-full gap-3 items-center justify-start flex-col">
      <Input
        value={!emi ? 0 : humanRead(emi)}
        readOnly
        type="text"
        id="totalEmi"
        name="totalEmi"
        labelText="Total EMI ₹"
      />

      <Input
        value={!totalInterest ? 0 : humanRead(totalInterest)}
        readOnly
        type="text"
        labelText="Total Interest"
        id="totalInterest"
        name="totalInterest"
      />
    </div>
  );
};

export default EMIReport;
