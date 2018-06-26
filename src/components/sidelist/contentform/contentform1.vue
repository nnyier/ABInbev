<template>
  <div class="check_box">
    <div style="border-bottom: 1px solid #e9e9e9;padding-bottom:6px;margin-bottom:6px;">
      <Checkbox :indeterminate="indeterminate" :value="checkAll" @click.prevent.native="handleCheckAll">全选</Checkbox>
    </div>
    <CheckboxGroup v-model="checkAllGroup" @on-change="checkAllGroupChange">
      <Checkbox label="领导1"></Checkbox>
      <Checkbox label="领导2"></Checkbox>
      <Checkbox label="领导3"></Checkbox>
      <Checkbox label="领导4"></Checkbox>
      <Checkbox label="领导5"></Checkbox>
      <Checkbox label="领导6"></Checkbox>
      <Checkbox label="领导7"></Checkbox>
      <Checkbox label="领导8"></Checkbox>
      <Checkbox label="领导9"></Checkbox>
      <Checkbox label="领导10"></Checkbox>
      <Checkbox label="领导11"></Checkbox>
      <Checkbox label="领导12"></Checkbox>
      <Checkbox label="领导13"></Checkbox>
      <Checkbox label="领导14"></Checkbox>
    </CheckboxGroup>
  </div>
</template>
<script>
export default {
  data() {
    return {
      indeterminate: true,
      checkAll: false,
      checkAllGroup: []
    };
  },
  methods: {
    handleCheckAll() {
      if (this.indeterminate) {
        this.checkAll = false;
      } else {
        this.checkAll = !this.checkAll;
      }
      this.indeterminate = false;

      if (this.checkAll) {
        this.checkAllGroup = [
          "领导1",
          "领导2",
          "领导3",
          "领导4",
          "领导5",
          "领导6",
          "领导7",
          "领导8",
          "领导9",
          "领导10",
          "领导11",
          "领导12",
          "领导13",
          "领导14"
        ];
      } else {
        this.checkAllGroup = [];
      }
    },
    checkAllGroupChange(data) {
      if (data.length === 3) {
        this.indeterminate = false;
        this.checkAll = true;
      } else if (data.length > 0) {
        this.indeterminate = true;
        this.checkAll = false;
      } else {
        this.indeterminate = false;
        this.checkAll = false;
      }
    }
  }
};
</script>
<style scoped>
.check_box {
  padding: 20px;
}
.ivu-checkbox-group-item {
  display: block;
  line-height: 30px;
}
</style>
