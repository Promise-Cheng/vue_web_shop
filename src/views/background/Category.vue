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
              <h3 class="card-title">分类管理</h3>
            </div>
            <!-- /.card-body -->
            <div class="card-body">
              <div class="grid-btn">
                <button class="btn btn-info" @click="categoryAdd()">
                  <a-icon type="plus" />&nbsp;新增
                </button>
                <button class="btn btn-info" @click="categoryEdit()">
                  <a-icon type="edit" />&nbsp;修改
                </button>
                <button class="btn btn-danger" @click="deleteCagegory()">
                  <a-icon type="delete" />&nbsp;删除
                </button>
                <button class="btn btn-info" @click="categoryManage()">
                  <a-icon type="unordered-list" />&nbsp;下级分类管理
                </button>
                <button class="btn btn-info" @click="categoryBack()">
                  <a-icon type="arrow-left" />&nbsp;返回
                </button>
              </div>
              <br />
              <my-table :columns="columns" :data="tableData"></my-table>
            </div>
            <!-- /.card-body -->
          </div>
        </div>
        <!-- /.container-fluid -->
      </div>
      <!-- /.content -->
    </div>
  </div>
</template>
<script>
import MyTable from "@/components/MyTable";

export default {
  name: "Category",
  components: { MyTable },
  data() {
    return {
      columns: [
        {
          title: "分类名称",
          dataIndex: "typeName",
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
      tableData:[
          {
              key:1,
              typeName:'分类1',
              sortValue:'1',
              addTime:'时间1',
          },
           {
              key:2,
              typeName:'分类2',
              sortValue:'2',
              addTime:'时间2',
          },
           {
              key:3,
              typeName:'分类3',
              sortValue:'3',
              addTime:'时间3',
          },
      ]
    };
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