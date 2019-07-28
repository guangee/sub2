<template>
  <div>
  <p>4.1检测仪器：在法定计量合格期限内，不允许租赁(1)电梯振动和起制动加减速度测试仪器 (2)绝缘电阻检测仪器、交直流电压检测仪器、交直流电流检测仪器(3)转速或者速度检测仪器、噪声检测仪器、照度测量仪器、温度及温升测量仪器、计时器具(4)物体质量(重量)称量器具(5)推力及拉力测量器具、紧固件扭矩测量器具(6)金属和橡胶硬度检测仪器、表面粗糙度检测器具(7)漆膜(涂层)厚度测量器具、金属厚度测量器具(8)钢丝绳探伤仪器(9)钢丝绳张力测试仪器(10)接地电阻测试仪器、激光测距仪(11)耐电压检测仪器(12)液压系统压力测量仪器</p>
    <Table border :columns="columns1" :data="data1"></Table>
  </div>
</template>
<script>
    export default {
        props: ['formList', 'formKey'],
        data () {
            return {
                columns1: [
                    {
                        title: '许可子项目',
                        key: 'project'
                    },
                    {
                        title: '制造',
                        key: 'made'
                    },
                    {
                        title: '安装',
                        key: 'install'
                    }

                ],
                data1: [
                    {
                        project: 'A1',
                        made: '(1)～(11)',
                        install:'(1)～(5)(8)～(10)',
                    },
                    {
                        project: 'A2、B',
                        made: '(1)～(7)(10)(11)',
                        install:'(1)～(5)(9)(10)（B不含(9)）',
                    },
                    {
                        project: '载货/自动扶梯/人行道',
                        made: '(2)～(7)(10)(11)',
                        install:'(2)～(5)(10)',
                    },
                    {
                        project: '液压驱动电梯',
                        made: '(2)～(7)(10～(12)',
                        install:'(2)～(5)(10)(12)',
                    },
                    {
                        project: '杂物电梯',
                        made: '(2)～(5)(7)(10)(11)',
                        install:'(2)～(5)(10)',
                    }
                ]
            }
        }
    }
</script>


<style scoped>

</style>
