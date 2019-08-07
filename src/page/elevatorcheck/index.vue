<style scoped>
  .form-wrapper {
    text-align: center;
  }
  h3 {
    text-align: left;
  }
</style>
<template>
  <div>
    <Form ref="elevatorForm" label-position="left" :model="formList" :rules="ruleformList" class="form-wrapper" :label-width="100">
      <h2>附表 5:电梯制造单位监督抽查记录表(2019版)</h2>
      <Col>
        <FormItem label="单位名称" prop="corpnName">
          <Input disabled v-model="formList.corpnName" placeholder="请输入单位名称"></Input>
        </FormItem>
        <FormItem label="制造地址" prop="address">
          <Input disabled v-model="formList.address" placeholder="请输入制造地址"></Input>
        </FormItem>
      </Col>
      <Row>
        <Col span='11'>
          <FormItem label="单位负责人" prop="prinpal">
            <Input disabled v-model="formList.prinpal" placeholder="请输入单位负责人"></Input>
          </FormItem>
          <FormItem label="许可证编号" prop="licenceNo">
            <Input disabled v-model="formList.licenceNo" placeholder="请输入许可证编号"></Input>
          </FormItem>
          <FormItem label="许可证有效期" prop="licenceDate">
            <Input disabled v-model="formList.licenceDate" placeholder="请输入许可证有效期"></Input>
          </FormItem>
        </Col>>
        <Col span='11' offset='1'>
          <FormItem label="联系电话" prop="phoneNo">
            <Input disabled v-model="formList.phoneNo" placeholder="请输入联系电话"></Input>
          </FormItem>
          <FormItem label="传真" prop="Fax">
            <Input disabled v-model="formList.fax" placeholder="请输入传真"></Input>
          </FormItem>
          <FormItem label="许可的范围" prop="licenceRange">
            <Input disabled v-model="formList.licenceRange" placeholder="请输入许可的范围"></Input>
          </FormItem>
        </Col>
      </Row>

      <h3>一、资源条件</h3>
      <Table :columns="columns" :data="tableList.table_1" ></Table>
      <p style="text-align:left">注1：制造单位中乘客电梯B级、载货电梯（含防爆）、液压电梯、自动扶梯和自动人行道统称为B级；按照单位中乘客电梯B级、载货电梯（含防爆）、液压电梯、自动扶梯和自动人行道、杂物电梯（含防爆）统称为其他。</p>
      <p style="text-align:left">注2：描*的不限制职称和专业范围，其他的均需要为机械或电气专业。</p>
      <p style="text-align:left">注3：工程技术职称与学历和技术工作年限比照</p>
      <p style="text-align:center">学历与技术工作年限</p>
      <Table :columns="columns0":data="tableList.table_5" ></Table>
      <p style="text-align:left">注：高级技师和技师分别相当于工程师和助理工程师，中专毕业技术工作年限可以参照大专毕业。</p>
      <h3>二、质量管理体系</h3>
      <Table :columns="columns" :data="tableList.table_2" ></Table>
      <Row>
        <Table :columns="rows"  :data="tableList.table_0" ></Table>
        <Col span='11'>
          <FormItem label="监督检查人员">
            <Input disabled v-model="formList.qcChecker" placeholder=""></Input>
          </FormItem>
        </Col>
        <Col span='11' offset='1'>
          <FormItem label="日期">
            <DatePicker type="date" placeholder="Select date" v-model="formList.qcCheckDate" style="width: 300px"></DatePicker>
          </FormItem>
        </Col>
      </Row>
      <p style="text-align:left">抽查结果填写：符合（√）、不符合（×）、有缺陷（○）和无此项（/）；记录主要填写抽查中所发现的不符合的记录，以及抽查人员认为有必要记录的其他见证。</p>
      <h3>三、制造/安装/维修质量（曳引式电梯）</h3>
      <Col>
        <FormItem label="使用单位">
          <Input disabled v-model="formList.teCorpnName" placeholder=""></Input>
        </FormItem>
      </Col>
      <Row>
        <Col span='11'>
          <FormItem label="产品型号">
            <Input disabled v-model="formList.teType" placeholder=""></Input>
          </FormItem>
          <FormItem label="额定速度">
            <Input disabled v-model="formList.teSpeed" placeholder=""></Input>
          </FormItem>
        </Col>>
        <Col span='11' offset='1'>
          <FormItem label="出厂编号">
            <Input disabled v-model="formList.teNo" placeholder=""></Input>
          </FormItem>
          <FormItem label="额定载重量">
            <Input disabled v-model="formList.teLoad" placeholder=""></Input>
          </FormItem>
        </Col>
      </Row>
      <Table :columns="columns" :data="tableList.table_3" ></Table>
      <Row>
        <Table :columns="rows"  :data="tableList.table_0" ></Table>
        <Col span='11'>
          <FormItem label="监督检查人员">
            <Input disabled v-model="formList.teChecker" placeholder=""></Input>
          </FormItem>
        </Col>
        <Col span='11' offset='1'>
          <FormItem label="日期">
            <DatePicker disabled type="date" placeholder="Select date" v-model="formList.teCheckDate" style="width: 300px"></DatePicker>
          </FormItem>
        </Col>
      </Row>
      <p style="text-align:left">注：第1部分适用于制造，第2部分适用于安装，第3部分适用于维修。</p>
      <h3>四、制造/安装/维修质量（自动扶梯）</h3>
      <Col>
        <FormItem label="使用单位">
          <Input disabled v-model="formList.esCorpnName" placeholder=""></Input>
        </FormItem>
      </Col>
      <Row>
        <Col span='11'>
          <FormItem label="产品型号">
            <Input disabled v-model="formList.esType" placeholder=""></Input>
          </FormItem>
          <FormItem label="名义速度">
            <Input disabled v-model="formList.esSpeed" placeholder=""></Input>
          </FormItem>
        </Col>>
        <Col span='11' offset='1'>
          <FormItem label="出厂编号">
            <Input disabled v-model="formList.esNo" placeholder=""></Input>
          </FormItem>
          <FormItem label="提升高度">
            <Input disabled v-model="formList.esHigh" placeholder=""></Input>
          </FormItem>
        </Col>
      </Row>
      <Table :columns="columns" :data="tableList.table_4" ></Table>
      <Row>
        <Table :columns="rows"  :data="tableList.table_0" ></Table>
        <Col span='11'>
          <FormItem label="监督检查人员">
            <Input disabled v-model="formList.esChecker" placeholder=""></Input>
          </FormItem>
        </Col>
        <Col span='11' offset='1'>
          <FormItem label="日期">
            <DatePicker type="date" placeholder="Select date" v-model="formList.esCheckDate" style="width: 300px"></DatePicker>
          </FormItem>
        </Col>
      </Row>
      <p style="text-align:left">注：第1部分适用于制造，第2部分适用于安装，第3部分适用于维修。</p>
      <FormItem>
        <Button disabled type="primary" @click="handleSubmit('elevatorForm')">Submit</Button>
      </FormItem>
    </Form>
  </div>
</template>
<script>
    import {elevatorData} from '@/service/staticData/dElevatorData.js';
    import vFormInput from '@/components/vFormInput';
    import vFormRadio from '@/components/vFormRadio';
    import vElevatorForm1 from '@/components/vElevatorForm1';
    import vElevatorForm2 from '@/components/vElevatorForm2';
    import vUpload from '@/components/vUpload';
    import util from '@/util/util.js';
    export default {
        components: {
            vFormRadio,
            vFormInput,
            vUpload
        },
        data() {
            return {
                formList: {},
                ruleformList: {
                    corpnName: [
                        { required: true, message: '单位名称不能为空', trigger: 'blur' }
                    ],
                    prinpal: [
                        { required: true, message: '单位负责人不能为空', trigger: 'blur' },
                    ],
                    licenceNo: [
                        { required: true, message: '许可证编号不能为空', trigger: 'blur' }
                    ]
                },
                tableList: elevatorData,
                columns: [{
                    'title': '抽查项目',
                    'key': 'content',
                    'width': 100,
                }, {
                    'title': '抽查内容及要点',
                    'key': 'method',
                    'minWidth': 300,
                    render: (h, params) => {
                        switch (params.row.id) {
                            case '3_1':
                                return h(vElevatorForm, {
                                    props: {
                                        formList: this.formList,
                                        formKey: params.row.id,
                                    }
                                });
                            case '4_1':
                                return h(vElevatorForm1, {
                                    props: {
                                        formList: this.formList,
                                        formKey: params.row.id,
                                    }
                                });
                            case '4_2':
                                return h(vElevatorForm2, {
                                    props: {
                                        formList: this.formList,
                                        formKey: params.row.id,
                                    }
                                });
                            default:
                                return h('div', {}, params.row.method);
                        }

                    }
                }, {
                    'title': '抽查结果',
                    'key': 'result',
                    'minWidth': 100,
                    render: (h, params) => {
                        return h(vFormRadio, {
                            props: {
                                formList: this.formList,
                                formKey: params.row.id,
                            },
                        })
                    }
                }, {
                    'title': '记录',
                    'key': 'explain',
                    'minWidth': 100,
                    render: (h, params) => {
                        switch (params.row.id) {
                            case '2_1':
                                return h(vUpload, {
                                    props: {
                                        formList: this.formList,
                                        formKey: params.row.id,
                                    }
                                });
                            case '2_2':
                                return h(vUpload, {
                                    props: {
                                        formList: this.formList,
                                        formKey: params.row.id,
                                    }
                                });
                            case '2_3':
                                return h(vUpload, {
                                    props: {
                                        formList: this.formList,
                                        formKey: params.row.id,
                                    }
                                });
                            case '2_4':
                                return h(vUpload, {
                                    props: {
                                        formList: this.formList,
                                        formKey: params.row.id,
                                    }
                                });
                            default:
                                return h(vFormInput, {
                                    props: {
                                        formList: this.formList,
                                        formKey: params.row.id,
                                    }
                                })
                        }
                    }
                }],
                columns1: [{
                    'title': '抽查项目',
                    'key': 'content',
                    'width': 200,
                }, {
                    'title': '抽查内容及要点',
                    'key': 'method',
                    'minWidth': 300,
                }, {
                    'title': '抽查结果',
                    'key': 'result',
                    'minWidth': 50,
                    render: (h, params) => {
                        return h(vFormRadio, {
                            props: {
                                formList: this.formList,
                                formKey: params.row.id,
                            },
                        })
                    }
                }],
                columns0: [{
                    'title': '工程技术职称',
                    'key': 'content',
                    'minWidth': 100,
                },
                    {
                        'title': '博士',
                        'key': 'demand1',
                        'minWidth': 100,
                    },
                    {
                        'title': '硕士',
                        'key': 'demand2',
                        'minWidth': 100,
                    },
                    {
                        'title': '大学本科',
                        'key': 'demand3',
                        'minWidth': 100,
                    },
                    {
                        'title': '大专',
                        'key': 'demand4',
                        'minWidth': 100,
                    }
                ]
            }
        },
      mounted() {
          this.getFormList();
      },
      methods: {
          async getFormList(){
              let data = {
                  params: {
                      id: this.$route.query.id
                  },
                  method: 'get',
                  url: '/Elevator/check',
              }
              let res = await util.httpReq(data);
              this.formList = res;
          }
      }
  }
</script>
