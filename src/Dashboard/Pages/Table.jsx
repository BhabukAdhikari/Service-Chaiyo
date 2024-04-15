import { th } from "date-fns/locale";
import Table from "react-bootstrap/Table";

function Tables() {
  const tableHeading = [
    { name: "service name" },
    { name: "description" },
    { name: "price" },
    { name: "availability" },
    { name: "image" }
  ];

  return (
    <Table responsive className="mx-auto" style={{ width: '1000px'  , marginTop: "30px"}}>
      <thead>
        <tr>
          <th>#</th>
          {tableHeading.map((item, index) => (
            <th key={index}>{item.name}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr className="mb-4">
          <td>1</td>
          {Array.from({ length: 5 }).map((_, index) => (
            <td key={index}>Table cell {index}</td>
          ))}
        </tr>
        <tr className="mb-4">
          <td>2</td>
          {Array.from({ length: 5 }).map((_, index) => (
            <td key={index}>Table cell {index}</td>
          ))}
        </tr>
        <tr className="mb-4">
          <td>3</td>
          {Array.from({ length: 5 }).map((_, index) => (
            <td key={index}>Table cell {index}</td>
          ))}
        </tr>
      </tbody>
    </Table>
  );
}

export default Tables;
