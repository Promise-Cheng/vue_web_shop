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
                <h3 class="card-title">账号管理</h3>
              </div>
              <div style="height:500px;">
                <a-form :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
                  <a-form-item label="名称">
                    <a-input v-model="userData.loginUserName" placeholder="请输入"/>
                  </a-form-item>
                  <a-form-item label="昵称">
                    <a-input v-model="userData.nickName" placeholder="请输入"/>
                  </a-form-item>
                </a-form>
                <a-form :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
                  <a-form-item label=" ">
                    <div style="display: flex;justify-content: center;margin-top: 20px;align-items: center">
                      <a-button @click="editName" type="primary"
                                style="margin-right: 10px;display: flex;align-items: center">修改名称
                      </a-button>
                    </div>
                  </a-form-item>
                </a-form>
                <a-form :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
                  <a-form-item label="原密码">
                    <a-input v-model="pwd.originalPassword" placeholder="请输入"/>
                  </a-form-item>
                  <a-form-item label="新密码">
                    <a-input v-model="pwd.newPassword" placeholder="请输入"/>
                  </a-form-item>
                </a-form>
                <a-form :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
                  <a-form-item label=" ">
                    <div style="display: flex;justify-content: center;margin-top: 20px;align-items: center">
                      <a-button @click="editPassword" type="primary"
                                style="margin-right: 10px;display: flex;align-items: center">修改密码
                      </a-button>
                    </div>
                  </a-form-item>
                </a-form>
              </div>

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
  import CarouselFormModal from "./CarouselFormModal";
  import * as tips from "@/helper/Tips";
  import * as backApi from '@/api/background/backApi'

  export default {
    name: "Profile",
    components: {MyTable, CarouselFormModal},
    data() {
      return {
        userData: {},
        pwd: {},
      };
    },
    mounted() {
      this.getList()
    },
    methods: {
      editName() {
        console.log(this.userData)
        backApi.background.editProfileName(this.userData).then(res => {
          tips.notice2("提示", "修改成功。", "success");
        })
      },
      editPassword() {
        backApi.background.editProfilePassword({adminUserId:this.userData.adminUserId,...this.pwd}).then(res => {
          if(res === 'success'){
            tips.notice2("提示", "修改成功。", "success");
          } else
            tips.notice2("提示", "原密码输入错误", "warning");
          this.pwd = {}
        })
      },
      getList() {
        const id = sessionStorage.getItem('userManager')
        backApi.background.getProfile({loginUserId: id}).then(res => {
          this.userData = res
        })
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
      deleteCarousel() {
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
