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
              <my-table ref="myTable" :columns="columns" :data="tableData"></my-table>
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
                goodId: '@id',
                goodName: '@ctitle',
                goodtext: '@text',
                imgUrl: '@img',
                have: '@natural(1, 1000)',
                price: '@natural(1, 1000)',
                'state|+1': true,
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
        isEdit:false,
        defalutFormData:{},
        columns: [
          {
            title: "商品编号",
            dataIndex: "goodId",
          },
          {
            title: "商品名称",
            dataIndex: "goodName"
          },
          {
            title: "商品简介",
            dataIndex: "goodtext"
          },
          {
            title: "商品图片",
            dataIndex: "imgUrl"
          },
          {
            title: "商品库存",
            dataIndex: "have"
          },
          {
            title: "商品售价",
            dataIndex: "price"
          },
          {
            title: "上架状态",
            dataIndex: "state",
            scopedSlots: {customRender: "state"}
          },
          {
            title: "创建时间",
            dataIndex: "addTime"
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
          let data = this.$refs.myTable.getSelection()
          _.forEach(data, item => {
            item.state = true
          })
          this.$refs.myTable.selectedRowKeys = []
          tips.notice2('提示', '上架成功', 'success')
        }
      },
      putDownGoods() {
        if (this.$refs.myTable.getSelection().length === 0) {
          tips.notice2("提示", "请选中一个数据进行下架。", "info");
        } else {
          let data = this.$refs.myTable.getSelection()
          _.forEach(data, item => {
            item.state = false
          })
          this.$refs.myTable.selectedRowKeys = []
          tips.notice2('提示', '下架成功', 'success')
        }
      },
      async getList() {
        //获取轮播图信息。
        const data = await fetchList()
        this.tableData = data.list
        // api.background.getCarouselList({page:1,limit:10}).then(res=>{
        //   console.log(res)
        // })
      },
      addGoods() {
        this.isEdit = false;
        this.$refs.formModal.visible = true;
      },
      editGoods() {
        if (this.$refs.myTable.getSelection().length !== 1) {
          tips.notice2("提示", "请选中一个数据进行修改。", "info");
        } else {
          console.log(this.tableData)
          this.defalutFormData = this.$refs.myTable.getSelection()[0];
          this.isEdit = true;
          this.$refs.formModal.visible = true;
        }
      },
      handleOk(data) {
        tips.notice2("提示", "操作成功。", "success");
        if (!this.isEdit)
          this.getList()
        console.log(data);
      },
      deleteCarousel() {
        this.tableData = this.tableData.filter(item => {
          return !this.$refs.myTable.selectedRowKeys.includes(item.key)
        })
        this.$refs.myTable.selectedRowKeys = []
      }
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
