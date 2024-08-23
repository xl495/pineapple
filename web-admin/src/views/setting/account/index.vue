<script setup lang="tsx">
import type { DataTableColumns, FormInst } from 'naive-ui'
import { NButton, NPopconfirm, NSpace, NSwitch, NTag } from 'naive-ui'
import TableModal from './components/TableModal.vue'
import { fetchDeleteUser, fetchPatchUser, fetchUserPage } from '@/service'
import { useBoolean } from '@/hooks'
import { Gender } from '@/constants'
import CopyText from '@/components/custom/CopyText.vue'

const { bool: loading, setTrue: startLoading, setFalse: endLoading } = useBoolean(false)

const initialModel = {
  email: '',
  nickName: '',
}
const model = ref({ ...initialModel })
function handleResetSearch() {
  model.value = { ...initialModel }
}

const formRef = ref<FormInst | null>()
const modalRef = ref()

const pagination = ref({
  page: 1,
  size: 10,
})

function deleteUser(id: number) {
  fetchDeleteUser(id).then(() => {
    window.$message.success(`删除成功`)
    getUserList()
  })
}

const columns: DataTableColumns<Entity.User> = [
  {
    title: '昵称',
    align: 'center',
    key: 'nickName',
  },
  {
    title: '性别',
    align: 'center',
    key: 'gender',
    render: (row) => {
      const tagType = {
        0: 'primary',
        1: 'success',
      } as const
      if (row.gender) {
        return (
          <NTag type={tagType[row.gender]}>
            {Gender[row.gender]}
          </NTag>
        )
      }
    },
  },
  {
    title: '邮箱',
    align: 'center',
    key: 'email',
    render: (row) => {
      return (
        <CopyText value={row.email} />
      )
    },
  },
  {
    title: '状态',
    align: 'center',
    key: 'status',
    width: 120,
    render: (row) => {
      return (
        <NSwitch
          value={row.status}
          checked-value={1}
          unchecked-value={0}
          loading={row.__loading_status}
          onUpdateValue={(value: 0 | 1) =>
            handleUpdateDisabled(value, row.id!, row)}
        >
          {{ checked: () => '启用', unchecked: () => '禁用' }}
        </NSwitch>
      )
    },
  },
  {
    title: '操作',
    align: 'center',
    key: 'actions',
    render: (row) => {
      return (
        <NSpace justify="center">
          <NButton
            size="small"
            onClick={() => modalRef.value.openModal('edit', row)}
          >
            编辑
          </NButton>
          <NPopconfirm onPositiveClick={() => deleteUser(row.id!)}>
            {{
              default: () => '确认删除',
              trigger: () => <NButton size="small" type="error">删除</NButton>,
            }}
          </NPopconfirm>
        </NSpace>
      )
    },
  },
]

const count = ref(0)
const listData = ref<Entity.User[]>([])
function handleUpdateDisabled(value: 0 | 1, id: number, row: Entity.User) {
  const index = listData.value.findIndex(item => item.id === id)
  row.__loading_status = true
  fetchPatchUser(id, { status: value }).then(() => {
    window.$message.success('更新成功')
    if (index > -1) {
      listData.value[index].status = value
    }
  }).finally(() => {
    row.__loading_status = false
  })
}

async function getUserList() {
  const params = {
    ...pagination.value,
  }
  startLoading()
  if (model.value.email)
    (params as any).email = model.value.email
  if (model.value.nickName)
    (params as any).nickName = model.value.nickName
  await fetchUserPage(params).then((res: any) => {
    const users = res.data.list?.map((item: Entity.User) => {
      return {
        ...item,
        roleList: item.roles?.map((role: any) => role.name) || [],
      }
    })
    listData.value = users
    count.value = res.data.count
    endLoading()
  })
}

onMounted(() => {
  getUserList()
})

function changePage(page: number, size: number) {
  pagination.value.page = page
  pagination.value.size = size
  getUserList()
}
</script>

<template>
  <n-flex>
    <NSpace vertical class="flex-1">
      <n-card>
        <n-form ref="formRef" :model="model" label-placement="left" inline :show-feedback="false">
          <n-flex>
            <n-form-item label="邮箱" path="email">
              <n-input v-model:value="model.email" placeholder="请输入邮箱" />
            </n-form-item>
            <n-form-item label="昵称" path="nickName">
              <n-input v-model:value="model.nickName" placeholder="请输入昵称" />
            </n-form-item>
            <n-flex class="ml-auto">
              <NButton type="primary" @click="getUserList">
                <template #icon>
                  <icon-park-outline-search />
                </template>
                搜索
              </NButton>
              <NButton strong secondary @click="handleResetSearch">
                <template #icon>
                  <icon-park-outline-redo />
                </template>
                重置
              </NButton>
            </n-flex>
          </n-flex>
        </n-form>
      </n-card>

      <n-card class="flex-1">
        <template #header>
          <NButton type="primary" @click="modalRef.openModal('add')">
            <template #icon>
              <icon-park-outline-add-one />
            </template>
            新建用户
          </NButton>
        </template>
        <NSpace vertical>
          <n-data-table :columns="columns" :data="listData" :loading="loading" />
          <Pagination :count="count" @change="changePage" />
        </NSpace>

        <TableModal ref="modalRef" modal-name="用户" @update="getUserList" />
      </n-card>
    </NSpace>
  </n-flex>
</template>
