<template>
  <!-- <userHeader/> -->
  <div style="margin-top: 20px; align-items: center" class="fill-weight">
  <v-container style="margin: 26px auto 0 ;padding:0" class="fix_font">
    <!-- <header> -->
        <!-- <userHeader/> -->
    <!-- </header> -->
    <v-row style="justify-content: center" >
        <v-col cols="12" md="10" lg="10" sm="10">
          <div class="tch_checkout_header" style="text-align: center">
            <h1 class="tch_checkout_header-title">
              <v-icon large color="#fad207">mdi-file</v-icon>
              <span>Xác nhận đơn hàng</span>
            </h1>
          </div>
          <v-row>
<!--            cột bên traÍ-->
            <v-col cols="12" md="6" lg="6" >
          <div >
<!--            phần bên trái trên-->
          <div style="    display: flex;
                          flex-direction: column;
                          ">
<!--            giao hàng -->
<!--             nut chọn địa chỉ-->

            <div class="tch_checkbox_deli fix_position" >
              <div class="tch_checkout_cus_deli">
                <h4 class="checkout_delivery_text">Giao hàng</h4>
                <p class="checkout_delivery_btn">Đổi phương thức</p>
              </div>
            </div>
<!--            địa chỉ -->
            <div class="tch_deli_address tch_delivery_card fix_position" style="float: left">
              <div class="tch_delivery_img">
                <img style="width: 40px" src="https://minio.thecoffeehouse.com/images/tch-web-order/Delivery2.png" alt="">
              </div>
              <div class="tch_delivery_content" style="flex: 1">

                <div  style="padding-left: 12px;justify-content: center">
                      <div  @click.stop="dialog = true">
                        <h5 class="delivery_address mb-0" >Need to handle oldAddres</h5>
                        <p class="delivery_address_description mb-0">
                         {{myInput}}
                        </p>
                      </div>

                    <v-dialog
                        v-model="dialog"
                        width="376"
                        style="z-index: 999;"
                        content-class="my-custom-dialog"

                    >
                      <v-card class="fix_font" style="border-radius: 0.5rem">
                        <div class="modal-header">
                          <v-icon @click="dialog= false" small color="#262626">mdi-close-thick</v-icon>
                          <h5 id="abc-title" class="modal-title">Giao hàng</h5>
                        </div>
                        <div class="modal-body">
                          <div class="form-group mb-0">
<!--                            thanh search địa chỉ -->
<!--                            <input type="text" v-model.lazy="myInput"  placeholder="Vui lòng nhập địa chỉ" class="form-control tch-delivery__input">-->
                            <bulma-dropdown :options="options" @select="selected = $event" placeholder="Search"/>
                          </div>
                        </div>

                        <v-card-actions>
                          <v-spacer></v-spacer>

                          <v-btn
                              color="green darken-1"
                              text
                              @click="dialog = false"
                          >
                            Xác nhận
                          </v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-dialog>
                  </div>


                <span>
                  <v-icon color="black"  right x-large>mdi-chevron-right</v-icon>
                </span>
              </div>
            </div>
<!--            thời gian giao hàng -->
            <div class="time_deli fix_position " style="padding-left: 40px;margin-left: 50px">
              <div class="tch_delivery_img" style="width: 40px ;">
              </div>
              <div class="tch_delivery_content">
                <div>
                  <h5 class="delivery_address mb-0">
                    Nhận hàng trong ngày 15-30 phút
                  </h5>
                  <p class="delivery_address_description mb-0">
                    Nhận càng sớm càng tốt
                  </p>
                </div>
                <span>
                  <v-icon color="black" right x-large>mdi-chevron-right</v-icon>
                </span>
              </div>
            </div>
<!--            thẻ input tên-->
            <div class="form-group fix_position" style="margin-left: 50px" v-if="logged===0">
              <input type="text" id="name"  :placeholder="name" class="form-control tch-delivery__input">
            </div>
            <div class="form-group fix_position" style="margin-left: 50px" v-else>
              <input type="text" id="name"  :value="name" class="form-control tch-delivery__input">
            </div>
<!--            thẻ sdt -->
            <div class="form-group fix_position" style="margin-left: 50px" v-if="logged===0">
              <input type="text" id="phone_number"  :placeholder="phone" class="form-control tch-delivery__input">
            </div>
            <div class="form-group fix_position" style="margin-left: 50px" v-else>
              <input type="text" id="phone_number"  :value="phone" class="form-control tch-delivery__input">
            </div>
<!--            hướng daanxc giao hàng-->
            <div class="form-group fix_position" style="margin-left: 50px" >
              <input type="text" id="delivery_detail"  placeholder="Thêm hướng dẫn giao hàng" class="form-control tch-delivery__input">
            </div>
          </div>
<!-- bên  trái dưới  = thanh toán method-->
            <div style="display: flex;flex-direction: column;">
              <div class="tch_checkbox_deli fix_position" >
                <div class="tch_checkout_cus_deli">
                  <h4 class="checkout_delivery_text">Phương thức thanh toán</h4>
                </div>
              </div>
<!--              thanh toans method-->
              <ul class="tch-list-payment-method mb-0 fix_position">
                <li class="tch-payment-method-item">
                  <div class="custom-control custom-radio mb-0">
                    <input type="radio" name="payment-method" id="COD" class="custom-control-input">
                    <label for="COD" class="custom-control-label tch-custom-radio" style="padding-left: 6px">
                      <span class="icon ml-3 mr-2">
                        <img src="https://minio.thecoffeehouse.com/image/tchmobileapp/1000_photo_2021-04-06_11-17-08.jpg" alt="">
                      </span>
                      <span class="text">Tiền mặt</span>
                    </label>
                  </div>
                </li>
                <li class="tch-payment-method-item">
                  <div class="custom-control custom-radio mb-0">
                    <input type="radio" name="payment-method" id="Momo" class="custom-control-input">
                    <label for="Momo" class="custom-control-label tch-custom-radio" style="padding-left: 6px">
                      <span class="icon ml-3 mr-2">
                        <img src="https://minio.thecoffeehouse.com/image/tchmobileapp/386_ic_momo@3x.png" alt="">
                      </span>
                      <span class="text">Momo</span>
                    </label>
                  </div>
                </li>
                <li class="tch-payment-method-item">
                  <div class="custom-control custom-radio mb-0">
                    <input type="radio" name="payment-method" id="ZaloPay" class="custom-control-input">
                    <label for="ZaloPay" class="custom-control-label tch-custom-radio" style="padding-left: 6px">
                      <span class="icon ml-3 mr-2">
                        <img src="https://minio.thecoffeehouse.com/image/tchmobileapp/388_ic_zalo@3x.png" alt="">
                      </span>
                      <span class="text">Zalopay</span>
                    </label>
                  </div>
                </li>
                <li class="tch-payment-method-item">
                  <div class="custom-control custom-radio mb-0">
                    <input type="radio" name="payment-method" id="ShoppePay" class="custom-control-input">
                    <label for="ShoppePay" class="custom-control-label tch-custom-radio" style="padding-left: 6px">
                      <span class="icon ml-3 mr-2">
                        <img src="https://minio.thecoffeehouse.com/image/tchmobileapp/1120_1119_ShopeePay-Horizontal2_O.png" alt="">
                      </span>
                      <span class="text">ShoppePay</span>
                    </label>
                  </div>
                </li>
                <li class="tch-payment-method-item">
                  <div class="custom-control custom-radio mb-0">
                    <input type="radio" name="payment-method" id="123PAY" class="custom-control-input">
                    <label for="123PAY" class="custom-control-label tch-custom-radio" style="padding-left: 6px">
                      <span class="icon ml-3 mr-2">
                        <img src="https://minio.thecoffeehouse.com/image/tchmobileapp/385_ic_atm@3x.png" alt="">
                      </span>
                      <span class="text">Thẻ ngân hàng</span>
                    </label>
                  </div>
                </li>
              </ul>

<!--              policy -->
              <div class="policy" >
                <label class="checkbox-button fix_position " style="margin-left: 50px">
                  <input  checked="checked" disabled="disabled" type="checkbox" id="choice1-1" name="choice1" class="checkbox-button__input">
                  <span class="checkbox-button__control"></span>
                  <span class="checkbox-button__label">
                        Đồng ý với các
                    <a  href="#" style="color: #fa8c16;">điều khoản và điều kiện</a>
                     mua hàng của The Coffee House
                  </span>
                </label>
              </div>
            </div>

<!--            xóa đơn hàng -->
            <div style="display: flex;flex-direction: column;padding: 38px 0 16px 0">
              <p  class="tch-checkout-box__text text-center mb-0 fix_position">
                <span  class="icon mr-2">
                  <v-icon  color="#fa8c16">mdi-delete</v-icon>

                </span><span >Xóa đơn hàng</span>
              </p>
            </div>
          </div>
            </v-col>
            <v-col cols="12" md="6" lg="6" >
<!--            cột bên phải -->
            <div style="    box-shadow: 0 -4px 10px rgb(0 0 0 / 12%);
    border-radius: 8px;">
              <div class="px-5">
                <div class="py-3">
<!--              các món đã chọn-->
                  <div class="tch_checkout_cus_deli">
                    <h4 class="checkout_delivery_text">Các món đã chọn </h4>
                    <a  href="#" style="text-decoration: none; color: black;">
                      <p  class="checkout_delivery_btn">Thêm món</p>
                    </a>
                  </div>
<!--                  list các món đã chọn-->
<!--                  sp1-->
                  <div  class="tch-order-card product_chose_item"
                  v-for="order in orders"
                        :key="order.size"
                        style="display:inherit;"
                  >
                    <div v-for="product in order.product_item"
                    :key="product.name"
                         class="product_chose_item"
                    
                    >
                    <div class="tch-order-card__left " style="display: flex">
                      <span  class="tch-order-card__icon " style="display:flex;align-items: center">
                        <v-icon small color="#fa8c16">mdi-pencil</v-icon>
                      </span>
                      <div class="tch-order-card__content">
                        <h5 class="tch-order-card__title mb-0">{{order.count}} x {{product.name}}</h5>
                        <p class="tch-order-card__description mb-0">{{order.size}}, {{order.count}} x {{order.size}}</p>
                        <div class="tch-order-card__description mb-0"
                           v-for="topping in order.topping_items"
                           :key="topping.id"
                        >
                        <p v-if= "topping.count !== 0" style="margin: 0">
                          {{topping.name}}, x {{topping.name}}
                          </p>
                        </div> <!---->
                        <p class="tch-order-delete-item"  >Xóa</p>
                      </div>
                    </div>
                    <div class="tch-order-card__right">
                      <p class="tch-order-card__price mb-0">{{separator(product.price)}}đ</p>
                    </div>
                      </div>
                  </div>

<!--thanh toán -->
                  <div
                      class="tch-checkout-box tch-checkout-box--list-total tch-checkout-border " style="padding: 14px 0 30px ">
                    <div class="tch_checkout_cus_deli">
                      <h4 class="checkout_delivery_text">Tổng cộng</h4>
                    </div>
                    <div  class="tch-order-card tch-order-card--border product_chose_item">
                      <div  class="tch-order-card__left " style="display: flex">
                        <p  class="tch-order-card__text mb-0">Thành tiền</p>
                      </div>
                      <div  class="tch-order-card__right" >
                        <p   class="tch-order-card__price mb-0">{{get_totalprice()}}đ</p>
                      </div>
                    </div>

                    <div class="tch-order-card product_chose_item">
                      <div class="tch-order-card__left d-flex">
                        <p  class="tch-order-card__text mb-0">Phí giao hàng</p>
                      </div>
                      <div  class="tch-order-card__right">
                        <p  class="tch-order-card__price mb-0">0đ</p>
                      </div>
                    </div>
                    <hr>
                  </div>

                </div>
                <!--                  tiến hàng đặt hàng -->
              </div>
              <div class=" tch-checkout-box--list-submited position-static " style="display: flex;justify-content: space-between">
                <div >
                  <p  class="tch-order-card__text text-white mb-0">Thành tiền</p>
                  <p  class="tch-order-card__text text-white mb-0" style="font-weight: 600">{{get_totalprice()}}đ</p>
                </div> <button data-v-ccef1d60="" type="button" class="btn btn--white text-orange btn--radius-100" @click="handleDatHang">
                Đặt hàng
              </button>
              </div>
            </div>
            </v-col>
          </v-row>
        </v-col>
    </v-row>
  </v-container>
  </div>
</template>

<script>
import { BulmaDropdown } from 'vue-custom-google-autocomplete'
export default {
  name: "checkOut",
  components:{
    BulmaDropdown
  },
  data () {
    return {
      logged: 0,
      user: {},
      name: "",
      phone: "",
      oldAddress: " ",
      orders: [],
      dialog:false,
      myInput:"",
      selected: null,
      options: {
        apiKey: process.env.VUE_APP_PLACE_API_KEY,
        deepSearch: true,
        cors: true,
        focus: false,
        params: {
          location: '-33.8688,151.2195',
          radius: 1000,
          language: 'en'
        }
      }
    }
  },

  created(){
    this.orders = JSON.parse(localStorage.getItem("order"))
    console.log("order 2: ", this.orders)
    if (JSON.parse(localStorage.getItem("user")) == null) {
            // this.user = localStorage.getItem("user")
            this.logged = 0
            this.name = "Tên người nhận"
            this.phone = "Số điện thoại"
            this.oldAddress = "Chưa có địa chỉ giao hàng"
        } else {
          this.logged = 1
            this.user = JSON.parse(localStorage.getItem("user"))
            this.name = this.user.lastName + " " + this.user.firstName
            this.phone = this.user.phone
            this.oldAddress = this.user.address
        }
  },

  methods:{

    separator(numb) {
      var str = numb.toString().split(".");
      str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
      return str.join(".");
    },

    get_totalprice() {
      let price = 0;

      this.orders.forEach((order) => {
        order.product_item.forEach((product) => {
            price += parseInt(product.price)*order.count;
        });
      });

      return this.separator(price);
    },

    handleDatHang() {
      // send this.orders ve BE
    }
  },
  userHeader: () => import("@/layouts/Header/userHeader"),

}
</script>

<style scoped>
/deep/.my-custom-dialog {
  align-self: flex-start;
  margin-top: 125px
}

.fix_font{
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
}
.fill-weight {
  /* width: auto !important; */
  min-width: 100%;
  width: 1520px !important;
  /* height: 749px !important; */
  justify-content: center;
  /* max-width: 100%; */
  
}
  .tch_checkout_header{
    margin-bottom: 3.125rem;
  }
  .tch_checkout_header-title{
    font-size: 28px;
    line-height: 36px;
    font-weight: 600;
    color: #242424;
  }
  .tch_checkbox_deli{
    width: calc(50% - 50px);
    margin-left: 50px;
    padding:16px 0;
    float: left !important;
  }
  .tch_checkout_cus_deli{
    display: flex;
    justify-content: space-between;
  }
  .checkout_delivery_text{
    position: relative;
    padding-bottom: 6px;
    color: #262626;
    font-size: 18px;
    line-height: 26px;
    font-weight: 600;
  }
  .checkout_delivery_text:after{
    position: absolute;
    bottom: 0;
    left: 0;
    width: 50px;
    height: 2px;
    background: #fa8c16;
    border-radius:6px;
    content: "";
    z-index: 999;
  }
  .checkout_delivery_btn{
    padding: 7px 22px;
    background: white;
    font-size: 12px;
    line-height: 22px;
    border: 1px solid #262626;
    border-radius: 100px;
    cursor: pointer;
  }

  .tch_deli_address{
    display: flex;
    align-items: flex-start;
    flex-direction: row;
    margin-left: 50px;
  }
  .tch_delivery_card{
    padding: 12px 0 ;
    cursor: pointer;
  }
  .tch_delivery_content{
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding-left: 12px;
  }

  .delivery_address{
    font-size: 0.8375rem;
    line-height: 24px;
    height: 24px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
  }

  .delivery_address_description{
    font-size: 14px;
    line-height: 22px;
  }
  .form-group{
    margin-bottom: 16px;
  }
  input{
    font-size: 1rem;
    line-height: 1.5;
    padding: 11px 23px;
    border: 1px solid rgba(0,0,0,.15);
    border-radius: 0;
    outline: 0;
    background-color: transparent;
  }
  .form-control{
    display: block;
    width: 100%;
    height: calc(1.5em + .75rem + 2px);
    /*padding: .375rem .75rem;*/
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: .25rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  }
  .tch-delivery__input{
    height: 2.75rem;
    padding: 10px 23px;
    background: #fafafa;
    border: 1px solid #ededed;
    font-family: inherit;
    font-size: 13.4px;
    font-weight: 350;
  }

  .fix_position{
    width: calc(100% - 40px);
  }

  .time_deli{
    padding: 12px 0;
  }
  .tch-list-payment-method{
    margin:0 0 0 40px;
    list-style: none;
  }
  .tch-payment-method-item{
    padding: 1rem 0;
    border-bottom: 1px solid #c4c4c4;
  }
  .custom-control{
    position: relative;
    z-index: 1;
    display: block;
    min-height: 1.5rem;
    padding-left: 1.5rem;
    -webkit-print-color-adjust: exact;
  }
  .custom-control-input{
    width: 1.5rem;
    height: 1.5rem;
  }

  .custom-control-label{
    cursor: pointer;
    position: relative;
    margin-bottom: 0;
    vertical-align: top;
  }
  label{
    display: inline-block;
  }

  .tch-list-payment-method .tch-payment-method-item .custom-control-label .icon {
    width: 1.5rem;
    height: 0.8375rem;
  }

  .tch-payment-method-item img{
    object-fit: cover;
    width: 1.5rem;
    height: 0.8375rem;
  }
  .tch-list-payment-method .tch-payment-method-item .custom-control-label .text {
    font-size: 0.8375rem;
    line-height: 1.5rem;
    color: #262626;
  }

  .policy{
    margin-top: 30px;
  }
  .checkbox-button{
    cursor: pointer;
  }

  .checkbox-button__input{
    opacity: 0;
    position: absolute;
  }
  .checkbox-button__control{
    /*border-color: #fa8c16;*/
    position: relative;
    display: inline-block;
    width: 25px;
    height: 25px;
    margin-right: 12px;
    vertical-align: middle;
    background-color: inherit;
    color: #fa8c16;
    border: 3px solid #fa8c16;
  }
  .checkbox-button__control::after{
    content: "";
    display: block;
    position: absolute;
    top: 3px;
    left: 3px;
    width: 12px;
    height: 10px;
    font-size: 69px;
    background: url(https://minio.thecoffeehouse.com/images/tch-web-order/Vector.png);
  }
  .checkbox-button__label{
    color: #262626;
    font-size: 16px;
  }
  .tch-checkout-box__text {
    color: #fa8c16;
    font-size: 0.8375rem;
    line-height: 1.5rem;
  }
  .tch-checkout-box__text .icon {
    font-size: 1.25rem;
    line-height: 1;
  }

  .tch-order-card {
    min-height: 3.5rem;
    padding: 0.75rem 0;
    cursor: pointer;
  }

  .product_chose_item{
    align-items: center;
    justify-content: space-between;
    display: flex;
  }

    .tch-order-card__icon {
    font-size: 0.8375rem;
    line-height: 1;
    color: #fa8c16;
  }
    .tch-order-card__content{
      padding-left: 18px;
      flex: 1;
      color: #262626;
    }
  .tch-order-card__title,.tch-order-card__text {
    font-size:0.8375rem;
    line-height: 1.5rem;
    height: 24px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
  }
  .tch-order-card__description {
    font-size:0.8375rem;
    line-height: 1.375rem;
  }
  .tch-order-delete-item {
    display: inline;
  }
  .tch-order-card--border::after {
    position: absolute;
    bottom: -1px;
    right: 0;
    content: "";
    height: 1px;
    background-color: #c4c4c4;
    opacity: .3;
  }
  hr{
    border-bottom: 0.2px solid #c4c4c4;
  }
  .tch-checkout-box{
    border-bottom-left-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
  }
  .tch-checkout-box--list-submited {
    border-bottom-left-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
    background: radial-gradient(75.9% 488.28% at 24.1% 100%,#e87800 0%,#fa8c16 100%);
    box-shadow: 0 2px 8px rgb(0 0 0 / 12%);
    padding: 0.8375rem 15px;
  }

  .text-white {
    color: #fff!important;
  }

  .btn.btn--radius-100 {
    border-radius: 6.25rem !important;
  }

  .btn.btn--white {
    background: white;
  }
  .btn {
    padding: 0.375rem 1.375rem;
  }

  .text-orange {
    color: #fa8c16;
  }
  /*p {*/
  /*  margin-top: 0;*/
  /*  margin-bottom: 1rem;*/
  /*}*/

.modal-header{
  justify-content: space-between;
  display: flex;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #dee2e6;
  border-top-left-radius: calc(.3rem - 1px);
  border-top-right-radius: calc(.3rem - 1px);
}
.icon{
  color: black;
  font-size: 0.8375rem;
  line-height: 1.5rem;

}
.modal-title{
  font-size: 0.8375rem;
  line-height:1.5rem;
  color: #262626;
  margin: auto;
  font-weight: 500;
}

.modal-body{
  padding: 1rem;
}
</style>