<template>
    <div class="n-avatar">
        <div class="dropdown-wrapper">
            <span>
                <img class="avatar img-circle" src="./avatar.jpg" alt="" width="83" height="83">
            </span>
            <span>
                <strong class="font-bold">000008</strong>
            </span>
            <Dropdown trigger="click" style="margin-left: 20px">
                <a href="javascript:void(0)">
                    丘伟国
                    <Icon type="arrow-down-b"></Icon>
                </a>
                <DropdownMenu slot="list">
                    <DropdownItem>修改头像</DropdownItem>
                    <DropdownItem>修改密码</DropdownItem>
                    <DropdownItem>联系我们</DropdownItem>
                    <DropdownItem class="quit">安全退出</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
        <div class="logo-element">OA</div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.n-avatar {
  padding-top: 20px;
  text-align: center;
  background: #474d5c;
}
.img-circle {
  border-radius: 50%;
}
.font-bold {
  color: #fff;
  font-weight: 500;
  display: block;
}
.ivu-dropdown {
  margin-left: 0 !important;
}
.ivu-dropdown a {
  color: #8095a8 !important;
}
</style>
