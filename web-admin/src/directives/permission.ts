import type { App, Directive } from 'vue'
import { usePermission } from '@/hooks'

export function install(app: App) {
  const { hasPermission } = usePermission()

  function updatapermission(el: HTMLElement, permission: Entity.RoleTypeName | Entity.RoleTypeName[]) {
    if (!permission)
      throw new Error('v-permissson Directive with no explicit role attached')

    if (!hasPermission(permission))
      el.parentElement?.removeChild(el)
  }

  const permissionDirective: Directive<HTMLElement, Entity.RoleTypeName | Entity.RoleTypeName[]> = {
    mounted(el, binding) {
      updatapermission(el, binding.value)
    },
    updated(el, binding) {
      updatapermission(el, binding.value)
    },
  }
  app.directive('permission', permissionDirective)
}
