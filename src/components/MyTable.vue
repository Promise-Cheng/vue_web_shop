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
      <template slot-scope="goodsSellStatus" slot="goodsSellStatus">
        {{ goodsSellStatus === 1 ? "已下架":"已上架"}}
      </template>
      <template slot-scope="payType" slot="payType">
        {{ payType === 1 ? '支付宝支付': '微信支付'}}
      </template>
      <template slot-scope="state" slot="orderStatus">
        {{ parseOrderState(state)}}
      </template>
      <template slot="action" slot-scope="text, record, index">
        <a-button type="primary" size="small" @click="gotoXianQing(record)">查看详情</a-button>
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
    parseOrderState(state){
      switch (state) {
        case 0:
          return '待支付'
        case 1:
          return '已支付'
        case 2:
          return '配货完成'
        case 3:
          return '出库成功'
        case 4:
          return '交易成功'
        case -1:
          return '手动关闭'
        case -2:
          return '超时关闭'
        case -3:
          return '商家关闭'
      }
    },
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
    gotoXianQing(row){
      this.$emit('goto-detail',row)
    }
  }
};
</script>

<style lang="scss" scoped>
/deep/ .ant-table {
  min-height: 320px !important;
}
</style>
