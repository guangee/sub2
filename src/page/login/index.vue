<style lang="scss">
  @import './index.scss';
</style>

<template>
  <div class="login" v-show="show">
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
              <Button @click="handleSubmit" type="primary" long>普通用户登录</Button>
              <Button @click="handleadminSubmit" type="primary" long>管理员登录</Button>
            </FormItem>
          </Form>

        </div>
      </Card>
    </div>
  </div>
</template>

<script>
  import util from '@/util/util.js';
  import axios from "axios";
  import {Message} from "iview";

  export default {
    name: 'Login',
    props: {
      userNameRules: {
        type: Array,
        default: () => {
          return [
            {required: true, message: '账号不能为空', trigger: 'blur'}
          ]
        }
      },
      passwordRules: {
        type: Array,
        default: () => {
          return [
            {required: true, message: '密码不能为空', trigger: 'blur'}
          ]
        }
      }
    },
    created() {
      var params = window.location.href.split("?")[1];
      if (params === undefined) {
        return;
      }
      let split = params.split("&");
      let map = {};
      for (let i = 0; i < split.length; i++) {
        let key = split[i].split("=")[0];
        let value = split[i].split("=")[1];
        map[key] = value;
      }
      console.log(map);
      if (map["type"] === "1") {
        this.form.username = map["username"];
        this.form.password = map["password"];
        this.show=false;
        axios.post('/tokens', this.form).then(
          (response) => {
            if (parseInt(response.status) === 200) {
              let res=response.data;
              console.log(response.data)

              localStorage.setItem("username", this.form.username);
              sessionStorage.setItem("authorization", res.content.id + '_' + res.content.token);
              //localStorage.removeItem("username");
              this.$router.push({
                path: '/formList',
              });
              return response.data;
            } else {
              Message.error({
                content: response.data.msg,
                duration: 5,
                closable: true
              });
              this.show=true;
              return response.data;
            }
          }
        );
      } else if (map["type"] === "2") {
        this.adminmodel.adminName = map["username"];
        this.adminmodel.adminPass = map["password"];

        this.show=false;
        axios.post('/admin/login', this.adminmodel).then(
          (response) => {
            if (parseInt(response.status) === 200) {
              let res=response.data;
              console.log(response.data)

              localStorage.setItem("username", this.adminmodel.adminName);
              sessionStorage.setItem("authorization", res.content.id + '_' + res.content.token);
              sessionStorage.setItem("id", res.content.id);
              //localStorage.removeItem("username");
              this.$router.push({
                path: '/formList',
              });
              this.show=true;
              return response.data;
            }
          }
        );
      }
    },
    data() {
      return {
        show:true,
        form: {
          username: '',
          password: ''
        },
        adminmodel: {
          adminName: '',
          adminPass: ''
        }
      }
    },
    computed: {
      rules() {
        return {
          username: this.userNameRules,
          password: this.passwordRules
        }
      }
    },
    methods: {
      handleSubmit(key) {
        this.$refs.loginForm.validate(async (valid) => {
          if (valid) {
            let data = {
              method: 'post',
              params: this.form,
              url: '/tokens',
            };
            let res = await util.httpReq(data);
            /*     localStorage.setItem("username", this.form.username );
                  sessionStorage.setItem("authorization", res.content.id + '_' + res.content.token);
                  //localStorage.clear();
                  //localStorage.removeItem("username");
                  this.$router.push({
                      path: '/formList',
                  });
                  console.log(res.content.token)
  */
            if (res.code === -1004) {
              this.$Message.error('此账号已在别处登录!');
              this.$router.push({
                path: '/login',
              });
            } else {
              localStorage.setItem("username", this.form.username);
              sessionStorage.setItem("authorization", res.content.id + '_' + res.content.token);
              //localStorage.removeItem("username");
              this.$router.push({
                path: '/formList',
              });
              console.log(res.content.token)
            }
          }
        })
      },
      handleadminSubmit() {
        this.adminmodel.adminName = this.form.username;
        this.adminmodel.adminPass = this.form.password;
        console.log(this.adminmodel);
        this.$refs.loginForm.validate(async (valid) => {
          if (valid) {
            let data = {
              method: 'post',
              params: this.adminmodel,
              url: '/admin/login',
            };
            let res = await util.httpReq(data);
            localStorage.setItem("username", this.adminmodel.adminName);
            sessionStorage.setItem("authorization", res.content.id + '_' + res.content.token);
            sessionStorage.setItem("id", res.content.id);
            console.log(this.username);
            this.$router.push({
              path: '/usermodel',

            });
          }
        })
      },
      createNew() {
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
          onCancel: () => {
            this.$Message.info('Clicked cancel');
          }
        })

      }
    }
  }
</script>
