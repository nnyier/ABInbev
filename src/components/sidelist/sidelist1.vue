<template>
  <div class="sidelist1">
    <form action="" method="post">
      <div class="right-pannel" v-if="show">
        <contentform1></contentform1>
      </div>
      <div class="weui_cell">
        <div class="weui_cell_hd">
          <label for="" class="weui_label">标题</label>
        </div>
        <div class="weui_cell_bd">
          <input class="weui_input" type="text" placeholder="请输入标题">
        </div>
      </div>
      <div class="weui_cell">
        接收人员
        <span class="float-right">
          <a href="" @click.prevent="showContent">
            <Icon type="plus-round"></Icon>
          </a>
        </span>
      </div>
      <div class="weui_cell">
        抄送人员
        <span class="float-right">
          <a href="" @click.prevent="showContent">
            <Icon type="plus-round"></Icon>
          </a>
        </span>
      </div>
      <div>
        <Ueditor :value="ueditor.value" :config="ueditor.config" ref="ue"></Ueditor>
        <input type="button" value="显示编辑器内容（从控制台查看）" @click="returnContent">
      </div>
      <div class="weui_btn">
        <a href="#">创建</a>
      </div>
    </form>
  </div>
</template>

<script>
import Contentform1 from "./contentform/contentform1";
import Ueditor from "../../base/ueditor/ueditor";
export default {
  data() {
    return {
      dat: {
        content: "",
        show: false
      },
      ueditor: {
        value: "编辑默认文字",
        config: {}
      }
    };
  },
  methods: {
    returnContent() {
      this.dat.content = this.$refs.ue.getUEContent();
      console.log(this.dat.content);
    },
    showContent() {
      this.show = !this.show;
    }
  },
  components: {
    Contentform1,
    Ueditor
  }
};
</script>

<style scoped>
.sidelist1 {
  padding: 20px;
}
.weui_cell {
  padding: 10px 15px;
  display: block;
  position: relative;
  border-bottom: 1px solid #eee;
}
.weui_cell_hd {
  display: table-cell;
  vertical-align: middle;
  word-wrap: break-word;
  word-break: break-all;
  white-space: nowrap;
}
.weui_label {
  display: block;
  display: block;
  width: 5em;
}
.weui_input {
  width: 100%;
  border: 0;
  outline: 0;
  height: 1.42em;
  -webkit-appearance: none;
  background-color: transparent;
  font-size: inherit;
  color: inherit;
}
.weui_label {
  display: inline-block;
}
.weui_cell_bd {
  display: table-cell;
  vertical-align: middle;
  word-wrap: break-word;
  word-break: break-all;
}
.float-right {
  float: right;
}
.float-right i {
  color: #333;
}
.right-panel {
  position: fixed;
  width: 0px;
  top: 0;
  right: 0;
  height: 100%;
  background-color: #fff;
  z-index: 1070;
  display: none;
  overflow-x: hidden;
  overflow-y: auto;
  box-shadow: -2px 0 10px #ddd;
}
.weui_cells {
  margin-top: 20px;
  width: 100%;
  height: 500px;
  border: 1px solid #aaa;
}
.weui_btn {
  padding: 10px;
  background: #2d8cf0;
  text-align: center;
  width: 180px;
  border: 1px solid #aaa;
  margin: 20px auto;
  border-radius: 5px;
}
.weui_btn a {
  color: #fff;
}
li {
  list-style: none;
}
.weui_tabbar {
  height: 30px;
  padding: 5px 10px;
  border-bottom: 1px solid #aaa;
  background: rgb(253, 253, 253);
  box-shadow: 0 0 15px #aaa;
}
.weui_tabbar_item {
  float: left;
  margin: 0 5px;
  padding: 0 5px;
}
.weui_tabbar_item a,
.weui_tabbar_item a i {
  font-size: 13px;
}
.weui_tabbar_item:hover,
.weui_tabbar_item.active {
  background: #2d8cf0;
  padding: 0 5px;
}
.weui_tabbar_item:hover a,
.weui_tabbar_item.active a {
  color: #fff;
}
.info {
  border-radius: 10px;
  line-height: 20px;
  padding: 10px;
  margin: 10px;
  background-color: #ffffff;
}
</style>
