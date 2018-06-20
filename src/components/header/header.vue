<template>
    <div class="n-header">
        <div class="pull-left">
            百威英博Portal系统v1.0
        </div>
        <div class="pull-right">

        </div>
    </div>
</template>

<script>
export default {
  methods: {
    collapsedSider() {
      this.$refs.side1.toggleCollapse();
    }
  }
};
</script>

<style scoped>
.pull-left {
  position: absolute;
  top: 0;
  left: 50px;
  color: #676a6c;
  font-size: 24px;
}
</style>
