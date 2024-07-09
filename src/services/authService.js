import { HttpClient } from "../utils/httpClient";

const PATH = {
  login: "/auth/login",
  requestPassword: "/auth/requestPassword",
};

const Login = (payload, start, callback, error, next) => {
  start();
  return HttpClient.post(PATH.login, payload)
    .then(callback)
    .catch(error)
    .finally(next);
};

const RequestPassword = (payload, start, callback, error, next) => {
  start();
  return HttpClient.post(`${PATH.requestPassword}`, payload)
    .then(callback)
    .catch(error)
    .finally(next);
};

export const AuthService = {
  Login,
  RequestPassword,
};
