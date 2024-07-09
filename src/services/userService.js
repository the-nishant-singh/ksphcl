import { HttpClient } from "../utils/httpClient";

const PATH = {
  profile: "/user/user/profile",
  getAll: "/admin/user",
  create: "/admin/user",
  update: "/admin/user",
  delete: "/admin/user",
  updateAccess: "/admin/user/access"
};

const Profile = (start, callback, error, next) => {
  start();
  return HttpClient.get(PATH.profile).then(callback).catch(error).finally(next);
};

const GetAll = (params = {}, start, callback, error, next) => {
  start();
  return HttpClient.get(PATH.getAll, { params })
    .then(callback)
    .catch(error)
    .finally(next);
};

const Create = (payload, start, callback, error, next) => {
  start();
  return HttpClient.post(PATH.create, payload)
    .then(callback)
    .catch(error)
    .finally(next);
};

const Update = (id, payload, start, callback, error, next) => {
  start();
  return HttpClient.patch(`${PATH.update}/${id}`, payload)
    .then(callback)
    .catch(error)
    .finally(next);
};

const Delete = (id, start, callback, error, next) => {
  start();
  return HttpClient.delete(`${PATH.update}/${id}`)
    .then(callback)
    .catch(error)
    .finally(next);
};

const UpdateAccess = (id, payload, start, callback, error, next) => {
  start();
  return HttpClient.put(`${PATH.updateAccess}/${id}`, payload)
    .then(callback)
    .catch(error)
    .finally(next);
};

export const UserService = {
  Profile,
};

export const AdminUserService = {
  GetAll,
  Create,
  Update,
  Delete,
  UpdateAccess
};
