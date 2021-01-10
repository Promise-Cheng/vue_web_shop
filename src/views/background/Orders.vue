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
                <h3 class="card-title">订单管理</h3>
              </div>
              <!-- /.card-body -->
              <div class="card-body">
                <div class="grid-btn">

                  <button class="btn btn-info" @click="carouselEdit()">
                    <a-icon type="edit"/>&nbsp;修改价格
                  </button>
                  <button class="btn btn-info" @click="handlePeiHuoDone()">
                    <a-icon type="car"/>&nbsp;配货完成
                  </button>
                  <button class="btn btn-info" @click="chuKu()">
                    <a-icon type="car"/>&nbsp;出库
                  </button>
                  <button class="btn btn-danger" @click="deleteCarousel()">
                    <a-icon type="delete"/>&nbsp;关闭订单
                  </button>
                </div>
                <br/>
                <my-table :row-key="rowKey" ref="myTable" :columns="columns" @goto-detail="gotoDetail"
                          :data="tableData">
                </my-table>
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
    <a-modal
      :title="modalState==='price'?'修改价格':'订单详情'"
      :visible="priceEdit"
      :confirm-loading="confirmLoading"
      @ok="handleOk"
      @cancel="handleCancel"
      cancelText="取消"
      okText="确定"
    >
      <a-form v-if="modalState==='price'" :label-col="labelCol" :wrapper-col="wrapperCol">
        <a-form-item label="价格：" :validate-status="status">
          <a-input v-model="price" placeholder="请输入"/>
        </a-form-item>
      </a-form>
      <div v-else>
        <template v-for="(item,index) in orderDetail">
          <div :key="index" style="display: flex;justify-content: flex-start">
            <div style="margin-left: 10px">商品名称：{{ item.goodsName }}</div>
            <div style="margin-left: 10px">购买数：{{ item.goodsCount }}</div>
            <div style="margin-left: 10px">价格：{{ item.sellingPrice }}</div>
          </div>
        </template>
      </div>
    </a-modal>
  </div>
</template>

<script>
  import MyTable from "@/components/MyTable";
  import CarouselFormModal from "./CarouselFormModal";
  import * as tips from "@/helper/Tips";
  import * as backApi from '@/api/background/backApi'
  import moment from "moment";

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
                orderId: '@id',
                orderPrice: '@ctitle',
                'orderState|1': [0, 1, 2, 3, 4, 5],
                'payType|1': ['支付宝支付', '微信支付'],
                addTime: '@DATETIME("yyyy-MM-dd HH:mm:ss")'
              }
            ]
          })
        )
      }, Random.range(1500, 600))
    })
  }


  export default {
    name: "Orders",
    components: {MyTable, CarouselFormModal},
    data() {
      return {
        rowKey: 'orderId',
        modalState: 'price',
        isEdit: false,
        price: '',
        confirmLoading: false,
        priceEdit: false,
        status: "",
        labelCol: {
          xs: {span: 24},
          sm: {span: 5}
        },
        wrapperCol: {
          xs: {span: 24},
          sm: {span: 12}
        },
        defalutFormData: {},
        columns: [
          {
            title: "订单号",
            dataIndex: "orderId",
          },
          {
            title: "订单总价",
            dataIndex: "totalPrice"
          },
          {
            title: "订单状态",
            dataIndex: "orderStatus",
            scopedSlots: {customRender: 'orderStatus'},
          },
          {
            title: "支付方式",
            dataIndex: "payType",
            scopedSlots: {customRender: 'payType'},
          },
          {
            title: "创建时间",
            dataIndex: "createTime"
          },
          {
            title: '操作',
            dataIndex: 'action',
            scopedSlots: {customRender: 'action'},
          },
        ],
        tableData: [],
        orderDetail: []
      };
    },
    mounted() {
      this.getList()
    },
    methods: {
      gotoDetail(row) {
        this.modalState = 'detail'
        backApi.order.getOrderDetail(row.orderId).then(res => {
          console.log(res.data)
          this.orderDetail = res.data
          this.priceEdit = true
        })
      },
      handleCancel() {
        this.priceEdit = false
      },
      async getList() {
        //获取轮播图信息。
        const data = await backApi.order.getOrder()
        this.tableData = data
      },
      handlePeiHuoDone() {
        if (this.$refs.myTable.getSelection().length !== 1) {
          tips.notice2("提示", "请选中一个数据进行修改。", "info");
        } else {
          backApi.order.checkDoneOrder(this.$refs.myTable.selectedRowKeys).then(res => {
            if (res.resultCode !== 200) {
              tips.notice2("提示", res.message, "warning");
              this.$refs.myTable.selectedRowKeys = []
            } else {
              tips.notice2("提示", "配货成功。", "success");
              this.getList()
              this.$refs.myTable.selectedRowKeys = []
            }
          })
        }
      },
      carouselEdit() {
        if (this.$refs.myTable.getSelection().length !== 1) {
          tips.notice2("提示", "请选中一个数据进行修改。", "info");
        } else {
          this.defalutFormData = this.$refs.myTable.getSelection()[0];
          this.price = this.defalutFormData.totalPrice
          this.modalState = 'price'
          this.priceEdit = true
        }
      },
      handleOk() {
        if (this.modalState === 'detail') {
          this.priceEdit = false
          return
        }
        const user = sessionStorage.getItem('userManager')
        const time = moment().format('YYYY-MM-DD')
        this.defalutFormData.totalPrice = this.price
        backApi.order.updateOrder({
          updateUser: time,
          updateTime: time,
          createTime: time,
          createUser: user, ...this.defalutFormData
        }).then(res => {
          tips.notice2("提示", "修改成功。", "success");
          this.priceEdit = false
          this.getList()
          this.$refs.myTable.selectedRowKeys = []
        })
      },
      deleteCarousel() {
        if (this.$refs.myTable.getSelection().length !== 1) {
          tips.notice2("提示", "请选中一个数据进行修改。", "info");
        } else {
          backApi.order.closeOrder(this.$refs.myTable.selectedRowKeys).then(res => {
            if (res.resultCode !== 200) {
              tips.notice2("提示", res.message, "warning");
              this.$refs.myTable.selectedRowKeys = []
            } else {
              tips.notice2("提示", "成功关闭。", "success");
              this.getList()
              this.$refs.myTable.selectedRowKeys = []
            }
          })
        }
      },
      chuKu() {
        if (this.$refs.myTable.getSelection().length !== 1) {
          tips.notice2("提示", "请选中一个数据进行修改。", "info");
        } else {
          backApi.order.checkOutOrder(this.$refs.myTable.selectedRowKeys).then(res => {
            if (res.resultCode !== 200) {
              tips.notice2("提示", res.message, "warning");
              this.$refs.myTable.selectedRowKeys = []
            } else {
              tips.notice2("提示", "出库成功。", "success");
              this.getList()
              this.$refs.myTable.selectedRowKeys = []
            }
          })
        }
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

  .ui-jqgrid tr.jqgrow td {
    white-space: normal !important;
    height: auto;
    vertical-align: text-top;
    padding-top: 2px;
  }
</style>
