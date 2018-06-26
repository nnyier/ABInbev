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
                <router-link to="/sidelist1">
                    <Icon type="document"></Icon>发布通知公告</router-link>
                </MenuItem>
                <MenuItem name="1-1-2">
                <router-link to="/sidelist2">
                    <Icon type="document"></Icon>通知公告列表</router-link>
                </MenuItem>

            </Submenu>
            <Submenu name="1-2">
                <template slot="title">
                    <Icon type="grid"></Icon>人员外出</template>
                <MenuItem name="1-2-1">
                <router-link to="/sidelist3">
                    <Icon type="document"></Icon>外出登记</router-link>
                </MenuItem>
                <MenuItem name="1-2-2">
                <router-link to="/sidelist4">
                    <Icon type="document"></Icon>登记列表</router-link>
                </MenuItem>
                <MenuItem name="1-2-3">
                <router-link to="/sidelist5">
                    <Icon type="document"></Icon>返回登记</router-link>
                </MenuItem>
                <MenuItem name="1-2-4">
                <router-link to="/sidelist6">
                    <Icon type="document"></Icon>数据导出</router-link>
                </MenuItem>
            </Submenu>
            <Submenu name="1-3">
                <template slot="title">
                    <Icon type="grid"></Icon>工程维护</template>
                <MenuItem name="1-3-1">
                <router-link to="/sidelist7">
                    <Icon type="document"></Icon>未处理问题</router-link>
                </MenuItem>
                <MenuItem name="1-3-2">
                <router-link to="/sidelist8">
                    <Icon type="document"></Icon>处理中问题</router-link>
                </MenuItem>
                <MenuItem name="1-3-3">
                <router-link to="/sidelist9">
                    <Icon type="document"></Icon>已处理问题</router-link>
                </MenuItem>
                <MenuItem name="1-3-4">
                <router-link to="/sidelist10">
                    <Icon type="document"></Icon>数据导出</router-link>
                </MenuItem>
            </Submenu>
            <Submenu name="1-4">
                <template slot="title">
                    <Icon type="grid"></Icon>工资条</template>
                <MenuItem name="1-4-1">
                <router-link to="/sidelist11">
                    <Icon type="document"></Icon>上传工资单</router-link>
                </MenuItem>
                <MenuItem name="1-4-2">
                <router-link to="/sidelist12">
                    <Icon type="document"></Icon>我的工资单</router-link>
                </MenuItem>
            </Submenu>
            <Submenu name="1-5">
                <template slot="title">
                    <Icon type="grid"></Icon>快递助手</template>
                <MenuItem name="1-5-1">
                <router-link to="/sidelist13">
                    <Icon type="document"></Icon>录入快递</router-link>
                </MenuItem>
                <MenuItem name="1-5-2">
                <router-link to="/sidelist14">
                    <Icon type="document"></Icon>我的快递</router-link>
                </MenuItem>
                <MenuItem name="1-5-3">
                <router-link to="/sidelist15">
                    <Icon type="document"></Icon>快递电话</router-link>
                </MenuItem>
                <MenuItem name="1-5-4">
                <router-link to="/sidelist16">
                    <Icon type="document"></Icon>录入电话</router-link>
                </MenuItem>
            </Submenu>
            <Submenu name="1-6">
                <template slot="title">
                    <Icon type="grid"></Icon>会议助手</template>
                <MenuItem name="1-6-1">
                <router-link to="/sidelist17">
                    <Icon type="document"></Icon>新建会议</router-link>
                </MenuItem>
                <MenuItem name="1-6-2">
                <router-link to="/sidelist18">
                    <Icon type="document"></Icon>我的发起</router-link>
                </MenuItem>
                <MenuItem name="1-6-3">
                <router-link to="/sidelist19">
                    <Icon type="document"></Icon>我的参与</router-link>
                </MenuItem>
                <MenuItem name="1-6-4">
                <router-link to="/sidelist20">
                    <Icon type="document"></Icon>添加会议室</router-link>
                </MenuItem>
            </Submenu>
            <Submenu name="1-7">
                <template slot="title">
                    <Icon type="grid"></Icon>规章制度</template>
                <MenuItem name="1-7-1">
                <router-link to="/sidelist21">
                    <Icon type="document"></Icon>添加规章制度</router-link>
                </MenuItem>
                <MenuItem name="1-7-2">
                <router-link to="/sidelist22">
                    <Icon type="document"></Icon>规章制度列表</router-link>
                </MenuItem>
                <MenuItem name="1-7-3">
                <router-link to="/sidelist23">
                    <Icon type="document"></Icon>添加类型</router-link>
                </MenuItem>
                <MenuItem name="1-7-4">
                <router-link to="/sidelist24">
                    <Icon type="document"></Icon>类型列表</router-link>
                </MenuItem>
            </Submenu>
            <Submenu name="1-8">
                <template slot="title">
                    <Icon type="grid"></Icon>文件归档</template>
                <MenuItem name="1-8-1">
                <router-link to="/sidelist25">
                    <Icon type="document"></Icon>添加归档文件</router-link>
                </MenuItem>
                <MenuItem name="1-8-2">
                <router-link to="/sidelist26">
                    <Icon type="document"></Icon>文件归档列表</router-link>
                </MenuItem>
                <MenuItem name="1-8-3">
                <router-link to="/sidelist27">
                    <Icon type="document"></Icon>添加类型</router-link>
                </MenuItem>
                <MenuItem name="1-8-4">
                <router-link to="/sidelist28">
                    <Icon type="document"></Icon>类型列表</router-link>
                </MenuItem>
            </Submenu>
            <Submenu name="1-9">
                <template slot="title">
                    <Icon type="grid"></Icon>请假出差加班</template>
                <MenuItem name="1-9-1">
                <router-link to="/sidelist29">
                    <Icon type="document"></Icon>添加请假出差加班</router-link>
                </MenuItem>
                <MenuItem name="1-9-2">
                <router-link to="/sidelist30">
                    <Icon type="document"></Icon>我的发起</router-link>
                </MenuItem>
                <MenuItem name="1-9-3">
                <router-link to="/sidelist31">
                    <Icon type="document"></Icon>我的审批</router-link>
                </MenuItem>
                <MenuItem name="1-9-4">
                <router-link to="/sidelist32">
                    <Icon type="document"></Icon>我的参与</router-link>
                </MenuItem>
                <MenuItem name="1-9-5">
                <router-link to="/sidelist33">
                    <Icon type="document"></Icon>数据导出</router-link>
                </MenuItem>
            </Submenu>
            <Submenu name="1-10">
                <template slot="title">
                    <Icon type="grid"></Icon>报销申请</template>
                <MenuItem name="1-10-1">
                <router-link to="/sidelist34">
                    <Icon type="document"></Icon>添加表单</router-link>
                </MenuItem>
                <MenuItem name="1-10-2">
                <router-link to="/sidelist35">
                    <Icon type="document"></Icon>我的发起</router-link>
                </MenuItem>
                <MenuItem name="1-10-3">
                <router-link to="/sidelist36">
                    <Icon type="document"></Icon>我的审批</router-link>
                </MenuItem>
                <MenuItem name="1-10-4">
                <router-link to="/sidelist37">
                    <Icon type="document"></Icon>我的支付</router-link>
                </MenuItem>
                <MenuItem name="1-10-5">
                <router-link to="/sidelist38">
                    <Icon type="document"></Icon>我的参与</router-link>
                </MenuItem>
            </Submenu>
            <Submenu name="1-11">
                <template slot="title">
                    <Icon type="grid"></Icon>任务派发</template>
                <MenuItem name="1-11-1">
                <router-link to="/sidelist39">
                    <Icon type="document"></Icon>派发任务</router-link>
                </MenuItem>
                <MenuItem name="1-11-2">
                <router-link to="/sidelist40">
                    <Icon type="document"></Icon>我的发起</router-link>
                </MenuItem>
                <MenuItem name="1-11-3">
                <router-link to="/sidelist41">
                    <Icon type="document"></Icon>我的任务</router-link>
                </MenuItem>
                <MenuItem name="1-11-4">
                <router-link to="/sidelist42">
                    <Icon type="document"></Icon>相关抄送</router-link>
                </MenuItem>
            </Submenu>
            <Submenu name="1-12">
                <template slot="title">
                    <Icon type="grid"></Icon>采购申请</template>
                <MenuItem name="1-12-1">
                <router-link to="/sidelist43">
                    <Icon type="document"></Icon>添加采购</router-link>
                </MenuItem>
                <MenuItem name="1-12-2">
                <router-link to="/sidelist44">
                    <Icon type="document"></Icon>我的发起</router-link>
                </MenuItem>
                <MenuItem name="1-12-3">
                <router-link to="/sidelist45">
                    <Icon type="document"></Icon>我的审批</router-link>
                </MenuItem>
                <MenuItem name="1-12-4">
                <router-link to="/sidelist46">
                    <Icon type="document"></Icon>我的参与</router-link>
                </MenuItem>
                <MenuItem name="1-12-5">
                <router-link to="/sidelist47">
                    <Icon type="document"></Icon>我的支付</router-link>
                </MenuItem>
            </Submenu>
            <Submenu name="1-13">
                <template slot="title">
                    <Icon type="grid"></Icon>付款申请</template>
                <MenuItem name="1-13-1">
                <router-link to="/sidelist48">
                    <Icon type="document"></Icon>添加付款申请</router-link>
                </MenuItem>
                <MenuItem name="1-13-2">
                <router-link to="/sidelist49">
                    <Icon type="document"></Icon>我的发起</router-link>
                </MenuItem>
                <MenuItem name="1-13-3">
                <router-link to="/sidelist50">
                    <Icon type="document"></Icon>我的审批</router-link>
                </MenuItem>
                <MenuItem name="1-13-4">
                <router-link to="/sidelist51">
                    <Icon type="document"></Icon>我的参与</router-link>
                </MenuItem>
                <MenuItem name="1-13-5">
                <router-link to="/sidelist52">
                    <Icon type="document"></Icon>付款支付</router-link>
                </MenuItem>
            </Submenu>
            <Submenu name="1-14">
                <template slot="title">
                    <Icon type="grid"></Icon>来访登记</template>
                <MenuItem name="1-14-1">
                <router-link to="/sidelist53">
                    <Icon type="document"></Icon>录入来访</router-link>
                </MenuItem>
                <MenuItem name="1-14-2">
                <router-link to="/sidelist54">
                    <Icon type="document"></Icon>访客离开</router-link>
                </MenuItem>
                <MenuItem name="1-14-3">
                <router-link to="/sidelist55">
                    <Icon type="document"></Icon>来访列表</router-link>
                </MenuItem>
            </Submenu>
        </Submenu>
        <Submenu name="2">
            <template slot="title">
                <Icon type="ios-folder-outline"></Icon>
                企业号中心
            </template>
            <MenuItem name="2-1">
            <router-link to="/sidelist56">
                <Icon type="ios-list"></Icon>应用中心</router-link>
            </MenuItem>
        </Submenu>
        <Submenu name="3">
            <template slot="title">
                <Icon type="ios-folder-outline"></Icon>
                系统管理
            </template>
            <MenuItem name="3-1">
            <router-link to="/sidelist57">
                <Icon type="ios-people-outline"></Icon>通讯录</router-link>
            </MenuItem>
            <MenuItem name="3-2">
            <router-link to="/sidelist58">
                <Icon type="ios-chatboxes-outline"></Icon>微信组管理</router-link>
            </MenuItem>
            <MenuItem name="3-3">
            <router-link to="/sidelist59">
                <Icon type="ios-personadd-outline"></Icon>用户租授权</router-link>
            </MenuItem>
            <MenuItem name="3-4">
            <router-link to="/sidelist60">
                <Icon type="person-stalker"></Icon>用户页面授权</router-link>
            </MenuItem>
            <MenuItem name="3-5">
            <router-link to="/sidelist61">
                <Icon type="ios-copy-outline"></Icon>微信用户同步</router-link>
            </MenuItem>
            <MenuItem name="3-6">
            <router-link to="/sidelist62">
                <Icon type="gear-a"></Icon>系统设置</router-link>
            </MenuItem>
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
.ivu-menu-item a {
  color: #fff;
}
.ivu-menu-item a i {
  margin-right: 5px;
}
.router-link-exact-active,
.router-link-active {
  /* background: #2d8cf0 !important; */
  color: #fff !important;
  font-weight: 500;
}
.ivu-menu-dark.ivu-menu-vertical .ivu-menu-submenu .ivu-menu-item-active,
.ivu-menu-dark.ivu-menu-vertical .ivu-menu-submenu .ivu-menu-item-active:hover {
  border-right: none;
  color: #fff;
  /* background: #2d8cf0!important; */
}
</style>
