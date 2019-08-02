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
        <Button>查询</Button>
      </Form>
    </Card>
    <Table border :columns="columns1":data=data1></Table>
    <div style="margin: 10px;overflow: hidden">
      <div style="float: right;">
        <Page :total="100" :current="1" @on-change="changePage"></Page>
      </div>
    </div>
  </div>
</template>
<script>

  import {biolerData} from "../../service/staticData/dBiolerData";
  import {SearchData} from "../../service/staticData/dBiolerSearch";

  export default {

    data () {
      return {
          totalProblemList:[],
          showList:[],
          dataCount:0,
          pageSize:10,

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
                                    modify:0,

                                  }
                                });
                              } else if (params.row.type === 1) {
                                this.$router.push({
                                  path: '/craneForm',
                                  query: {
                                    id: params.row.id,
                                    modify:0,
                                  }
                                });
                              } else {
                                this.$router.push({
                                  path: '/elevatorForm',
                                  query: {
                                    id: params.row.id,
                                    modify:0,
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
          {   id: '222',
              type:0,
              MFname: '',
              principal: '',
              licenseNo: '',
              check:false
          }, {
            type: 1,
                MFname: '',
                principal: '',
                licenseNo: '',
                check:false,
                id:'3333',
          }, {
            type: 2,
                MFname: '',
                principal: '',
                licenseNo: '',
            check:false
          }, {
            type:3,
                MFname: '',
                principal: '',
                licenseNo: '',
            check:false
          }
        ]
      }
    },
    mounted(){
        axios
            .get(config.service.problems,{
                headers:config.headers
                })
            .then(res=>{
                console.log(res);
                this.totalProblemList = res.data;
                this.dataCount = this.totalProblemList.length;
                if(this.dataCount<this.pageSize)
                {
                    this.data1 = this.totalProblemList;
                }
                else{
                    this.data1 = this.totalProblemList.slice(0,this.pageSize);
                }
            });



                        let data = {
                            method: 'get',
                            params: this.formList,
                            url: '/Elevator/add',
                        };
                        console.log(this.formList);

            },

        /*
        let data1 = {
            method: 'get',
            params: this.formList.MFname,
            url: '/boiler/checkName',
        };

        let data_1= {
            method: 'get',
            params: this.formList.principal,
            url: '/boiler/checkID',
        };
        let data_2= {
            method: 'get',
            params: this.formList.licenseNo,
            url: '/boiler/check',
        };

         */


    methods: {
        changepage(index){
            var_start = (index - 1) * this.pageSize;
            var_end = index * this.pageSize;
            this.data1 = this.totalProblemList.slice(_start,_end);
        },

      remove (index) {
        this.data1.splice(index, 1);

      }
    }
  }
</script>
