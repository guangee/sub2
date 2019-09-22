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
  p {
    text-align: left;
    margin-bottom:5px;
  }
</style>
<template>
  <div>
    <button style="position:absolute;right:10px" type="button" class="btn btn-primary"v-on:click="getPdf()">导出PDF</button>
  <div class="row" id="pdfDom" style="padding-top: 55px;background-color:#fff;">
    <Form ref="keeperForm" label-position="left" :model="formList" :rules="ruleformList" class="form-wrapper" :label-width="100">
      <h2>电梯安装维保单位监督检查记录表</h2>
      <Col>
        <FormItem label="单位名称" prop="corpnName">
          <Input readonly="true" v-model="formList.corpnName" placeholder="请输入单位名称"></Input>
        </FormItem>
        <FormItem label="现场地址" prop="address">
          <Input readonly="true" v-model="formList.address" placeholder="请输入现场地址"></Input>
        </FormItem>
      </Col>
      <Row>
        <Col span='11'>
          <FormItem label="单位负责人" prop="prinpal">
            <Input readonly="true" v-model="formList.prinpal" placeholder="请输入单位负责人"></Input>
          </FormItem>
          <FormItem label="许可证编号" prop="licenceNo">
            <Input readonly="true" v-model="formList.licenceNo" placeholder="请输入许可证编号"></Input>
          </FormItem>
          <FormItem label="评审机构名称" prop="accreditation">
            <Input readonly="true" v-model="formList.reviewName" placeholder="请输入评审机构名称"></Input>
          </FormItem>
        </Col>
        <Col span='11' offset='2'>
          <FormItem label="联系电话" prop="phoneNo">
            <Input readonly="true" v-model="formList.phoneNo" placeholder="请输入联系电话"></Input>
          </FormItem>
          <FormItem label="许可证有效期" prop="licenceDate">
            <Input readonly="true" v-model="formList.licenceDate" placeholder="请输入许可证有效期"></Input>
          </FormItem>
          <FormItem label="评审时间" prop="accredTime">
            <Input readonly="true" v-model="formList.reviewDate" placeholder="请输入评审时间"></Input>
          </FormItem>
        </Col>
      </Row>
	  <Col>
        <FormItem label="许可的范围" prop="licenceRange">
          <Input readonly="true" v-model="formList.licenceRange" placeholder="请输入许可的范围"></Input>
        </FormItem>
        <FormItem label="监督检查抽查范围" prop="checkTime">
          <Input readonly="true" v-model="formList.reviewRange" placeholder="请输入监督检查抽查范围"></Input>
        </FormItem>
      </Col>

      <h3>1.资源条件</h3>
      <Table :columns="columns1" :data="tableList.table_1" ></Table>
      <h3>2.经营情况</h3>
      <Table :columns="columns1" :data="tableList.table_2" ></Table>
      <h3>3.质量管理体系运行情况</h3>
      <Table :columns="columns1" :data="tableList.table_3" ></Table>
      <h3>4.安装维保人员控制</h3>
      <Table :columns="columns1" :data="tableList.table_4" ></Table>
	  <h3>5.安装、维保作业质量控制</h3>
	  <Table :columns="columns1" :data="tableList.table_5" ></Table>
	  <h3>6.服务形象（不作为不符合项）</h3>
	  <Table :columns="columns1" :data="tableList.table_6" ></Table>
	  <Row>
        <Form :model="formList" label-position="right" >
          <FormItem label="问题记录（包括未在“检查项目、内容与要求”栏目中列出的其他项目及其问题）：">
            <Input readonly="true" v-model="formList.problemRecord_1" type="textarea":autosize="{minRows: 5,maxRows: 10}" placeholder=""></Input>
          </FormItem>
        </Form>
        <Col span='11'>
          <FormItem label="监督检查人员">
            <Input readonly="true" v-model="formList.checkPerson_1" placeholder=""></Input>
          </FormItem>
        </Col>
        <Col span='11' offset='2'>
          <FormItem label="日期">
            <DatePicker readonly="true" type="date" placeholder="Select date" v-model="formList.checkDate_1" style="width: 333px"></DatePicker>
          </FormItem>
        </Col>
      </Row>
      <h2>安装维保单位监督检查记录表（仅适用于安装单位）</h2>
	  <h3>7.现场安装质量</h3>
	  <Table :columns="columns1" :data="tableList.table_7" ></Table>
	  <Row>
        <Form :model="formList" label-position="right" >
          <FormItem label="问题记录（包括未在“检查项目、内容与要求”栏目中列出的其他项目及其问题）：">
            <Input readonly="true" v-model="formList.problemRecord_2" type="textarea":autosize="{minRows: 5,maxRows: 10}" placeholder=""></Input>
          </FormItem>
        </Form>
        <Col span='11'>
          <FormItem label="监督检查人员">
            <Input readonly="true" v-model="formList.checkPerson_2" placeholder=""></Input>
          </FormItem>
        </Col>
        <Col span='11' offset='2'>
          <FormItem label="日期">
            <DatePicker readonly="true" type="date" placeholder="Select date" v-model="formList.checkDate_2" style="width: 333px"></DatePicker>
          </FormItem>
        </Col>
      </Row>
      <h2>安装维保单位监督检查记录表（仅适用于维保单位）</h2>
	  <h3>8.现场维保质量</h3>
	  <Table :columns="columns1" :data="tableList.table_8" ></Table>
      <Row>
        <Form :model="formList" label-position="right" >
          <FormItem label="问题记录（包括未在“检查项目、内容与要求”栏目中列出的其他项目及其问题）：">
            <Input readonly="true" v-model="formList.problemRecord_3" type="textarea":autosize="{minRows: 5,maxRows: 10}" placeholder=""></Input>
          </FormItem>
        </Form>
        <Col span='11'>
          <FormItem label="监督检查人员">
            <Input readonly="true" v-model="formList.checkPerson_3" placeholder=""></Input>
          </FormItem>
        </Col>
        <Col span='11' offset='2'>
          <FormItem label="日期">
            <DatePicker readonly="true" type="date" placeholder="Select date" v-model="formList.checkDate_3" style="width: 333px"></DatePicker>
          </FormItem>
        </Col>
      </Row>
      <h2>安装维保单位监督检查记录表</h2>
	  <Table :columns="columns1" :data="tableList.table_9" ></Table>
      <Form :model="formList" label-position="right" >
        <FormItem label="问题记录（包括未在“检查项目、内容与要求”栏目中列出的其他项目及其问题）：">
          <Input  readonly="true"  v-model="formList.problemRecord_4" type="textarea":autosize="{minRows: 5,maxRows: 10}" placeholder=""></Input>
        </FormItem>
      </Form>
	  <h3>10.安装维保单位反映的问题</h3>
      <Row>
        <Form :model="formList" label-position="right" >
            <Input readonly="true" v-model="formList.reProblem_1" type="textarea":autosize="{minRows: 5,maxRows: 10}" placeholder=""></Input>
        </Form>
      </Row>
	  <h3>11.当地安全监察机构反映的问题</h3>
	  <Row>
        <Form :model="formList" label-position="right" >
            <Input readonly="true" v-model="formList.reProblem_2" type="textarea":autosize="{minRows: 5,maxRows: 10}" placeholder=""></Input>
        </Form>
		<Col span='11'>
          <FormItem label="监督检查人员">
            <Input readonly="true" v-model="formList.checkPerson_4" placeholder=""></Input>
          </FormItem>
        </Col>
        <Col span='11' offset='2'>
          <FormItem label="日期">
            <DatePicker readonly="true" type="date" placeholder="Select date" v-model="formList.checkDate_4" style="width: 333px"></DatePicker>
          </FormItem>
        </Col>
      </Row>
	</Form>
  </div>
  </div>
</template>
<script>
    import {elevatorDatac} from '@/service/staticData/dElevatorDatac.js';
    import vKeeperForm from '@/components/vKeeperForm';
    import util from '@/util/util.js';
    export default {
        components: {
            vKeeperForm,
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
                tableList: elevatorDatac,
                columns1: [{
                    'title': '检查项目、内容与要求',
                    'key': 'content',
                    'minWidth': 200,
                }, {
                    'title': '检查方法',
                    'key': 'method',
                    'minWidth': 200,
                }, {
                    'title': '检查结果及问题说明',
                    'key': 'Result',
                    'minWidth': 100,
                    render: (h, params) => {
					return h(vKeeperForm, {
					props: {
						formList: this.formList,
						formKey: params.row.id,
						readonly :true
              }
            })
          }
                }],
                htmlTitle: '页面导出PDF文件名',
		}},
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
                  url: '/keeper/check',
              };
              let res = await util.httpReq(data);
              this.formList = res;
          }
      }
  }
</script>
