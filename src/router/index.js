import Vue from 'vue';
import Router from 'vue-router';
import Main from '@/page/main.vue';
import iView from 'iview';

const Login = r => require.ensure([], () => r(require('@/page/login')), 'Login');
const FormList = r => require.ensure([], () => r(require('@/page/formList')), 'FormList');
const BoilerForm = r => require.ensure([], () => r(require('@/page/boilerForm')), 'BoilerForm');
const CraneForm = r => require.ensure([], () => r(require('@/page/craneForm')), 'CraneForm');
const ElevatorForm = r => require.ensure([], () => r(require('@/page/elevatorForm')), 'ElevatorForm');
const KeeperForm =r => require.ensure([], () => r(require('@/page/keeperForm')), 'KeeperForm');
const BoilerCheck = r => require.ensure([], () => r(require('@/page/boilercheck')), 'boilercheck');
const CraneCheck = r => require.ensure([], () => r(require('@/page/cranecheck')), 'boilercheck');
const ElevatorCheck = r => require.ensure([], () => r(require('@/page/elevatorcheck')), 'boilercheck');
const AddUser = r => require.ensure([], () => r(require('@/page/AddUser')), 'AddUser');
const KeeperCheck = r => require.ensure([], () => r(require('@/page/keepercheck')), 'keepercheck');



Vue.use(Router);
const router = new Router({
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
        path: '/boilerForm',
        name: 'boilerForm',
        meta: {
          label: '锅炉表单',
          requireAuth: true
        },
        component: BoilerForm,
      }, {
        path: '/boilercheck',
        name: 'boilercheck',
        meta: {
          label: '锅炉表单详情',
          requireAuth: true
        },
        component: BoilerCheck,
      }, {
        path: '/craneForm',
        name: 'craneForm',
        meta: {
          label: '起重机械表单',
          requireAuth: true
        },
        component: CraneForm,
      }, {
        path: '/cranecheck',
        name: 'cranecheck',
        meta: {
          label: '起重机械表单详情',
          requireAuth: true
        },
        component: CraneCheck,
      }, {
        path: '/elevatorForm',
        name: 'elevatorForm',
        meta: {
          label: '电梯表单',
          requireAuth: true
        },
        component: ElevatorForm,

      }, {
        path: '/elevatorcheck',
        name: 'elevatorcheck',
        meta: {
          label: '电梯表单详情',
          requireAuth: true
        },
        component: ElevatorCheck,
      }, {
        path: '/keeperForm',
        name: 'keeperForm',
        meta: {
          label: '电梯维修表单',
          requireAuth: true
        },
        component: KeeperForm,

      }, {
        path: '/keepercheck',
        name: 'keepercheck',
        meta: {
          label: '电梯维修表单详情',
          requireAuth: true
        },

        component: KeeperCheck,
      }, {
        path: '/addUser',
        name: 'addUser',
        meta: {
          label: '添加与修改用户',
          requireAuth: true
        },
        component: AddUser,
      },,]
    }]
  });





router.beforeEach((to, from, next) => {
  if (to.matched.some(res => res.meta.requireAuth)) {
    if (sessionStorage.getItem('authorization')) {// 判断是否登录
      iView.LoadingBar.start();
      window.document.title = '登记审核系统——' + to.meta.label;
      next()
    } else {// 没登录则跳转到登录界面
      next({
        path: '/login',
      })
    }
  } else {
    next()
  }
});
router.afterEach(() => {
  iView.LoadingBar.finish();
  window.scrollTo(0, 0);

});
export default router;
