import { callApi } from "./index";
import { extraHeaders } from '../common/funs';

const URL = "users";


function getAll() {
  let headers = extraHeaders();
  let options = {
    method: 'GET',
  }
  return callApi(URL, options, headers);
}

function getById(id) {
  let headers = extraHeaders();
  let options = {
    method: 'GET',
  }
  return callApi(`${URL}/${id}`, options, headers);
}

function save(data) {
  let headers = extraHeaders();
  let options = {
    method: 'POST',
    data: data
  }
  return callApi(URL, options, headers);
}

function getFilteredData(data) {
  let headers = extraHeaders();
  let options = {
    method: 'POST',
    data: data
  }
  return callApi(`${URL}/filter`, options, headers);
}

function update(data, id) {
  let headers = extraHeaders();
  let options = {
    method: 'PUT',
    data: data
  }
  return callApi(`${URL}/${id}`, options, headers);
}

function deleteById(id) {
  let headers = extraHeaders();
  let options = {
    method: 'DELETE',
  }
  return callApi(`${URL}/${id}`, options, headers);
}

export {
  getAll,
  getFilteredData,
  getById,
  save,
  update,
  deleteById
}