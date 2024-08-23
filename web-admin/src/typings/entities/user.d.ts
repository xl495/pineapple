/// <reference path="../global.d.ts"/>

/** 用户数据库表字段 */
namespace Entity {
  interface User {
    /** 用户id */
    id?: number
    /** 用户名 */
    name?: string
    /** 昵称 */
    nickName?: string
    /* 用户头像 */
    avatar?: string
    /* 用户性别 */
    gender?: 0 | 1
    /* 用户邮箱 */
    email?: string
    /* 用户昵称 */
    nickname?: string
    /* 密码 */
    password?: string
    /** 用户角色类型 */
    roles: Entity.RoleType
    /** 用户角色类型映射 */
    roleList?: Entity.RoleTypeItem.name []
    /** 用户状态 */
    status?: 0 | 1
    /** 备注 */
    remark?: string
    /** 行加载 */
    __loading_status?: boolean
  }

}
