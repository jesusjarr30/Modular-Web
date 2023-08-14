import React, { useState, useEffect } from "react";
import axios from "axios";
import { useTable } from "react-table";

const Userlist = ({ nombre, id }) => {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
            "http://localhost:8080/GetCustomerPsicologo/{id}?idPsicologo="+id
        );
        setUserList(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const columns = [
    {
      Header: "Nombre",
      accessor: "name"
    },
    {
      Header: "Email",
      accessor: "email",
      Cell: ({ value }) => (value ? value : "N/A")
    },
    {
      Header: "Telefono",
      accessor: "telephone"
    },
    {
      Header: "Direccion",
      accessor: "direccion"
    },
    {
      Header: "Año nacimiento",
      accessor: "year",
      Cell: ({ value }) => value.toString() // Convert numeric value to string
    }
    // Add more columns as needed
  ];

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable({
    columns,
    data: userList
  });

  return (
    <div className="flex w-full h-screen justify-center bg-yellow-400">
      <div>
        <h1>Aqui va la lista de usuarios:</h1>
        <table {...getTableProps()} style={{ width: "100%" }}>
          <thead>
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <th {...column.getHeaderProps()}>{column.render("Header")}</th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map(row => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map(cell => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Userlist;
