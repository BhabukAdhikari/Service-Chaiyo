import { useQuery } from "@tanstack/react-query";
import { th } from "date-fns/locale";
import Table from "react-bootstrap/Table";
import { ServiceDataReceived } from "../DashApi/Api";

function Tables() {
  const tableHeading = [
    { name: "service name" },
    { name: "description" },
    { name: "price" },
    { name: "availability" },
    { name: "image" },
  ];

  const { data, isLoading, isError } = useQuery({
    queryKey: ["serviceData"],
    queryFn: ServiceDataReceived,
  });

  if (isLoading) {
    return <div>...loading</div>;
  }

  if (isError) {
    return <div>...error occured</div>;
  }

  return (
    <Table
      responsive
      className="mx-auto"
      style={{ width: "1000px", marginTop: "30px" }}
    >
      <thead>
        <tr>
          {tableHeading.map((item, index) => (
            <th
              style={{ backgroundColor: "#39ac92", color: "white"  , border: "none"}}
              key={index}
            >
              {item.name}
            </th>
          ))}
        </tr>
      </thead>

      {data.map((item, index) => {
        return (
          <tbody key={index}>
            <br />
            <tr>
              <td style={{ backgroundColor: "#39ac92", color: "white" , border: "none" }}>
                {item.serviceName}
              </td>
              <td style={{ backgroundColor: "#39ac92", color: "white",border: "none" }}>
                {item.description}
              </td>
              <td style={{ backgroundColor: "#39ac92", color: "white",border: "none" }}>
                {item.price}
              </td>
              <td style={{ backgroundColor: "#39ac92", color: "white",border: "none" }}>
                {item.availability}
              </td>
              <td style={{ backgroundColor: "#39ac92", color: "white" ,border: "none"}}>
                <img src={item.serviceImage} alt="" />
              </td>
            </tr>
          </tbody>
        );
      })}
    </Table>
  );
}
<tbody></tbody>;
export default Tables;
