<style scoped>
  .add-card {
    margin-bottom: 10px;
  }
</style>
<template>
  <div>
    <Card class="add-card">
      <Cascader :data="tableList" trigger="hover" :render-format="format"></Cascader>
      <Button>添加检查记录表</Button>
    </Card>
    <Table border :columns="columns1" :data="data1"></Table>
    <div style="margin: 10px;overflow: hidden">
      <div style="float: right;">
        <Page :total="100" :current="1" @on-change="changePage"></Page>
      </div>
    </div>
  </div>
</template>
<script>

  import {biolerData} from "../../service/staticData/dBiolerData";

  export default {

    data () {
      return {

        tableList: [
          {
            value: '0',
            label: '锅炉压力容器制造单位监督检查记录表',
            children:[{
              value: '0_0',
              label: '一、基本条件与管理',


            },{
              value: '0_1',
              label: '二、产品质量与控制，',
            },{
              value: '0_2',
              label: '三、对鉴定评审机构评审情况的检查'
            },{
              value: '0_3',
              label: '四、对监督检验情况的抽查',
            },

            ]
          }, {
            value: '1',
            label: '起重机械制造单位监督抽查记录表',

            children:[{
              value: '1_0',
              label: '1、资源条件及管理',


            },{
              value: '1_1',
              label: '2、产品质量及控制',
            },

            ]
          }, {
            value: '2',
            label: '电梯维保单位监督检查记录表',
            children:[{
              value: '2_0',
              label: '一、资源条件',


            },{
              value: '2_1',
              label: '二、质量管理体系',
            },{
              value: '2_2',
              label: '三、制造/安装/维修质量（曳引式电梯）'
            },{
              value: '2_3',
              label: '四、制造/安装/维修质量（自动扶梯）',
            },

            ]

          },
        ],
        type: [2],
        columns1: [
          {
            title: '制造单位名称',
            key: 'name'
          }, {
            title: '单位负责人',
            key: 'age'
          }, {
            title: '许可证编号',
            key: 'address'
          }, {
            title: '操作',
            key: 'action',
            width: 225,
            align: 'center',
            render: (h, params) => {
                return h('div', [
                    h('Button', {
                        props: {
                            type: 'primary',
                            size: 'small'
                        },
                        style: {
                            marginRight: '5px'
                        },
                        on: {
                            click: () => {
                              console.log(params);
                              if (params.row.type === 0) {
                                this.$router.push({
                                  path: '/boilercheck',
                                  query: {
                                    id: params.row.id,

                                  }
                                });
                              } else if (params.row.type === 1) {
                                this.$router.push({
                                  path: '/cranecheck',
                                  query: {
                                    id: params.row.id,
                                  }
                                });
                              } else {
                                this.$router.push({
                                  path: '/elevatorcheck',
                                  query: {
                                    id: params.row.id,
                                  }
                                });
                              }
                              
                            }
                        }
                    }, '查看详情'),
                    h('Button', {
                        props: {
                            type: 'error',
                            size: 'small'
                        },
                        style: {
                            marginRight: '5px'
                        },
                        on: {
                            click: () => {
                              console.log(params);
                              if (params.row.type === 0) {
                                this.$router.push({
                                  path: '/boilerForm',
                                  query: {
                                    id: params.row.id,

                                  }
                                });
                              } else if (params.row.type === 1) {
                                this.$router.push({
                                  path: '/craneForm',
                                  query: {
                                    id: params.row.id,
                                  }
                                });
                              } else {
                                this.$router.push({
                                  path: '/elevatorForm',
                                  query: {
                                    id: params.row.id,
                                  }
                                });
                              }

                            }
                        }
                    }, '修改'),
                    h('Button', {
                        props: {
                            type: 'error',
                            size: 'small'
                        },
                        on: {
                            click: () => {

                                this.remove(params.index)
                            }
                        }
                    }, '删除')
                ]);
            }
          }
        ],
        data1: [
          {
            type: 0,
            id: '2223',
            name: 'John Brown',
            age: 18,
            address: 'New York No. 1 Lake Park',
            date: '2016-10-03',
            check:false
          }, {
            type: 1,
            name: 'Jim Green',
            id: '3334',
            age: 24,
            address: 'London No. 1 Lake Park',
            date: '2016-10-01',
            check:false
          }, {
            type: 2,
            name: 'Joe Black',
            id: '3334',
            age: 30,
            address: 'Sydney No. 1 Lake Park',
            date: '2016-10-02',
            check:false
          }, {
            name: 'Jon Snow',
            age: 26,
            id: '3334',
            address: 'Ottawa No. 2 Lake Park',
            date: '2016-10-04',
            check:false
          }
        ]
      }
    },
    mounted(){

    },
    methods: {
      remove (index) {
        this.data1.splice(index, 1);
        
      }
    }
  }
</script>
