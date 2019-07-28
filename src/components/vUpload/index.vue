<template>
  <Upload v-model="formList['RCRecord_' + formKey]"
    multiple
    action="//jsonplaceholder.typicode.com/posts/">
    <button type="ghost" icon="ios-cloud-upload-outline">上传文件</button>
  </Upload>
</template>
<script>
  export default {
    props: ['formList', 'formKey'],

  }
</script>
