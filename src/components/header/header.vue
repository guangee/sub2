<style lang='scss'>
  .header-right {
    float: right;
    line-height: 60px;
    width: auto;
    margin-right: 30px;

  }
  .main-user-name {
    color: #fff;
  }
  .header-left {
    float: left;
    margin-left: 35px;
    font-size: 20px;
    font-weight: bold;
    color: #fff;
  }
</style>
<template>
  <div>
    <div class="header-left">
      登记审核系统
    </div>
    <div class="header-right">
      <Dropdown class="head_login" trigger="click" @on-click="handleClickUserDropdown">
        <a href="javascript:void(0)">
          <span class="main-user-name">{{username}}</span>
          <Icon type="arrow-down-b"></Icon>
        </a>
        <DropdownMenu slot="list">
          <DropdownItem name="loginout" divided>退出登录</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'vHeader',
    data() {
      return {
        username: localStorage.getItem("username"),

      };
    },
    props: {
      data: Object
    },
    computed:{
    },
    mounted() {

    },
    methods: {
      handleClickUserDropdown (name) {
        if (name === 'ownSpace') {
          this.$router.push("userInfo");
        } else if (name === 'loginout') {
          localStorage.clear();
          sessionStorage.clear();
          this.$router.push('login');

        }
      },

    }
  }
</script>
