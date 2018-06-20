<template>
    <Menu active-name="1-2" theme="dark" width="auto" :class="menuitemClasses">
        <Submenu name="1">
            <template slot="title">
                <Icon type="ios-folder-outline"></Icon>
                微企移动系统
            </template>
            <Submenu name="1-1">
                <template slot="title">
                    <Icon type="grid"></Icon>通知公告</template>
                <MenuItem name="1-1-1">
                <Icon type="document"></Icon>发布通知公告</MenuItem>
                <MenuItem name="1-1-2">
                <Icon type="document"></Icon>通知公告列表</MenuItem>
            </Submenu>
            <Submenu name="1-2">
                <template slot="title">
                    <Icon type="grid"></Icon>人员外出</template>
                <MenuItem name="1-2-1">
                <Icon type="document"></Icon>外出登记</MenuItem>
                <MenuItem name="1-2-2">
                <Icon type="document"></Icon>登记列表</MenuItem>
                <MenuItem name="1-2-3">
                <Icon type="document"></Icon>返回登记</MenuItem>
                <MenuItem name="1-2-4">
                <Icon type="document"></Icon>数据导出</MenuItem>
            </Submenu>
            <Submenu name="1-3">
                <template slot="title">
                    <Icon type="grid"></Icon>工程维护</template>
                <MenuItem name="1-3-1">
                <Icon type="document"></Icon>未处理问题</MenuItem>
                <MenuItem name="1-3-2">
                <Icon type="document"></Icon>处理中问题</MenuItem>
                <MenuItem name="1-3-3">
                <Icon type="document"></Icon>已处理问题</MenuItem>
                <MenuItem name="1-3-4">
                <Icon type="document"></Icon>数据导出</MenuItem>
            </Submenu>
            <Submenu name="1-4">
                <template slot="title">
                    <Icon type="grid"></Icon>工资条</template>
                <MenuItem name="1-4-1">
                <Icon type="document"></Icon>上传工资单</MenuItem>
                <MenuItem name="1-4-2">
                <Icon type="document"></Icon>我的工资单</MenuItem>
            </Submenu>
            <Submenu name="1-5">
                <template slot="title">
                    <Icon type="grid"></Icon>快递助手</template>
                <MenuItem name="1-5-1">
                <Icon type="document"></Icon>录入快递</MenuItem>
                <MenuItem name="1-5-2">
                <Icon type="document"></Icon>我的快递</MenuItem>
                <MenuItem name="1-5-3">
                <Icon type="document"></Icon>快递电话</MenuItem>
                <MenuItem name="1-5-4">
                <Icon type="document"></Icon>录入电话</MenuItem>
            </Submenu>
            <Submenu name="1-6">
                <template slot="title">
                    <Icon type="grid"></Icon>会议助手</template>
                <MenuItem name="1-6-1">
                <Icon type="document"></Icon>新建会议</MenuItem>
                <MenuItem name="1-6-2">
                <Icon type="document"></Icon>我的发起</MenuItem>
                <MenuItem name="1-6-3">
                <Icon type="document"></Icon>我的参与</MenuItem>
                <MenuItem name="1-6-4">
                <Icon type="document"></Icon>添加会议室</MenuItem>
            </Submenu>
            <Submenu name="1-7">
                <template slot="title">
                    <Icon type="grid"></Icon>规章制度</template>
                <MenuItem name="1-7-1">
                <Icon type="document"></Icon>添加规章制度</MenuItem>
                <MenuItem name="1-7-2">
                <Icon type="document"></Icon>规章制度列表</MenuItem>
                <MenuItem name="1-7-3">
                <Icon type="document"></Icon>添加类型</MenuItem>
                <MenuItem name="1-7-4">
                <Icon type="document"></Icon>类型列表</MenuItem>
            </Submenu>
            <Submenu name="1-8">
                <template slot="title">
                    <Icon type="grid"></Icon>文件归档</template>
                <MenuItem name="1-8-1">
                <Icon type="document"></Icon>添加归档文件</MenuItem>
                <MenuItem name="1-8-2">
                <Icon type="document"></Icon>文件归档列表</MenuItem>
                <MenuItem name="1-8-3">
                <Icon type="document"></Icon>添加类型</MenuItem>
                <MenuItem name="1-8-4">
                <Icon type="document"></Icon>类型列表</MenuItem>
            </Submenu>
            <Submenu name="1-9">
                <template slot="title">
                    <Icon type="grid"></Icon>请假出差加班</template>
                <MenuItem name="1-9-1">
                <Icon type="document"></Icon>添加请假出差加班</MenuItem>
                <MenuItem name="1-9-2">
                <Icon type="document"></Icon>我的发起</MenuItem>
                <MenuItem name="1-9-3">
                <Icon type="document"></Icon>我的审批</MenuItem>
                <MenuItem name="1-9-4">
                <Icon type="document"></Icon>我的参与</MenuItem>
                <MenuItem name="1-9-5">
                <Icon type="document"></Icon>数据导出</MenuItem>
            </Submenu>
            <Submenu name="1-10">
                <template slot="title">
                    <Icon type="grid"></Icon>报销申请</template>
                <MenuItem name="1-10-1">
                <Icon type="document"></Icon>添加表单</MenuItem>
                <MenuItem name="1-10-2">
                <Icon type="document"></Icon>我的发起</MenuItem>
                <MenuItem name="1-10-3">
                <Icon type="document"></Icon>我的审批</MenuItem>
                <MenuItem name="1-10-4">
                <Icon type="document"></Icon>我的支付</MenuItem>
                <MenuItem name="1-10-5">
                <Icon type="document"></Icon>我的参与</MenuItem>
            </Submenu>
            <Submenu name="1-11">
                <template slot="title">
                    <Icon type="grid"></Icon>任务派发</template>
                <MenuItem name="1-11-1">
                <Icon type="document"></Icon>派发任务</MenuItem>
                <MenuItem name="1-11-2">
                <Icon type="document"></Icon>我的发起</MenuItem>
                <MenuItem name="1-11-3">
                <Icon type="document"></Icon>我的任务</MenuItem>
                <MenuItem name="1-11-4">
                <Icon type="document"></Icon>相关抄送</MenuItem>
            </Submenu>
            <Submenu name="1-12">
                <template slot="title">
                    <Icon type="grid"></Icon>采购申请</template>
                <MenuItem name="1-12-1">
                <Icon type="document"></Icon>添加采购</MenuItem>
                <MenuItem name="1-12-2">
                <Icon type="document"></Icon>我的发起</MenuItem>
                <MenuItem name="1-12-3">
                <Icon type="document"></Icon>我的审批</MenuItem>
                <MenuItem name="1-12-4">
                <Icon type="document"></Icon>我的参与</MenuItem>
                <MenuItem name="1-12-5">
                <Icon type="document"></Icon>我的支付</MenuItem>
            </Submenu>
            <Submenu name="1-13">
                <template slot="title">
                    <Icon type="grid"></Icon>付款申请</template>
                <MenuItem name="1-13-1">
                <Icon type="document"></Icon>添加付款申请</MenuItem>
                <MenuItem name="1-13-2">
                <Icon type="document"></Icon>我的发起</MenuItem>
                <MenuItem name="1-13-3">
                <Icon type="document"></Icon>我的审批</MenuItem>
                <MenuItem name="1-13-4">
                <Icon type="document"></Icon>我的参与</MenuItem>
                <MenuItem name="1-13-5">
                <Icon type="document"></Icon>付款支付</MenuItem>
            </Submenu>
            <Submenu name="1-14">
                <template slot="title">
                    <Icon type="grid"></Icon>来访登记</template>
                <MenuItem name="1-14-1">
                <Icon type="document"></Icon>录入来访</MenuItem>
                <MenuItem name="1-14-2">
                <Icon type="document"></Icon>访客离开</MenuItem>
                <MenuItem name="1-14-3">
                <Icon type="document"></Icon>来访列表</MenuItem>
            </Submenu>
        </Submenu>
        <Submenu name="2">
            <template slot="title">
                <Icon type="ios-folder-outline"></Icon>
                企业号中心
            </template>
            <MenuItem name="2-1">
            <Icon type="ios-list"></Icon>应用中心</MenuItem>
        </Submenu>
        <Submenu name="3">
            <template slot="title">
                <Icon type="ios-folder-outline"></Icon>
                系统管理
            </template>
            <MenuItem name="3-1">
            <Icon type="ios-people-outline"></Icon>通讯录</MenuItem>
            <MenuItem name="3-2">
            <Icon type="ios-chatboxes-outline"></Icon>微信组管理</MenuItem>
            <MenuItem name="3-3">
            <Icon type="ios-personadd-outline"></Icon>用户租授权</MenuItem>
            <MenuItem name="3-4">
            <Icon type="person-stalker"></Icon>用户页面授权</MenuItem>
            <MenuItem name="3-5">
            <Icon type="ios-copy-outline"></Icon></Icon>微信用户同步</MenuItem>
            <MenuItem name="3-6">
            <Icon type="gear-a"></Icon>系统设置</MenuItem>
        </Submenu>
    </Menu>
</template>

<script>
export default {
  computed: {
    menuitemClasses() {
      return ["menu-item", this.isCollapsed ? "collapsed-menu" : ""];
    }
  }
};
</script>

<style scoped>
.ivu-menu-item {
  font-size: 12px !important;
}
</style>
