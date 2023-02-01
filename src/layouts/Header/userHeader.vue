<template>
<div>
    <header class="headerUser">
        <div class="divHeaderUser">
            <!-- icon the coffee house -->
            <a href="/">
                <img src="https://cdn.haitrieu.com/wp-content/uploads/2022/03/logo-the-coffee-house-chieu-dai.png" alt="" style="width: 170px; height: 14px" />
            </a>
            <!-- 1 dau cach -->
            <a href="/" style="margin-right: 24px"></a>

            <!-- Nut an giao hang -->
            <div>
                <v-dialog v-model="dialog" open-on-click max-width="47rem" style="margin-top: -19rem !important">
                    <template v-slot:activator="{ on, attrs }">
                        <div>
                            <div class="div_deliver_header align-items-center d-lg-flex" v-bind="attrs" v-on="on">
                                <img src="https://minio.thecoffeehouse.com/images/tch-web-order/Delivery2.png" class="img-deliver" />
                                <div class="div-deliver-text">
                                    <h5 class="deliver-giaohang" style="
                      font-size: 13.4px;
                      margin-bottom: 0;
                      line-height: 1.2;
                      font-weight: 500;
                    ">
                                        Giao hàng
                                    </h5>
                                    <p class="text-limit-1-line address-font" style="font-size: 14px; margin-bottom: 0; font-weight: 400">
                                        {{oldAddress}}
                                    </p>
                                </div>
                                <img data-v-e4be98d0="" style="width: 8px; height: 12px" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMiIGhlaWdodD0iNyIgdmlld0JveD0iMCAwIDEzIDciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik02LjUgNC40NTQ4N0wxMS4xNjY5IDBMMTIuNSAxLjI3MjU2TDYuNSA3TDAuNSAxLjI3MjU2TDEuODMzMTIgMEw2LjUgNC40NTQ4N1oiIGZpbGw9IndoaXRlIiBmaWxsLW9wYWNpdHk9IjAuNSIvPgo8L3N2Zz4K" alt="" class="icon-vertor" />
                            </div>
                        </div>
                    </template>
                    <v-card>
                        <!-- Khi an giao hang se hien ra hop thoai -->
                        <div style="margin-top: 3.8125rem; position: relative;" class="header-delivery_content pl-2 delivery-block">
                            <div class="pop-up-block">
                                <div class="pop-up-delivery">
                                    <img style="width: 40px; height: 40px" src="https://minio.thecoffeehouse.com/images/tch-web-order/Delivery2.png" alt="" />
                                    <h5 style=" font-weight: 600; font-size: 13.4px; color: #fff; line-height: 22px;   font-family: -apple-system, system-ui, BlinkMacSystemFont; margin-left: 1rem; margin-bottom: 0rem;">
                                        Giao hàng
                                    </h5>
                                </div>
                            </div>
                            <div class="div-deliver-text text-block" style="background-color: #fff;">
                                <div class="address-detail">
                                    <input class="text-limit-1-line" v-model="oldAddress" style="margin-bottom: 0" />
                                    <button data-v-2659de6e="" type="button" class="btn border-0" @click="handleDeleteAddress">
                                        <div data-v-2659de6e="">
                                            <img data-v-2659de6e="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGYSURBVHgBrZTbccIwEEVXmoFv//MYuwNSQUIFSSoI6SCpAKggoQLoIKQCJhXEHZjw+Oebl3OvxwqKLRtC2BmwtCsf35V2pcRhURR5lUqlo5S6juO4BZefhkL4prvd7r3ZbI5c76qsYzab3Wmthxh6UmIpuJ8Fa3uyWCxeAHs7BqNBuc8PL5fLrlMhA1jUk/PstV6vP/8AoayDx1D+Yfv9/h7pjw0wksPG27aSfPouX+LfbDaBTtX52SjS72PBFYZT4+NB0MeYA5hUhsaiW9fXttvtKAgCAtqEErZer9v0MZYqzYq4UVD4iXErG7QBqEufPjOGkokrK75DYCwFZkM5L4MZ03JhI3AqR9RRGX/2nhbwQh5K6AisbBjTrFarkwzUdShfGn8fDqAHwIO9Z2w1A2VMHLWINWOV3iyRFBSrnFjY3KJarRZopLBC2zyK27wTfcKbh8/klNmDkDuQM42dY66xX/fhfD7vQXr3j7BBo9F4MvPcBZv2NqG+lFuyVczOdqqi1QSzz3m6cmhN9nTIykDpsNdzpfMNzwr4YQY4/g8AAAAASUVORK5CYII=" alt="" />
                                        </div>
                                        <!---->
                                    </button>
                                </div>
                                <div>
                                    <button class="btn-delivery" style="
                      margin-right: 10px;
                      font-family: -apple-system, system-ui, BlinkMacSystemFont;
                    "
                    @click="handleChosenAddress">
                                        Chọn địa chỉ này
                                    </button>
                                    <button class="btn-delivery" style="
                      background: #fff;
                      color: rgba(0, 0, 0, 0.85);
                      border: 1px solid rgba(0, 0, 0, 0.15);
                      font-family: -apple-system, system-ui, BlinkMacSystemFont;
                    ">
                                        Nhập địa chỉ mới
                                    </button>
                                </div>
                            </div>
                            <v-icon small> mdi-down </v-icon>
                        </div>
                    </v-card>
                </v-dialog>
            </div>

            <!-- Cac muc chon -->
            <nav class="menu-nav">
                <ul class="menu-list">
                    <li>
                        <a class="menu-list-item" href="/product-list" aria-current="page">Đặt hàng</a>
                    </li>
                    <li>
                        <a class="menu-list-item" href="/blogs">Tin tức</a>
                    </li>
                    <li>
                        <a class="menu-list-item" href="/store">Cửa hàng</a>
                    </li>
                    <li style="cursor: pointer">
                        <a style="
                  text-decoration: none;
                  font-size: 14px;
                  margin-left: 0.5rem;
                  margin-right: 0.5rem;
                  color: #fff;
                  line-height: 150%;
                  font-weight: 600;
                  font-family: -apple-system, system-ui, BlinkMacSystemFont;
                " class="menu-list-item">Khuyến mãi</a>
                    </li>
                    <li>
                        <a target="blank" href="#" class="menu-list-item">Tuyển dụng</a>
                    </li>
                </ul>
            </nav>

            <div class="avatar-cart" style="postion: relative;">
                <!-- nut click avatar khi click se hien ra danh muc chon -->
                <a class="link-avatar" @click="displayClick = !displayClick">
                    <!---->
                    <span v-if="logged==1">
                        <img style="height: 50px; width: 50px" alt="" class="img-avatar" src="https://minio.thecoffeehouse.com/image/tchmobileapp/user_avt/default.png" />
                    </span>
                    <span v-else>
                        <img style="height: 50px; width: 50px" alt="" class="img-avatar" src="https://order.thecoffeehouse.com/_nuxt/img/Login.70dc3d8.png" />
                    </span>
                </a>
                <!-- name -->
                <span class="user-name" style="margin-right: 37px" v-if="logged == 1">{{this.user.lastName}}</span>
                <span style = "margin-right: 37px"></span>
                <!-- icon thanh toan -->
                <a href="http://localhost:8080/thanh-toan" style="text-decoration: none">
                    <!---->
                    <div style="
                background-color: #fff;
                width: 39px;
                height: 40px;
                border-radius: 50%;
                justify-content: center;
                align-items: center;
                display: flex;
                position: relative;
              ">
                        <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAxOCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE3IDIwSDFDMC43MzQ3ODQgMjAgMC40ODA0MyAxOS44OTQ2IDAuMjkyODkzIDE5LjcwNzFDMC4xMDUzNTcgMTkuNTE5NiAwIDE5LjI2NTIgMCAxOVYxQzAgMC43MzQ3ODQgMC4xMDUzNTcgMC40ODA0MyAwLjI5Mjg5MyAwLjI5Mjg5M0MwLjQ4MDQzIDAuMTA1MzU3IDAuNzM0Nzg0IDAgMSAwSDE3QzE3LjI2NTIgMCAxNy41MTk2IDAuMTA1MzU3IDE3LjcwNzEgMC4yOTI4OTNDMTcuODk0NiAwLjQ4MDQzIDE4IDAuNzM0Nzg0IDE4IDFWMTlDMTggMTkuMjY1MiAxNy44OTQ2IDE5LjUxOTYgMTcuNzA3MSAxOS43MDcxQzE3LjUxOTYgMTkuODk0NiAxNy4yNjUyIDIwIDE3IDIwWk0xNiAxOFYySDJWMThIMTZaTTYgNFY2QzYgNi43OTU2NSA2LjMxNjA3IDcuNTU4NzEgNi44Nzg2OCA4LjEyMTMyQzcuNDQxMjkgOC42ODM5MyA4LjIwNDM1IDkgOSA5QzkuNzk1NjUgOSAxMC41NTg3IDguNjgzOTMgMTEuMTIxMyA4LjEyMTMyQzExLjY4MzkgNy41NTg3MSAxMiA2Ljc5NTY1IDEyIDZWNEgxNFY2QzE0IDcuMzI2MDggMTMuNDczMiA4LjU5Nzg1IDEyLjUzNTUgOS41MzU1M0MxMS41OTc5IDEwLjQ3MzIgMTAuMzI2MSAxMSA5IDExQzcuNjczOTIgMTEgNi40MDIxNSAxMC40NzMyIDUuNDY0NDcgOS41MzU1M0M0LjUyNjc4IDguNTk3ODUgNCA3LjMyNjA4IDQgNlY0SDZaIiBmaWxsPSIjRkI5MTFDIi8+Cjwvc3ZnPgo=" alt="" />
                        <div class="quantity-items">
                            <span>{{this.itemCount}}</span>
                        </div>
                    </div>
                </a>
                <!-- Cac danh muc chon khi an vao avatar -->
                <div class="p-absolute" v-bind:class="{dBlockAvt: displayClick}">
                    <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAgMTUuMzg0NkwxNS4zODQ2IDBMMTYgMC42MTUzODRMMC42MTUzODQgMTZMMCAxNS4zODQ2WiIgZmlsbD0iYmxhY2siLz4KPHBhdGggZD0iTTYuNjM5NzVlLTA2IDAuNjE1Mzk1TDE1LjM4NDYgMTZMMTYgMTUuMzg0NkwwLjYxNTM5MSAxLjAzNzQ2ZS0wNUw2LjYzOTc1ZS0wNiAwLjYxNTM5NVoiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo=" class="icon-close-card-avt" @click="displayClick = !displayClick"/>
                    <ul style="margin-top: 15px; margin-bottom: 15px;">
                        <!---->
                        <!---->
                        <div v-if="logged == 1">
                            <li class="header-option-authen-item">
                                <img src="https://order.thecoffeehouse.com/_nuxt/img/user.db835c0.svg" alt="" />
                                <a href="/user/user-info" class="show-more"><span class="text-authen">Thông tin tài khoản</span></a>
                            </li>
                            <hr />
                            <li class="header-option-authen-item">
                                <img src="https://order.thecoffeehouse.com/_nuxt/img/address-book.11e8849.svg" alt="" />
                                <a href="/user/so-dia-chi" class="show-more"><span class="text-authen">Sổ địa chỉ</span></a>
                            </li>
                            <hr />
                            <li class="header-option-authen-item">
                                <img src="https://order.thecoffeehouse.com/icon/history-order.svg" alt="" />
                                <a href="/user/lich-su" class="show-more">
                                    <span class="text-authen">Lịch sử mua hàng</span>
                                    <!-- <ul style="margin-left: 20px; display: none">
                      <a href="/user-info/orderHistory" class="show-more"
                        ><span class = "text-authen">Xem thêm...</span></a
                      >
                    </ul> -->
                                </a>
                            </li>
                            <hr />
                            <li class="header-option-authen-item">
                                <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAxOSAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTMgMTZINVYxOEgxN1YySDVWNEgzVjFDMyAwLjczNDc4NCAzLjEwNTM2IDAuNDgwNDMgMy4yOTI4OSAwLjI5Mjg5M0MzLjQ4MDQzIDAuMTA1MzU3IDMuNzM0NzggMCA0IDBIMThDMTguMjY1MiAwIDE4LjUxOTYgMC4xMDUzNTcgMTguNzA3MSAwLjI5Mjg5M0MxOC44OTQ2IDAuNDgwNDMgMTkgMC43MzQ3ODQgMTkgMVYxOUMxOSAxOS4yNjUyIDE4Ljg5NDYgMTkuNTE5NiAxOC43MDcxIDE5LjcwNzFDMTguNTE5NiAxOS44OTQ2IDE4LjI2NTIgMjAgMTggMjBINEMzLjczNDc4IDIwIDMuNDgwNDMgMTkuODk0NiAzLjI5Mjg5IDE5LjcwNzFDMy4xMDUzNiAxOS41MTk2IDMgMTkuMjY1MiAzIDE5VjE2Wk01IDlIMTJWMTFINVYxNEwwIDEwTDUgNlY5WiIgZmlsbD0iI0M0QzRDNCIvPgo8L3N2Zz4K" alt="" />
                                <a href="#" class="show-more">
                                    <span @click="logout" class="text-authen">Thoát</span>
                                </a>
                            </li>

                        </div>
                        <div v-else>
                            <li class="header-option-authen-item">
                                <img src="https://order.thecoffeehouse.com/icon/history-order.svg" alt="" />
                                <a href="/user/user-info" class="show-more"><span class="text-authen">Tra cứu đơn hàng</span></a>
                            </li>
                            <hr />
                            <li class="header-option-authen-item">
                                <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAxOCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIgMTNINFYxOEgxNlYySDRWN0gyVjFDMiAwLjczNDc4NCAyLjEwNTM2IDAuNDgwNDMgMi4yOTI4OSAwLjI5Mjg5M0MyLjQ4MDQzIDAuMTA1MzU3IDIuNzM0NzggMCAzIDBIMTdDMTcuMjY1MiAwIDE3LjUxOTYgMC4xMDUzNTcgMTcuNzA3MSAwLjI5Mjg5M0MxNy44OTQ2IDAuNDgwNDMgMTggMC43MzQ3ODQgMTggMVYxOUMxOCAxOS4yNjUyIDE3Ljg5NDYgMTkuNTE5NiAxNy43MDcxIDE5LjcwNzFDMTcuNTE5NiAxOS44OTQ2IDE3LjI2NTIgMjAgMTcgMjBIM0MyLjczNDc4IDIwIDIuNDgwNDMgMTkuODk0NiAyLjI5Mjg5IDE5LjcwNzFDMi4xMDUzNiAxOS41MTk2IDIgMTkuMjY1MiAyIDE5VjEzWk04IDlWNkwxMyAxMEw4IDE0VjExSDBWOUg4WiIgZmlsbD0iI0M0QzRDNCIvPgo8L3N2Zz4K" alt="" />
                                <!-- <a href="/user/so-dia-chi" class="show-more"><span class="text-authen">Đăng nhập</span></a> -->
                                <AuthenticationUser style="margin-left: 17px"/>
                            </li>
                            <hr />
                        </div>
                        <!--              <div >-->
                        <!--                <li class="header-option-authen-item">-->
                        <!--                  <img src="https://order.thecoffeehouse.com/icon/history-order.svg" alt="" />-->
                        <!--                  <a href="/user/lich-su" class="show-more">-->
                        <!--                    <span class= "text-authen">Tra cứu đơn hàng </span>-->
                        <!--                    &lt;!&ndash; <ul style="margin-left: 20px; display: none">-->
                        <!--                      <a href="/user-info/orderHistory" class="show-more"-->
                        <!--                        ><span class = "text-authen">Xem thêm...</span></a-->
                        <!--                      >-->
                        <!--                    </ul> &ndash;&gt;-->
                        <!--                  </a>-->
                        <!--                </li>-->

                        <!--                <li class="header-option-authen-item">-->
                        <!--                  <img-->
                        <!--                      src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAxOSAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTMgMTZINVYxOEgxN1YySDVWNEgzVjFDMyAwLjczNDc4NCAzLjEwNTM2IDAuNDgwNDMgMy4yOTI4OSAwLjI5Mjg5M0MzLjQ4MDQzIDAuMTA1MzU3IDMuNzM0NzggMCA0IDBIMThDMTguMjY1MiAwIDE4LjUxOTYgMC4xMDUzNTcgMTguNzA3MSAwLjI5Mjg5M0MxOC44OTQ2IDAuNDgwNDMgMTkgMC43MzQ3ODQgMTkgMVYxOUMxOSAxOS4yNjUyIDE4Ljg5NDYgMTkuNTE5NiAxOC43MDcxIDE5LjcwNzFDMTguNTE5NiAxOS44OTQ2IDE4LjI2NTIgMjAgMTggMjBINEMzLjczNDc4IDIwIDMuNDgwNDMgMTkuODk0NiAzLjI5Mjg5IDE5LjcwNzFDMy4xMDUzNiAxOS41MTk2IDMgMTkuMjY1MiAzIDE5VjE2Wk01IDlIMTJWMTFINVYxNEwwIDEwTDUgNlY5WiIgZmlsbD0iI0M0QzRDNCIvPgo8L3N2Zz4K"-->
                        <!--                      alt=""-->
                        <!--                  />-->
                        <!--                  <a href="#" class="show-more">-->
                        <!--                    <span  class = "text-authen">Dăng nhập</span>-->
                        <!--                  </a>-->
                        <!--                </li>-->

                        <!--              </div>-->
                    </ul>
                </div>
            </div>
        </div>
    </header>

</div>
</template>

<script>
export default {
    name: "userHeader",
    props: {
        dialog: Boolean,
    },
    data: () => {
        return {
            oldAddress: "...",
            logged: 0,
            user: {},
            itemCount: 0,
            displayClick: false,
            auth: false,
        };
    },

    created() {
        // localStorage.removeItem("user")
        // localStorage.removeItem("oldAddress")
        // console.log("local storage: ", JSON.parse(localStorage.getItem("order")))
        if (localStorage.getItem("order") == null) {
            this.itemCount = 0
        } else {
            this.itemCount = JSON.parse(localStorage.getItem("order")).length
            // console.log(localStorage.getItem("order"))
        }

        if (localStorage.getItem("user") == null) {
            this.logged = 0
        } else {
            this.user = JSON.parse(localStorage.getItem("user"))
            this.logged = 1
        }

        if (localStorage.getItem("oldAddress") != undefined) {
            console.log("oldAddress: ", localStorage.getItem("oldAddress"))
            this.oldAddress = JSON.parse(localStorage.getItem("oldAddress"))
        } else {
            this.oldAddress = "..."
        }

        // console.log("item count: ", this.itemCount)
    },
    computed() {
        this.auth = this.$store.state.authenticated
        // console.log('1')
        // console.log(this.auth)
    },

    // watch: {
    //   globalOrder(){
    //     console.log("Global order has: ", this.globalOrder.length)
    //   }
    // },
    methods: {

        logout() {
            localStorage.removeItem("user")
            // localStorage.removeItem("oldAddress")
            this.$router.push({name: "Mainpage"})
        },
        handleDeleteAddress() {
            this.oldAddress = ""
        },
        handleChosenAddress() {
            // console.log("old Address: ", this.oldAddress)
            localStorage.setItem("oldAddress", JSON.stringify(this.oldAddress))
            this.dialog = false
            // setTimeout(()=>{}, 5000)
            this.$emit('chosenAddress', true);
        }
        // closePopUp: function (event) {
        //   if (event.target == modal) {
        //     modal.style.display = "none";
        //   }

    },
    mounted() {
        window.addEventListener('order-localstorage-changed', (event) => {
            // console.log(event.detail.storage)
            if (event.detail.storage == null) {
                this.itemCount = 0
            } else
                this.itemCount = JSON.parse(event.detail.storage).length;
            // console.log("item count in mounted: ", this.itemCount)
        });
    },
    components: {
    AuthenticationUser: () => import("@/components/userComponents/Authentication_User"),
  },
};
</script>

<style scoped>
hr {
    margin-top: 1rem;
    margin-bottom: 1rem;
    border: 0;
    border-top: 1px solid rgba(0, 0, 0, .1);
}

hr {
    box-sizing: content-box;
    height: 0;
    overflow: visible;
}

.history-list-wrap {
    display: flex;
    flex-direction: column;
}

.text-authen {
    margin-left: 17px;
    flex-shrink: 0;
}

.show-more {
    text-align: center;
    display: block;
    color: #000;
    text-decoration: none;
}

.header-option-authen-item {
    display: flex;
    align-items: center;
    color: #000;
    position: relative;
    font-size: 14px;
    cursor: pointer;
}

.icon-close-card-avt {
    float: right;
    transform: translate(-1px, -8px);
    width: 12px;
    cursor: pointer;
}

.dBlockAvt {
    display: block !important;
}

.p-absolute {
    display: none;
    position: absolute;
    margin-top: 15rem;
    padding-left: 0px !important;
    background-color: #fff;
    padding: 22px;
    transform: translate(-102px, 10px);
    box-shadow: 0 5px 12px rgb(0 0 0 / 15%);
    border-radius: 10px;
    font-size: 14px;
    top: -238%;
    right: 12%;
}

.headerUser {
    /* color: coral; */
    /* background-color:radial-gradient(100% 501.4% at 0% 100%,#ffb141 0%,#fb8d17 100%); */
    background-color: #fb8d17;
    position: fixed;
    top: 0;
    left: 0;
    height: 5rem;
    width: 100%;
    box-shadow: 0 2px 8px rgb(0 0 0 / 8%);
    z-index: 999;
    padding: 0 8.625rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    justify-content: space-around;
    flex-wrap: wrap;
}

.divHeaderUser {
    display: flex;
    justify-content: center;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: row;
    width: 75rem;
}

.div_deliver_header {
    background-color: rgba(232, 130, 21, 0.7);
    width: 15.75rem;
    height: 3.5rem;
    padding: 0.5rem;
    border-radius: 6.25rem;
    cursor: pointer;
    width: 15.75rem;
}

.align-items-center {
    align-items: center !important;
}

.d-lg-flex {
    display: flex !important;
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

.img-deliver {
    flex-shrink: 0;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    vertical-align: middle;
}

.div-deliver-text {
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 0%;
    padding-left: 0.5rem !important;
    color: #fff;
}

.deliver-giaohang {
    margin-bottom: 0.125rem;
    color: #fff;
    font-weight: 600;
    font-size: 0.8375rem;
    line-height: 1.125rem;
}

.text-limit-1-line,
input::placeholder {
    -webkit-line-clamp: 1;
}

.text-limit-1-line,
.text-limit-2-line,
.text-limit-3-line,
input::placeholder {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    overflow: hidden;
    word-break: break-all;
}

.header-delivery .header-delivery_content {
    flex: 1;
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 0%;
}

.pl-2,
.px-2 {
    padding-left: 0.5rem !important;
}

.menu-nav {
    display: flex;
}

.menu-list {
    list-style-type: none;
    display: flex;
    align-items: center;
    margin-bottom: 0;
}

.menu-list>li>a {
    text-decoration: none;
    font-size: 14px;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    color: #fff;
    line-height: 150%;
    font-weight: 600;
    font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto;
}

.menu-list-item {
    transition: 0.3s;
    padding-bottom: 0.2rem;
}

li>.menu-list-item:hover {
    border-bottom: 2px solid #fff;
    width: fit-content;
}

.link-avatar {
    /* border-radius: 50%; */
}

.modal {
    display: flex;
}

.img-avatar {
    border-radius: 50%;
    width: 50px;
    height: 50px;
}

.address-font {
    font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto;
}

.user-name {
    color: #fff;
    line-height: 150%;
    font-weight: 600;
    font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto;
    font-size: 14px;
    padding-left: 8px;
    /* padding-right: 37px; */
}

.avatar-cart {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
    /* width: 30px;
    height: 30px; */
    margin-left: 3.62rem;
}

.quantity-items {
    width: 16px;
    height: 16px;
    background-color: rgb(255, 0, 0);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0px;
    left: 24px;
}

.quantity-items>span {
    font-weight: 600;
    font-size: 10px;
    text-decoration: none;
    color: #fff;
}

.pop-up-delivery {
    background-color: #fb8d17;
    color: #fff;
    display: flex;
    align-items: center;
    flex-direction: row;
    padding: 6px 12px 6px 6px;
    border-radius: 6.25rem;
}

.pop-up-block {
    width: 165px;
    padding: 8px 12px 8px 12px;
    background: #fff;
    border-radius: 100px;
    border: 1px dashed #fb8d17;
    list-style: none;
}

.header-delivery_content {
    display: flex;
}

.pop-up-block {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: -59px;
}

.delivery-block {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
}

.text-block {
    background-color: rgb(155, 121, 121);
    color: #000;
    padding: 56px 20px 20px 20px;
    border-radius: 0.8375rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
}

.address-detail {
    width: 710px;
    border-top-left-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem;
    padding: 6px 12px;
    font-size: 0.8375rem;
    line-height: 1.5rem;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.12) !important;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.btn-delivery {
    background: #e57905;
    border-radius: 8px;
    color: #fff;
    border: none;
    font-weight: 600;
    font-size: 16px;
    padding: 8px 12px;
    width: 200px;
    height: 40px;
    margin-top: 1rem;
}
</style>
