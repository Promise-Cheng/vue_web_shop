<template>
  <div>
    <a-table
      :row-selection="{ selectedRowKeys: selectedRowKeys, onChange: onSelectChange }"
      :pagination="{ pageSize: pageSize }"
      :columns="columns"
      :rowKey="rowKey"
      :data-source="data"
      :scroll = "{ y : 300}"
    >
      <a :href="text" target="_blank"  slot="url" slot-scope="text">{{ text }}</a>
      <template slot-scope="carouselUrl" slot="carouselUrl">
        <img :src="carouselUrl" alt="加载失败" width="200" height="80" />
      </template>
      <template slot-scope="state" slot="state">
        {{ state ? "已上架":"已下架" }}
      </template>
      <template slot="action" slot-scope="text, record, index">
        <a-button type="primary" size="small" @click="gotoXianQing(record)">编辑</a-button>
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
    rowKey: {
      type: String,
      default: 'key'
    },
    /**
     * 图片元素：carouselUrl
     */
    columns: {
      type: Array,
      default: () => {
        return [
          {
            // title: "teas",
            dataIndex: "carouselUrl",
            key: "carouselUrl",
            slots: { title: "customTitle" },
            scopedSlots: { customRender: "carouselUrl" }
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
      console.log(selectedRowKeys)
      this.selectedRowKeys = selectedRowKeys;
      this.selection = [];
      _.forEach(this.selectedRowKeys ,item =>{
       this.selection.push(_.find(this.data,item1 =>{
        return  item1[this.rowKey] === item
       }));
      })
    },
    getSelection(){
      return this.selection;
    },
    gotoXianQing(id){
      this.$emit('goto-detail',id)
    }
  }
};
</script>

<style lang="scss" scoped>
/deep/ .ant-table {
  min-height: 320px !important;
}
</style>
