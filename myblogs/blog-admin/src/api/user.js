import request from '@/utils/request'

export function login(data) {
  return request({
    // url: '/vue-admin-template/user/login',
    url: '/admin/sys-user/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    // url: '/vue-admin-template/user/info',
    url: '/admin/sys-user/getInfo',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    // url: '/vue-admin-template/user/logout',
    url: '/admin/sys-user/logout',
    method: 'post'
  })
}
