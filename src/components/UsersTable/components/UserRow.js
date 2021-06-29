import React from "react";
import { Button } from "react-bootstrap";
import styled from "styled-components";

const ScButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  .user-button {
    width: 100px;
  }

  .user-button:not(:last-of-type) {
    margin-bottom: 20px;
  }
`;

const UserRow = React.forwardRef(({ user, onUserDelete, onUserEdit }, ref) => {
  return (
    <tr ref={ref}>
      <td>{user.id}</td>
      <td>{user.email || "No email"}</td>
      <td>{user.first_name}</td>
      <td>{user.last_name || "No last name"}</td>
      <td>{user.job || "no job"}</td>
      <td>
        {user.avatar ? (
          <img
            src={user.avatar}
            alt={`${user.first_name} ${user.last_name} avatar`}
            height="50px"
            width="50px"
          />
        ) : (
          "no avatar"
        )}
      </td>
      <td>
        <ScButtonContainer>
          <Button
            onClick={() => onUserEdit(user.id)}
            className="user-button"
            variant="primary"
          >
            Edit
          </Button>
          <Button
            onClick={() => onUserDelete(user.id)}
            className="user-button"
            variant="danger"
          >
            Delete
          </Button>
        </ScButtonContainer>
      </td>
    </tr>
  );
});

export default UserRow;
