<template>
  <div>
    <p>任命文件：</p>
    <div class="demo-upload-list" v-for="(item, index) in uploadList" :key="key + index">
      <div>
        <img :src="'/api/upload/getPic?id=' + item">
        <div class="demo-upload-list-cover">
          <Icon type="ios-eye-outline" @click.native="handleView(item)"></Icon>
          <Icon type="ios-trash-outline" @click.native="handleRemove(item, index)"></Icon>
        </div>
      </div>
    </div>
    <Upload
      ref="upload" name="file"
      :show-upload-list="false"
      :on-success="handleSuccess"
      :format="['jpg','jpeg','png']"
      :max-size="2048"
      :on-format-error="handleFormatError"
      :on-exceeded-size="handleMaxSize"
      :before-upload="handleBeforeUpload"
      multiple
      type="drag"
      action="api/upload/uploadPic"
      style="display: inline-block;width:70px;">
      <div style="width: 58px;height:58px;line-height: 58px;">
        <Icon type="ios-camera" size="40"></Icon>
      </div>
    </Upload>
    <Modal title="查看大图" v-model="visible">
      <img :src="'api/upload/getPic?id='+ modalImgId" v-if="visible" style="width: 100%">
    </Modal>
  </div>
</template>
<script>
    import util from '@/util/util.js';
    export default {
        props: ['formList', 'formKey','url','fileId'],
        data () {
            return {
              key: '',
              visible: false,
              uploadList: [],
              modalImgId: '',
            }
        },
        watch:{   // 使用监听的方式，监听数据的变化
          formList(newVal, oldVal){
            if(newVal[this.key]) {
              this.uploadList = newVal[this.key];
            }
          }
        },
        methods: {
          handleView (id) {
            this.modalImgId = id;
            this.visible = true;
          },
          async handleRemove (id, index) {
            let data = {
              params: {
                id: id,
              },
              method: 'get',
              url: 'upload/deletePic',
            };
            let res = await util.httpReq(data);
            // 防止 删除失败的发生
            if (res === 'success') {
              this.uploadList.splice(index, 1);
              this.formList[this.key].splice(index, 1);
              this.$Message.success('删除成功');
            } else {
              this.$Message.error('删除失败，请稍后再试');
            }
          },

          async handleSuccess (response, file) {
            this.uploadList = this.uploadList.concat(response.fileId);
            if (!this.formList[this.key]) {
              this.formList[this.key] = [];
            }
            this.formList[this.key] = this.formList[this.key].concat(response.fileId);
            //将后台提供的接口push到数组上
          },

          handleFormatError (file) {
            this.$Notice.warning({
              title: '文件格式不正确',
              desc: '文件 ' + file.name + ' 格式不正确，请上传 jpg 或 png 格式的图片。'
            });
          },
          handleMaxSize (file) {
            this.$Notice.warning({
              title: '超出文件大小限制',
              desc: '文件 ' + file.name + ' 太大，不能超过 2M。'
            });
          },
          handleBeforeUpload () {
            const check = this.uploadList.length < 5;
            if (!check) {
              this.$Notice.warning({
                title: '最多只能上传 5 张图片。'
              });
            }
            return check;
          }
        },
        mounted () {
          //rcPicture_2_1
          this.key = this.formKey.slice(0,2) + 'Picture_' + this.formKey.slice(2);
        }
    }
</script>
<style>
  .demo-upload-list{
    display: inline-block;
    width: 60px;
    height: 60px;
    text-align: center;
    line-height: 60px;
    border: 1px solid transparent;
    border-radius: 4px;
    overflow: hidden;
    background: #fff;
    position: relative;
    box-shadow: 0 1px 1px rgba(0,0,0,.2);
    margin-right: 4px;
  }
  .demo-upload-list img{
    width: 100%;
    height: 100%;
  }
  .demo-upload-list-cover{
    display: none;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0,0,0,.6);
  }
  .demo-upload-list:hover .demo-upload-list-cover{
    display: block;
  }
  .demo-upload-list-cover i{
    color: #fff;
    font-size: 20px;
    cursor: pointer;
    margin: 0 2px;
  }
</style>
