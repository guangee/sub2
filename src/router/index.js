import Vue from 'vue';
import Router from 'vue-router';
import Main from '@/page/main.vue';

const Login = r => require.ensure([], () => r(require('@/page/login')), 'Login');
const FormList = r => require.ensure([], () => r(require('@/page/formList')), 'FormList');
const BoilerForm = r => require.ensure([], () => r(require('@/page/boilerForm')), 'BoilerForm');
const CraneForm = r => require.ensure([], () => r(require('@/page/craneForm')), 'CraneForm');
const ElevatorForm = r => require.ensure([], () => r(require('@/page/elevatorForm')), 'ElevatorForm');
const ElevatorMaintainForm = r => require.ensure([], () => r(require('@/page/elevatorMaintainForm')), 'ElevatorMaintainForm');
const FormDetail = r => require.ensure([], () => r(require('@/page/formDetail')), 'FormDetail');

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login,
    }, {
      path: '/',
      name: 'Main',
      component: Main,
      meta: {
        label: '登记审核首页',
        requireAuth: true
      },
      children: [{
        path: '/formList',
        name: 'formList',
        meta: {
          label: '表单列表',
          requireAuth: true
        },
        component: FormList,
      }, {
        path: '/formDetail',
        name: 'formDetail',
        meta: {
          label: '表单详情',
          requireAuth: true
        },
        component: FormDetail,
      }, {
        path: '/boilerForm',
        name: 'boilerForm',
        meta: {
          label: '锅炉表单',
          requireAuth: true
        },
        component: BoilerForm,
      }, {
        path: '/craneForm',
        name: 'craneForm',
        meta: {
          label: '起重机械表单',
          requireAuth: true
        },
        component: CraneForm,
      }, {
        path: '/elevatorForm',
        name: 'elevatorForm',
        meta: {
          label: '电梯表单',
          requireAuth: true
        },
        component: ElevatorForm,
      }, {
        path: '/elevatorMaintainForm',
        name: 'elevatorMaintainForm',
        meta: {
          label: '电梯维保表单',
          requireAuth: true
        },
        component: ElevatorMaintainForm,
      }]
    }]
})
