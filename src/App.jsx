import { useState } from "react";
import InputField from "./components/InputField";
import { calculateInvestmentResults } from "./util/investment";
import TableResult from "./components/TableResult";
import Header from "./components/Header";

function App() {
  const [initialInvestment, setInitialInvestment] = useState(15000);
  const [annualInvestment, setAnnualInvestment] = useState(900);
  const [expectedReturn, setExpectedReturn] = useState(5.5);
  const [duration, setDuration] = useState(12);

  const tableData = calculateInvestmentResults({
    initialInvestment,
    annualInvestment,
    expectedReturn,
    duration,
  });

  return (
    <>
      <Header />
      {/* user input */}
      <div id="user-input" style={{ padding: "2rem" }}>
        <div className="input-group">
          <InputField
            inputLabel="Initial Investment"
            inputType="number"
            initialValue={initialInvestment}
            setFieldValue={setInitialInvestment}
          />
          <InputField
            inputLabel="Annual Investment"
            inputType="number"
            initialValue={annualInvestment}
            setFieldValue={setAnnualInvestment}
          />
        </div>
        <div className="input-group" style={{ marginTop: "2rem" }}>
          <InputField
            inputLabel="Expacted Return"
            inputType="number"
            initialValue={expectedReturn}
            setFieldValue={setExpectedReturn}
            inputStep={0.1}
          />
          <InputField
            inputLabel="Duration"
            inputType="number"
            initialValue={duration}
            setFieldValue={setDuration}
          />
        </div>
      </div>

      {/* table */}
      <TableResult tableData={tableData} />
    </>
  );
}

export default App;
