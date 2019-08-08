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
</style>
<template>
  <div>
    <Form ref="boilerForm" label-position="left" :model="formList" :rules="ruleformList" class="form-wrapper" :label-width="100">
      <h2>锅炉压力容器制造单位监督检查记录表</h2>
      <Form :model="formList" label-position="right" :label-width="100">
      <Row>
      <Col span="11" offset="13">
      <FormItem label="编号" >
        <Input v-model="formList.serialNo"  label-position="left" placeholder="请输入编号"   style="width: 300px"  ></Input>
      </FormItem>
      </Col>
      </Row>
      </Form>
      <Row>
        <Col span='11'>
          <FormItem label="制造单位名称" prop="corpnName">
            <Input v-model="formList.corpnName" placeholder="请输入制造单位名称"></Input>
          </FormItem>
          <FormItem label="单位负责人" prop="prinpal">
            <Input v-model="formList.prinpal" placeholder="请输入单位负责人名字"></Input>
          </FormItem>
          <FormItem label="许可证编号"prop="licenceNo" >
            <Input v-model="formList.licenceNo" placeholder="请输入许可证编号"></Input>
          </FormItem>
          <FormItem label="评审机构名称">
            <Input v-model="formList.eiName" placeholder="请输入评审机构名称"></Input>
          </FormItem>
          <FormItem label="监督检验机构">
            <Input v-model="formList.supervisionOrg" placeholder="请输入监督检验机构"></Input>
          </FormItem>
        </Col>
        <Col span='11' offset='2'>
          <FormItem label="制造单位地址">
            <Input v-model="formList.mfAdd" placeholder="请输入制造单位地址"></Input>
          </FormItem>
          <FormItem label="联系电话">
            <Input v-model="formList.phoneNo" placeholder="请输入负责人联系电话"></Input>
          </FormItem>
          <Row>
            <Col span='12'>
            <FormItem label="许可范围">
              <Input v-model="formList.licenseRange" placeholder="请输入许可范围"></Input>
            </FormItem>
            </Col>
            <Col span='12'>
              <FormItem label="许可证有效期">
                <Input v-model="formList.licenseDate" placeholder="请输入许可证有效期"></Input>
              </FormItem>
            </Col>
          </Row>
          <FormItem label="最近一次评审日期">
            <Input v-model="formList.lastDate" placeholder="请输入最近一次评审日期"></Input>
          </FormItem>
          <FormItem label="监督检查人">
            <Input v-model="formList.supervisor" placeholder="监督检查人"></Input>
          </FormItem>
        </Col>
      </Row>
      <h3>一、基本条件与管理，主要核查企业提供的相关资料，必要时现场核查</h3>
      <Table :columns="columns" :data="tableList.table_1"></Table>
      <Row>
        <Col span='11'>
          <FormItem label="监督检查人员" >
            <Input v-model="formList.checker_1" placeholder="请输入监督检查人员"></Input>
          </FormItem>
        </Col>
        <Col span='11' offset='2'>
          <FormItem label="日期">
            <DatePicker type="date" placeholder="Select date" v-model="formList.checkDate_1" style="width: 300px"></DatePicker>
          </FormItem>
        </Col>
      </Row>
      <h3>二、产品质量与控制，从抽查的两份在制品记录和两份产品质量档案进行检查，必要时增加相关项目（热处理、试板）检查。</h3>
      <Table :columns="columns" :data="tableList.table_2"></Table>
        <Row>
          <Col span='11'>
            <FormItem label="监督检查人员">
              <Input v-model="formList.checker_2" placeholder="请输入监督检查人员"></Input>
            </FormItem>
          </Col>
          <Col span='11' offset='2'>
            <FormItem label="日期">
              <DatePicker type="date" placeholder="Select date" v-model="formList.checkDate_2" style="width: 300px"></DatePicker>
            </FormItem>
          </Col>
        </Row>
      <h3>三、对鉴定评审机构评审情况的检查</h3>
      <Table :columns="columns" :data="tableList.table_3"></Table>
      <Row>
        <Col span='11'>
          <FormItem label="监督检查人员">
            <Input v-model="formList.checker_3" placeholder="请输入监督检查人员"></Input>
          </FormItem>
        </Col>
        <Col span='11' offset='2'>
          <FormItem label="日期">
            <DatePicker type="date" placeholder="Select date" v-model="formList.checkDate_3" style="width: 300px"></DatePicker>
          </FormItem>
        </Col>
      </Row>
      <h3>四、对监督检验情况的抽查</h3>
      <Table :columns="columns" :data="tableList.table_4"></Table>
      <Row>
        <Col span='11'>
          <FormItem label="监督检查人员">
            <Input v-model="formList.checker_4" placeholder="请输入监督检查人员"></Input>
          </FormItem>
        </Col>
        <Col span='11' offset='2'>
          <FormItem label="日期">
            <DatePicker type="date" placeholder="Select date" v-model="formList.checkDate_4" style="width: 300px"></DatePicker>
          </FormItem>
        </Col>
      </Row>
      <FormItem>
        <Button  type="primary" @click="handleSubmit('boilerForm')">提交</Button>
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
        formList: {},
        ruleformList: {
            corpnName: [
            { required: true, message: '制造单位名称不能为空', trigger: 'blur' }
          ],
            prinpal: [
            { required: true, message: '单位负责人不能为空', trigger: 'blur' },
          ],
            licenceNo: [
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
              },
            })
          }
        }]
      }
    },
    mounted() {
      if (this.$route.query.modify === 0) {
          this.getFormList();
      }
    },
    methods: {
      handleSubmit(formName) {
        this.$refs[formName].validate(async (valid) => {
          if (valid) {
            if (this.$route.query.modify === 0) {
              let data = {
                method: 'put',
                params: this.formList,
                url: '/boiler/change',
              };
              let res = await util.httpReq(data);
              this.$Message.success('修改成功!');
            } else {
              let data = {
                method: 'post',
                params: this.formList,
                url: '/boiler/add',
              };
              let res = await util.httpReq(data);
              this.$Message.success('提交成功!');
            }
          }
          else{
            this.$Message.error('表单验证失败!');
          }
        })
      },
      async getFormList(){
        let data = {
          params: {
            id: this.$route.query.id
          },
          method: 'get',
          url: '/boiler/check',
        }
        let res = await util.httpReq(data);
        this.formList = res;
      }
    }
  }
</script>
