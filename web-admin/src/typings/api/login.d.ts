/// <reference path="../global.d.ts"/>

namespace Api {
  namespace Login {
    /* 登录返回的用户字段, 该数据是根据用户表扩展而来, 部分字段可能需要覆盖，例如id */
    interface Info {
      /** 用户id */
      id: number
      /** 用户信息 */
      userInfo: Entity.User
      /** 访问 token */
      accessToken: string
      /** 刷新 token */
      refreshToken: string
    }
  }
}
