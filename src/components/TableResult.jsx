import { formatter } from "../util/investment";

const COLUMN_NAME = [
  "Year",
  "Investment Value",
  "Intrest (Year)",
  "Total Intrest",
  "Invested Capital",
];
export default function TableResult({ tableData }) {
  let totalIntrest = 0;
  return (
    <table id="result">
      <thead>
        <tr>
          {COLUMN_NAME.map((column) => (
            <th key={column}>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableData.map((row) => {
          totalIntrest += row.interest;
          return (
            <tr key={row.year}>
              <td>{row.year}</td>
              <td>{formatter.format(row.valueEndOfYear)}</td>
              <td>{formatter.format(row.interest)}</td>
              <td>{formatter.format(totalIntrest)}</td>
              <td>{formatter.format(row.valueEndOfYear - totalIntrest)}</td>
            </tr>
          );
        })}
        {/* <tr>
          <td>10</td>
          <td>10</td>
          <td>10</td>
          <td>10</td>
          <td>10</td>
        </tr> */}
      </tbody>
    </table>
  );
}
