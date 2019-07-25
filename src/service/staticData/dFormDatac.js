import vFormInput from '@/components/vFormInput';
import vFormRadio from '@/components/vFormRadio';
export const formColumn = {
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
export const formRow ={
  rows:[{
      'title': '问题记录（包括未在“检查内容”栏目中列出的其他项目及其问题）：',
      'key': 'Result',
      // 'minWidth': 100,
      render: (h, params) => {
        return h(vFormInput), {
          props: {
            formList: this.formList,
          },
        }
      }
    },
    {
      'title': '监督检查人员：',
      'key': 'Result',
      // 'minWidth': 100,
      render: (h, params) => {
        return h(vFormInput), {
          props: {
            formList: this.formList,
          },
        }
      }
    },
    {
      'title': '日期：',
      'key': 'Result',
      // 'minWidth': 100,
      render: (h, params) => {
        return h(vFormInput), {
          props: {
            formList: this.formList,
          },
        }
      }
    },
  ]
}
