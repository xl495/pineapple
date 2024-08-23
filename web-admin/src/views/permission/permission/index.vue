<script setup lang="ts">
import { useAuthStore } from '@/store'
import { usePermission } from '@/hooks'

const authStore = useAuthStore()
const { hasPermission } = usePermission()
const { roles } = authStore.userInfo!

const roleList: Entity.RoleType = [{ name: 'ADMIN', id: 1 }, { name: 'USER', id: 2 }]

function toggleUserRole(role: Entity.RoleTypeItem) {
  authStore.login(role.name as string === 'ADMIN' ? 's@a.com' : 'user@a.com', '123456')
}
</script>

<template>
  <n-card title="权限示例">
    <n-h1> 当前拥有权限：{{ roles.map(i => i.name) }}</n-h1>
    <n-button-group>
      <n-button v-for="item in roleList" :key="item.name" type="default" @click="toggleUserRole(item)">
        {{ item }}
      </n-button>
    </n-button-group>
    <n-h2>v-permission 指令用法</n-h2>
    <n-space>
      <n-button v-permission="'super'">
        仅super可见
      </n-button>
      <n-button v-permission="['admin']">
        admin可见
      </n-button>
    </n-space>

    <n-h2>usePermission 函数用法</n-h2>
    <n-space>
      <n-button v-if="hasPermission('ADMIN')">
        ADMIN可见
      </n-button>
      <n-button v-if="hasPermission('USER')">
        USER可见
      </n-button>
      <n-button v-if="hasPermission(['ADMIN', 'USER'])">
        admin和user可见
      </n-button>
    </n-space>
  </n-card>
</template>
