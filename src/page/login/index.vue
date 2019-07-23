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
  data () {
    return {
      form: {
        userName: 'super_admin',
        password: ''
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
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          /*
          let params = {
            "userName": this.form.userName,
            "passWord": this.form.password,
            "appid": "ZYKJ"
          };
          let data = {
            url: '/web/login',
            params: params,
            method: 'post',
          };
          let res = await utils.getData(data);
          if (res.errcode == 0) {
            sessionStorage.setItem("session", res.sessionID);
            sessionStorage.setItem("loginStatus", true);
            localStorage.setItem("username", this.form.userName);
            this.$router.push({
              path: '/allDeviceList?kind=1',
            });
          } else {
            this.$Message.error({
              content: res.errmsg,
              duration: 5,
              closable: true
            });
          }
          */
          localStorage.setItem("username", this.form.userName);
            this.$router.push({
              path: '/hello',
            });
          }
      })
    }
  }
}

</script>
