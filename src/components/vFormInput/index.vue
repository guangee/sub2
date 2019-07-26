<style scoped>
  .form-input {
    width: 150%;
    margin-left: -100px;
    margin-top: 20px;
  }
</style>
<template>
  <FormItem>
    <Input v-model="formList['question_' + formKey]" type="textarea" class="form-input"
      :autosize="{minRows: 5,maxRows: 5}" placeholder="请输入问题说明及记录"></Input>
  </FormItem>
</template>
<script>
  export default {
    props: ['formList', 'formKey'],
    data() {
      return {
      }
    }
  }
</script>
