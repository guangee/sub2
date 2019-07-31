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
                        localStorage.setItem("authorization", res.content.id + '_' + res.content.token);
                        this.$router.push({
                            path: '/formList',
                        });
                    }
                })
            }
        }
    }

</script>
