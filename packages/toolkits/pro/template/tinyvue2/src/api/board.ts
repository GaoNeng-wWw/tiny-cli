import axios from 'axios';

// 获取select的option
export function getUserData() {
  return axios.get('/mock/api/user/getdata');
}

export function getUserPractic() {
  return axios.get('/mock/api/user/getrpractic');
}

export function getUserTrain() {
  return axios.get('/mock/api/user/getrtrain');
}

// 切换数据源
export function getUserChange(data: string) {
  return axios.post('/mock/api/user/getselect', data as any);
}