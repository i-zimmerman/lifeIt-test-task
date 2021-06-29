import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import { getUsers, deleteUser, updateUser } from "../app/services/usersSlice";

import styled from "styled-components";
import { Spinner, Alert, Button } from "react-bootstrap";

import PageContainer from "../containers/PageContainer";
import UsersTable from "../components/UsersTable";
import UserEditModal from "../components/UserEditModal";

// сreate, delete, update users

const ScSpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 200px;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
  z-index: 100;
  top: 50%;
`;

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

const MainPage = ({ authorized }) => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const [page, setPage] = useState(0);
  const [showEditUserModal, setShowEditUserModal] = useState(false);
  const [currentUserId, setCurrentUserId] = useState(null);

  useEffect(() => {
    dispatch(getUsers(page));
  }, [dispatch, page]);

  const handleSubmitEditUser = (data) => {
    console.log(data, currentUserId);
    dispatch(updateUser(currentUserId, data));

    handleCloseEditUserModal();
  };

  const handleCloseEditUserModal = () => {
    setShowEditUserModal(false);
    setCurrentUserId(null);
  };

  const handleEditUser = (userId) => {
    setShowEditUserModal(true);
    setCurrentUserId(userId);
  };

  const handleDeleteUser = (userId) => {
    dispatch(deleteUser(userId));
  };

  if (!authorized) {
    return <Redirect to="/login" />;
  }

  return (
    <PageContainer fluid>
      {users.isLoading && (
        <ScSpinnerContainer>
          <Spinner animation="grow" />
          <Spinner animation="grow" />
          <Spinner animation="grow" />
        </ScSpinnerContainer>
      )}

      <UsersTable>
        {users.data.map((user) => {
          return (
            <tr key={user.id}>
              <th>{user.id}</th>
              <th>{user.email}</th>
              <th>{user.first_name}</th>
              <th>{user.last_name}</th>
              <th>{user.job || "no job"}</th>
              <th>
                <img
                  src={user.avatar}
                  alt={`${user.first_name} ${user.last_name} avatar`}
                  height="50px"
                  width="50px"
                />
              </th>
              <th>
                <ScButtonContainer>
                  <Button
                    onClick={() => handleEditUser(user.id)}
                    className="user-button"
                    variant="primary"
                  >
                    Edit
                  </Button>
                  <Button
                    onClick={() => handleDeleteUser(user.id)}
                    className="user-button"
                    variant="danger"
                  >
                    Delete
                  </Button>
                </ScButtonContainer>
              </th>
            </tr>
          );
        })}
      </UsersTable>

      {showEditUserModal && (
        <UserEditModal
          show={showEditUserModal}
          onClose={handleCloseEditUserModal}
          onSubmit={handleSubmitEditUser}
          userData={users.data.find((user) => user.id === currentUserId)}
        />
      )}

      {users.error && <Alert variant="danger">{users.error}</Alert>}
    </PageContainer>
  );
};

export default MainPage;
