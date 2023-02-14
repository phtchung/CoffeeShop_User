<template>
<v-container >
    <mainHeader></mainHeader>
    <div class="productStore_Infor">
        <div class="prodcutStore_Wrap">
            <v-row>
                <v-col md="12" lg="6" sm="12" class="col-12 ">
                    <div class="product_carousel">
                        <div class="product_image">
                            <img :src=product.image_url alt="">
                        </div>
                        <div class="thumb_carousel">
                            <div class="thumb">
                                <img src="https://product.hstatic.net/1000075078/product/choco-pp_c043519a9788468aaf8ca26fb4626216.jpg" alt="" style="margin-top: 10px;">
                            </div>
                        </div>
                    </div>
                </v-col>
                <v-col  md="6" lg="6" sm="12">
                    <div>
                        <div class="inforr_product">
                            <div>
                                <p class="infor_pro__title">{{ product.name}}</p>
                            </div>
                            <div class="infor_pro_price">
                                <span class="price">{{get_total_price()}} đ</span>
                            </div>
                        </div>

                        <div class="option_size">
                            <p class="option_title">Chọn size (bắt buộc)</p>
                            <div class="product_option">
                                <div class="opt_size" @click="small = true ; medium = false ; big = false;  " :class="{ active: small}">
                                    <div class="opt_img">
                                        <img src="" alt="">
                                    </div>
                                    <div class="circle">
                                        Nhỏ + 0 đ
                                    </div>
                                </div>
                                <div class="opt_size" @click="small = false ; medium = true ; big = false" :class="{ active: medium}">
                                    <div class="opt_img">
                                        <img src="" alt="">
                                    </div>
                                    <div class="circle">
                                        Vừa + 6000 đ
                                    </div>
                                </div>
                                <div class="opt_size" @click="small = false ; medium = false ; big = true" :class="{ active: big}">
                                    <div class="opt_img">
                                        <img src="" alt="">
                                    </div>
                                    <div class="circle">
                                        Lớn + 10000 đ
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="option_topping">
                            <p class="option_title">Topping</p>
                            <div style="display: flex;flex-wrap: wrap">
                                <div class="product_option" v-for="topping_item in topping_items" :key=topping_item.id>
                                    <div class="option_item  " type="checkbox">
                                        <input type="checkbox" class="checkbox" name="topping_tch" :id="topping_item.id" :title=topping_item.name v-model="topping_item.count" :value=topping_item.name>
                                        <label class="top_detail active_normal" :for="topping_item.id">
                                            <div class="name">{{topping_item.name}} + {{separator(topping_item.price)}} đ</div>
                                        </label>
                                    </div>     
                                </div>
                            </div>
                        </div>

                        <div class="product_tocard">
                            <a @click="goToCode()" class="order__btn">
                                <div class="order__btn1">
                                    <img src="https://file.hstatic.net/1000075078/file/vector_c337310f409d440f890b370ff9cefe44.png" alt="" style="">
                                    <span class="order_name">Đặt giao tận nơi </span>
                                </div>
                            </a>
                        </div>
                    </div>
                </v-col>
            </v-row>
        </div>
    </div>

    <div class="product_describe">
        <div class="product_des_wrap">
            <v-row>
                <v-col cols="12" sm="12" lg="12" md="12">
                    <hr>
                    <div>
                        <h4 class="product_des_title">Mô tả sản phẩm</h4>
                        <p class="des_detail"> {{product.description}}</p>
                    </div>
                    <hr>
                </v-col>
            </v-row>
            <div id="product_des_title">
                <h4 class="product_des_title">Sản phẩm liên quan</h4>
                <v-row>
                    <v-col cols="12" md="2" lg="2" sm="6" class="list_product" v-for="product_relation in product_relations" :key=product_relation.id>
                        <div class="menu__item_related">
                            <div class="menu__item_img">
                                <a href="">
                                    <img :src=product_relation.image_url alt="">
                                </a>
                            </div>
                            <div class="menu__item_infor">
                                <h3>
                                    <a href="">{{product_relation.name}}</a>
                                </h3>
                                <div class="item__price">{{separator(product_relation.price)}} đ</div>
                            </div>
                        </div>
                    </v-col>

                </v-row>
            </div>

        </div>

    </div>
</v-container>
</template>

<script>
import axios from "axios";
import mainHeader from "@/layouts/Header/mainHeader";
export default {
    name: "productInStore",
    components:{
      mainHeader,
    },
    data() {
        return {
            product_id: "-1",
            product_name_convert: "",
            checked_topping: [],
            size: 'S',
            small: false,
            medium: false,
            big: false,
            checked_size: 0,
            items: [],
            product: {},
            topping_items: [],
            product_relations: [],
            // product_details lay tu local storage
            // topping_items lay tu local storage
            // product_relation lay tu local storage
            // product_details: [{
            //         id: "1",
            //         image_url: "https://product.hstatic.net/1000075078/product/choco-pp_c043519a9788468aaf8ca26fb4626216.jpg",
            //         name: "Cloud Tes's more Choco MasrchMallow",
            //         description: "Thức uống mang hương vị của nhãn, của sen, của trà Oolong đầy thanh mát cho tất cả các thành viên trong dịp Tết này. An lành, thư thái và đậm đà chính là những gì The Coffee House mong muốn gửi trao đến bạn và gia đình.",
            //         price: "69000",
            //     },

            // ],
            // topping_items: [{
            //         id: 1,
            //         name: "Kem Phô Mai Macchiato",
            //         price: "10000",
            //         count: 0,
            //     }, {
            //         id: 2,
            //         name: "Shot Espresso",
            //         price: "10000",
            //         count: 0,
            //     },
            //     {
            //         id: 3,
            //         name: "Trân châu trắng",
            //         price: "10000",
            //         count: 0,
            //     },
            //     {
            //         id: 4,
            //         name: "Sốt Caramel",
            //         price: "10000",
            //         count: 0,
            //     },
            //     {
            //         id: 5,
            //         name: "Thạch Cà Phê",
            //         price: "10000",
            //         count: 0,
            //     },
            // ],
            // product_relations: [{
            //         id: 1,
            //         name: "CloudFee Caramel",
            //         price: "49000",
            //         image_url: "//product.hstatic.net/1000075078/product/1653291164_da-tuyet-dao_364fd84dc42c4f11966a0f16604b96c3_large.jpg",
            //     },
            //     {
            //         id: 2,
            //         name: "CloudFee Caramel",
            //         price: "49000",
            //         image_url: "//product.hstatic.net/1000075078/product/1653291164_da-tuyet-dao_364fd84dc42c4f11966a0f16604b96c3_large.jpg",
            //     },
            //     {
            //         id: 3,
            //         name: "CloudFee Caramel",
            //         price: "49000",
            //         image_url: "//product.hstatic.net/1000075078/product/1653291164_da-tuyet-dao_364fd84dc42c4f11966a0f16604b96c3_large.jpg",
            //     },
            //     {
            //         id: 4,
            //         name: "CloudFee Caramel",
            //         price: "49000",
            //         image_url: "//product.hstatic.net/1000075078/product/1653291164_da-tuyet-dao_364fd84dc42c4f11966a0f16604b96c3_large.jpg",
            //     },
            // ],
        }
    },
    created() {
        // this.category_id = this.$route.params.category_id;
        this.$watch(
                () => this.$route.params,
                (toParams, previousParams) => {
                    console.log("before:", toParams);
                    console.log("after:", previousParams);
                    this.product_name_convert = this.$route.params.product_name_convert;
                    // react to route changes...
                }
            ),
            this.getItemByID();
    },

    watch: {
        product_id() {
            this.getItems();
            console.log(this.product_id)
        },
    },

    methods: {
        goToCode() {
            if(this.small == true){
                this.size = 'S'
            } else if(this.medium == true){
                this.size = 'M'
            } else if(this.big == true){
                this.size = 'L'
            }
            let topping_counts = []
            for(let i in this.topping_items){
                let topping_item = this.topping_items[i]
                if(topping_item.count == true){
                    topping_counts.push(1)
                } else {
                    topping_counts.push(0)
                }
            }
            console.log("Info size: ", this.size)
            console.log("Topping count: ", topping_counts)
            localStorage.setItem('info_size', this.size)
            localStorage.setItem('topping_counts', JSON.stringify(topping_counts))
            let route = this.$router.resolve({
                path: "/code=" + this.product.id,
                name: "code",
                params: {
                    product_id: `${this.product.id}`,
                },
            });
            window.open(route.href);
        },
        // bo het dau trong tieng Viet
        removeVietnameseTones(str) {
            str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
            str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
            str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
            str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
            str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
            str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
            str = str.replace(/đ/g, "d");
            str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
            str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
            str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
            str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
            str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
            str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
            str = str.replace(/Đ/g, "D");
            // Some system encode vietnamese combining accent as individual utf-8 characters
            // Một vài bộ encode coi các dấu mũ, dấu chữ như một kí tự riêng biệt nên thêm hai dòng này
            str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // ̀ ́ ̃ ̉ ̣  huyền, sắc, ngã, hỏi, nặng
            str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // ˆ ̆ ̛  Â, Ê, Ă, Ơ, Ư
            return str;
        },

        getIDByPath(path) {
            console.log("input path: ", path)
            for (let index in this.items) {
                const item = this.items[index]
                console.log(this.removeVietnameseTones(item.name).replaceAll(' ', '-').toLowerCase())
                if (this.removeVietnameseTones(item.name).replaceAll(' ', '-').toLowerCase() == path) {
                    return item.id
                }
            }
            return 0
        },

        getItems() {
            axios
                .get("http://127.0.0.1:8000/api/admin/product/index")
                .then((response) => {
                    // console.log("START\n");
                    // console.log(response);
                    // console.log("END\n");
                    this.items = response.data.products;
                    console.log("this items: ",this.items)
                    console.log("produduct name convert: ", this.product_name_convert)
                    this.product_id = this.getIDByPath(this.product_name_convert)
                    console.log("product_id: ", this.product_id)
                    // call api get product_details
                    // call api get topping_items
                    // call api get product_relations
                    this.getProductByID()
                    // luu vao local storage
                    // this.singleItem = 
                })
                .catch((error) => {
                    console.log(error.response);
                });
            // const response = await abc();
        },

        getItemByID() {
            console.log(this.$route.params)
            this.product_name_convert = this.$route.params.product_name_convert
            this.getItems()
        },
        getProductByID() {
            axios
                .post("http://127.0.0.1:8000/api/admin/product/getProductInfo", {
                    product_id: this.product_id
                })
                .then((response) => {
                    console.log("START res product\n");
                    console.log(response);
                    console.log("END\n");
                    this.product = response.data.product;
                    this.product.id = this.product_id
                    this.topping_items = response.data.toppings
                    this.product_relations = response.data.same
                    for(let index in this.topping_items){
                        let topping_item = this.topping_items[index]
                        topping_item.count = 0
                        // topping_item.id = index + 1
                           
                    }
                    // console.log("ITEMS in function:")
                    // console.log(this.items)
                })
                .catch((error) => {
                    console.log("CAN NOT")
                    console.log(error.response);
                });
        },
        separator(numb) {
            var str = numb.toString().split(".");
            str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
            return str.join(".");
        },
        get_total_price() {
            let total_price = parseInt(this.product.price) + (10000 * this.checked_topping.length);
            for(let topping_item of this.topping_items){
                console.log("topping_item here: ",topping_item)
                if(topping_item.count > 0){
                    total_price += 10000
                }
            }
            if (this.big === true && this.small === false && this.medium === false) {
                total_price += 10000;
            } else if (this.big === false && this.small === false && this.medium === true) {
                total_price += 6000;
            }
            return this.separator(total_price);
        },
    }
}
</script>

<style scoped>
/* Mobile  < 740px*/


.option_item .checkbox:checked~.active_normal {
    background: #E57905;
    border-color: #E57905;
    color: #fff;
}

.active {
    background: #E57905;
    border-color: #E57905;
    color: #fff !important;
}

.active_normal {
    background: #fff;
    color: #666666;
    border: 1px solid rgba(0, 0, 0, 0.15);
}

.product_carousel {
    max-width: 650px;
    margin: 0 auto;
    background: #fff;
}

.product_image>img {
    width: 35.625rem;
    height: 35.625rem;
}

.thumb>img {
    height: 75px;
    width: 75px;
    border-radius: 8px;
    border: 1px solid #E57905;
}

.infor_pro__title {
    font-size: 26px;
    font-family: "SF Pro Display", sans-serif;
    margin-bottom: 18px;
    color: #000;
    font-weight: 500;
}

.infor_pro_price {
    font-size: 16px;
    color: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    line-height: 1;
    margin-top: 16px;
}

.price {
    line-height: 0.75;
    font-family: "SF Pro Display", sans-serif;
    font-size: 26px;
    color: #E57905;
    font-weight: 600;
    margin-right: 37px;
}

.option_title {
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    margin-top: 40px;
    margin-bottom: 15px;
    display: inline-block;
}

.product_option {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
}

.opt_size {
    transition: all 0.3s;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    padding: 0 20px;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.15);
    height: 40px;
    line-height: 1;
    font-weight: 400;
    margin-right: 16px;
    font-size: 14px;
    color: #666666;
}

.option_item {
    display: block;
    position: relative;
    margin: 10px 20px 10px 0;
}

.option_size .product_option .opt_size .active {
    border-color: #E57905;
    background: #E57905;
    color: #fff;

}

.checkbox {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    opacity: 0;
}

.top_detail {

    border-radius: 5px;
    text-align: center;
    cursor: pointer;

    height: 40px;
    padding: 0 15px;
    display: inline-flex;
    align-items: center;

    position: relative;
}

.name {
    font-weight: 400;
    font-size: 14px;
}

.option_topping .option_title {
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    margin-top: 23px;
    margin-bottom: 0;
}

.order__btn {
    padding: 0;
    list-style: none;
    text-decoration: none;

}

.order__btn1 {
    background: #E57905;
    margin-top: 15px;
    border-radius: 8px;
    padding: 12px 0;
    text-align: center;

}

.order_name {
    justify-content: center;
    align-items: center;
    font-size: 16px;
    font-weight: 600;
    color: #FFFFFF;
    margin-left: 11px;
}

.product_des_wrap {
    width: 1200px;
}

.product_des_title {
    font-size: 18px;
    margin-bottom: 8px;
    font-weight: 600;
    font-family: 'SF Pro Display', sans-serif;
}

hr {
    margin: 32px 0;
    border: 0;
    border-top: 1px solid #d6d4d4;
}

.des_detail {
    margin-bottom: 10px;
    line-height: 24px;
    font-family: 'SF Pro Display', sans-serif;
    font-size: 14px;
}

.list_product {
    /*margin: 0 15px 40px;*/

}

/*.list_product .menu__item_related > a{*/
/*  border-radius: 10px;*/
/*  overflow: hidden;*/
/*  display: block;*/
/*  width: 100%;*/
/*  padding-top: 100%;*/
/*  margin: 0;*/
/*  position: relative;*/
/*  box-shadow: 0 0 13px 0 #00000040;*/
/*}*/
.menu__item_img>a>img {
    top: 0;
    left: 0;
    /*width: 10.625rem;*/
    width: 100%;
    position: absolute;
}

.menu__item_related .menu__item_img a {
    border-radius: 10px;
    overflow: hidden;
    display: block;
    width: 100%;
    padding-top: 100%;
    position: relative;
    box-shadow: 0 0 13px 0 #00000040;
}

a:hover {
    color: #ea8025 !important;
    text-decoration: none;
}

.menu__item_related .menu__item_infor {
    padding: 12px 0 0;
}

.menu__item_related .menu__item_infor h3 {
    margin-top: 0;
    margin-bottom: 4px;
    font-weight: 600;
    color: #191919;
    font-size: 16px;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
}

.menu__item_related .menu__item_infor h3 a {
    color: #000000;
    text-decoration: none;
    font-family: 'SF Pro Display', sans-serif;

}

.menu__item_related .menu__item_infor .item__price {
    font-size: 14px;
    color: #00000099;
    margin-bottom: 10px;
    font-family: 'SF Pro Display', sans-serif;
}
@media only screen and (max-width: 46.1875em) {

  .opt_size .product__info__item__list__item {
    padding: 0 10px;
    margin-right: 10px;
    margin-bottom: 10px!important;
  }

  .product_image>img {
    height: 360px;
    width: 100%;
  }
  /*.prodcutStore_Wrap {*/
  /*  width: 75rem;*/
  /*}*/
  .thumb>img{
    display: none;
  }
  hr{
    width: 500px;
  }
  .product_option > .opt_size{
    margin-bottom: 10px;
    margin-right: 10px;
  }

}
@media only screen and (max-width: 599.98px) {
  .v-application .hidden-xs-only {
    display: none !important;
  }
}
</style>
