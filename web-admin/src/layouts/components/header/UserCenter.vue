<script setup lang="ts">
import { renderIcon } from '@/utils/icon'
import { useAuthStore } from '@/store'
import IconGithub from '~icons/icon-park-outline/github'
import IconUser from '~icons/icon-park-outline/user'
import IconLogout from '~icons/icon-park-outline/logout'
import IconBookOpen from '~icons/icon-park-outline/book-open'

const { t } = useI18n()

const { userInfo, logout } = useAuthStore()
const router = useRouter()

const options = computed(() => {
  return [
    {
      label: t('app.userCenter'),
      key: 'userCenter',
      icon: () => h(IconUser),
    },
    {
      type: 'divider',
      key: 'd1',
    },
    {
      label: t('app.loginOut'),
      key: 'loginOut',
      icon: () => h(IconLogout),
    },
  ]
})
function handleSelect(key: string | number) {
  if (key === 'loginOut') {
    window.$dialog?.info({
      title: t('app.loginOutTitle'),
      content: t('app.loginOutContent'),
      positiveText: t('common.confirm'),
      negativeText: t('common.cancel'),
      onPositiveClick: () => {
        logout()
      },
    })
  }
  if (key === 'userCenter')
    router.push('/userCenter')

  // if (key === 'guthub')
  //   window.open('https://github.com/chansee97/nova-admin')

  // if (key === 'gitee')
  //   window.open('https://gitee.com/chansee97/nova-admin')

  // if (key === 'docs')
  //   window.open('https://nova-admin-docs.pages.dev/')
}
</script>

<template>
  <n-dropdown
    trigger="click"
    :options="options"
    @select="handleSelect"
  >
    <n-avatar
      round

      :src="userInfo?.avatar || `https://api.multiavatar.com/${userInfo?.email}.png`"
    >
      <template #fallback>
        <div class="wh-full flex-center">
          <icon-park-outline-user />
        </div>
      </template>
    </n-avatar>
  </n-dropdown>
</template>

<style scoped></style>
