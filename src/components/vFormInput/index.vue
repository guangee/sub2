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
>>>>>>> 95276ccb3403b8c8e79f6e3ae60871df1268b9ed
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
