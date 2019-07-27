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
    <Form ref="craneForm" label-position="left" :model="formList" class="form-wrapper" :label-width="100">
      <h2>起重机械制造单位监督抽查记录表(2019版)</h2>
        <Col>
          <FormItem label="单位名称">
            <Input v-model="formList.corpnName" placeholder="请输入单位名称"></Input>
          </FormItem>
          <FormItem label="制造地址">
            <Input v-model="formList.address" placeholder="请输入制造地址"></Input>
          </FormItem>
        </Col>
        <Row>
        <Col span='11'>
          <FormItem label="单位负责人">
            <Input v-model="formList.prinpal" placeholder="请输入单位负责人"></Input>
          </FormItem>
          <FormItem label="许可证编号">
            <Input v-model="formList.licenceNo" placeholder="请输入许可证编号"></Input>
          </FormItem>
          <FormItem label="许可证有效期">
            <Input v-model="formList.licenceDate" placeholder="请输入许可证有效期"></Input>
          </FormItem>
        </Col>>
          <Col span='11' offset='1'>
            <FormItem label="联系电话">
              <Input v-model="formList.phoneNo" placeholder="请输入联系电话"></Input>
            </FormItem>
            <FormItem label="传真">
              <Input v-model="formList.fax" placeholder="请输入传真"></Input>
            </FormItem>
            <FormItem label="许可的范围">
              <Input v-model="formList.licenceRange" placeholder="请输入许可的范围"></Input>
            </FormItem>
        </Col>
          </Row>
      </Row>
      <h3>1、资源条件及管理</h3>
      <Table :columns="columns" :data="tableList.table_1" ></Table>
      <Row>
        <Table :columns="rows" :data="tableList.table_0" ></Table>
        <Col span='11'>
          <FormItem label="监督检查人员">
            <Input v-model="formList.Checker_1" placeholder=""></Input>
          </FormItem>
        </Col>
        <Col span='11' offset='1'>
          <FormItem label="日期">
          <DatePicker type="date" placeholder="Select date" v-model="formList.CheckDate_1" style="width: 300px"></DatePicker>
          </FormItem>
        </Col>
      </Row>
      <h3>2、产品质量及控制<span style='color: red'>（注：①抽查产品中应包括在制品；②抽查数量超过4台时，可另附页）</span></h3>
      <h3><strong>抽查产品A</strong></h3>
      <Row>
      <Col span='4'>
        <FormItem label="设备名称（品种）">
          <Input v-model="formList.productNameA" placeholder=""></Input>
        </FormItem>
      </Col>
      <Col span='4' offset='1'>
        <FormItem label="型号">
          <Input v-model="formList.productTypeA" placeholder=""></Input>
        </FormItem>
      </Col>
      <Col span='4' offset='2'>
        <FormItem label="出厂编号">
          <Input v-model="formList.productNoA" placeholder=""></Input>
        </FormItem>
      </Col>
      <Col span='4' offset='3'>
        <FormItem label="出厂日期">
          <DatePicker type="date" placeholder="Select date" v-model="formList.productDateA" style="width: 300px"></DatePicker>
        </FormItem>
      </Col>
      </Row>
      <h3><strong>抽查产品B</strong></h3>
      <Row>
        <Col span='4'>
          <FormItem label="设备名称（品种）">
            <Input v-model="formList.productNameB" placeholder=""></Input>
          </FormItem>
        </Col>
        <Col span='4' offset='1'>
          <FormItem label="型号">
            <Input v-model="formList.productTypeB" placeholder=""></Input>
          </FormItem>
        </Col>
        <Col span='4' offset='2'>
          <FormItem label="出厂编号">
            <Input v-model="formList.productNoB" placeholder=""></Input>
          </FormItem>
        </Col>
        <Col span='4' offset='3'>
          <FormItem label="出厂日期">
            <DatePicker type="date" placeholder="Select date" v-model="formList.productDateB" style="width: 300px"></DatePicker>
          </FormItem>
        </Col>
      </Row>
      <h3><strong>抽查产品C</strong></h3>
      <Row>
        <Col span='4'>
          <FormItem label="设备名称（品种）">
            <Input v-model="formList.productNameC" placeholder=""></Input>
          </FormItem>
        </Col>
        <Col span='4' offset='1'>
          <FormItem label="型号">
            <Input v-model="formList.productTypeC" placeholder=""></Input>
          </FormItem>
        </Col>
        <Col span='4' offset='2'>
          <FormItem label="出厂编号">
            <Input v-model="formList.productNoC" placeholder=""></Input>
          </FormItem>
        </Col>
        <Col span='4' offset='3'>
          <FormItem label="出厂日期">
            <DatePicker type="date" placeholder="Select date" v-model="formList.productDateC" style="width: 300px"></DatePicker>
          </FormItem>
        </Col>
      </Row>
      <h3><strong>抽查产品D</strong></h3>
      <Row>
        <Col span='4'>
          <FormItem label="设备名称（品种）">
            <Input v-model="formList.productNameD" placeholder=""></Input>
          </FormItem>
        </Col>
        <Col span='4' offset='1'>
          <FormItem label="型号">
            <Input v-model="formList.productTypeD" placeholder=""></Input>
          </FormItem>
        </Col>
        <Col span='4' offset='2'>
          <FormItem label="出厂编号">
            <Input v-model="formList.productNoD" placeholder=""></Input>
          </FormItem>
        </Col>
        <Col span='4' offset='3'>
          <FormItem label="出厂日期">
            <DatePicker type="date" placeholder="Select date" v-model="formList.productDateD" style="width: 300px"></DatePicker>
          </FormItem>
        </Col>
      </Row>
      <Table :columns="columns" :data="tableList.table_2" ></Table>
      <Row>
        <Table :columns="rows"  :data="tableList.table_0" ></Table>
        <Col span='11'>
          <FormItem label="监督检查人员">
            <Input v-model="formList.Checker_2" placeholder=""></Input>
          </FormItem>
        </Col>
        <Col span='11' offset='1'>
          <FormItem label="日期">
            <DatePicker type="date" placeholder="Select date" v-model="formList.CheckDate_2" style="width: 300px"></DatePicker>
          </FormItem>
        </Col>
      </Row>
      <FormItem>
        <Button type="primary" @click="handleSubmit">Submit</Button>
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
        tableList: craneData,
        columns: [{
          'title': '检查项目、内容与要求',
          'key': 'content',
          'width': 200
        }, {
          'title': '检查方法',
          'key': 'method',
          'minWidth': 100
        }, {
          'title': '对应条款',
          'key': 'demand',
          'minWidth': 100
        }, {
          'title': '问题说明及记录',
          'key': 'explain',
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
        }],
        rows: [  {
          'title': '问题记录（包括未在“检查内容”栏目中列出的其他项目及其问题）：',
          'key': 'explain',
          // 'minWidth': 100,
          render: (h, params) => {
            return h(vFormInput, {
              props: {
                formList: this.formList,
                formKey: params.row.id,
              }
            })
          }
        },
          ]
      }
    },
    mounted() {

    },
    methods: {
      async handleSubmit() {
        /*
        let data = {
          method: 'post',
          params: this.formList,
          url: '/parrot/',
        }
        let res = await util.httpReq(data);
        */
        console.log(this.formList);
        this.$refs.craneForm.validate((valid) => {
          if (valid) {
            console.log(this.formList);
          }
        })
      }
    }
  }
</script>
