/// <reference path="../global.d.ts"/>

/* 角色数据库表字段 */
namespace Entity {

  type RoleTypeName = 'ADMIN' | 'USER'

  interface RoleTypeItem {
    /** 角色id */
    id: number
    /** 角色名 */
    name: RoleTypeName
    /** 创建时间 */
    createdAt?: string
    /** 更新时间 */
    updatedAt?: string
  }
  type RoleType = RoleTypeItem []

  interface Role {
    /** 用户id */
    id?: number
    /** 用户名 */
    role?: RoleType
  }
}
