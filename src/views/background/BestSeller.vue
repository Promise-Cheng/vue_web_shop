<template>
  <div class="hold-transition sidebar-mini">
    <div class="wrapper">
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
                <h3 class="card-title">热销商品配置</h3>
              </div>
              <!-- /.card-body -->
              <div class="card-body">
                <div class="grid-btn">
                  <button class="btn btn-info" @click="carouselAdd()">
                    <a-icon type="plus"/>&nbsp;新增
                  </button>
                  <button class="btn btn-info" @click="carouselEdit()">
                    <a-icon type="edit"/>&nbsp;修改
                  </button>
                  <button class="btn btn-danger" @click="deleteCarousel()">
                    <a-icon type="delete"/>&nbsp;删除
                  </button>
                </div>
                <br/>
                <my-table ref="myTable" :row-key="rowKey" :columns="columns" :data="tableData"></my-table>
              </div>
              <!-- /.card-body -->
            </div>
          </div>
          <!-- /.container-fluid -->
        </div>
        <!-- /.content -->
        <div class="content">
          <!-- 模态框（Modal） -->
          <!-- /.modal -->
        </div>
      </div>
    </div>
    <best-seller-form-modal
      :defalut-form-data="defalutFormData"
      @handle-ok="handleOk"
      :is-edit="isEdit"
      :configType="3"
      ref="formModal">
    </best-seller-form-modal>
  </div>
</template>

<script>
  import MyTable from "@/components/MyTable";
  import * as tips from "@/helper/Tips";
  import BestSellerFormModal from "@/views/background/BestSellerFormModal";
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
                configName: '@ctitle',
                url: '@url',
                'sortValue|+1': 1,
                goodsCode: '@id',
                addTime: '@DATETIME("yyyy-MM-dd HH:mm:ss")'
              }
            ]
          })
        )
      }, Random.range(1500, 600))
    })
  }

  export default {
    name: "BestSeller",
    components: {BestSellerFormModal, MyTable},
    data() {
      return {
        isEdit: false,
        defalutFormData: {},
        rowKey: 'configId',
        columns: [
          {
            title: "配置项名称",
            dataIndex: "configName"
          },
          {
            title: "跳转链接",
            dataIndex: "redirectUrl",
            key: "redirectUrl",
            scopedSlots: {customRender: "redirectUrl"}
          },
          {
            title: "排序值",
            dataIndex: "configRank"
          },
          {
            title: "商品编号",
            dataIndex: "goodsId"
          },
          {
            title: "添加时间",
            dataIndex: "createTime"
          },
        ],
        tableData: []
      };
    },
    mounted() {
      this.getList()
    },
    methods: {
      async getList() {
        const data = await backApi.indexConfigs.getListByType('3')
        this.tableData = data.filter(item=> item.configType === 3)
      },
      carouselAdd() {
        this.isEdit = false;
        this.$refs.formModal.visible = true;
      },
      carouselEdit() {
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
        this.$refs.myTable.selectedRowKeys = []
      },
      deleteCarousel() {
        backApi.indexConfigs.delete(this.$refs.myTable.selectedRowKeys).then(res=>{
          this.getList()
          this.$refs.myTable.selectedRowKeys = []
        })
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

  .ui-jqgrid tr.jqgrow td {
    white-space: normal !important;
    height: auto;
    vertical-align: text-top;
    padding-top: 2px;
  }
</style>
