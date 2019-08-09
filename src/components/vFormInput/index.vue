<style scoped>
  .form-input {
    width: 150%;
    margin-left: -100px;
    margin-top: 20px;
  }
</style>
<template>
  <FormItem>
    <Input :disabled="isdisable" v-model="formList[key]" type="textarea" class="form-input" :autosize="{minRows: 5,maxRows: 5}" placeholder="请输入问题说明及记录"></Input>
  </FormItem>
</template>
<script>
  export default {
    props: ['formList', 'formKey','isdisable'],
    data() {
      return {
        key: '',
      }
    },
    mounted() {
      if (this.$route.name === 'elevatorcheck' || this.$route.name === 'elevatorForm') {
        this.key = this.formKey.slice(0,2) + 'Record_' + this.formKey.slice(2);
      } else {
        this.key = 'problem_' + this.formKey;
      }
    }
  }
</script>
