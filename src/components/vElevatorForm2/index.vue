<template>
  <div>
  <p>4.2试验装置：制造(1)控制柜功能检测装置；(2)限速器动作速度测试装置；(3)门摆锤冲击试验装置；(4)制动器可靠性试验装置；(5)限速器静态提拉力测试装置；(6)门锁装置可靠性试验装置；(7)盐雾试验设备；(8)高低温试验设备；(9)紫外线老化试验设备；(10)液压泵站的电磁阀可靠性测试装置；(11)梯级(踏板)滚轮可靠性试验装置；(12)制动距离和制动减速度检测设备；(13)运行速度检测设备</p>
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
                        title: '试验装置',
                        key: 'install'
                    },

                ],
                data1: [
                    {
                        project: 'A1',
                        install: '(1)～(9)',
                    },
                    {
                        project: 'A2、B',
                        install: '(1)～(4)',
                    },
                    {
                        project: '载货电梯',
                        install: '(1)、(2)',
                    },
                    {
                        project: '液压电梯',
                        install: '(1)、(10)',
                    },
                    {
                        project: '杂物电梯',
                        install: '(1)',
                    },
                    {
                        project: '自动扶梯与自动人行道',
                        install: '(1)、(4)、(11)～(13)',
                    }
                ]
            }
        }
    }
</script>


<style scoped>

</style>
