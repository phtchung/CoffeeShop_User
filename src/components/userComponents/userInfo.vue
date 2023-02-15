<template>
<div class="container-lg container-fluid body" style="align-items: center; margin-top: 24px">

    <div class="user-info-head">
        <img src="https://order.thecoffeehouse.com/_nuxt/img/user-icon-gold.5f2886d.svg" alt="" class="user-info-icon-head" />
        <span class="user-info-text">Tài khoản của bạn</span>
    </div>

    <section class="user-info">
        <div class="user-info-left">
            <div class="user-info-card" style="
            background: linear-gradient(
              rgb(255, 149, 34) 0%,
              rgb(218, 84, 9) 50%
            );
          ">
                <div class="armorial-point">
                    <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHZpZXdCb3g9IjAgMCAxMCAxMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwKSI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTAgMS45MjM3M0w1IDUuNzY2NjdMLTEuNzM5NDRlLTA4IDEuOTIzNzNMMC4xMzc4MjggMUw1IDQuNzM3TDkuODYyMTcgMUwxMCAxLjkyMzczWiIgZmlsbD0id2hpdGUiLz4KPHBhdGggb3BhY2l0eT0iMC41IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEwIDUuNjU3TDUgOS40OTk5M0wtMi4xMDYzNWUtMDggNS42NTdMMC4xMzc4MjggNC41TDUgOC4yMzdMOS44NjIxNyA0LjVMMTAgNS42NTdaIiBmaWxsPSJ3aGl0ZSIvPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwIj4KPHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjkiIGZpbGw9IndoaXRlIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDAuNSkiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K" alt="" class="armorial-point-icon" />
                    <span class="armorial-point-txt">Tích điểm</span>
                </div>
                <div class="user-info-card-header">
                    <span class="user-card-code">{{ userInfomation.last_name }}</span>
                    <p class="user-bean">{{bean}} bean - Mới</p>
                </div>
                <div class="user-card-barcode d-flex flex-column align-items-center">
                    <!-- <barcode value="112335" class="barcode" width="244" height="122"></barcode> -->
                    <p class="code-number">M161682829</p>
                </div>
                <img src="" class="leaves-image" />
            </div>
            <div class="user-info-detail">
                <div class="user-rank">
                    <span class="user-txt">VÀNG</span>
                    <span class="user-rank-detail">KIM CƯƠNG</span>

                    <v-progress-linear :value=persent :reverse="$vuetify.rtl" color="yellow " class="user-progress-bar" style="
                background: linear-gradient(
                  rgb(255, 149, 34) 0%,
                  rgb(218, 84, 9) 50%
                );
              ">
                        <div class="dot-begin"></div>
                        <div class="dot" :style="{ 'left': persent -13 + '%' }" style="
                  transform: translateY(-50%);
                  top: 60%;
                  /*left: calc(80% - 30px);*/
                "></div>
                        <div class="dot-after"></div>
                    </v-progress-linear>
                </div>
                <p class="user-next-bean">
                    Còn {{Math.round(30*(100- this.persent))}} BEAN nữa bạn sẽ thăng hạng. Đổi quà không ảnh hưởng tới việc
                    thăng hạng của bạn Chưa tích điểm
                </p>
            </div>
            <div class="user-menu">
                <ul class="user-list">
                    <li class="user-item" @click="handleClick1" :class="{ iconActive: select === 1 }">
                        <img src="https://order.thecoffeehouse.com/icon/user-icon.svg" alt="" class="icon-user" :class="{ iconActive: select === 1 }" />
                        <span class="user-item-txt">Thông tin tài khoản</span>
                    </li>
                    <li class="user-item" @click="handleClick2" :class="{ active: select === 2 }">
                        <img src="https://order.thecoffeehouse.com/icon/address-book.svg" alt="" class="icon-user" :class="{ iconActive: select === 2 }" />
                        <span class="user-item-txt">Sổ địa chỉ</span>
                    </li>
                    <li class="user-item" @click="handleClick3" :class="{ iconActive: select === 3 }">
                        <img src="https://order.thecoffeehouse.com/icon/member-benefit.svg" alt="" class="icon-user" :class="{ active: select === 3 }" />
                        <span class="user-item-txt">Quyền lợi thành viên</span>
                    </li>
                    <li class="user-item" @click="handleClick4" :class="{ active: select === 4 }">
                        <img src="https://order.thecoffeehouse.com/icon/history-order.svg" alt="" class="icon-user" :class="{ active: select === 4 }" />
                        <span class="user-item-txt">Lịch sử mua hàng</span>
                    </li>
                </ul>
            </div>
            <div class="user-menu-mobile">
                <ul class="user-list-mobile">
                    <li class="user-item-mobile active">
                        <img src="/icon/user-icon.svg" alt="" class="img-mobile" />
                    </li>
                    <li class="user-item-mobile">
                        <img src="/icon/address-book.svg" alt="" class="img-mobile" />
                    </li>
                    <li class="user-item-mobile">
                        <img src="/icon/member-benefit.svg" alt="" class="img-mobile" />
                    </li>
                    <li class="user-item-mobile">
                        <img src="/icon/history-order.svg" alt="" class="img-mobile" />
                    </li>
                </ul>
            </div>
        </div>

        <div class="user-info-right">
            <div v-if="select === 1">
                <div class="processing">
                    <h1 class="row user-information">
                        Thông tin tài khoản
                    </h1>
                    <form class="form-user">
                        <div class="form-group row">
                            <div class="col-6 d-flex flex-column align-items-start name-input">
                                <label for="first-name" class="form-control-label">Tên khách hàng</label>
                                <input id="first-name" name="name" placeholder="Tên" type="text" required="required" class="form-control" style="margin-top: 10px" v-model="userInfomation.first_name" />
                                <!-- <div data-v-3a213b80="" class="invalid-feedback">
                    Vui lòng nhập Tên
                  </div> -->
                            </div>
                            <div class="col-6 d-flex flex-column align-items-start name-input">
                                <label for="last-name" class="form-control-label invisible">.</label>
                                <input id="last-name" name="number" placeholder="Họ" type="text" required="required" class="form-control" style="margin-top: 10px" v-model="userInfomation.last_name" />
                                <!-- <div data-v-3a213b80="" class="invalid-feedback">
                    Vui lòng nhập Họ
                  </div> -->
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="phone-number" class="form-control-label" style="display: flex">Số điện thoại</label>
                            <input id="phone-number" name="phone-number" type="text" disabled="disabled" class="form-control" v-model="userInfomation.mobile_no" />
                        </div>
                        <div class="form-group row">
                            <label for="birth" style="display: flex">Sinh nhật</label>
                            <input id="birth" type="text" class="form-control" disabled="disabled" v-model="userInfomation.birth" />
                        </div>
                        <div class="form-group row">
                            <label for="email" class="form-control-label" style="display: flex">Email</label>
                            <input id="email" name="email" type="text" class="form-control" v-model="userInfomation.email" />
                        </div>
                        <div class="d-flex justify-content-start">
                            <div class="
                    custom-control
                    card-product-option-item
                    custom-radio
                    mb-0
                    cursor-pointer">
                                <input type="radio" name="gender-mapping" id="1" class="custom-control-input" :checked="userInfomation.gender == 'Nam'" />
                                <label for="1" class="
                      custom-control-label
                      card-product-option-label
                      tch-custom-radio
                    ">
                                    <div class="card-product-option-value">
                                        <span class="text card-product-option-size">Nam
                                        </span>
                                    </div>
                                </label>
                            </div>
                            <div class="
                    custom-control
                    card-product-option-item
                    custom-radio
                    mb-0
                    cursor-pointer
                  ">
                                <input type="radio" name="gender-mapping" id="2" class="custom-control-input" :checked="userInfomation.gender == 'Nữ'" />
                                <label for="2" class="
                      custom-control-label
                      card-product-option-label
                      tch-custom-radio
                    ">
                                    <div class="card-product-option-value">
                                        <span class="text card-product-option-size">Nữ
                                        </span>
                                    </div>
                                </label>
                            </div>
                        </div>
                        <div class="row d-flex justify-content-end">
                            <button class="btn btn--orange btn-update" @click.prevent="handleUpdate">Cập nhật</button>
                        </div>
                    </form>
                </div>
            </div>
            <div v-if="select === 2">
                <!-- <h1>select=2</h1> -->
                <div class="processing">
                    <h1 class="user-address-title">Sổ địa chỉ</h1>
                    <div style="overflow: auto">
                        <div class="card-cover" v-for="(listAddress,index) in listAddresses" :key="index">
                            <div class="cover-card-address">
                                <div class="name">{{listAddress.user_name}}</div>
                                <div class="full-address">
                                    <span class="title-data">Địa chỉ:</span>
                                    {{listAddress.address}}
                                </div>
                                <div class="phone-number">
                                    <span class="title-data">Điện thoại:</span> {{listAddress.mobile_no}}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="select === 3">
                <!-- <h1>select=3</h1> -->
                <div class="processing">
                    <nav>
                        <div id="nav-tab" role="tablist" class="nav nav-tabs cursor-pointer">
                            <a data-toggle="tab" role="tab" class="nav-item nav-link " :class="{active : active1}" @click="active1 = true;active2 = false ; active3 = false;active4 = false ; active5 = false">Mới</a>
                            <a data-toggle="tab" role="tab" class="nav-item nav-link" @click="active1 = false;active2 = true ; active3 = false;active4 = false ; active5 = false" :class="{active : active2}">Đồng
                            </a>
                            <a role="tab" class="nav-item nav-link" @click="active1 = false;active2 = false ; active3 = true;active4 = false ; active5 = false" :class="{active : active3}">Bạc</a><a data-toggle="tab" role="tab" class="nav-item nav-link" @click="active1 = false;active2 = false ; active3 = false;active4 = true ; active5 = false" :class="{active : active4}">Vàng</a><a data-toggle="tab" role="tab" class="nav-item nav-link" @click="active1 = false;active2 = false ; active3 = false;active4 = false ; active5 = true" :class="{active : active5}">Kim Cương</a>
                        </div>
                    </nav>
                    <div id="nav-tabContent" class="tab-content">
                        <div role="tabpanel" class="tab-pane fade show " :class="{active : active1, hidden : !active1}">
                            <div class="cover-all-benefit row">
                                <div class="
                      all-benefit
                      d-flex
                      flex-column
                      justify-content-center
                      align-items-center
                    ">
                                    <div class="cover-image">
                                        <img src="https://minio.thecoffeehouse.com/image/tchmobileapp/878_v5Membership2coffeeCup.png" class="cover-image" />
                                    </div>
                                    <span>Miễn phí upsize cho đơn đầu tiên</span>
                                </div>
                            </div>
                        </div>
                        <div role="tabpanel" class="tab-pane fade" :class="{active : active2, hidden : !active2}">
                            <div class="cover-all-benefit row">
                                <div class="
                      all-benefit
                      d-flex
                      flex-column
                      justify-content-center
                      align-items-center
                    ">
                                    <div class="cover-image">
                                        <img src="https://minio.thecoffeehouse.com/image/tchmobileapp/877_v5Membership2birthdayCake.png" class="cover-image" />
                                    </div>
                                    <span>Tặng 01 phần bánh sinh nhật</span>
                                </div>
                                <div class="
                      all-benefit
                      d-flex
                      flex-column
                      justify-content-center
                      align-items-center
                    ">
                                    <div class="cover-image">
                                        <img src="https://minio.thecoffeehouse.com/image/tchmobileapp/879_v5Membership2snack.png" class="cover-image" alt="" />
                                    </div>
                                    <span>Miễn phí 01 phần Snack cho đơn hàng trên 100,000đ</span>
                                </div>
                                <div class="
                      all-benefit
                      d-flex
                      flex-column
                      justify-content-center
                      align-items-center
                    ">
                                    <div class="cover-image">
                                        <img src="https://minio.thecoffeehouse.com/image/tchmobileapp/881_v5Membership2store.png" class="cover-image" alt="" />
                                    </div>
                                    <span>Đặc quyền Đổi Ưu đãi bằng điểm BEAN tích lũy</span>
                                </div>
                            </div>
                        </div>
                        <div role="tabpanel" class="tab-pane fade" :class="{active : active3 , hidden : !active3}">
                            <div class="cover-all-benefit row">
                                <div class="
                      all-benefit
                      d-flex
                      flex-column
                      justify-content-center
                      align-items-center
                    ">
                                    <div class="cover-image">
                                        <img src="https://minio.thecoffeehouse.com/image/tchmobileapp/877_v5Membership2birthdayCake.png" class="cover-image" />
                                    </div>
                                    <span>Tặng 01 phần bánh sinh nhật</span>
                                </div>
                                <div class="
                      all-benefit
                      d-flex
                      flex-column
                      justify-content-center
                      align-items-center
                    ">
                                    <div class="cover-image">
                                        <img src="https://minio.thecoffeehouse.com/image/tchmobileapp/882_v5Membership2voucher.png" class="cover-image" />
                                    </div>
                                    <span>Ưu đãi Mua 2 tặng 1</span>
                                </div>
                                <div class="
                      all-benefit
                      d-flex
                      flex-column
                      justify-content-center
                      align-items-center
                    ">
                                    <div class="cover-image">
                                        <img src="https://minio.thecoffeehouse.com/image/tchmobileapp/881_v5Membership2store.png" class="cover-image" alt="" />
                                    </div>
                                    <span>Đặc quyền Đổi Ưu đãi bằng điểm BEAN tích lũy</span>
                                </div>
                            </div>
                        </div>
                        <div role="tabpanel" class="tab-pane fade" :class="{active : active4 , hidden : !active4}">
                            <div class="cover-all-benefit row">
                                <div class="
                      all-benefit
                      d-flex
                      flex-column
                      justify-content-center
                      align-items-center">
                                    <div class="cover-image">
                                        <img src="https://minio.thecoffeehouse.com/image/tchmobileapp/877_v5Membership2birthdayCake.png" class="cover-image" />
                                    </div>
                                    <span>Tặng 01 phần bánh sinh nhật</span>
                                </div>
                                <div class="
                      all-benefit
                      d-flex
                      flex-column
                      justify-content-center
                      align-items-center
                    ">
                                    <div class="cover-image">
                                        <img src="https://minio.thecoffeehouse.com/image/tchmobileapp/878_v5Membership2coffeeCup.png" class="cover-image" alt="" />
                                    </div>
                                    <span>Miễn phí 1 phần nước Cà phê / Trà</span>
                                </div>
                                <div class="
                      all-benefit
                      d-flex
                      flex-column
                      justify-content-center
                      align-items-center
                    ">
                                    <div class="cover-image">
                                        <img src="https://minio.thecoffeehouse.com/image/tchmobileapp/881_v5Membership2store.png" class="cover-image" alt="" />
                                    </div>
                                    <span>Đặc quyền Đổi Ưu đãi bằng điểm BEAN tích lũy</span>
                                </div>
                            </div>
                        </div>
                        <div role="tabpanel" class="tab-pane fade" :class="{active : active5 , hidden : !active5}">
                            <div class="cover-all-benefit row">
                                <div class="
                      all-benefit
                      d-flex
                      flex-column
                      justify-content-center
                      align-items-center
                    ">
                                    <div class="cover-image">
                                        <img src="https://minio.thecoffeehouse.com/image/tchmobileapp/876_v5Membership2bean.png" class="cover-image" alt="" />
                                    </div>
                                    <span>Được nhân 1.5 BEAN tích lũy</span>
                                </div>
                                <div class="
                      all-benefit
                      d-flex
                      flex-column
                      justify-content-center
                      align-items-center
                    ">
                                    <div class="cover-image">
                                        <img src="https://minio.thecoffeehouse.com/image/tchmobileapp/877_v5Membership2birthdayCake.png" class="cover-image" />
                                    </div>
                                    <span>Tặng 01 phần bánh sinh nhật</span>
                                </div>
                                <div class="
                      all-benefit
                      d-flex
                      flex-column
                      justify-content-center
                      align-items-center
                    ">
                                    <div class="cover-image">
                                        <img src="https://minio.thecoffeehouse.com/image/tchmobileapp/878_v5Membership2coffeeCup.png" class="cover-image" alt="" />
                                    </div>
                                    <span>Miễn phí 1 phần nước bất kì</span>
                                </div>
                                <div class="
                      all-benefit
                      d-flex
                      flex-column
                      justify-content-center
                      align-items-center
                    ">
                                    <div class="cover-image">
                                        <img src="https://minio.thecoffeehouse.com/image/tchmobileapp/882_v5Membership2voucher.png" class="cover-image" alt="" />
                                    </div>
                                    <span>Nhận riêng Ưu đãi từ The Coffee House và đối tác khác</span>
                                </div>
                                <div class="
                      all-benefit
                      d-flex
                      flex-column
                      justify-content-center
                      align-items-center
                    ">
                                    <div class="cover-image">
                                        <img src="https://minio.thecoffeehouse.com/image/tchmobileapp/880_v5Membership2star.png" class="cover-image" alt="" />
                                    </div>
                                    <span>Cơ hội trải nghiệm &amp; hưởng đặc quyền đầu tiên</span>
                                </div>
                                <div class="
                      all-benefit
                      d-flex
                      flex-column
                      justify-content-center
                      align-items-center">
                                    <div class="cover-image">
                                        <img src="https://minio.thecoffeehouse.com/image/tchmobileapp/881_v5Membership2store.png" class="cover-image" alt="" />
                                    </div>
                                    <span>Đặc quyền Đổi Ưu đãi bằng điểm BEAN tích lũy</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="select === 4">
                <!-- <h1>select=4</h1> -->
                <div>
                    <div class="card-product-note-item">
                        <input type="text" v-model="search" placeholder="Tra cứu theo mã đơn hàng" class="card-product-text" />
                        <div style="background-color: #ededee">
                            <v-icon color="grey" dark style="font-weight: 900;cursor:pointer;margin: 9px 11px 12px">mdi-magnify</v-icon>
                        </div>
                        <!--              <i-->
                        <!--                class="fa fa-search card-product-note-icon"-->
                        <!--              ></i>-->
                    </div>
                    <div class="card-history">
                        <ul class="card-history-list">
                            <li class="card-history-item" v-for="listOrder in filteredList" :key=listOrder.order_id>
                                <div class="card-history-head">
                                    <span class="card-history-type">Tại cửa hàng</span>
                                    <span class="card-history-status">Giao đơn hàng</span>
                                    <p class="card-history-ref">{{listOrder.order_id}}</p>
                                </div>
                                <div class="card-history-body">
                                    <div class="order-info">
                                        <div class="product-info" style="display: flex;flex-direction: column">
                                            <div v-for="(subProduct,subProduct_index) in listOrder.product" :key=subProduct.name>
                                                <span class="product-name">
                                                    {{subProduct.name}}
                                                </span>
                                                <div v-for="(topping, index) in listOrder.product[subProduct_index].topping[0]" :key=index>
                                                    <span class="product-name" style="font-size: 14px; color: rgba(0, 0, 0, 0.45);" v-if="listOrder.product[subProduct_index].topping[1][index] > 0">
                                                        {{topping.name}}
                                                    </span>
                                                </div>
                                                <span>------------</span>
                                            </div>

                                            <!-- <div v-for="(topping, index) in listOrder.product[0].topping[0]" :key=index>
                                                <span class="product-name"  v-if="listOrder.product[0].topping[1][index] > 0">
                                                    {{topping.name}} - {{index}}
                                                </span>
                                            </div> -->
                                        </div> <span class="total-price">{{separator(listOrder.total_price)}}đ</span>
                                    </div>
                                </div>
                                <div class="card-history-footer">
                                    <div class="date-order-wrap">
                                        <span class="time-order">{{listOrder.order_time_clock}}</span>
                                        - <span class="date-order">{{listOrder.order_time_day}}</span>
                                    </div>
                                    <span class="user-bean-footer">+{{checkBean(listOrder.total_price)}} bean</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
</template>

<script>
import axios from "axios";
// import accountUser from "@/components/userComponents/accountUser";
// import checkOut from "@/view_user/pages_user/checkOut";
export default {
    name: "userInfo",
    components: {

    },

    data() {
        return {
            persent: 0,
            select: 1,
            active1: true,
            active2: false,
            active3: false,
            active4: false,
            active5: false,
            currentPath: this.$route.path,
            search: '',
            list: [],
            bean: 0,
            rank: '',
            userInfomation: {
                id: "",
                last_name: "Phạm",
                first_name: "Đức Huy",
                mobile_no: "0972521125",
                birth: "01/10/2001",
                email: "duchuy01102001@gmail.com",
                gender: "male",
            },
            listOrders: [],
            // listOrders: [
            //   {
            //     order_id: "TCH20392818942022",
            //     product_name: "TS CloudTea S’more Choco Marshmallow",
            //     topping_name: "Chân trâu trắng",
            //     total_price: "75000",
            //   },
            //   {
            //     order_id: "TCH23501809042022",
            //     product_name: "TS CloudTea S’more HighTea Đào",
            //     topping_name: "Caramel đen",
            //     total_price: "56000",
            //   },
            //   {
            //     order_id: "TCH23458202042022",
            //     product_name: "Trà sen vàng thập cẩm chi lai",
            //     topping_name: "Caramel vàng",
            //     total_price: "66000",
            //   }
            // ],
            listAddresses: [{
                    user_name: "Thu Linh",
                    address: "Số 1 Cầu Long Biên, Kim Giang",
                    mobile_no: "0912739235",
                },
                {
                    user_name: "Thu Hằng",
                    address: "Số 100 Cầu Rồng, Thiên Mụ",
                    mobile_no: "0987390173",
                },
            ],
        };
    },
    created() {
        this.persent = this.bean / 5000
        if (localStorage.getItem('user') == null) {
            this.$route.push('#')
        } else {
            this.handleChange();
            // load userinfo from localStorage
            // Can check dinh dang
            console.log("user info: ", this.userInfomation)
            this.userInfomation = JSON.parse(localStorage.getItem('user'))
            console.log("from local: ", this.userInfomation)
            // NEED get data order from BE
            this.getAddresses()
            this.getOrders()
        }

    },

    computed: {
        filteredList() {
            return this.listOrders.filter(listOrder => {
                return listOrder.order_id.match(this.search)
            })
        },

    },

    methods: {
        getOrders() {
            axios
                .post("http://127.0.0.1:8000/api/admin/order/getOrders", {
                    user_id: this.userInfomation.id
                })
                .then((response) => {
                    console.log("orders: ", response.data)
                    for (let order_index in response.data.productsOfOrder) {
                        let product_tmp = []
                        let order = response.data.productsOfOrder[order_index]
                        console.log("At ", order[0].order_id)
                        for (let order_item_index in order) {
                            let order_item = order[order_item_index]
                            console.log("Push: ", order_item.product_id.name)
                            product_tmp.push({
                                name: order_item.product_id.name,
                                topping: JSON.parse(JSON.stringify([order_item.topping_id, order_item.topping_count]))
                            })
                        }
                        this.listOrders.push({
                            order_id: order[0].order_id,
                            product: JSON.parse(JSON.stringify(product_tmp)),
                            total_price: response.data.orders[order_index].total_price,
                            order_time_day: response.data.orders[order_index].order_time.split(" ")[0],
                            order_time_clock: response.data.orders[order_index].order_time.split(" ")[1]
                        })
                    }
                    console.log(this.listOrders)
                    // this.listAddresses = response.data.address_note
                    // this.userInfomation = response.data.products;
                    // console.log(response);
                    this.bean = 0
                    for (let listOrder of this.listOrders) {
                        this.bean += this.checkBean(listOrder.total_price)
                    }
                    this.persent = this.bean / 3000 * 100
                })
                .catch((error) => {
                    console.log("Start\n");
                    console.log(error.response)
                    console.log("END\n");
                });
        },
        getAddresses() {
            axios
                .post("http://127.0.0.1:8000/api/user/info/getAddressNote", {
                    user_id: this.userInfomation.id
                })
                .then((response) => {
                    console.log("addresses: ", response.data)
                    this.listAddresses = response.data.address_note
                    // this.userInfomation = response.data.products;
                    // console.log(response);
                })
                .catch((error) => {
                    console.log("Start\n");
                    console.log(error.response)
                    console.log("END\n");
                });
        },

        checkBean(price) {
            let price_bean = parseInt(price);
            return Math.round(Math.round(price_bean * 10) / 100000) * 6
        },
        separator(numb) {
            var str = numb.toString().split(".");
            str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
            return str.join(".");
        },
        handleClick1() {
            this.select = 1;
            this.$router.push({
                name: 'user',
                params: {
                    name: 'user-info'
                }
            });
            // this.$router.push({path: `/user/user-info`});
        },
        handleClick2() {
            this.select = 2;
            this.$router.push({
                name: 'user',
                params: {
                    name: 'so-dia-chi'
                }
            });
            // this.$router.push({path: `/user/so-dia-chi`});
        },
        handleClick3() {
            this.select = 3;
            this.$router.push({
                name: 'user',
                params: {
                    name: 'quyen-loi-thanh-vien'
                }
            });
            // this.$router.push({path: `/user/quyen-loi-thanh-vien`});
        },
        handleClick4() {
            this.select = 4;
            this.$router.push({
                name: 'user',
                params: {
                    name: 'lich-su'
                }
            });
            // this.$router.push({path: `/user/lich-su`});
        },
        handleChange() {
            if (this.currentPath == "/user/user-info") {
                this.select = 1;
                // console.log(this.select)
            } else if (this.currentPath == "/user/so-dia-chi") {
                this.select = 2;
            } else if (this.currentPath == "/user/quyen-loi-thanh-vien") {
                this.select = 3;
            } else if (this.currentPath == "/user/lich-su") {
                this.select = 4;
            }
        },
        handleUpdate() {
            if (confirm('Bạn có chắc muốn update không?')) {
                alert('Update thành công');

                // luu vao localStorage
                localStorage.setItem('user', JSON.stringify(this.userInfomation))
                // send data to BE with post user/info/updateInfo
                axios
                    .post("http://127.0.0.1:8000/api/user/info/updateInfo", {
                        id: this.userInfomation.id,
                        last_name: this.userInfomation.last_name,
                        first_name: this.userInfomation.first_name,
                        mobile_no: this.userInfomation.mobile_no,
                        birth: this.userInfomation.birth,
                        email: this.userInfomation.email,
                        gender: this.userInfomation.gender,
                    })
                    .then((response) => {
                        console.log(response)
                        // this.userInfomation = response.data.products;
                        // console.log(response);
                    })
                    .catch((error) => {
                        console.log("Start\n");
                        console.log(error.response)
                        console.log("END\n");
                    });
            }
        }
    }
}
</script>

<style scoped>
/*.active{*/
/*  border: none;*/
/*  border-bottom: 3px solid #fa8c16;*/
/*  color: #fa8c16;*/
/*}*/
.hidden {
    display: none;
}

.body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}

.card-product-note-icon {
    cursor: pointer;
    color: grey;
}

.card-product-note-icon {
    width: 18px;
    height: 20px;
    margin: 12px 11px;
}

.card-product-text {
    background-color: white;
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 0%;
    border: none;
    width: 12.5rem;
    height: 100%;
    font-size: 0.8375rem;
    outline: none;
    padding: 0 0.8375rem;
}

.card-product-note-item {
    background: #fafafa;
}

.card-product-note-item {
    border: 1px solid #ededee;
    border-radius: 0.25rem;
    height: 2.75rem;
    display: flex;
    margin-top: 1.25rem;
}

.cover-image {
    width: 56px;
    height: 56px;
}

.all-benefit {
    width: 200px;
    margin: 20px;
}

.cover-all-benefit {
    justify-content: center;
    margin-top: 25px;
}

.nav-tabs .nav-item.show .nav-link,
.nav-tabs .nav-link.active {
    background-color: #fff;
}

.nav-item {
    width: 20%;
    padding: 0;
}

.nav-tabs .nav-link {
    margin-bottom: -1px;
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
}

.nav-link {
    display: block;
}

.nav-tabs .nav-item.show .nav-link,
.nav-tabs .nav-link.active {
    border: none;
    border-bottom: 3px solid #fa8c16;
    color: #fa8c16;
}

.nav-tabs {
    border-bottom: 1px solid #c4c4c4;
    border-bottom-color: rgb(196, 196, 196);
    display: flex;
}

.user-address-title {
    text-align: left;
    position: relative;
    width: fit-content;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
        "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif,
        "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}

.user-address-title::before {
    content: "";
    position: absolute;
    width: 50%;
    bottom: -4px;
    left: 0;
    border-bottom: 2px solid #fa8c16;
}

.btn {
    padding: 0.375rem 1.375rem;
}

.btn {
    display: inline-block;
    font-weight: 400;
    vertical-align: middle;
    user-select: none;
    border: 1px solid transparent;
    font-size: 1rem;
    line-height: 1.5;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
        border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    width: 10rem;
}

.btn-update {
    border-radius: 6.25rem;
    color: #fff;
    text-align: center;
}

.btn.btn--orange {
    background: radial-gradient(100% 488.28% at 0% 100%,
            #e87800 0%,
            #fa8c16 100%);
    background-color: #fc8506;
}

.card-product-option-item {
    margin: 0.375rem 1.25rem;
    padding: 0.8375rem;
}

.card-product-detail,
.card-product-footer,
.card-product-info,
.card-product-option-cate-item,
.card-product-option-item,
.card-product-option-size-item,
.card-product-option-topping,
.card-product-option-value,
.cart-modal-header,
.left-col {
    display: flex;
}

.cursor-pointer {
    cursor: pointer;
}

.mb-0,
.my-0 {
    margin-bottom: 0 !important;
}

.custom-control {
    position: relative;
    z-index: 1;
    min-height: 1.5rem;
    -webkit-print-color-adjust: exact;
}

.justify-content-start {
    justify-content: flex-start !important;
}

a {
    text-decoration: none;
    background-color: transparent;
    color: black;
}

.form-control {
    border: 1px solid #ededed;
    border-top-width: 1px;
    border-right-width: 1px;
    border-bottom-width: 1px;
    border-left-width: 1px;
    border-top-style: solid;
    border-right-style: solid;
    border-bottom-style: solid;
    border-left-style: solid;
    border-top-color: rgb(237, 237, 237);
    border-right-color: rgb(237, 237, 237);
    border-bottom-color: rgb(237, 237, 237);
    border-left-color: rgb(237, 237, 237);
    border-image-source: initial;
    border-image-slice: initial;
    border-image-width: initial;
    border-image-outset: initial;
    border-image-repeat: initial;
    margin-top: 10px;
}

.form-control {
    display: block;
    width: 100%;
    height: calc(1.5em + 0.75rem + 2px);
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.name-input:first-child {
    padding-right: 0.375rem;
    padding-left: 0rem;
}

.align-items-start {
    align-items: flex-start !important;
}

.col,
.col-1,
.col-2,
.col-3,
.col-4,
.col-5,
.col-6,
.col-7,
.col-8,
.col-9,
.col-10,
.col-11,
.col-12,
.col-auto,
.col-lg,
.col-lg-1,
.col-lg-2,
.col-lg-3,
.col-lg-4,
.col-lg-5,
.col-lg-6,
.col-lg-7,
.col-lg-8,
.col-lg-9,
.col-lg-10,
.col-lg-11,
.col-lg-12,
.col-lg-auto,
.col-md,
.col-md-1,
.col-md-2,
.col-md-3,
.col-md-4,
.col-md-5,
.col-md-6,
.col-md-7,
.col-md-8,
.col-md-9,
.col-md-10,
.col-md-11,
.col-md-12,
.col-md-auto,
.col-sm,
.col-sm-1,
.col-sm-2,
.col-sm-3,
.col-sm-4,
.col-sm-5,
.col-sm-6,
.col-sm-7,
.col-sm-8,
.col-sm-9,
.col-sm-10,
.col-sm-11,
.col-sm-12,
.col-sm-auto,
.col-xl,
.col-xl-1,
.col-xl-2,
.col-xl-3,
.col-xl-4,
.col-xl-5,
.col-xl-6,
.col-xl-7,
.col-xl-8,
.col-xl-9,
.col-xl-10,
.col-xl-11,
.col-xl-12,
.col-xl-auto {
    position: relative;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
}

.col {
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
}

.row-cols-1>* {
    flex: 0 0 100%;
    max-width: 100%;
}

.row-cols-2>* {
    flex: 0 0 50%;
    max-width: 50%;
}

.row-cols-3>* {
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
}

.row-cols-4>* {
    flex: 0 0 25%;
    max-width: 25%;
}

.row-cols-5>* {
    flex: 0 0 20%;
    max-width: 20%;
}

.row-cols-6>* {
    flex: 0 0 16.666667%;
    max-width: 16.666667%;
}

.col-auto {
    flex: 0 0 auto;
    width: auto;
    max-width: 100%;
}

.col-1 {
    flex: 0 0 8.333333%;
    max-width: 8.333333%;
}

.col-2 {
    flex: 0 0 16.666667%;
    max-width: 16.666667%;
}

.col-3 {
    flex: 0 0 25%;
    max-width: 25%;
}

.col-4 {
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
}

.col-5 {
    flex: 0 0 41.666667%;
    max-width: 41.666667%;
}

.col-6 {
    flex: 0 0 50%;
    max-width: 50%;
}

.col-7 {
    flex: 0 0 58.333333%;
    max-width: 58.333333%;
}

.col-8 {
    flex: 0 0 66.666667%;
    max-width: 66.666667%;
}

.col-9 {
    flex: 0 0 75%;
    max-width: 75%;
}

.col-10 {
    flex: 0 0 83.333333%;
    max-width: 83.333333%;
}

.col-11 {
    flex: 0 0 91.666667%;
    max-width: 91.666667%;
}

.col-12 {
    flex: 0 0 100%;
    max-width: 100%;
}

.form-group {
    margin-bottom: 1rem;
}

.user-information[data-v-3a213b80] {
    text-align: left;
    position: relative;
}

.row {
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
}

.h1,
h1 {
    font-size: 2.5rem;
}

.h1,
.h2,
.h3,
.h4,
.h5,
.h6,
h1,
h2,
h3,
h4,
h5,
h6 {
    margin-bottom: 0.5rem;
    font-weight: 500;
    line-height: 1.2;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    margin-top: 0;
}

.processing {
    text-align: center;
}

.align-items-center {
    align-items: center !important;
}

.flex-column {
    flex-direction: column !important;
}

.d-flex {
    display: flex !important;
}

.container,
.container-lg {
    max-width: 1230px;
}

.container,
.container-fluid,
.container-lg,
.container-md,
.container-sm,
.container-xl {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: 123px;
    margin-left: 123px;
    width: 1200px;
    height: 749px;
    justify-content: center;
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

div {
    display: block;
}

.iconActive {
    filter: invert(63%) sepia(78%) saturate(1777%) hue-rotate(345deg) brightness(96%) contrast(104%);
}

.user-info {
    display: flex;
    margin-top: -70px;
}

@media (max-width: 992px) {
    .user-info {
        margin-top: 0;
    }
}

.card-history-head {
    margin-bottom: -14px;
}

.user-info-right-mobile {
    display: none;
}

.user-info-head {
    display: flex;
    text-align: center;
    justify-content: center;
    padding: 50px;
    padding-top: 0px;
    width: 1140px;
}

.user-info-text {
    font-weight: 600;
    font-size: 28px;
    margin-left: 15px;
}

.user-info-left,
.user-info-right {
    max-width: 50%;
    margin: 50px auto;
    background: #fff;
    padding: 15px 16px;
    position: relative;
}

.user-info-left {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.12);
    border-radius: 8px;
    width: 375px;
    height: 577px;
}

.user-info-right {
    flex: 1;
}

.card-product-note-item {
    background: #fafafa;
}

.user-menu-mobile {
    display: none;
}

.user-info-card {
    display: flex;
    flex-direction: column;
    border-radius: 12px;
    padding: 20px 16px 10px 10px;
    margin-bottom: -16px;
    position: relative;
    min-height: 220px;
    background-color: #fc8506;
}

.user-info-card-header {
    color: #fff;
    text-shadow: 0.254px 0.508px 0.508px rgba(0, 0, 0, 0.25);
    font-weight: 600;
    font-size: 18px;
}

.armorial-point {
    position: absolute;
    top: 0;
    background: linear-gradient(276.58deg, rgba(0, 0, 0, 0.2), transparent);
    border: 1px solid hsla(0, 0%, 100%, 0.3);
    width: 104px;
    right: 10px;
    padding: 8px 10px 14px 14px;
    color: #fff;
    font-weight: 600;
    font-size: 12px;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
}

.armorial-point-txt {
    margin-left: 8px;
}

.user-card-barcode {
    background: #fff;
    border-radius: 8px;
    padding: 12px 18px 8px;
    text-align: center;
    height: 102px;
}

.leaves-image {
    height: 100%;
    -o-object-fit: contain;
    object-fit: contain;
    position: absolute;
    right: 0;
    top: 0;
}

.user-rank {
    margin: 12px 8px 16px 16px;
    color: rgba(0, 0, 0, 0.45);
    font-weight: 600;
    font-size: 10px;
}

.user-rank-detail {
    float: right;
}

.user-info-detail {
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.12);
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
    padding: 12px;
}

.user-progress-bar {
    border-radius: 12px;
    padding-top: 10px;
    margin-top: 8px;
    background-color: rgb(255, 187, 127);
}

.user-next-bean {
    text-align: center;
    color: rgba(0, 0, 0, 0.45);
    font-size: 12px;
    max-width: 319px;
}

.user-menu {
    margin-top: 16px;
}

.user-list {
    list-style: none;
}

.user-list .active {
    color: #fa8c16;
}

.user-item-txt {
    margin-left: 18px;
    font-size: 16px;
}

.user-item {
    display: flex;
    align-items: center;
    padding: 0 20px !important;
    margin-bottom: 20px;
    position: relative;
    cursor: pointer;
}

.icon-user {
    width: 16px;
}

.user-item:after {
    content: "";
    border: 0.5px solid;
    width: 100%;
    background: #c4c4c4;
    opacity: 0.1;
    position: absolute;
    right: 0;
    top: 140%;
}

.user-progress-bar {
    position: relative;
}

.dot {
    position: absolute;
    border-radius: 100%;
    width: 56px;
    padding-top: 50px;
    top: 50px;
    left: 0;
    background-image: url("https://order.thecoffeehouse.com/_nuxt/img/Icon-progress.ccae707.png");
    background-size: cover;
}

.dot-begin {
    left: 6px;
}

.dot-after,
.dot-begin {
    position: absolute;
    border-radius: 100%;
    width: 6px;
    padding-top: 6px;
    top: 50%;
    transform: translate(-50%, -50%);
    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0yIDRhMiAyIDAgMTAwLTQgMiAyIDAgMDAwIDR6IiBmaWxsPSIjZmZmIi8+PC9zdmc+);
    background-size: cover;
}

.dot-after {
    right: 0;
}

.barcode {
    width: 100%;
    height: calc(100% - 24px);
}

.code-number {
    margin: 0;
}

@media (max-width: 992px) {
    .user-info {
        margin-bottom: 100px;
    }

    .tch-checkout-box--delivery--custom {
        width: 100%;
        margin-left: 0;
    }

    .user-info-head {
        padding: 30px;
    }

    .user-info-left,
    .user-info-right {
        max-width: 100%;
        margin: 0;
        background: none;
        box-shadow: none;
        padding-top: 0;
    }

    .user-info-right-desktop {
        display: none;
    }

    .user-info-right-mobile {
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;
    }

    .user-info-head {
        display: flex;
        text-align: center;
        justify-content: center;
        padding: 50px;
    }

    .user-info-left {
        margin: 0 auto -30px;
        height: 100%;
        width: 375px;
    }

    /*.card-product-text {*/
    /*  background: transparent;*/
    /*}*/
    .user-info {
        flex-direction: column;
    }

    .user-menu {
        display: none;
    }

    .user-menu-mobile {
        display: block;
        margin-top: 20px;
        background: #fff;
    }

    .user-list-mobile {
        display: flex;
        list-style: none;
        justify-content: center;
    }

    .user-list-mobile .active {

        background: radial-gradient(100% 828.83% at 0 100%,
                #e87800 0,
                #fa8c16 100%);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        border-radius: 8px;
    }

    .user-item-mobile {
        width: 25%;
        border: 1px solid #e4e4e4;
        border-radius: 8px;
        height: 82px;
        position: relative;
        margin-right: 5px;
    }

    .img-mobile {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .user-card-barcode {
        max-height: 102px;
    }
}

.card-history-list {
    padding-left: 0;
    overflow: hidden;
    overflow-y: scroll;
    min-height: 200px;
    height: 600px;
    max-height: auto;
}

.card-history-item {
    display: flex;
    flex-direction: column;
    padding: 12px 17px;
    background: #fff;
    border: 1px solid #ededed;
    border-radius: 8px;
    margin-top: 16px;
    cursor: pointer;
}

.card-history-head {
    margin-bottom: -14px;
}

.card-history-type {
    color: rgba(38, 38, 38, .5);
    font-weight: 600;
    font-size: 12px;
}

.card-history-status {
    float: right;
    color: #fa8c16;
    font-size: 16px;
}

.card-history-ref {
    color: #f5222d;
    font-weight: 600;
    font-size: 12px;
    background: rgba(255, 231, 186, .6);
    border-radius: 4px;
    padding: 3px;
    width: 140px;
    text-align: center;
}

.card-history-body {}

.product-info {
    color: #262626;
    font-size: 16px;
}

.total-price {
    font-weight: 600;
    color: #262626;
    font-size: 16px;
}

.card-history-footer {
    display: flex;
    justify-content: space-between;
    margin-top: 4px;
}

.date-order-wrap {
    color: rgba(38, 38, 38, .5);
    font-size: 12px;
}

.user-bean-footer {
    color: #52c41a;
    font-size: 12px;
}

.card-cover {
    max-width: 450px;
    width: 100%;
    margin: 6px 0;
}

.cover-card-address {
    text-align: left;
    border: 1px solid #ededed;
    box-sizing: border-box;
    border-radius: 8px;
    padding: 16px;
    width: 100%;
}

.name {
    text-transform: uppercase;
    font-size: 16px;
    line-height: 24px;
}

.title-data {
    color: rgba(38, 38, 38, .5);
}

/* .custom-control-input {
    position: unset;
    opacity: 0;
    width: 1.5rem;
    height: 1.5rem;
    border: #495057;
} */
</style>
