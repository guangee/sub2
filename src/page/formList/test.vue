<style scoped>
  .add-card {
    margin-bottom: 10px;
  }
  .find-button {
    width: 100%;
    text-align: center;
    margin-bottom: 10px;
  }
</style>
<template>
  <div>
    <Card class="add-card">
      <Collapse simple accordion>
        <Panel name="1">
          按表单类型查询
          <div slot="content">
            <Select v-model="searchType" style="width:200px">
              <Option v-for="item in formTypeList" :value="item.value" :key="item.value" >{{ item.label }}</Option>
            </Select>
            <Button type="primary" @click="searchTypeList()">查询</Button>
          </div>
        </Panel>
        <Panel name="2">
          按制造单位查询
          <div slot="content">
            <Input v-model="searchcorpnName" placeholder="请输入制造单位名称"  style="width:200px"/>
            <Button type="primary" @click="searchCorpList()">查询</Button>
          </div>
        </Panel>
        <Panel name="3">
          精细查询
          <div slot="content">
            <Form :v-model="findForm" label-position="left" :label-width="100">
              <FormItem label="表单类型">
                <Cascader :data="tableList" trigger="hover" v-model="content"></Cascader>
              </FormItem>
              <Row type="flex" justify="space-between" class="code-row-bg">
                <Col span="8">
                  <FormItem label="检查结果" >
                    <RadioGroup v-model="findForm.result" class="radio" >
                      <Radio label="符合" >符合</Radio>
                      <Radio label="不符合" >不符合</Radio>
                      <Radio label="有缺陷" >有缺陷</Radio>
                      <Radio label="无此项" >无此项</Radio>
                    </RadioGroup>
                  </FormItem>
                </Col>
                <Col span="6">
                  <FormItem label="制造单位名称" >
                    <Input v-model="findForm.corpnName" placeholder="请输入制造单位名称" />
                  </FormItem>
                </Col>
                <Col span="8">
                  <FormItem  label="问题说明及记录" :label-width="120">
                    <Input v-model="findForm.problemResult" placeholder="请输问题说明及记录" />
                  </FormItem>
                </Col>
              </Row>
              <div class="find-button">
                <Button type="primary" @click="searchList()">查询</Button>
              </div>
            </Form>
          </div>
        </Panel>
      </Collapse>
    </Card>
    <Table border :columns="columns1" :data="data1"></Table>
    <div style="margin: 10px;overflow: hidden">
      <div style="float: right;">
        <Page :total="pageNum" :page-size="10" :current="currentPage" @on-change="changepage"></Page>
      </div>
    </div>
  </div>
</template>
<script>
    import {biolerData} from "../../service/staticData/dBiolerData";
    import {SearchData} from "../../service/staticData/dBiolerSearch";
    import util from '@/util/util.js';

    const routerType = ['/boiler', '/crane', '/elevator','/keeper'];
    const deleteRouter = {
        Boiler: '/boiler/delete',
        Crane: '/Crane/delete',
        Elevator: '/Elevator/delete',
        Keeper: '/keeper/delete',
    };

    export default {

        data() {
            return {
                searchcorpnName:'',
                findForm: {},
                data1: [],
                list:[],
                isadmin: sessionStorage.getItem("isadmin"),
                formTypeList: [
                    {
                        value: 'Boiler',
                        label: '锅炉压力容器制造单位监督检查记录表',
                    }, {
                        value: 'Crane',
                        label: '起重机械制造单位监督抽查记录表',
                    }, {
                        value: 'Elevator',
                        label: '电梯制造单位监督检查记录表',
                    },{
                        value: 'Keeper',
                        label: '电梯安装维保单位监督检查记录表',
                    }],
                searchType: '',
                searchcorpnName:'',
                currentPage: 1,
                pageIndex: 0,
                content: [],
                isFindProcess: false, //标识是否在查询的分页中
                pageNum: 0,

                tableList: SearchData,
                columns1: [
                    {
                        title: '制造单位名称',
                        key: 'corpnName',
                        width: 220
                    },
                    {
                        title: '表单类型',
                        key: 'type'
                    },{
                        title: '单位负责人',
                        key: 'prinpal'
                    }, {
                        title: '许可证编号',
                        key: 'licenceNo'
                    }, {
                        title: '操作',
                        key: 'action',
                        width: 260,
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
                                            this.delete(params.row.id, params.row.type, params.index);
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
            this.getFormList();
        },
        methods: {
            changepage(valued) {
                this.pageIndex = valued - 1;





                if ("findForm"=== true){
                    if (this.isFindProcess) {
                        this.searchReq();
                    } else {
                        this.getFormList();
                    }
                }
                else if(this.searchType){
                    if (this.isFindProcess) {
                        this.searchtype();
                    } else {
                        this.searchTypeList();
                    }
                }
                else {
                    if (this.isFindProcess) {
                        this.searchcorp();
                    } else {
                        this.searchCorpList();
                    }
                }
            },

            // 表单list 请求
            async getFormList(){
                let data = {
                    params: {
                        pageIndex: this.pageIndex,
                    },
                    method: 'get',
                    url: '/all/check',
                };
                let res = await util.httpReq(data);
                this.data1 = res.list;
                this.pageNum = res.num;
            },

            // 查询 list 请求
            async searchReq() {
                this.findForm.pageIndex = this.pageIndex;
                let data = {
                    params: this.findForm,
                    method: 'post',
                    url: '/all/select',
                };
                let res = await util.httpReq(data);
                this.data1 = res.list;
                this.pageNum = res.num;
                console.log(this.data1);
            },

            // 表单类型 查询 待做
            searchTypeList() {
                this.findForm.type = this.searchType;
                console.log(this.findForm);
                this.pageIndex = 0;
                this.searchtype();
                this.isFindProcess = true;
            },
            async searchtype(){
                this.findForm.pageIndex = this.pageIndex;
                let data = {
                    params: this.findForm,
                    method: 'get',
                    url: '/all/checkByType',
                };
                let res = await util.httpReq(data);

                this.data1 = res.list;
                this.pageNum = res.num;
                console.log(this.data1);
                console.log(this.pageIndex);
            },
            async searchcorp(){
                this.findForm.corpnName = this.searchcorpnName;
                this.findForm.pageIndex = this.pageIndex;
                let data = {
                    params: this.findForm,
                    method: 'get',
                    url: '/all/checkByCom',
                };
                let res = await util.httpReq(data);
                this.data1 = res.list;
                this.pageNum = res.num;
                console.log(this.data1);
                console.log(this.pageIndex);
            } ,
            searchCorpList(){
                console.log(this.findForm);
                this.pageIndex = 0;
                this.searchcorp();
                this.isFindProcess = true;
                console.log(this.data1)
            },
            // 查询功能 整合查询数据 请求拿到list
            searchList() {
                // 后续这里 可以改用Form 的 rules 来判断
                if (this.content.length === 0) {
                    this.$Message.error('请选择表单类型');
                    return;
                }
                if (!this.findForm.result && !this.findForm.problemResult){
                    this.$Message.error('请填写检查结果或问题说明及记录');
                    return;
                }

                this.findForm.type = this.content[0];
                let content = this.findForm.type === 'Elevator' ?
                    this.content[1] + 'Result_' + this.content[3] :
                    'result_' + this.content[2];
                let problem = this.findForm.type === 'Elevator' ?
                    this.content[1] + 'Record_' + this.content[3] :
                    'problem_' + this.content[2];

                if (this.findForm.result) {
                    this.findForm.content = content;
                }
                if (this.findForm.problemResult) {
                    this.findForm.problem = problem;
                }
                console.log(this.findForm);// 请求第一页的数据
                this.pageIndex = 0;
                this.searchReq();
                this.isFindProcess = true;
            },

            // 删除接口
            async delete(id, type, index) {
                let data = {
                    params: {
                        id: id,
                    },
                    method: 'delete',
                    url: deleteRouter[type],
                };
                let res = await util.httpReq(data);
                // 防止 删除失败的发生
                if (res === 'success') {
                    this.data1.splice(index, 1);
                    this.$Message.success('删除成功');
                } else {
                    this.$Message.error('删除失败，请稍后再试');
                }
            },
            addUser(){
                this.$router.push({
                    path:'/addUser',

                });

            }
        }
    }
</script>
