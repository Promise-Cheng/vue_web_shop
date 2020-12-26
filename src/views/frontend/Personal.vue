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
          <span>{{ user.nickName?user.nickName:'' }}</span>
        </div>
        <div class="info_item ml40">
          <span>手机号</span>
          <span>{{ user.loginName?user.loginName:'' }}</span>
        </div>
        <div class="info_item ml40">
          <span>密码</span>
          <span>******</span>
        </div>
        <div class="info_item ml40">
          <span>个性签名</span>
          <span>{{ user.introduceSign?user.introduceSign:'无' }}</span>
        </div>
        <div class="info_item ml40">
          <span>收货信息</span>
          <span>{{ user.address? user.address:'无' }}</span>
        </div>
      </div>
      <div class="clear"></div>
    </div>
    <div class="content">
    </div>
    <edit-personal-data ref="editpersonaldata" @handle-ok="handleOk"></edit-personal-data>
  </div>
</template>
<script>
import PersonalSidebar from "@/components/PersonalSidebar";
import EditPersonalData from "@/views/frontend/componets/EditPersonalData";

export default {
  name: "Personal",
  components: {EditPersonalData, PersonalSidebar },
  computed:{
    user(){
      return this.$store.state.user
    },
  },
  methods: {
    openUpdateModal() {
      this.$refs.editpersonaldata.showModal({data:this.$store.state.user});
    },
    handleOk(){
      this.$store.dispatch('getTokenData');
    },
  }
};
</script>
<style lang="scss" scoped>
@import "../../assets/css/mall/styles/personal.css";
// @import "../../assets/css/mall/bootstrap-modal.css";
</style>
