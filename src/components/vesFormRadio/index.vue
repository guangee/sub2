<style scoped>
  .radio {
    margin-left: -100px;
  }
</style>
<template>
  <FormItem>
    <RadioGroup  v-model="formList['esResult_' + formKey]" class="radio" vertical>
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
    props: ['formList', 'formKey','isdisable']
  }
</script>
