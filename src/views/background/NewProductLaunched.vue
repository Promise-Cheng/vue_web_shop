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
                <h3 class="card-title">新品上线配置</h3>
              </div>
              <!-- /.card-body -->
              <div class="card-body">
                <div class="grid-btn">
                  <button class="btn btn-info" @click="carouselAdd()">
                    <a-icon type="plus" />&nbsp;新增
                  </button>
                  <button class="btn btn-info" @click="carouselEdit()">
                    <a-icon type="edit" />&nbsp;修改
                  </button>
                  <button class="btn btn-danger" @click="deleteCarousel()">
                    <a-icon type="delete" />&nbsp;删除
                  </button>
                </div>
                <br />
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

export default {
  name: "NewProductLaunched",
  components: { MyTable, CarouselFormModal },
  data() {
    return {
      isEdit: false,
      defalutFormData:{},
      columns: [
        {
          title: "轮播图",
          dataIndex: "photoUrl",
          key: "photoUrl",
          scopedSlots: { customRender: "photoUrl" }
        },
        {
          title: "跳转链接",
          dataIndex: "url",
          key: "url",
          scopedSlots: { customRender: "url" }
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
      tableData: [
        {
          key: 1,
          photoUrl: require("../../assets/images/swiper/banner01.jpg"),
          url: require("../../assets/images/swiper/banner01.jpg"),
          sortValue: 32,
          addTime: `London, Park Lane no.`
        },
        {
          key: 2,
          photoUrl: require("../../assets/images/swiper/banner02.jpg"),
          url: require("../../assets/images/swiper/banner02.jpg"),
          sortValue: 32,
          addTime: `London, Park Lane no. `
        },
        {
          key: 3,
          photoUrl: require("../../assets/images/swiper/banner03.jpg"),
          url: require("../../assets/images/swiper/banner03.jpg"),
          sortValue: 32,
          addTime: `London, Park Lane no. `
        },
        {
          key: 6,
          photoUrl: require("../../assets/images/swiper/banner03.jpg"),
          url: require("../../assets/images/swiper/banner03.jpg"),
          sortValue: 32,
          addTime: `London, Park Lane no. `
        },
        {
          key: 4,
          photoUrl: require("../../assets/images/swiper/banner03.jpg"),
          url: require("../../assets/images/swiper/banner03.jpg"),
          sortValue: 32,
          addTime: `London, Park Lane no. `
        },
        {
          key: 5,
          photoUrl: require("../../assets/images/swiper/banner03.jpg"),
          url: require("../../assets/images/swiper/banner03.jpg"),
          sortValue: 32,
          addTime: `London, Park Lane no. `
        }
      ]
    };
  },
  methods: {
    getList(){
      //获取轮播图信息。
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
      console.log(data);
    },
    deleteCarousel() {}
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
