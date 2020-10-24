<template>
  <div>
    <a-table
      :row-selection="{ selectedRowKeys: selectedRowKeys, onChange: onSelectChange }"
      :pagination="{ pageSize: pageSize }"
      :columns="columns"
      :data-source="data"
    />
  </div>
</template>

<script>
export default {
  name: "MyTable",
  props: {
    pageSize:{
      type: Number,
      default: 5,
    },
    selectedRowKeys: {
      type: Array,
      default: () => {
        return [];
      }
    },
    columns: {
      type: Array,
      default: () => {
        return [
          {
            title: "Name",
            dataIndex: "name"
          },
          {
            title: "Age",
            dataIndex: "age"
          },
          {
            title: "Address",
            dataIndex: "address"
          }
        ];
      }
    },
    data: {
      type: Array,
      default: () => {
        return [
          {
            key: 1,
            name: `Edward King`,
            age: 32,
            address: `London, Park Lane no.`
          },
          {
            key: 2,
            name: `Edward King `,
            age: 32,
            address: `London, Park Lane no. `
          },
          {
            key: 3,
            name: `Edward King `,
            age: 32,
            address: `London, Park Lane no. `
          },
          {
            key: 4,
            name: `Edward King`,
            age: 32,
            address: `London, Park Lane no. `
          },
          {
            key: 5,
            name: `Edward King `,
            age: 32,
            address: `London, Park Lane no. `
          },
          {
            key: 6,
            name: `Edward King `,
            age: 32,
            address: `London, Park Lane no. `
          },
          {
            key: 6,
            name: `Edward King `,
            age: 32,
            address: `London, Park Lane no. `
          },
          {
            key: 6,
            name: `Edward King `,
            age: 32,
            address: `London, Park Lane no. `
          },
          {
            key: 6,
            name: `Edward King `,
            age: 32,
            address: `London, Park Lane no. `
          },
          {
            key: 6,
            name: `Edward King `,
            age: 32,
            address: `London, Park Lane no. `
          },
          {
            key: 6,
            name: `Edward King `,
            age: 32,
            address: `London, Park Lane no. `
          }
        ];
      }
    }
  },
  data() {
    return {
      height: window.innerHeight - 450
    };
  },
  methods: {
    onSelectChange() {
      this.$emit("onChange");
    }
  }
};
</script>

<style lang="scss" scoped>
   /deep/ .ant-table{
    height: 320px !important;
  }
</style>
