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
                <h3 class="card-title">轮播图管理</h3>
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
                <my-table ref="myTable" :columns="columns" :data="tableData"></my-table>
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
    <carousel-form-modal
      :defalut-form-data="defalutFormData"
      @handle-ok="handleOk"
      :is-edit="isEdit"
      ref="formModal">
    </carousel-form-modal>
  </div>
</template>

<script>
  import MyTable from "@/components/MyTable";
  import CarouselFormModal from "./CarouselFormModal";
  import * as tips from "@/helper/Tips";
  import * as api from "@/api/api";

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
                photoUrl: '@img',
                url: '@url',
                'sortValue|+1': 1,
                'faBu|1': true,
                'shouYeXS|1': true,
                gengXinRen: '@cname',
                addTime: '@DATETIME("yyyy-MM-dd HH:mm:ss")'
              }
            ]
          })
        )
      }, Random.range(1500, 600))
    })
  }

  export default {
    name: "Carousel",
    components: {MyTable, CarouselFormModal},
    data() {
      return {
        isEdit: false,
        defalutFormData: {},
        columns: [
          {
            title: "轮播图",
            dataIndex: "photoUrl",
            key: "photoUrl",
            scopedSlots: {customRender: "photoUrl"}
          },
          {
            title: "跳转链接",
            dataIndex: "url",
            key: "url",
            scopedSlots: {customRender: "url"}
          },
          {
            title: "排序值",
            dataIndex: "sortValue"
          },
          {
            title: "添加时间",
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
      async getList() {
        //获取轮播图信息。
        const data = await fetchList()
        this.tableData = data.list
        // api.backgroud.getCarouselList({page:1,limit:10}).then(res=>{
        //   console.log(res)
        // })
      },
      carouselAdd() {
        this.isEdit = false;
        this.$refs.formModal.visible = true;
      },
      carouselEdit() {
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
        if(!this.isEdit)
          this.getList()
        console.log(data);
      },
      deleteCarousel() {
        this.tableData = this.tableData.filter(item =>{
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

  .ui-jqgrid tr.jqgrow td {
    white-space: normal !important;
    height: auto;
    vertical-align: text-top;
    padding-top: 2px;
  }
</style>
