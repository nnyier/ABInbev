<template>
  <div class="tabbar">
    <div class="navbar-left navbar-nav">
      <Icon type="ios-rewind"></Icon>
    </div>
    <nav class="page-tab">
      <div class="page-tab-content">
        <router-link to="/home">首页</router-link>
        <!-- <Tag v-for="item in count" :key="item" :name="item" closable @on-close="handleClose2">
                    {{item.title}}</Tag> -->

        <router-link to="/pay" @on-close="handleClose2">我的支付
          <!-- <Icon type="close-circled"></Icon> -->
        </router-link>
        <router-link to="/undotask" @on-close="handleClose2">未完成任务
          <!-- <Icon type="close-circled"></Icon> -->
        </router-link>
        <router-link to="/approve" @on-close="handleClose2">我的审批
          <!-- <Icon type="close-circled"></Icon> -->
        </router-link>
        <router-link to="/notice" @on-close="handleClose2">通知公告
          <!-- <Icon type="close-circled"></Icon> -->
        </router-link>
      </div>
    </nav>
    <div class="navbar-right navbar-nav">
      <Icon type="ios-fastforward"></Icon>
    </div>
    <div class="dropdpwn-right">
      <Dropdown trigger="click" style="margin-left: 20px">
        <a href="javascript:void(0)">
          关闭操作
          <Icon type="arrow-down-b"></Icon>
        </a>
        <DropdownMenu slot="list">
          <DropdownItem>关闭全部选项卡</DropdownItem>
          <DropdownItem>关闭其他选项卡</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
    <a class="quit" href="#">
      <Icon type="log-out"></Icon>退出</a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //   count: [
      //     {
      //       title: "我的支付",
      //       link: "/pay"
      //     },
      //     {
      //       title: "未完成任务",
      //       link: "/undotask"
      //     },
      //     {
      //       title: "我的审批",
      //       link: "/approve"
      //     },
      //     {
      //       title: "通知公告",
      //       link: "/notice"
      //     }
      //   ]
    };
  },
  methods: {
    handleClose2(event, name) {
      const index = this.count.indexOf(name);
      this.count.splice(index, 1);
    }
  }
};
</script>

<style scoped>
.tabbar {
  position: relative;
  height: 42px;
  background: #fafafa;
  line-height: 40px;
  border-bottom: solid 2px #2f4050;
}
.tabbar .navbar-nav {
  font-size: 20px;
  position: absolute;
  width: 40px;
  height: 40px;
  text-align: center;
  color: #999;
  z-index: 2;
  top: 0;
}
.tabbar .navbar-left {
  left: 0;
  border: none;
  border-right: solid 1px #eee;
}
.tabbar .navbar-right {
  right: 152px;
  border: none;
  border-left: solid 1px #eee;
}
.page-tab {
  margin-left: 40px;
}
.page-tab-content a {
  color: #2f4050;
  display: inline-block;
  height: 40px;
  line-height: 40px;
  font-size: 14px;
  padding: 0 10px;
}
.dropdpwn-right {
  position: absolute;
  top: 0;
  right: 60px;
}
.ivu-dropdown a {
  height: 40px;
  line-height: 40px;
  font-size: 14px;
  top: 0;
  right: 0;
  border-left: solid 1px #eee;
  padding: 0 10px;
  color: #2f4050;
  display: inline-block;
}
.page-tab-content .router-link-exact-active,
.page-tab-content .router-link-active {
  background: #565d6d;
  color: #fff;
  font-weight: 500;
  padding: 0 10px;
}
.quit {
  height: 40px;
  line-height: 40px;
  position: absolute;
  font-size: 14px;
  top: 0;
  right: 0;
  border-left: solid 1px #eee;
  padding: 0 10px;
  color: #2f4050;
  display: inline-block;
}
.quit i {
  margin-right: 5px;
}
</style>
