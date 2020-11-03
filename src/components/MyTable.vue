<template>
  <div>
    <a-table
      :row-selection="{ selectedRowKeys: selectedRowKeys, onChange: onSelectChange }"
      :pagination="{ pageSize: pageSize }"
      :columns="columns"
      :data-source="data"
      :scroll = "{ y : 300}"
    >
      <a :href="text" target="_blank"  slot="url" slot-scope="text">{{ text }}</a>
      <template slot-scope="photoUrl" slot="photoUrl">
        <img :src="photoUrl" alt="加载失败" width="200" height="80" />
      </template>
    </a-table>
  </div>
</template>

<script>
export default {
  name: "MyTable",
  props: {
    pageSize: {
      type: Number,
      default: 5
    },
    /**
     * 图片元素：photoUrl
     */
    columns: {
      type: Array,
      default: () => {
        return [
          {
            // title: "teas",
            dataIndex: "photoUrl",
            key: "photoUrl",
            slots: { title: "customTitle" },
            scopedSlots: { customRender: "photoUrl" }
          },
        ];
      }
    },
    data: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  data() {
    return {
      height: window.innerHeight - 450,
      selectedRowKeys:[],
      selection:[],
    }
  },
  methods: {
    onSelectChange(selectedRowKeys) {
      this.selectedRowKeys = selectedRowKeys;
      this.selection = [];
      _.forEach(this.selectedRowKeys ,item =>{
       this.selection.push(_.find(this.data,{key:item}));
      })
    },
    getSelection(){
      return this.selection;
    }
  }
};
</script>

<style lang="scss" scoped>
/deep/ .ant-table {
  min-height: 320px !important;
}
</style>
