<style scoped>
  .form-input {
    width: 150%;
    margin-left: -100px;
    margin-top: 20px;
  }
</style>
<template>
  <FormItem>
    <Input v-model="formList['question' + formKey]" type="textarea" class="form-input"
      :autosize="{minRows: 5,maxRows: 5}" placeholder=""></Input>
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
