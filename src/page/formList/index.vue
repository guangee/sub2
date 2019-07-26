<style scoped>
  .add-card {
    margin-bottom: 10px;
  }
</style>
<template>
  <div>
    <Card class="add-card">
      <Select v-model="formType" style="width:200px">
        <Option v-for="item in tableList" :value="item.value" :key="item.value">{{ item.label }}</Option>
      </Select>
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
  export default {
    data () {
      return {
        formType: '',
        tableList: [
          {
            value: '0',
            label: '锅炉压力容器制造单位监督检查记录表',
          }, {
            value: '1',
            label: '起重机械制造单位监督抽查记录表',
          }, {
            value: '2',
            label: '电梯维保单位监督检查记录表',
          }, {
            value: '3',
            label: '电梯监督检查记录表',
          }
        ],
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
                              this.remove(params.index)
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
                                this.remove(params.index)
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
            name: 'John Brown',
            age: 18,
            address: 'New York No. 1 Lake Park',
            date: '2016-10-03'
          }, {
            name: 'Jim Green',
            age: 24,
            address: 'London No. 1 Lake Park',
            date: '2016-10-01'
          }, {
            name: 'Joe Black',
            age: 30,
            address: 'Sydney No. 1 Lake Park',
            date: '2016-10-02'
          }, {
            name: 'Jon Snow',
            age: 26,
            address: 'Ottawa No. 2 Lake Park',
            date: '2016-10-04'
          }
        ]
      }
    }
  }
</script>
