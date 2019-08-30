<template>
  <div>
    <p>任命文件：</p>
    <div class="demo-upload-list" v-for="item in uploadList" :key="item.Id">
      <div v-if="item.status === 'finished'">
        <img :src="item.url">
        <div class="demo-upload-list-cover">
          <Icon type="ios-eye-outline" @click.native="handleView(item.name)"></Icon>
          <Icon type="ios-trash-outline" @click.native="handleRemove(item)"></Icon>
        </div>
      </div>
      <div v-else>
        <Progress v-if="item.showProgress" :percent="item.percentage" hide-info></Progress>
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
    <Modal title="View Image" v-model="visible">
      <img :src="'item.url'+ Id + '/large'" v-if="visible" style="width: 100%">
    </Modal>
  </div>
</template>
<script>
    export default {
        props: ['formList', 'formKey','url','imgName'],
        data () {
            return {
                visible: false,
                uploadList: [{
                  url:'/upload/getPic',
                  Id: '',
                }]
            }
        },
        methods: {
            handleView (name,url) {
                this.url = url;
                this.imgName = name;
                this.visible = true;
            },
           /* async getFormList(){
                let data = {
                    params:{
                        id: this.$route.query.id
                    },
                    method: 'get',
                    url: '/upload/getPic',
                }
                let res = await util.httpReq(data);
                this.formList = res;
            },
            */
            handleRemove (file) {
                const fileList = this.$refs.upload.fileList;
                this.$refs.upload.fileList.splice(fileList.indexOf(file), 1);
            },

           async handleSuccess ( file) {
                //console.log("name:" +  + "\nurl:" + res.toString());
             let data = {
               params:{
                 id: this.$route.query.id
               },
               method: 'get',
               url: '/upload/getPic',
             }
             let res = await util.httpReq(data);

             this.uploadList.push({ "Id": res.Id.toString()});
                var i = this.uploadList.findIndex(
                    function(value, index, arr){return value.name == file.name.toString();}
                );
                console.log("add index :" + i );
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
