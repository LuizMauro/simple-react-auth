import api_auth from "../../../http/api-auth";

export const createAccount = async ({ username, password }) => {
  await api_auth.post("/user/create", {
    username,
    password,
  });
};
