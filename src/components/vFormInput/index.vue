<style scoped>
  .form-input {
    width: 150%;
    margin-left: -100px;
    margin-top: 20px;
  }
</style>
<template>
  <FormItem>
<<<<<<< HEAD

    <Input :disabled="isdisable" v-model="formList['question_' + formKey]" type="textarea" class="form-input" :autosize="{minRows: 5,maxRows: 5}" placeholder="请输入问题说明及记录"></Input>

=======
    <Input :disabled="isdisable" v-model="formList['question_' + formKey]" type="textarea" class="form-input" :autosize="{minRows: 5,maxRows: 5}" placeholder="请输入问题说明及记录"></Input>
>>>>>>> 878c5735b5a868a72b38b5c94b632e2c57118fe8
  </FormItem>
</template>
<script>
  export default {
    props: ['formList', 'formKey','isdisable'],
    data() {
      return {
      }
    }
  }
</script>
