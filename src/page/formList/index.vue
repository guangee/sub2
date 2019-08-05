<style scoped>
  .add-card {
    margin-bottom: 10px;
  }
</style>
<template>
  <div>
    <Card class="add-card">
      <Form label-position="left" :label-width="100">
      <FormItem label="表单类型">
        <Cascader  :data="tableList" trigger="hover" :render-format="format"></Cascader>
      </FormItem>
      </Form>
      <Form label-position="left" :label-width="100" inline>

        <FormItem label="检查结果" >
          <RadioGroup  class="radio" >
            <Radio label="符合" ></Radio>
            <Radio label="不符合" ></Radio>
            <Radio label="有缺陷" ></Radio>
            <Radio label="无此项" ></Radio>
          </RadioGroup>
         </FormItem>
          <FormItem label="制造单位名称" >
            <Input  placeholder="请输入制造单位名称" />
          </FormItem>
          <FormItem label="问题说明及记录" :label-width="120">
            <Input  placeholder="请输问题说明及记录" />
          </FormItem>
        <Button type="primary" @click="serachList()">查询</Button>
      </Form>
    </Card>
    <Table border :columns="columns1" :data=data1></Table>
    <div style="margin: 10px;overflow: hidden">
      <div style="float: right;">
        <Page :total="100" :current="1" @on-change="changepage"></Page>
      </div>
    </div>
  </div>
</template>
<script>
  import {biolerData} from "../../service/staticData/dBiolerData";
  import {SearchData} from "../../service/staticData/dBiolerSearch";
  const routerType = ['/boiler', '/crane', '/elevator'];

  export default {

    data() {
      return {

        ajaxHistoryData: [],
        exportdata : [],

        dataCount: 0,
        pageSize: 10,

        tableList: SearchData,
        columns1: [
          {
            title: '制造单位名称',
            key: 'MFname'
          }, {
            title: '单位负责人',
            key: 'principal'
          }, {
            title: '许可证编号',
            key: 'licenseNo'
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
                      this.$router.push({
                        path: routerType[params.row.type] + 'check',
                        query: {
                          id: params.row.id,
                        }
                      });
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
                      this.$router.push({
                        path: routerType[params.row.type] + 'Form',
                        query: {
                          id: params.row.id,
                          modify: 0,
                        }
                      });
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
                      // 添加删除接口
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
            id: 'c38320362e3d430c9ff7472a464d3e53',
            type: 0,
            MFname: '',
            principal: '',
            licenseNo: '',
          }, {

            type: 0,
            MFname: '',
            principal: '',
            licenseNo: '',
            id: '084b8a69bca64d55a1242d4d79433c2d',
          }, {
            type: 1,
            MFname: '',
            principal: '',
            licenseNo: '',
            id: '15c6bdeabe854016acafddb7def74de1',
          }, {
            type: 2,
            MFname: '',
            principal: '',
            licenseNo: '',
            id: '',
          }
        ]
      }
    },
    mounted() {
      /*
      console.log(res);
      this.ajaxHistoryData = res.data;
      this.exportdata = res.data;
      this.dataCount = res.data.length;
      if (this.dataCount < this.pageSize) {
        this.data1 = this.ajaxHistoryData;
      } else {
        this.data1 = this.ajaxHistoryData.slice(0, this.pageSize);
      }
      */
    },





    methods: {
      changepage(index) {
        let start = (index - 1) * this.pageSize;
        let end = index * this.pageSize;
        this.data1 = this.ajaxHistoryData.slice(start, end);
      },

      remove(index) {
        this.data1.splice(index, 1);
      }
    }

  }
</script>
