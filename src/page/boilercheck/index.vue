1`  <style scoped>
  .form-wrapper {
    text-align: center;
  }
  h3 {
    text-align: left;
  }
</style>
<template>
  <div>
    <Form ref="boilerForm" label-position="left" :model="formList" :rules="ruleformList" class="form-wrapper" :label-width="100">
      <h2>锅炉压力容器制造单位监督检查记录表</h2>
      <Row>
        <Col span='11'>
          <FormItem label="制造单位名称" prop="MFname">
            <Input disabled v-model="formList.MFname" placeholder="请输入制造单位名称"></Input>
          </FormItem>
          <FormItem label="单位负责人" prop="principal">
            <Input disabled v-model="formList.principal" placeholder="请输入单位负责人名字"></Input>
          </FormItem>
          <FormItem label="许可证编号"prop="licenseNo" >
            <Input disabled v-model="formList.licenseNo" placeholder="请输入许可证编号"></Input>
          </FormItem>
          <FormItem label="评审机构名称">
            <Input disabled v-model="formList.EIname" placeholder="请输入评审机构名称"></Input>
          </FormItem>
          <FormItem label="监督检验机构">
            <Input disabled v-model="formList.supervisionOrg" placeholder="请输入监督检验机构"></Input>
          </FormItem>
        </Col>
        <Col span='11' offset='2'>
          <FormItem label="编号">
            <Input disabled v-model="formList.serialNo" placeholder="请输入编号"></Input>
          </FormItem>
          <FormItem label="制造单位地址">
            <Input disabled v-model="formList.MFadd" placeholder="请输入制造单位地址"></Input>
          </FormItem>
          <FormItem label="联系电话">
            <Input disabled v-model="formList.phoneNo" placeholder="请输入负责人联系电话"></Input>
          </FormItem>
          <Row>
            <Col span='12'>
              <FormItem label="许可范围">
                <Input disabled v-model="formList.licenseRange" placeholder="请输入许可范围"></Input>
              </FormItem>
            </Col>
            <Col span='12'>
              <FormItem label="许可证有效期">
                <Input disabled v-model="formList.licenseDate" placeholder="请输入许可证有效期"></Input>
              </FormItem>
            </Col>
          </Row>
          <FormItem label="最近一次评审日期">
            <Input disabled v-model="formList.lastDate" placeholder="请输入最近一次评审日期"></Input>
          </FormItem>
          <FormItem label="监督检查人">
            <Input disabled v-model="formList.supervisor" placeholder="监督检查人"></Input>
          </FormItem>

        </Col>
      </Row>
      <h3>一、基本条件与管理，主要核查企业提供的相关资料，必要时现场核查</h3>
      <Table :columns="columns" :data="tableList.table_1"></Table>
      <Row>
        <Col span='11'>
          <FormItem label="监督检查人员" >
            <Input disabled v-model="formList.checker_1" placeholder="请输入监督检查人员"></Input>
          </FormItem>
        </Col>
        <Col span='11' offset='2'>
          <FormItem label="日期">
            <Input disabled v-model="formList.checkDate_1" placeholder="请输入日期"></Input>
          </FormItem>
        </Col>
      </Row>
      <h3>二、产品质量与控制，从抽查的两份在制品记录和两份产品质量档案进行检查，必要时增加相关项目（热处理、试板）检查。</h3>
      <Table :columns="columns" :data="tableList.table_2"></Table>
      <Row>
        <Col span='11'>
          <FormItem label="监督检查人员">
            <Input disabled v-model="formList.checker_2" placeholder="请输入监督检查人员"></Input>
          </FormItem>
        </Col>
        <Col span='11' offset='2'>
          <FormItem label="日期">
            <Input disabled v-model="formList.checkDate_2" placeholder="请输入日期"></Input>
          </FormItem>
        </Col>
      </Row>
      <h3>三、对鉴定评审机构评审情况的检查</h3>
      <Table :columns="columns" :data="tableList.table_3"></Table>
      <Row>
        <Col span='11'>
          <FormItem label="监督检查人员">
            <Input disabled v-model="formList.checker_3" placeholder="请输入监督检查人员"></Input>
          </FormItem>
        </Col>
        <Col span='11' offset='2'>
          <FormItem label="日期">
            <Input disabled v-model="formList.checkDate_3" placeholder="请输入日期"></Input>
          </FormItem>
        </Col>
      </Row>
      <h3>四、对监督检验情况的抽查</h3>
      <Table :columns="columns" :data="tableList.table_4"></Table>
      <Row>
        <Col span='11'>
          <FormItem label="监督检查人员">
            <Input disabled v-model="formList.checker_4" placeholder="请输入监督检查人员"></Input>
          </FormItem>
        </Col>
        <Col span='11' offset='2'>
          <FormItem label="日期">
            <Input disabled v-model="formList.checkDate_4" placeholder="请输入日期"></Input>
          </FormItem>
        </Col>
      </Row>
      <FormItem>
        <Button  disabled type="primary" @click="handleSubmit('boilerForm')">提交</Button>
      </FormItem>
    </Form>
  </div>
</template>
<script>
  import {biolerData} from '@/service/staticData/dBiolerData.js';
  import vFormInput from '@/components/vFormInput';
  import vFormRadio from '@/components/vFormRadio';
  import util from '@/util/util.js';
  export default {

    components: {
      vFormRadio,
      vFormInput
    },
    data() {
      return {
        formList: {

        },
        ruleformList: {
          MFname: [
            { required: true, message: '制造单位名称不能为空', trigger: 'blur' }
          ],
          principal: [
            { required: true, message: '单位负责人不能为空', trigger: 'blur' },
          ],
          licenseNo: [
            { required: true, message: '许可证不能为空', trigger: 'blur' }
          ]
        },
        tableList: biolerData,
        columns: [{
          'title': '检查项目、内容',
          'key': 'content',
          'width': 200
        }, {
          'title': '检查方法',
          'key': 'method',
          'minWidth': 100
        }, {
          'title': '要求',
          'key': 'demand',
          'minWidth': 100
        }, {
          'title': '问题说明及记录',
          'key': 'problem',
          'minWidth': 100,
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
        }]
      }
    },
    mounted() {
      console.log(this.$route.query.id);
      this.formList = {

      }

    },
    methods: {
      async handleSubmit(formName) {
        console.log(this.formList);
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$Message.success('提交成功!');
            console.log(this.formList);
          }
          else{
            this.$Message.error('提交失败!');
          }
        })
      }
    }
  }
</script>
