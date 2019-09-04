<template>
  <Form ref="addForm"  :model="usermodel" :rules="ruleuserList" label-position="right" :label-width="90">
  <FormItem label="用户名">
    <Input v-model="usermodel.username" placeholder="请输入用户名" style="width: 333px" ></Input>
  </FormItem>
    <FormItem label="密码">
      <Input v-model="usermodel.password" placeholder="请输入密码" style="width: 333px" ></Input>
    </FormItem>
    <FormItem>
      <Button  type="primary" @click="handleSubmit()">提交</Button>
    </FormItem>
  </Form>
</template>

<script>
  import util from '@/util/util.js';
    export default {
        data(){
          return{
            usermodel: {
              username:'',
              password:'',
            },
            delete:{
              name:'',
              word:'',
            },
            ruleuserList: {
              username: [
                { required: true, message: '用户名不能为空', trigger: 'blur' }
              ],
              password: [
                { required: true, message: '密码不能为空', trigger: 'blur' }
              ]
            },
          }
        },
        mounted() {
            this.getUserModel();
        },
        methods:{
          async handleSubmit () {
            let data = {
              method: 'post',
              params: this.usermodel,
              url: '/admin/create',
            };
            let res = await util.httpReq(data);
            if (res === 'success') {
              this.$Message.success( '添加成功!');
              this.$router.push({
                path: '/usermodel',
              });
            } else {
              this.$Message.error(  '添加失败，请稍后再试');
            }
          },
            async getUserModel(){
                let data = {
                    params: {
                        id: this.$route.query.id
                    },
                    method: 'get',
                    url: '/admin/check',
                }
                let res = await util.httpReq(data);
                this.usermodel= res;
            }
         /*async handelDelet(){
            this.delete.name = this.usermodel.username;
            this.delete.word = this.usermodel.password;
            let data = {
              method: 'delete',
              params: this.delete,
              url: '/admin/delete',
            };
            let res = await util.httpReq(data);
            if (res === 'success') {
              this.$Message.success( '删除成功!');
              this.$router.push({
                path: '/formList',

              });
            } else {
              this.$Message.error( '删除失败，请稍后再试');
            }
          }*/

        },
    }

</script>

<style scoped>

</style>
