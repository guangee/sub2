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
              <Input v-model="form.userName" placeholder="请输入用户名">
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
          <p class="login-tip" @click="registNew">注册新用户</p>v
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'Login',
        props: {
            userNameRules: {
                type: Array,
                default: () => {
                    return [
                        { required: true, message: '账号不能为空', trigger: 'blur' }
                    ]
                }
            },
            passwordRules: {
                type: Array,
                default: () => {
                    return [
                        { required: true, message: '密码不能为空', trigger: 'blur' }
                    ]
                }
            }
        },
        computed: {
            rules () {
                return {
                    userName: this.userNameRules,
                    password: this.passwordRules
                }
            }
        },
        methods: {
            handleSubmit () {
                this.$refs.loginForm.validate(async (valid) => {
                    if (valid) {
                        let params = {
                            "userName": this.form.userName,
                            "passWord": this.form.password,
                            "appid": "",

                        };
                        this.$router.push({path :'/formList'})
                        let data = {
                            url: '/web/login',
                            params: params,
                            method: 'post',
                        };
                        /*
                        * 后台请求有两种方式：
                        * 一种直接使用：axios.post/get
                        * 另一种直接调用utils.getData(xxx)的方法
                        * 通过控制台可以看到返回信息
                        */
                        axios.post('/web/login', { params }).then((res) => {
                            console.log(res);
                        });
                        let res = await utils.getData(data);
                        console.log(res);
                        if (res.errcode == 0) {
                            sessionStorage.setItem("session", res.sessionID);
                            sessionStorage.setItem("loginStatus", true);
                            localStorage.setItem("username", this.form.userName);
                            this.$router.push({
                                path: '/formList',
                            })
                        } else {
                            this.$Message.error(res.msg);
                        }
                        /*
                        let res = await utils.getData(data);
                        if (res.status == 1) {
                          localStorage.setItem("sitewhereToken", res.userData.tenantToken);
                          localStorage.setItem("username", res.userData.name);
                          localStorage.setItem("role", "tenant");
                          this.$router.push({
                            path: '/addSite',
                          });
                        } else if (res.status == 3) {
                          localStorage.setItem("role", "admin");
                          localStorage.setItem("username", res.userData.name);
                          this.$router.push({
                            path: '/tenantList',
                          });
                        } else if (res.status == 4) {
                          localStorage.setItem("role", "adminUser");
                          localStorage.setItem("username", res.userData.name);
                          this.$router.push({
                            path: '/userTenantList',
                            query: {
                              "authUserId": res.userData.name,
                            }
                          });

                        } else {
                          Message.error({
                            content: res.msg,
                            duration: 5,
                            closable: true
                          });
                        }
            */

                    }
                });
            },
            registNew(){
                this.$Modal.confirm({
                    render: (h) => {
                        return h('div', [
                            h('P', {
                                style: {
                                    color: "#1c2438",
                                    fontSize: "20px",
                                    textAlign: 'center'
                                }
                            }, "注册新用户"),
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
                        let params = {
                            "userName": this.name,
                            "passWord": md5(this.pwd),
                            "appid": '',
                        };
                        let data = {
                            url: '/web/regist',
                            params: params,
                            method: 'post',
                        };
                        let res = await utils.getData(data);
                        console.log(res);
                        if (res.errcode == 0) {
                            this.$Message.success('注册成功');
                        } else {
                            this.$Message.error(res.msg);
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
