export const storeUserLocally = (email, password, token) => {
  const storage = window.localStorage;

  storage.setItem("email", email);
  storage.setItem("password", password);
  storage.setItem("token", token);
};

export const getLocalUserData = () => {
  const storage = window.localStorage;

  const user = {
    email: storage.getItem("email"),
    password: storage.getItem("password"),
    token: storage.getItem("token"),
  };

  return user;
};

export const removeLocalUserData = () => {
  const storage = window.localStorage;

  storage.removeItem("email");
  storage.removeItem("token");
  storage.removeItem("password");
};

export const isUserStoredLocally = () => {
  return Boolean(window.localStorage.getItem("email"));
};

// on app start check local
// if has all the data
// log in

// otherwise

// log in
// success
// store data in local storage