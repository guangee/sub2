<style lang="scss">
  @import './index.scss';
</style>

<template>
  <div class="login">
    <div class="login-con">
      <Card icon="log-in" title="欢迎登录" :bordered="false">
        <div class="form-con">
          <Form ref="loginForm" :model="form" :rules="rules" @keydown.enter.native="handleSubmit">
            <FormItem prop="userName">
              <Input v-model="form.username" placeholder="请输入用户名">
                <span slot="prepend">
                  <Icon :size="16" type="ios-person"></Icon>
                </span>
              </Input>
            </FormItem>
            <FormItem prop="password">
              <Input type="password" v-model="form.password" placeholder="请输入密码">
                <span slot="prepend">
                  <Icon :size="14" type="md-lock"></Icon>
                </span>
              </Input>
            </FormItem>
            <FormItem>
              <Button @click="handleSubmit" type="primary" long>登录</Button>
            </FormItem>
          </Form>
          <p class="login-tip" @click="createNew">添加新用户</p>
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
  import util from '@/util/util.js';
  export default {
    name: 'Login',
    props: {
      userNameRules: {
        type: Array,
        default: () => {
          return [
            { required: true, message: '账号不能为空', trigger: 'blur' }
          ]}
        },
      passwordRules: {
        type: Array,
        default: () => {
          return [
            { required: true, message: '密码不能为空', trigger: 'blur' }
          ]}
        }
      },
      data () {
        return {
          form: {
            username: '',
            password: ''
          }
        }
      },
      computed: {
        rules () {
          return {
            username: this.userNameRules,
            password: this.passwordRules
          }
        }
      },
      methods: {
        handleSubmit () {
          this.$refs.loginForm.validate(async (valid) => {
            if (valid) {
              let data = {
                method: 'post',
                params: this.form,
                url: '/tokens',
              };
              let res = await util.httpReq(data);
              localStorage.setItem("username", this.form.username );
              sessionStorage.setItem("authorization", res.content.id + '_' + res.content.token);
              this.$router.push({
                  path: '/formList',
              });
            }
          })
        },
          createNew(){
              this.$Modal.confirm({
                  render: (h) => {
                      return h('div', [
                          h('P', {
                              style: {
                                  color: "#1c2438",
                                  fontSize: "20px",
                                  textAlign: 'center'
                              }
                          }, "添加新用户"),
                          h('Span', {
                              style: {
                                  color: "#495060",
                                  fontSize: "14px",
                              }
                          }, "用户名："),
                          h('Input', {
                              props: {
                                  value: this.value,
                                  autofocus: true,
                                  placeholder: 'Please enter your name...',
                              },
                              on: {
                                  input: (val) => {
                                      this.name = val;
                                  }
                              }
                          }),
                          h('Span', {
                              style: {
                                  color: "#495060",
                                  fontSize: "14px",
                              }
                          }, "密码："),
                          h('Input', {
                              props: {
                                  value: this.value,
                                  autofocus: true,
                                  placeholder: 'Please enter your password...',
                              },
                              on: {
                                  input: (val) => {
                                      this.pwd = val;
                                  }
                              }
                          }),
                      ])
                  },
                  onOk: async () => {
                      let data = {
                          method: 'post',
                          params: this.form,
                          url: '/admin/create',
                      };
                      let res = await util.httpReq(data);
                      if (res === 'success') {
                          this.$Message.success(content + '添加成功!');
                      } else {
                          this.$Message.error(content + '该用户名已注册');
                      }
                  },
                  onCancle: () => {
                      this.$Message.info('Clicked cancle');
                  }
              })

          }
      }
  }
</script>
