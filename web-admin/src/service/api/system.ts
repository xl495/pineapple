import { request } from '../http'

// 获取所有路由信息
export function fetchAllRoutes() {
  return request.Get<Service.ResponseResult<AppRoute.RowRoute[]>>('/getUserRoutes')
}

// 获取所有用户信息
export function fetchUserPage(params: any) {
  return request.Get<Service.ResponseResult<Entity.User[]>>('/user', { params })
}

// 添加用户
export function fetchAddUser(data: any) {
  return request.Post<Service.ResponseResult<Entity.User[]>>(`/user`, data)
}

// 修改用户某个字段用户
export function fetchPatchUser(id: number, data: any) {
  return request.Patch<Service.ResponseResult<Entity.User[]>>(`/user/${id}`, data)
}

// 删除用户
export function fetchDeleteUser(id: number) {
  return request.Delete<Service.ResponseResult<Entity.User[]>>(`/user/${id}`)
}

// 获取所有角色列表
export function fetchRoleList() {
  return request.Get<Service.ResponseResult<Entity.Role[]>>('/role')
}

/**
 * 请求获取字典列表
 *
 * @param code - 字典编码，用于筛选特定的字典列表
 * @returns 返回的字典列表数据
 */
export function fetchDictList(code?: string) {
  const params = { code }
  return request.Get<Service.ResponseResult<Entity.Dict[]>>('/dict', { params })
}

export function fetchAddDict(data?: Entity.Dict) {
  return request.Post<Service.ResponseResult<Entity.Dict[]>>('/dict', data)
}

export function fetchPatchDict(id: number, data?: Entity.Dict) {
  return request.Patch<Service.ResponseResult<Entity.Dict[]>>(`/dict/${id}`, data)
}

export function fetchDeleteList(id?: number) {
  return request.Delete<Service.ResponseResult<Entity.Dict[]>>(`/dict/${id}`)
}
