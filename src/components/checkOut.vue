<template>
  <div style="margin-top: 150px">
  <v-container  style="margin: 26px auto 0 ;">
    <v-row style="justify-content: center" >
        <v-col cols="12" md="10" lg="10" sm="10">
          <div class="tch_checkout_header">
            <h1 class="tch_checkout_header-title">
              <span></span>
              <span>Xác nhận đơn hàng</span>
            </h1>
          </div>

          <div>
            <div class="tch_checkbox_deli">
              <div class="tch_checkout_cus_deli">
                <h4 class="checkout_delivery_text">Giao hàng</h4>
                <p class="checkout_delivery_btn">Đổi phương thức</p>
              </div>
            </div>
            <div class="tch_deli_address tch_delivery_card">
              <div class="tch_delivery_img">
                <img style="width: 40px" src="https://minio.thecoffeehouse.com/images/tch-web-order/Delivery2.png" alt="">
              </div>
              <div class="tch_delivery_content">
                <div>
                  <h5 class="delivery_address mb-0" >Vincom MegaMall</h5>
                  <p class="delivery_address_description mb-0">
                    Vincom Mega Mall, 161 XL Hà Nội, Thảo Điền, Quận 2, Thành phố Hồ Chí Minh, Việt Nam
                  </p>
                </div>

              </div>


            </div>

          </div>
        </v-col>
    </v-row>
  </v-container>
  </div>
</template>

<script>
export default {
  name: "checkOut"
}
</script>

<style scoped>
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

  .tch_delivery_card__title{
    font-size: 16px;
    line-height: 24px;
    height: 24px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
  }
</style>