import React from "react";
import { Table, Button } from "react-bootstrap";

import "./style.css";

const UsersTable = ({ children, onCreateUser, ...props }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th className="th">id</th>
          <th className="th">Email</th>
          <th className="th">First Name</th>
          <th className="th">Last Name</th>
          <th className="th">Job</th>
          <th className="th">Avatar</th>
          <th className="th">
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Button
                style={{ textAlign: "center" }}
                onClick={() => onCreateUser()}
                className="user-button"
                variant="primary"
              >
                Create user
              </Button>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </Table>
  );
};

export default UsersTable;
