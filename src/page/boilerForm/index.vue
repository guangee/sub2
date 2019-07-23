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
    <Form ref="boilerForm" label-position="left" :model="formList" class="form-wrapper" :label-width="100">
      <h2>锅炉压力容器制造单位监督检查记录表</h2>
      <Row>
        <Col span='11'>
          <FormItem label="制造单位名称">
            <Input v-model="formList.manufactureComName" placeholder="请输入制造单位名称"></Input>
          </FormItem>
          <FormItem label="单位负责人">
            <Input v-model="formList.admin" placeholder="请输入单位负责人名字"></Input>
          </FormItem>
        </Col>
        <Col span='11' offset='2'>
          <FormItem label="制造单位地址">
            <Input v-model="formList.manufactureComAddr" placeholder="请输入制造单位地址"></Input>
          </FormItem>
          <FormItem label="联系电话">
            <Input v-model="formList.adminPhone" placeholder="请输入负责人联系电话"></Input>
          </FormItem>
        </Col>
      </Row>
      <h3>一、基本条件与管理，主要核查企业提供的相关资料，必要时现场核查</h3>
      <Table :columns="columns" :data="tableList.table_1"></Table>
      <h3>二、产品质量与控制，从抽查的两份在制品记录和两份产品质量档案进行检查，必要时增加相关项目（热处理、试板）检查。</h3>

      <h3>三、对鉴定评审机构评审情况的检查</h3>

      <h3>四、对监督检验情况的抽查</h3>
      <FormItem>
        <Button type="primary" @click="handleSubmit">Submit</Button>
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
        }]
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
        this.$refs.boilerForm.validate((valid) => {
          if (valid) {
            console.log(this.formList);
          }
        })
      }
    }
  }
</script>