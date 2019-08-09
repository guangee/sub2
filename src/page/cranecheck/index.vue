<style scoped>
  .form-wrapper {
    text-align: center;
  }
  h2 {
    margin-bottom:12px;
  }
  h3 {
    text-align: left;
    margin-bottom:12px;
  }
  .question-table {
    margin-bottom: 10px;
  }
</style>
<template>
  <div>
    <Form ref="craneForm" label-position="left" :model="formList" :rules="ruleformList" class="form-wrapper" :label-width="100">
      <h2>起重机械制造单位监督抽查记录表</h2>
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
        </Col>
        <Col span='11' offset='2'>
          <FormItem label="联系电话">
            <Input disabled v-model="formList.phoneNo" placeholder="请输入联系电话"></Input>
          </FormItem>
          <FormItem label="传真">
            <Input disabled v-model="formList.fax" placeholder="请输入传真"></Input>
          </FormItem>
          <FormItem label="许可的范围">
            <Input disabled v-model="formList.licenceRange" placeholder="请输入许可的范围"></Input>
          </FormItem>
        </Col>
      </Row>

      <h3>1、资源条件及管理</h3>
      <Table :columns="columns" :data="tableList.table_1" ></Table>
      <Row>
        <Form :model="formList" label-position="right" >
          <FormItem label="问题记录（包括未在“检查项目、内容与要求”栏目中列出的其他项目及其问题）：">
            <Input disabled v-model="formList.problem_1" type="textarea":autosize="{minRows: 5,maxRows: 10}" placeholder=""></Input>
          </FormItem>
        </Form>

        <Col span='11'>
          <FormItem label="监督检查人员">
            <Input disabled v-model="formList.checker_1" placeholder=""></Input>
          </FormItem>
        </Col>
        <Col span='11' offset='2'>
          <FormItem label="日期">
            <DatePicker disabled type="date" placeholder="Select date" v-model="formList.checkDate_1" style="width: 333px"></DatePicker>
          </FormItem>
        </Col>
      </Row>
      <h3>2、产品质量及控制<span style='color: red'>（注：①抽查产品中应包括在制品；②抽查数量超过4台时，可另附页）</span></h3>
      <h3><strong>抽查产品A</strong></h3>
      <Row>
        <Col span='4'>
          <FormItem label="设备名称（品种）">
            <Input disabled v-model="formList.productNameA" placeholder=""></Input>
          </FormItem>
        </Col>
        <Col span='4' offset='1'>
          <FormItem label="型号">
            <Input disabled v-model="formList.productTypeA" placeholder=""></Input>
          </FormItem>
        </Col>
        <Col span='4' offset='2'>
          <FormItem label="出厂编号">
            <Input disabled v-model="formList.productNoA" placeholder=""></Input>
          </FormItem>
        </Col>
        <Col span='4' offset='3'>
          <FormItem label="出厂日期">

            <DatePicker disabled type="date" placeholder="Select date" v-model="formList.productDateA" style="width: 105px"></DatePicker>

          </FormItem>
        </Col>
      </Row>
      <h3><strong>抽查产品B</strong></h3>
      <Row>
        <Col span='4'>
          <FormItem label="设备名称（品种）">
            <Input disabled v-model="formList.productNameB" placeholder=""></Input>
          </FormItem>
        </Col>
        <Col span='4' offset='1'>
          <FormItem label="型号">
            <Input disabled v-model="formList.productTypeB" placeholder=""></Input>
          </FormItem>
        </Col>
        <Col span='4' offset='2'>
          <FormItem label="出厂编号">
            <Input disabled v-model="formList.productNoB" placeholder=""></Input>
          </FormItem>
        </Col>
        <Col span='4' offset='3'>
          <FormItem label="出厂日期">

            <DatePicker  disabled type="date" placeholder="Select date" v-model="formList.productDateB" style="width: 105px"></DatePicker>

          </FormItem>
        </Col>
      </Row>
      <h3><strong>抽查产品C</strong></h3>
      <Row>
        <Col span='4'>
          <FormItem label="设备名称（品种）">
            <Input disabled v-model="formList.productNameC" placeholder=""></Input>
          </FormItem>
        </Col>
        <Col span='4' offset='1'>
          <FormItem label="型号">
            <Input disabled v-model="formList.productTypeC" placeholder=""></Input>
          </FormItem>
        </Col>
        <Col span='4' offset='2'>
          <FormItem label="出厂编号">
            <Input disabled v-model="formList.productNoC" placeholder=""></Input>
          </FormItem>
        </Col>
        <Col span='4' offset='3'>
          <FormItem label="出厂日期">

            <DatePicker disabled type="date" placeholder="Select date" v-model="formList.productDateC" style="width: 105px"></DatePicker>

          </FormItem>
        </Col>
      </Row>
      <h3><strong>抽查产品D</strong></h3>
      <Row>
        <Col span='4'>
          <FormItem label="设备名称（品种）">
            <Input disabled v-model="formList.productNameD" placeholder=""></Input>
          </FormItem>
        </Col>
        <Col span='4' offset='1'>
          <FormItem label="型号">
            <Input disabled v-model="formList.productTypeD" placeholder=""></Input>
          </FormItem>
        </Col>
        <Col span='4' offset='2'>
          <FormItem label="出厂编号">
            <Input disabled v-model="formList.productNoD" placeholder=""></Input>
          </FormItem>
        </Col>
        <Col span='4' offset='3'>
          <FormItem label="出厂日期">

            <DatePicker disabled type="date" placeholder="Select date" v-model="formList.productDateD" style="width: 105px"></DatePicker>

          </FormItem>
        </Col>
      </Row>
      <Table :columns="columns" :data="tableList.table_2" ></Table>
      <Row>
        <Form :model="formList" label-position="right" >
          <FormItem label="问题记录（包括未在“检查项目、内容与要求”栏目中列出的其他项目及其问题）：">
            <Input disabled v-model="formList.problem_2" type="textarea":autosize="{minRows: 5,maxRows: 10}" placeholder=""></Input>
          </FormItem>
        </Form>
        <Col span='11'>
          <FormItem label="监督检查人员">
            <Input disabled v-model="formList.Checker_2" placeholder=""></Input>
          </FormItem>
        </Col>
        <Col span='11' offset='2'>
          <FormItem label="日期">

            <DatePicker disabled type="date" placeholder="Select date" v-model="formList.CheckDate_2" style="width: 333px"></DatePicker>

          </FormItem>
        </Col>
      </Row>
      <FormItem>
        <Button type="primary" @click="handleSubmit('craneForm')">Submit</Button>
      </FormItem>
    </Form>
  </div>
</template>
<script>
    import {craneData} from '@/service/staticData/dCraneData.js';
    import vFormInput from '@/components/vFormInput';
    import vFormRadio from '@/components/vFormRadio';
    import vUpload from '@/components/vUpload';
    import util from '@/util/util.js';
    export default {
        components: {
            vFormRadio,
            vFormInput,
            vUpload,
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
                tableList: craneData,
                columns: [{
                    'title': '检查项目、内容与要求',
                    'key': 'content',
                    'width': 250
                }, {
                    'title': '检查方法',
                    'key': 'method',
                    'minWidth': 70
                }, {
                    'title': '对应条款',
                    'key': 'demand',
                    'minWidth': 50
                }, {
                    'title': '问题说明及记录',
                    'key': 'explain',
                    'minWidth': 250,
                    render: (h, params) => {
                        return h(vFormInput, {
                            props: {
                                formList: this.formList,
                                formKey: params.row.id,
                                isdisable:true,
                            }
                        })
                    }
                }, {
                    'title': '检查结果',
                    'key': 'result',
                    'minWidth': 100,
                    render: (h, params) => {
                        return h(vFormRadio, {
                            props: {
                                formList: this.formList,
                                formKey: params.row.id,
                                isdisable:true,
                            },
                        })
                    }
                }],
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
                  url: '/Crane/check',
              }
              let res = await util.httpReq(data);
              this.formList = res;
          }
      }
  }
</script>
