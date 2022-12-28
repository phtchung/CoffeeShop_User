<template>
  <div
    class="container-lg container-fluid"
    style="align-items: center; margin-top: 24px"
  >
    <div class="user-info-head">
      <img
        src="https://order.thecoffeehouse.com/_nuxt/img/user-icon-gold.5f2886d.svg"
        alt=""
        class="user-info-icon-head"
      />
      <span class="user-info-text">Tài khoản của bạn</span>
    </div>
    <section class="user-info">
      <div class="user-info-left">
        <div
          class="user-info-card"
          style="
            background: linear-gradient(
              rgb(255, 149, 34) 0%,
              rgb(218, 84, 9) 50%
            );
          "
        >
          <div class="armorial-point">
            <img
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHZpZXdCb3g9IjAgMCAxMCAxMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwKSI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTAgMS45MjM3M0w1IDUuNzY2NjdMLTEuNzM5NDRlLTA4IDEuOTIzNzNMMC4xMzc4MjggMUw1IDQuNzM3TDkuODYyMTcgMUwxMCAxLjkyMzczWiIgZmlsbD0id2hpdGUiLz4KPHBhdGggb3BhY2l0eT0iMC41IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEwIDUuNjU3TDUgOS40OTk5M0wtMi4xMDYzNWUtMDggNS42NTdMMC4xMzc4MjggNC41TDUgOC4yMzdMOS44NjIxNyA0LjVMMTAgNS42NTdaIiBmaWxsPSJ3aGl0ZSIvPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwIj4KPHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjkiIGZpbGw9IndoaXRlIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDAuNSkiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K"
              alt=""
              class="armorial-point-icon"
            />
            <span class="armorial-point-txt">Tích điểm</span>
          </div>
          <div class="user-info-card-header">
            <span class="user-card-code">{{userInfomation.lastName}}</span>
            <p class="user-bean">{{userInfomation.score}} bean - Mới</p>
          </div>
          <div class="user-card-barcode d-flex flex-column align-items-center">
            <canvas class="barcode" width="244" height="122"></canvas>
            <p class="code-number">M161682829</p>
          </div>
          <img
            src="/_nuxt/img/Leaves.5c9ad83.svg"
            alt=""
            class="leaves-image"
          />
        </div>
        <div class="user-info-detail">
          <div class="user-rank">
            <span class="user-txt">VÀNG</span>
            <span class="user-rank-detail">KIM CƯƠNG</span>
            <div
              class="user-progress-bar"
              style="
                background: linear-gradient(
                  rgb(255, 149, 34) 0%,
                  rgb(218, 84, 9) 50%
                );
              "
            >
              <div class="dot-begin">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Dot-yellow.svg/1200px-Dot-yellow.svg.png"
                  style="width: 1rem; height: 2rem"
                />
              </div>
              <div
                class="dot"
                style="
                  transform: translateY(-50%);
                  top: 60%;
                  left: calc(0% - 30px);
                "
              ></div>
              <div class="dot-after"></div>
            </div>
          </div>
          <p class="user-next-bean">
            Còn 100 BEAN nữa bạn sẽ thăng hạng. Đổi quà không ảnh hưởng tới việc
            thăng hạng của bạn Chưa tích điểm
          </p>
        </div>
        <div class="user-menu">
          <ul class="user-list">
            <li class="user-item active">
              <img
                src="https://order.thecoffeehouse.com/icon/user-icon.svg"
                alt=""
                class="icon-user icon-active"
              />
              <span class="user-item-txt">Thông tin tài khoản</span>
            </li>
            <li class="user-item">
              <img
                src="https://order.thecoffeehouse.com/icon/address-book.svg"
                alt=""
                class="icon-user"
              />
              <span class="user-item-txt">Sổ địa chỉ</span>
            </li>
            <li class="user-item">
              <img
                src="https://order.thecoffeehouse.com/icon/member-benefit.svg"
                alt=""
                class="icon-user"
              />
              <span class="user-item-txt">Quyền lợi thành viên</span>
            </li>
            <li class="user-item">
              <img
                src="https://order.thecoffeehouse.com/icon/history-order.svg"
                alt=""
                class="icon-user"
              />
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
        <div>
          <div data-v-3a213b80="" class="processing">
            <h1 data-v-3a213b80="" class="row user-information">
              Thông tin tài khoản
            </h1>
            <form data-v-3a213b80="" class="form-user">
              <div data-v-3a213b80="" class="form-group row">
                <div
                  data-v-3a213b80=""
                  class="col-6 d-flex flex-column align-items-start name-input"
                >
                  <label
                    data-v-3a213b80=""
                    for="first-name"
                    class="form-control-label"
                    >Tên khách hàng</label
                  >
                  <input
                    data-v-3a213b80=""
                    id="first-name"
                    name="name"
                    placeholder="Tên"
                    type="text"
                    required="required"
                    class="form-control"
                    style="margin-top: 10px;"
                    :value="userInfomation.firstName"
                  />
                  <!-- <div data-v-3a213b80="" class="invalid-feedback">
                    Vui lòng nhập Tên
                  </div> -->
                </div>
                <div
                  data-v-3a213b80=""
                  class="col-6 d-flex flex-column align-items-start name-input"
                >
                  <label
                    data-v-3a213b80=""
                    for="last-name"
                    class="form-control-label invisible"
                    >.</label
                  >
                  <input
                    data-v-3a213b80=""
                    id="last-name"
                    name="number"
                    placeholder="Họ"
                    type="text"
                    required="required"
                    class="form-control"
                    style="margin-top: 10px;"
                    :value="userInfomation.lastName"
                  />
                  <!-- <div data-v-3a213b80="" class="invalid-feedback">
                    Vui lòng nhập Họ
                  </div> -->
                </div>
              </div>
              <div data-v-3a213b80="" class="form-group row">
                <label
                  data-v-3a213b80=""
                  for="phone-number"
                  class="form-control-label"
                  style="display: flex;"
                  >Số điện thoại</label
                >
                <input
                  data-v-3a213b80=""
                  id="phone-number"
                  name="phone-number"
                  type="text"
                  disabled="disabled"
                  class="form-control"
                  :value="userInfomation.phone"
                />
              </div>
              <div data-v-3a213b80="" class="form-group row">
                <label data-v-3a213b80="" for="datepicker" style="display: flex;"
                  >Sinh nhật (Bạn không thể thay đổi sau khi đã lựa chọn)</label
                >
                <input
                  data-v-3a213b80=""
                  type="text"
                  class="form-control"
                  disabled="disabled"
                  :value="userInfomation.birthday"
                />
              </div>
              <div class="form-group row">
                <label for="email" class="form-control-label" style="display: flex;"
                  >Email</label
                >
                <input
                  id="email"
                  name="email"
                  type="text"
                  disabled="disabled"
                  class="form-control"
                  :value="userInfomation.email"
                />
              </div>
              <div class="d-flex justify-content-start" >
                <div
                  data-v-3a213b80=""
                  class="
                    custom-control
                    card-product-option-item
                    custom-radio
                    mb-0
                    cursor-pointer
                  "
                >
                  <input
                    data-v-3a213b80=""
                    type="radio"
                    name="gender-mapping"
                    id="1"
                    class="custom-control-input"
                    :checked='userInfomation.sex == "male"'
                  />
                  <label
                    data-v-3a213b80=""
                    for="1"
                    class="
                      custom-control-label
                      card-product-option-label
                      tch-custom-radio
                    "
                    ><div data-v-3a213b80="" class="card-product-option-value">
                      <span
                        data-v-3a213b80=""
                        class="text card-product-option-size"
                        >Nam
                      </span>
                    </div></label
                  >
                </div>
                <div
                  data-v-3a213b80=""
                  class="
                    custom-control
                    card-product-option-item
                    custom-radio
                    mb-0
                    cursor-pointer
                  "
                >
                  <input
                    data-v-3a213b80=""
                    type="radio"
                    name="gender-mapping"
                    id="2"
                    class="custom-control-input"
                    :checked='userInfomation.sex == "female"'
                    
                  />
                  <label
                    data-v-3a213b80=""
                    for="2"
                    class="
                      custom-control-label
                      card-product-option-label
                      tch-custom-radio
                    "
                    ><div data-v-3a213b80="" class="card-product-option-value">
                      <span
                        data-v-3a213b80=""
                        class="text card-product-option-size"
                        >Nữ
                      </span>
                    </div></label
                  >
                </div>
              </div>
              <div data-v-3a213b80="" class="row d-flex justify-content-end">
                <button class="btn btn--orange btn-update">
                  Cập nhật
                </button>
              </div>
            </form>
          </div>
        </div>
        <!---->
        <!---->
        <!---->
        <!---->
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "userInfo",
  data () {
    return {
      userInfomation : {
        id: "",
        score: "0",
        lastName: "Phạm",
        firstName: "Đức Huy",
        phone: "0972521125",
        birthday: "01/10/2001",
        email: "duchuy01102001@gmail.com",
        sex: "male",
      }
    }
  }
};
</script>


<style scoped>

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
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    width: 10rem;
}

.btn-update{
    border-radius: 6.25rem;
    color: #fff;
    text-align: center;
}
.btn.btn--orange {
    background: radial-gradient(100% 488.28% at 0% 100%,#e87800 0%,#fa8c16 100%);
    background-color: #fc8506;
}

.card-product-option-item {
    margin: 0.375rem 1.25rem;
    padding: 0.8375rem;
}
.card-product-detail, .card-product-footer, .card-product-info, .card-product-option-cate-item, .card-product-option-item, .card-product-option-size-item, .card-product-option-topping, .card-product-option-value, .cart-modal-header, .left-col {
    display: flex;
}
.cursor-pointer {
    cursor: pointer;
}
.mb-0, .my-0 {
    margin-bottom: 0!important;
}
.custom-control {
    position: relative;
    z-index: 1;
    min-height: 1.5rem;
    -webkit-print-color-adjust: exact;
}

.justify-content-start {
    justify-content: flex-start!important;
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
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}

.name-input:first-child {
    padding-right: 0.375rem;
    padding-left: 0rem;
}

.align-items-start {
            align-items: flex-start !important
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

.row-cols-1 > * {
  flex: 0 0 100%;
  max-width: 100%;
}

.row-cols-2 > * {
  flex: 0 0 50%;
  max-width: 50%;
}

.row-cols-3 > * {
  flex: 0 0 33.333333%;
  max-width: 33.333333%;
}

.row-cols-4 > * {
  flex: 0 0 25%;
  max-width: 25%;
}

.row-cols-5 > * {
  flex: 0 0 20%;
  max-width: 20%;
}

.row-cols-6 > * {
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

.icon-active {
  filter: invert(63%) sepia(78%) saturate(1777%) hue-rotate(345deg)
    brightness(96%) contrast(104%);
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
  /* background-image: url(https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Dot-yellow.svg/1200px-Dot-yellow.svg.png); */
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
  .card-product-text {
    background: transparent;
  }
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
    background: radial-gradient(
      100% 828.83% at 0,
      at 100%,
      #e87800 0,
      #fa8c16 100%
    );
    background: radial-gradient(
      100% 828.83% at 0 100%,
      #e87800 0,
      #fa8c16 100%
    );
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

/* .custom-control-input {
    position: unset;
    opacity: 0;
    width: 1.5rem;
    height: 1.5rem;
    border: #495057;
} */
</style>