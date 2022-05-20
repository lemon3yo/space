<template>
  <div class="login">
      <el-form
        ref="formRef"
        :model="formItems"
        label-width="100px"
        class="form"
      >
        <h2>宇宙入口</h2>
        <el-form-item
          label="ID"
          prop="id"
          :rules="[{ required: true, message: 'ID是必填项' }]"
        >
          <el-input
            v-model="formItems.id"
            type="text"
            autocomplete="off"
          />
        </el-form-item>
        <el-form-item
          label="密码"
          prop="pass"
          :rules="[{ required: true, message: '密码是必填项' }]"
        >
          <el-input
            v-model="formItems.pass"
            type="password"
            autocomplete="off"
          />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm(formRef)">Submit</el-button>
        </el-form-item>
      </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { FormInstance } from 'element-plus'
import { useRouter } from 'vue-router'

const formRef = ref<FormInstance>()
const formItems = reactive({
  id: '',
  pass: ''
})
const router = useRouter()

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      console.log('submit!')
      if (formItems.pass === '20190827' || formItems.pass === '520') {
        router.push('/home')
      }
    } else {
      console.log('error submit!')
      return false
    }
  })
}
</script>

<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-image: url('@/assets/img/background.jpeg');
  background-repeat: no-repeat;
  display: flex;
  position: relative;
  justify-content: space-around;
  align-items: center;

  .form {
    position: absolute;
    width: 40vw;
    height: 25vh;
    background-color: rgba(220, 220, 220, 0.7);
    padding: 3vh 4vw;
    border-radius: 10px;

    h2 {
      font-size: 20px;
      font-weight: bold;
      text-align: center;
      margin-bottom: 5vh;
    }

    .el-form-item {
      margin-left: -5vw;
    }

    .el-button {
      width: 100%;
    }
  }
}
</style>
