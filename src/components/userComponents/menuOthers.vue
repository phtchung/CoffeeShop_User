<template>
<v-container>
    <mainHeader>
    </mainHeader>
    <!-- <v-row>
      <v-col cols="12" sm="12" md="6" lg="3" v-for="item in items" :key="item.name">
          <Item :image_url="item.image_url" :name="item.name" :description="item.description" :price="item.price"/>
      </v-col>
  </v-row> -->
    <v-row class="menu_bar">
        <v-col cols="12" xs="12" sm="6" md="3" lg="3" v-for="item in items" :key="item.name"  @click="handleProduct(item.id, item.name)" style="margin: 24px 0">
            <Item_User :image_url="item.image_url" :name="item.name" :description="item.description" :price="item.price" />
        </v-col>
    </v-row>
</v-container>
</template>

<script>
// /* global axios */
import axios from "axios";

export default {
    name: "menuCategory_withoutTree",
    props: {
        menuType: String,
    },


    //  set up data base on menuType from backend
    // this data below is manually set up, neet to get from backend when have a api
    data() {
        return {
            category_id: -1,
            items: []
        };
    },

    components: {
        Item_User: () => import("@/components/Item_User"),
        mainHeader: () => import("@/layouts/Header/mainHeader")
        // BtnNew: () => import("@/components/vuetifyComponents/BtnNew")
    },
    created() {
        // this.category_id = this.$route.params.category_id;
        if (this.$route.params.path_name == "ca-phe") {
            this.category_id = 1
        } else if (this.$route.params.path_name == "tra") {
            this.category_id = 2
        }
        this.items = JSON.parse(localStorage.getItem("items"))
        this.$watch(
                () => this.$route.params,
                (toParams, previousParams) => {
                    console.log(toParams);
                    console.log(previousParams);
                    if (this.$route.params.path_name == "ca-phe") {
                        this.category_id = 1
                    } else if (this.$route.params.path_name == "tra") {
                        this.category_id = 2
                    }
                    // this.category_id = this.$route.params.category_id;
                    // react to route changes...
                }
            ),

            this.getItems();
        // this.items = JSON.parse(localStorage.getItem("items"))
    },
    watch: {
        category_id() {
            this.getItems();
        },
    },
    methods: {
        // async getItems() {
        //   axios
        //     .get("http://127.0.0.1:8000/api/admin/product/index")
        //     .then((response) => {
        //       console.log("START\n");
        //       console.log(response);
        //       console.log("END\n");
        //       this.items = response.data.products;
        //     })
        //     .catch((error) => {
        //       console.log(error.response);
        //     });
        //   // const response = await abc();
        // },
        getItems() {
            if(this.$route.path.slice(21) == 'tra'){
                this.category_id = 20
            }
            else if(this.$route.path.slice(21) == 'ca-phe') {
                this.category_id = 19
            }
            console.log("from path: ",this.$route.path.slice(21));
            axios
                .post("http://127.0.0.1:8000/api/admin/product/indexByCategoryId", {
                    category_id: this.category_id
                })
                .then((response) => {
                    this.items = response.data.products;
                    localStorage.setItem("items", JSON.stringify(this.items))
                    // console.log(response);
                })
                .catch((error) => {
                    console.log("Start\n");
                    console.log(error.response)
                    console.log("END\n");
                });
        },
        handleProduct(product_id, product_name) {
            this.product_id = product_id;
            this.product_name = product_name;
            console.log(this.product_name_convert),
                this.$router.push({
                    path: `/${this.product_id}`,
                    name: "item",
                    params: {
                        product_id: `${this.product_id}`,
                        product_name_convert: `${this.product_name_convert_computed}`
                    },
                });
        },
        // bo het dau trong tieng Viet
        removeVietnameseTones(str) {
            str = str.replace(/??|??|???|???|??|??|???|???|???|???|???|??|???|???|???|???|???/g, "a");
            str = str.replace(/??|??|???|???|???|??|???|???|???|???|???/g, "e");
            str = str.replace(/??|??|???|???|??/g, "i");
            str = str.replace(/??|??|???|???|??|??|???|???|???|???|???|??|???|???|???|???|???/g, "o");
            str = str.replace(/??|??|???|???|??|??|???|???|???|???|???/g, "u");
            str = str.replace(/???|??|???|???|???/g, "y");
            str = str.replace(/??/g, "d");
            str = str.replace(/??|??|???|???|??|??|???|???|???|???|???|??|???|???|???|???|???/g, "A");
            str = str.replace(/??|??|???|???|???|??|???|???|???|???|???/g, "E");
            str = str.replace(/??|??|???|???|??/g, "I");
            str = str.replace(/??|??|???|???|??|??|???|???|???|???|???|??|???|???|???|???|???/g, "O");
            str = str.replace(/??|??|???|???|??|??|???|???|???|???|???/g, "U");
            str = str.replace(/???|??|???|???|???/g, "Y");
            str = str.replace(/??/g, "D");
            // Some system encode vietnamese combining accent as individual utf-8 characters
            // M???t v??i b??? encode coi c??c d???u m??, d???u ch??? nh?? m???t k?? t??? ri??ng bi???t n??n th??m hai d??ng n??y
            str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // ?? ?? ?? ?? ??  huy???n, s???c, ng??, h???i, n???ng
            str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // ?? ?? ??  ??, ??, ??, ??, ??
            return str;
        },
    },
    mounted() {
        this.items = JSON.parse(localStorage.getItem("items"))
    },
    computed: {
        product_name_convert_computed() {
            return this.removeVietnameseTones(this.product_name).replaceAll(' ', '-').toLowerCase()
        }
    },
};
</script>

<style scoped>
.menu_bar::after {
    content: "";
    position: absolute;
    width: 2px;
    top: 12px;
    background: #00000026;
}
</style>
