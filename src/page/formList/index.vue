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
          <RadioGroup v-model="UniteCheckModel.result" class="radio" >
            <Radio label="符合" ></Radio>
            <Radio label="不符合" ></Radio>
            <Radio label="有缺陷" ></Radio>
            <Radio label="无此项" ></Radio>
          </RadioGroup>
         </FormItem>
          <FormItem label="制造单位名称" >
            <Input v-model="UniteCheckModel.corpnName" placeholder="请输入制造单位名称" />
          </FormItem>
          <FormItem  label="问题说明及记录" :label-width="120">
            <Input v-model="UniteCheckModel.problemResult" placeholder="请输问题说明及记录" />
          </FormItem>
        <Button type="primary" @click="searchList(pageIndex)">查询</Button>
      </Form>
    </Card>
    <Table border :columns="columns1" :data=data1></Table>
    <div style="margin: 10px;overflow: hidden">
      <div style="float: right;">
        <Page :total="100" :current="1" @on-change="changepage()"></Page>
      </div>
    </div>
  </div>
</template>
<script>
  import {biolerData} from "../../service/staticData/dBiolerData";
  import {SearchData} from "../../service/staticData/dBiolerSearch";
  const routerType = ['/boiler', '/crane', '/elevator'];
  import util from '@/util/util.js';
  export default {

    data() {
      return {
        UniteCheckModel: {
          id: '1d12f4c9ad6547b7a1620bcbef377248',
          content:'problem_1_1',
          result:'符合',
          corpnName:'',
          type:'Boiler',
          pageIndex: 0,
          pageSize: 10,
        },
        pageIndex:0,

        ajaxHistoryData: [],
        exportdata : [],

        dataCount: 0,
        pageSize: 10,

        tableList: SearchData,
        columns1: [
          {
            title: '制造单位名称',
            key: 'corpnName'
          }, {
            title: '单位负责人',
            key: 'prinpal'
          }, {
            title: '许可证编号',
            key: 'licenceNo'
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
                        path: [params.row.type] + 'check',
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

                        path:[params.row.type] + 'Form',
                        query: {
                          id: params.row.id,
                          modify: 0,
                        },
                      });
                      console.log(params.row.type)
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
                      this.remove(params.index);
                      this.delete(params.row.id, params.row.type)
                    }
                  }
                }, '删除')
              ]);
            }
          }
        ],
        data1: [
          {
            id: 'c162882a6c0b41e8ae941353b6e767a5',
            type: 'Boiler',
            corpnName: '',
            prinpal: '',
            licenceNo: '',

          }, {

            type: 'Crane',
            corpnName: '',
            prinpal: '',
            licenceNo: '',
            id: '084b8a69bca64d55a1242d4d79433c2d',

          }, {
            type:'Elevator',
            corpnName: '',
            prinpal: '',
            licenceNo: '',
            id: '15c6bdeabe854016acafddb7def74de1',

          }, {
            type: 2,
            corpnName: '',
            prinpal: '',
            licenceNo: '',
            id: '',

          }
        ]
      }
    },
    mounted() {
      this.getFormList();

      console.log(res);



    },





    methods: {
      changepage() {

        let count = this.pageIndex;
        count = count + 1;

        let start = ( count- 1) * this.pageSize;
        let end = count * this.pageSize;
        this.data1 = this.ajaxHistoryData.slice(start, end);
      },
      async getFormList(){
        let data = {
          params: {
            pageIndex: this.pageIndex,
            pageSize: this.pageSize,
          },
          method: 'get',
          url: '/all/check',
        }
        let res = await util.httpReq(data);

        this.ajaxHistoryData = res;
        this.exportdata = res;
        this.dataCount = res.length;
        if (this.dataCount < this.pageSize) {
          this.data1 = this.ajaxHistoryData;
        } else {
          this.data1 = this.ajaxHistoryData.slice(0, this.pageSize);
        }

      },
      async searchList(){

        let data = {
          params: {
            UniteCheckModel: this.UniteCheckModel,
            pageIndex: this.pageIndex,
            pageSize: this.pageSize,
          } ,
          method: 'get',
          url: '/all/checkResult',
        }
        let res_1 = await util.httpReq(data);
        this.data1 = res_1;
        let data_0 = {
          params: {
            UniteCheckModel: this.UniteCheckModel,
            pageIndex: this.pageIndex,
            pageSize: this.pageSize,
          } ,

          method: 'get',
          url: '/all/select',
        }
        let res_0 = await util.httpReq(data_0);
        this.data1 = res_0;

      },

      async remove(index) {

        this.data1.splice(index, 1);

      },
      async delete(id, type){
        if (type ==='Boiler') {
          let data = {
            params: {
              id: id,
            },
            method: 'delete',
            url: 'boiler/delete',
          }
          let res = await util.httpReq(data);

        }else if (type ==='Crane') {

          let data = {
            params: {
              id: id
            },
            method: 'delete',
            url: '/Crane/delete',
          }
          let res = await util.httpReq(data);

        }else {
          let data = {
            params: {
              id: id,
            },
            method: 'delete',
            url: '/Elevator/delete',
          }
          let res = await util.httpReq(data);

        }
      }
    }

  }
</script>
