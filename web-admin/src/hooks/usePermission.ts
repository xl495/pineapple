import { intersects, isArray, isString } from 'radash'
import { useAuthStore } from '@/store'

/** 权限判断 */
export function usePermission() {
  const authStore = useAuthStore()

  function hasPermission(
    permission: Entity.RoleTypeName | Entity.RoleTypeName [] | undefined,
  ) {
    if (!permission)
      return true

    if (!authStore.userInfo)
      return false
    const { roles } = authStore.userInfo

    let has = roles?.map(i => i.name).includes('ADMIN')
    if (!has) {
      if (isArray(permission)) {
        // 判断是否存在交集
        const role = roles.map(item => item.name)
        has = intersects(role, permission)
      }

      if (isString(permission))
        has = roles.map(item => item.name).includes(permission)
    }
    return has
  }

  return {
    hasPermission,
  }
}
