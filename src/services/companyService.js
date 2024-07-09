import { HttpClient } from "../utils/httpClient";

const PATH = {
  getAll: "/admin/company",
  create: "/admin/company",
  update: "/admin/company",
  delete: "/admin/company",
  getUsers: "/admin/company/get-users",
  updateAccess: "/admin/company/access"
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

const GetUsers = (id, params = {}, start, callback, error, next) => {
  start();
  return HttpClient.get(`${PATH.getUsers}/${id}`, { params })
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

export const AdminCompanyService = {
  GetAll,
  Create,
  Update,
  Delete,
  GetUsers,
  UpdateAccess
};
