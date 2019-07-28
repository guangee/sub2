
<style scoped>
.layout{
  width: 100%;
  height: 100%;
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: auto;
}
.layout-logo{
  width: 100px;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 15px;
  left: 20px;
}
.layout-nav{
  width: 420px;
  margin: 0 auto;
  margin-right: 20px;
}
</style>
<template>
  <div class="layout">
      <Layout>
          <Header :style="{padding: 0, width: '100%', position: 'fixed', top: '0', zIndex: '99'}">
            <vHeader></vHeader>
          </Header>
          <Layout>
            <Sider hide-trigger :style="{minHeight: '100vh', position: 'fixed', top: '64px', bottom: '0', zIndex: '99'}">
              <Menu active-name="form-List" theme="dark" width="auto" :open-names="['1']" @on-select="routeTo">
                <MenuItem name="form-List">
                  <span>表单列表</span>
                </MenuItem>
                  <Submenu name="2">
                      <template slot="title">
                          添加表单
                      </template>
                      <MenuItem name="boiler-Form">锅炉压力容器制造单位监督检查记录表</MenuItem>
                      <MenuItem name="crane-Form">起重机械制造单位监督抽查记录表</MenuItem>
                      <MenuItem name="elevator-Form">电梯维保单位监督检查记录表</MenuItem>
                  </Submenu>
              </Menu>
            </Sider>
            <Layout :style="{padding: '64px 24px 24px 224px', minWidth: '1200px'}">
              <v-breadcrumb :homeRoute='homeRoute' :style="{padding: '12px 0'}"/>
              <Content :style="{padding: '24px', minHeight: '280px', background: '#fff', overflow: 'scroll'}">
                  <router-view></router-view>
              </Content>
          </Layout>
        </Layout>
      </Layout>
  </div>
</template>
<script>
  import vHeader from '@/components/header/header.vue';
  import vBreadcrumb from '@/components/vBreadcrumb';
    export default {
      data() {
        return {
          homeRoute: '/',
        }
      },
      components: {
        vHeader,
        vBreadcrumb,
      },
      methods: {
        routeTo(e) {
          let routerPath = e.replace(/-/g, '');
          this.$router.push('/' + routerPath);
        },
      }
    }
</script>
