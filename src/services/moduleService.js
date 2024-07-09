import { HttpClient } from "../utils/httpClient";

const PATH = {
  getAll: "/admin/module",
  create: "/admin/module",
  update: "/admin/module",
  delete: "/admin/module",
  updatePublish: "/admin/module/publish"
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

const UpdatePublish = (id, payload, start, callback, error, next) => {
  start();
  return HttpClient.put(`${PATH.updatePublish}/${id}`, payload)
    .then(callback)
    .catch(error)
    .finally(next);
};

export const AdminModuleService = {
  GetAll,
  Create,
  Update,
  Delete,
  UpdatePublish
};
