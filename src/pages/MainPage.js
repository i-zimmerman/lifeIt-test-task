import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import { useHistory } from "react-router-dom";
import {
  getUsers,
  deleteUser,
  updateUser,
  createUser,
  usersClearOnUnmount,
} from "../store/slices/usersSlice";
import { logout } from "../store/slices/loginSlice";

import { Alert, Button } from "react-bootstrap";

import PageContainer from "../containers/PageContainer";
import UsersTable from "../components/UsersTable";
import UserRow from "../components/UsersTable/components/UserRow";
import UserCreateUpdateModal from "../components/UserCreateUpdateModal";
import LoadingSpinner from "../components/LoadingSpinner";

const MainPage = ({ authorized }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const [page, setPage] = useState(1);
  const [showUserModal, setShowUserModal] = useState(false);
  const [currentUserId, setCurrentUserId] = useState(null);

  useEffect(() => {
    dispatch(getUsers(page));
  }, [dispatch, page]);

  const observer = useRef();
  const lastUserRowRef = useCallback(
    (node) => {
      if (users.isLoading) return;

      if (observer.current) {
        observer.current.disconnect();
      }

      observer.current = new IntersectionObserver((entries) => {
        if (
          entries[0].isIntersecting &&
          page < users.total &&
          users.total !== 0
        ) {
          setPage((prevPage) => prevPage + 1);
        }
      });

      if (node) {
        observer.current.observe(node);
      }
    },
    [users.isLoading, page, users.total]
  );

  const handleSubmitUserModal = (data) => {
    if (currentUserId) {
      dispatch(updateUser(currentUserId, data));
    } else {
      dispatch(createUser(data));
    }

    handleCloseUserModal();
  };

  const handleCloseUserModal = () => {
    setShowUserModal(false);
    setCurrentUserId(null);
  };

  const handleEditUser = (userId = null) => {
    setShowUserModal(true);
    setCurrentUserId(userId);
  };

  const handleDeleteUser = (userId) => {
    dispatch(deleteUser(userId));
  };

  const handleLogout = () => {
    dispatch(logout());
    dispatch(usersClearOnUnmount());
    history.push("/login");
  };

  if (!authorized) {
    return <Redirect to="/login" />;
  }

  return (
    <PageContainer fluid>
      {users.isLoading && <LoadingSpinner />}

      <div
        style={{
          display: "flex",
          marginBottom: "20px",
          justifyContent: "flex-end",
        }}
      >
        <Button onClick={handleLogout}>Logout</Button>
      </div>

      <UsersTable onCreateUser={handleEditUser}>
        {users.data.map((user, idx, users) => {
          if (idx + 1 === users.length) {
            return (
              <UserRow
                ref={lastUserRowRef}
                key={user.id}
                user={user}
                onUserDelete={handleDeleteUser}
                onUserEdit={handleEditUser}
              />
            );
          } else {
            return (
              <UserRow
                key={user.id}
                user={user}
                onUserDelete={handleDeleteUser}
                onUserEdit={handleEditUser}
              />
            );
          }
        })}
      </UsersTable>

      {showUserModal && (
        <UserCreateUpdateModal
          show={showUserModal}
          onClose={handleCloseUserModal}
          onSubmit={handleSubmitUserModal}
          userData={users.data.find((user) => user.id === currentUserId) || {}}
          userId={currentUserId}
        />
      )}

      {users.error && <Alert variant="danger">{users.error}</Alert>}
    </PageContainer>
  );
};

export default MainPage;
