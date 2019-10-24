<style scoped>

</style>
<template>
  <div>
    <Table border :columns="columns1" :data="data1"></Table>
    <div style="margin: 10px;overflow: hidden">
      <div style="float: right;">
        <Page :total="pageNum" :page-size="10" :current="currentPage" @on-change="changepage"></Page>
      </div>
    </div>
  </div>
</template>
<script>
  import util from '@/util/util.js';

  export default {

      data() {
          return {
              data1: [],
              list: [],
              currentPage: 1,
              pageIndex: 0,
              pageNum: 0,
              columns1: [
                  {
                      title: '用户名',
                      key: 'name'
                  },
                  {
                      title: '密码',
                      key: 'password'
                  }, {
                      title: '操作',
                      key: 'action',
                      width: 225,
                      align: 'center',
                      render: (h, params) => {
                          return h('div', [
                              h('Button', {
                                  props: {
                                      type: 'error',
                                      size: 'small'
                                  },
                                  on: {
                                      click: () => {
                                          this.delete(params.row.name);

                                      }
                                  }
                              }, '删除')
                          ]);
                      }
                  }
              ],
          }
      },
      mounted() {
          this.getUserModel();
      },
      methods: {
          changepage(valued) {
              this.pageIndex = valued - 1;
              this.getUserModel();
          },

          // 表单list 请求
          async getUserModel() {
              let data = {
                  params: {
                      pageIndex: this.pageIndex,
                  },
                  method: 'get',
                  url: '/admin/check',
              };
              let res = await util.httpReq(data);
              this.data1 = res.list;
              this.pageNum = res.num;
          },


          // 删除接口
          async delete(name) {
              let data = {
                  params: {
                      name: name,
                  },
                  method: 'delete',
                  url: '/admin/delete',
              };
              let res = await util.httpReq(data);
              // 防止 删除失败的发生
              if (res ==='success') {
                 // this.data1.splice(index, 1);
                  this.getUserModel();
                  this.$Message.success('删除成功');

              } else {
                  this.$Message.error('删除失败，请稍后再试');
              }
          },
          addUser() {
              this.$router.push({
                  path: '/addUser',

              });

          }
      }
  }
</script>
