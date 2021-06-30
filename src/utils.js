export const validateLogin = (email, password) => {
  const validationErrors = {};

  if (!email.length) validationErrors.email = "Email is required";

  if (password.length < 6) validationErrors.password = "Password is too small";

  if (!password.length) validationErrors.password = "Password is required";

  return validationErrors;
};
