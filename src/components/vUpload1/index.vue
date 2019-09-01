<template>
  <div>
    <p>任命文件：</p>
    <div class="img-list">
      <div class="demo-upload-list" v-for="(item, index) in uploadList" :key="key + index">
        <div>
          <img :src="'/api/upload/getPic?id=' + item" />
          <div class="demo-upload-list-cover">
            <Icon type="ios-eye-outline" @click.native="handleView(item)"></Icon>
          </div>
        </div>
      </div>
    </div>
    <Modal title="查看大图" v-model="visible">
      <img :src="'api/upload/getPic?id='+ modalImgId" v-if="visible" style="width: 100%" />
    </Modal>
  </div>
</template>
<script>
    import util from '@/util/util.js';
    export default {
        props: ['formList', 'formKey'],
        data() {
            return {
                key: '',
                visible: false,
                uploadList: [],
                modalImgId: '',
            }
        },
        methods: {
            handleView(id) {
                this.modalImgId = id;
                this.visible = true;
            },
        },
        watch:{   // 使用监听的方式，监听数据的变化
          formList(newVal, oldVal){
            if(newVal[this.key]) {
              this.uploadList = newVal[this.key];
            }
          }
        },
        mounted () {
            //rcPicture_2_1
            this.key = this.formKey.slice(0,2) + 'Picture_' + this.formKey.slice(2);
        }
    }
</script>
<style>
  .img-list {
    min-height: 70px;
  }
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
