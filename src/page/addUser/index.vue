<template>
  <Form ref="addForm"  :model="userList" :rules="ruleuserList" label-position="right" :label-width="90">
  <FormItem label="用户名">
    <Input v-model="userList.Name" placeholder="请输入用户名" style="width: 333px" ></Input>
  </FormItem>
    <FormItem label="密码">
      <Input v-model="userList.word" placeholder="请输入密码" style="width: 333px" ></Input>
    </FormItem>
    <FormItem>
      <Button  type="primary" @click="handleSubmit()">提交</Button>
      <Button  type="primary" @click="handelDelet()">删除</Button>
    </FormItem>
  </Form>
</template>

<script>
  import util from '@/util/util.js';
    export default {
        data(){
          return{
            userList: {
              Name:'',
              word:'',
            },
            ruleuserList: {
              Name: [
                { required: true, message: '用户名不能', trigger: 'blur' }
              ],
              word: [
                { required: true, message: '密码不能为空', trigger: 'blur' }
              ]
            },
          }
        },
        methods:{
          async handleSubmit () {
            let data = {
              method: 'post',
              params: this.userList,
              url: '62.234.138.48:8080/admin/create',
            };
            let res = await util.httpReq(data);
          },
          async handelDelet(){
            let data = {
              method: 'post',
              params: this.userList,
              url: '62.234.138.48:8080/admin/delete',
            };
            let res = await util.httpReq(data);
          }

        }
    }

</script>

<style scoped>

</style>
