<template>
  <div class="hold-transition sidebar-mini">
    <div class="content-wrapper">
      <!-- Content Header (图标header) -->
      <div class="content-header">
        <div class="container-fluid"></div>
        <!-- /.container-fluid -->
      </div>
      <!-- Main content -->
      <div class="content">
        <div class="container-fluid">
          <div class="card card-primary card-outline">
            <div class="card-header">
              <h3 class="card-title">商品管理</h3>
            </div>
            <!-- /.card-body -->
            <div class="card-body">
              <div class="grid-btn">
                <button class="btn btn-info" @click="addGoods()">
                  <a-icon type="plus"/>&nbsp;添加商品
                </button>
                <button class="btn btn-info" @click="editGoods()">
                  <a-icon type="edit"/>&nbsp;修改商品
                </button>
                <button class="btn btn-success" @click="putUpGoods()">
                  <a-icon type="arrow-up"/>&nbsp;上架商品
                </button>
                <button class="btn btn-danger" @click="putDownGoods()">
                  <a-icon type="arrow-down"/>&nbsp;下架商品
                </button>
              </div>
              <my-table ref="myTable" :row-key="rowKey" :columns="columns" :data="tableData"></my-table>
            </div>
            <!-- /.card-body -->
          </div>
        </div>
        <!-- /.container-fluid -->
      </div>
      <!-- /.content -->
    </div>
    <goods-form-modal
      :defalut-form-data="defalutFormData"
      @handle-ok="handleOk"
      :is-edit="isEdit"
      detail="为你推荐"
      ref="formModal">
    </goods-form-modal>
  </div>
</template>
<script>
  import MyTable from "@/components/MyTable";
  import * as tips from "@/helper/Tips";
  import GoodsFormModal from "@/views/background/GoodsFormModal";
  import * as backApi from '@/api/background/backApi'

  const Mock = require('mockjs')
  const Random = Mock.Random

  function fetchList() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(
          Mock.mock({
            'list|20': [
              {
                key: '@id',
                goodsId: '@id',
                goodsName: '@ctitle',
                goodsIntro: '@text',
                goodsCoverImg: '@img',
                stockNum: '@natural(1, 1000)',
                sellingPrice: '@natural(1, 1000)',
                'goodsSellStatus|+1': true,
                addTime: '@DATETIME("yyyy-MM-dd HH:mm:ss")'
              }
            ]
          })
        )
      }, Random.range(1500, 600))
    })
  }

  export default {
    name: "Goods",
    components: {GoodsFormModal, MyTable},
    data() {
      return {
        rowKey: 'goodsId',
        isEdit:false,
        defalutFormData:{},
        columns: [
          {
            title: "商品编号",
            dataIndex: "goodsId",
          },
          {
            title: "商品名称",
            dataIndex: "goodsName"
          },
          {
            title: "商品简介",
            dataIndex: "goodsIntro"
          },
          {
            title: "商品图片",
            dataIndex: "goodsCoverImg"
          },
          {
            title: "商品库存",
            dataIndex: "stockNum"
          },
          {
            title: "商品售价",
            dataIndex: "sellingPrice"
          },
          {
            title: "上架状态",
            dataIndex: "goodsSellStatus",
            scopedSlots: {customRender: "goodsSellStatus"}
          },
          {
            title: "创建时间",
            dataIndex: "createTime"
          }
        ],
        tableData: []
      };
    },

    mounted() {
      this.getList()
    },
    methods: {
      putUpGoods() {
        if (this.$refs.myTable.getSelection().length === 0) {
          tips.notice2("提示", "请选中一个数据进行上架。", "info");
        } else {
          backApi.background.editGoodsStatus({status:0,ids:this.$refs.myTable.selectedRowKeys}).then(res=>{
            this.$refs.myTable.selectedRowKeys = []
            tips.notice2('提示', '上架成功', 'success')
            this.getList();
          })
        }
      },
      putDownGoods() {
        if (this.$refs.myTable.getSelection().length === 0) {
          tips.notice2("提示", "请选中一个数据进行下架。", "info");
        } else {
          backApi.background.editGoodsStatus({status:1,ids:this.$refs.myTable.selectedRowKeys}).then(res=>{
            this.$refs.myTable.selectedRowKeys = []
            tips.notice2('提示', '下架成功', 'success')
            this.getList();
          })
        }
      },
      async getList() {
        //获取轮播图信息。
        const data = await backApi.background.getGoodsList()
        this.tableData = data
      },
      addGoods() {
        this.isEdit = false;
        this.$refs.formModal.visible = true;
      },
      editGoods() {
        if (this.$refs.myTable.getSelection().length !== 1) {
          tips.notice2("提示", "请选中一个数据进行修改。", "info");
        } else {
          this.defalutFormData = this.$refs.myTable.getSelection()[0];
          this.isEdit = true;
          this.$refs.formModal.visible = true;
        }
      },
      handleOk(data) {
        if (!this.isEdit)
          this.getList()
      },
    }
  };
</script>
<style scoped>
  @import "../../assets/css/admin/dist/css/main.css";
  @import "../../assets/css/admin/dist/css/adminlte.css";
  @import "../../assets/css/admin/dist/css/adminlte.min.css";
  @import "../../assets/css/admin/plugins/bootstrap/css/bootstrap.css";
  @import "../../assets/css/admin/plugins/jqgrid-5.3.0/ui.jqgrid-bootstrap4.css";
</style>
