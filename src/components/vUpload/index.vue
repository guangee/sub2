<template>
  <Upload v-model="formList['question_' + formKey]"
    multiple
    action="//jsonplaceholder.typicode.com/posts/">
    <i-button type="ghost" icon="ios-cloud-upload-outline">上传文件</i-button>
  </Upload>
</template>
<script>
  export default {
    props: ['formList', 'formKey'],

  }
</script>
