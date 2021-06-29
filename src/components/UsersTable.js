import React from "react";
import { Table } from "react-bootstrap";

const UsersTable = ({ children, ...props }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>id</th>
          <th>Email</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Job</th>
          <th>Avatar</th>
          <th></th>
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </Table>
  );
};

export default UsersTable;
