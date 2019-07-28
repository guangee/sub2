<style scoped>
</style>
<template>
  <div>
    <div>表单详情</div>
    <div>
      <Form >
        <Table></Table>
      </Form>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        new_List:{
      },
        new_tableList:{

        },
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
            return h(vFormInput), {
              props: {
                formList: this.formList,
              },
            }
          }
        }, {
          'title': '检查结果',
          'key': 'Result',
          'minWidth': 100,
          render: (h, params) => {
            return h('v-formRadio', {
              props: this.formList,
            })
          }
        }]

      }
    },
    mounted() {

    }
  }
</script>
