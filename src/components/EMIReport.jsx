import React from "react";

import Input from "./Input";

const EMIReport = (props) => {
  const { report } = props;
  const { emi, totalInterest } = report;

  return (
    <div className="flex w-full items-center justify-between flex-col">
      <ul className="flex flex-col w-82 gap-3">
        <Input
          value={!emi ? 0 : emi}
          readOnly
          type="text"
          id="totalEmi"
          name="totalEmi"
          labelText="Total EMI"
        />

        <Input
          value={!totalInterest ? 0 : totalInterest}
          readOnly
          type="text"
          labelText="Total Interest"
          id="totalInterest"
          name="totalInterest"
        />
      </ul>
    </div>
  );
};

export default EMIReport;
