<style scoped>
  .radio {
    margin-left: -100px;
  }
</style>
<template>
  <FormItem>
    <RadioGroup  v-model="formList[key]" class="radio" vertical>
      <Radio label="符合" :disabled="isdisable"></Radio>
      <Radio label="不符合" :disabled="isdisable"></Radio>
      <Radio label="有缺陷" :disabled="isdisable"></Radio>
      <Radio label="无此项" :disabled="isdisable"></Radio>
    </RadioGroup>
  </FormItem>
</template>
<script>
  export default {
    name: 'vFormRadio',
    props: ['formList', 'formKey','isdisable'],
    data() {
      return {
        key: '',
      }
    },
    mounted() {
      if (this.$route.name === 'elevatorcheck' || this.$route.name === 'elevatorForm') {
        this.key = this.formKey.slice(0,2) + 'Result_' + this.formKey.slice(2);
      } else {
        this.key = 'result_' + this.formKey;
      }
    }
  }
</script>
