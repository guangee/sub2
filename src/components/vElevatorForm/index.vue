<template>
  <div>
  <p>制造厂房和仓库面积应符合下表要求（垂直梯与自动扶梯单独核算面积）：试验井道与厂房、仓库不在同一地址的，试验井道所在地址应当作为制造地址</p>
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
                        key: 'name'
                    },
                    {
                        title: '厂房和仓库建筑面积(m2)',
                        key: 'age'
                    },

                ],
                data1: [
                    {
                        name: '曳引驱动乘客电梯(A1)',
                        age: 6000,
                    },
                    {
                        name: '曳引驱动乘客电梯(A2)',
                        age: 4000,
                    },
                    {
                        name: '曳引驱动乘客电梯(B)、载货电梯',
                        age: 2000,
                    },
                    {
                        name: '自动扶梯与自动人行道',
                        age: 5000,
                    },
                    {
                        name: '杂物电梯',
                        age: 800,
                    }
                ]
            }
        }
    }
</script>


<style scoped>

</style>
