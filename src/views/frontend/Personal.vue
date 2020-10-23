<template>
  <div id="personal">
    <div class="self-info center">
      <!-- sidebar -->
      <personal-sidebar :is-personal="true"></personal-sidebar>

      <div class="intro fr">
        <div class="grzlbt ml40">
          我的资料
          <a @click="openUpdateModal();" style="color:#1baeae;margin-left: 600px;">更改个人信息</a>
        </div>
        <div class="info_item ml40">
          <span>昵称</span>
          <span :text="$store.state.user.nickName">newbee-mall</span>
        </div>
        <div class="info_item ml40">
          <span>手机号</span>
          <span :text="$store.state.user.loginName">newbee-mall</span>
        </div>
        <div class="info_item ml40">
          <span>密码</span>
          <span>******</span>
        </div>
        <div class="info_item ml40">
          <span>个性签名</span>
          <span :text="$store.state.user.introduceSign==''?'无':$store.state.user.introduceSign">newbee-mall</span>
        </div>
        <div class="info_item ml40">
          <span>收货信息</span>
          <span :text="$store.state.user.address==''?'无':$store.state.user.address">newbee-mall</span>
        </div>
      </div>
      <div class="clear"></div>
    </div>
    <div class="content">
      <!-- 模态框（Modal） -->
      <!-- <div
        class="modal fade"
        id="personalInfoModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="personalInfoModalLabel"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
              <h6 class="modal-title" id="personalInfoModalLabel">个人信息修改</h6>
            </div>
            <div class="modal-body">
              <form id="personalInfoForm">
                <div class="form-group">
                  <label for="nickName" class="control-label">昵称:</label>
                  <input type="hidden" id="userId" th:value="${session.newBeeMallUser.userId}" />
                  <input
                    type="text"
                    class="form-control"
                    id="nickName"
                    name="nickName"
                    placeholder="请输入昵称"
                    th:value="${session.newBeeMallUser.nickName}"
                    required="true"
                  />
                </div>
                <div class="form-group">
                  <label for="introduceSign" class="control-label">个性签名:</label>
                  <input
                    type="text"
                    class="form-control"
                    id="introduceSign"
                    name="introduceSign"
                    placeholder="请输入个性签名"
                    th:value="${session.newBeeMallUser.introduceSign}"
                    required="true"
                  />
                </div>
                <div class="form-group">
                  <label for="address" class="control-label">收货信息:</label>
                  <input
                    type="text"
                    class="form-control"
                    id="address"
                    name="address"
                    placeholder="请输入收货信息"
                    th:value="${session.newBeeMallUser.address}"
                    required="true"
                  />
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
              <button type="button" class="btn btn-primary" id="saveButton">确认</button>
            </div>
          </div>
        </div>
      </div>-->
      <!-- /.modal -->
    </div>
  </div>
</template>
<script>
import PersonalSidebar from "@/components/PersonalSidebar";

export default {
  name: "Personal",
  components: { PersonalSidebar },
  methods: {
    openUpdateModal() {}
  }
};
</script>
<style lang="scss">
@import "../../assets/css/mall/styles/personal.css";
// @import "../../assets/css/mall/bootstrap-modal.css";
</style>