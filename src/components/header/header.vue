<template>
  <div class="n-header">
    <div class="pull-left">
      <span>百威英博Portal系统v1.0</span>
    </div>
    <ul class="pull-right">
      <router-link tag="li" class="tab-item" to="/pay" @click="handleAdd">
        <span class="tab-link">
          <Icon type="social-usd"></Icon>我的支付
          <Badge count="5" class-name="demo-badge-alone"></Badge>
        </span>
      </router-link>
      <router-link tag="li" class="tab-item" to="/undotask" @click="handleAdd">
        <span class="tab-link">
          <Icon type="chatbox-working"></Icon>未完成任务
          <Badge count="7"></Badge>
        </span>
      </router-link>
      <router-link tag="li" class="tab-item" to="/approve" @click="handleAdd">
        <span class="tab-link">
          <Icon type="android-checkbox"></Icon>我的审批
          <Badge count="6"></Badge>
        </span>
      </router-link>
      <router-link tag="li" class="tab-item" to="/notice" @click="handleAdd">
        <span class="tab-link">
          <Icon type="ios-bell"></Icon>通知公告
          <Badge count="10"></Badge>
        </span>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    data() {
      return {
        count: [0, 1, 2]
      };
    },
    collapsedSider() {
      this.$refs.side1.toggleCollapse();
    },
    handleAdd() {
      if (this.count.length) {
        this.count.push(this.count[this.count.length - 1] + 1);
      } else {
        this.count.push(0);
      }
    }
  }
};
</script>

<style scoped>
.n-header {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  border-bottom: 1px solid #eee;
}
.pull-left {
  float: left;
  margin-left: 50px;
}
.pull-left span {
  font-size: 22px;
  color: #676a6c;
}
.pull-right {
  float: right;
}
.pull-right li {
  float: left;
  list-style: none;
  margin-right: 20px;
  font-size: 14px;
}
.ivu-icon {
  margin: 0 5px;
}
.ivu-badge {
  vertical-align: super !important;
}
.demo-badge-alone {
  background: #5cb85c !important;
}
.router-link-exact-active,
.router-link-active {
  border-bottom: 2px solid #565d6d;
  font-weight: 500;
}
</style>
