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
                  <button class="btn btn-info" onclick="carouselAdd()">
                    <i class="fa fa-plus"></i>&nbsp;新增
                  </button>
                  <button class="btn btn-info" onclick="carouselEdit()">
                    <i class="fa fa-pencil-square-o"></i>&nbsp;修改
                  </button>
                  <button class="btn btn-danger" onclick="deleteCarousel()">
                    <i class="fa fa-trash-o"></i>&nbsp;删除
                  </button>
                </div>
                <br />
                <my-table></my-table>
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
  </div>
</template>

<script>
import MyTable from "@/components/MyTable";

export default {
  name: "Carousel",
  components: { MyTable },
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
