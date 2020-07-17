import axios from 'axios';

let base = 'api';

export const requestLogin = params => { return axios.post(`${base}/login`, params).then(res => res.data); };

export const getUserList = params => { return axios.get(`${base}/user/list`, { params: params }); };

export const getUserListPage = params => { return axios.get(`${base}/user/listpage`, { params: params }); };

export const removeUser = params => { return axios.post(`${base}/user/remove`,  params ); };

export const batchRemoveUser = params => { return axios.post(`${base}/user/batchremove`,  params ); };

export const editUser = params => { return axios.post(`${base}/user/edit`,  params); };

export const addUser = params => { return axios.post(`${base}/user/add`, params); };