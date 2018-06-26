<template>
  <div class="layout">
    <Layout>
      <Sider v-if="show" class="isShow" ref="side1" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed">
        <n-avatar></n-avatar>
        <n-sider></n-sider>
      </Sider>
      <Layout>
        <Header :style="{padding: 0}" class="layout-header-bar topbar-fixed">
          <Icon @click.native="collapsedSider" @click="showContent" :class="rotateIcon" type="navicon-round" size="24"></Icon>
          <n-header></n-header>
        </Header>
        <Content class="n-content" :style="{margin: '0', background: '#fff', minHeight: '260px'}">
          <tabbar></tabbar>
          <router-view></router-view>
        </Content>
        <Footer>© 2018-2018 QQ：115375265 Tel：13057713777
        </Footer>
      </Layout>
    </Layout>
  </div>
</template>
<script>
import NAvatar from "../avatar/avatar";
import NSider from "../sider/sider";
import NHeader from "../header/header";
import Tabbar from "../tabbar/tabbar";

export default {
  data() {
    return {
      show: true,
      isCollapsed: false,
      tab0: true,
      tab1: true,
      tab2: true
    };
  },
  computed: {
    rotateIcon() {
      return ["menu-icon", this.isCollapsed ? "rotate-icon" : ""];
    }
  },
  methods: {
    // collapsedSider() {
    //   this.$refs.side1.toggleCollapse();
    // },
    showContent() {
      this.show = !this.show;
    },
    handleTabRemove(name) {
      this["tab" + name] = false;
    }
  },
  components: {
    NAvatar,
    NSider,
    NHeader,
    Tabbar
  }
};
</script>
<style scoped>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.layout-header-bar {
  background: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
}
.topbar-fixed {
  position: relative;
}
.ivu-layout-sider {
  overflow: scroll;
}

.layout-logo-left {
  width: 90%;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  margin: 15px auto;
}
.menu-icon {
  transition: all 0.3s;
}
.rotate-icon {
  transform: rotate(-90deg);
}
.menu-item span {
  display: inline-block;
  overflow: hidden;
  width: 69px;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: bottom;
  transition: width 0.2s ease 0.2s;
}
.menu-item i {
  transform: translateX(0px);
  transition: font-size 0.2s ease, transform 0.2s ease;
  vertical-align: middle;
  font-size: 16px;
}
.collapsed-menu span {
  width: 0px;
  transition: width 0.2s ease;
}
.collapsed-menu i {
  transform: translateX(5px);
  transition: font-size 0.2s ease 0.2s, transform 0.2s ease 0.2s;
  vertical-align: middle;
  font-size: 22px;
}
.ivu-icon {
  padding: 1px 5px;
  margin-right: 10px;
  background: #1ab394;
  color: #fff;
  margin: 20px 12px 0;
}
.n-content {
  position: relative;
}
.pull-left {
  float: left;
}
.pull-right {
  position: absolute;
  right: 0;
  top: 0;
}
.pull-left i,
.pull-right i {
  margin: 0;
  height: 30px;
  line-height: 30px;
  width: 37px;
  text-align: center;
  background: #fff;
  color: #897f7f;
  font-size: 16px;
  border-right: 1px solid #eee;
}
.ivu-layout-footer {
  height: 36px;
  line-height: 36px;
  font-size: 14px;
  text-align: center;
  padding: 0;
}
</style>
