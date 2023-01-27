<template>
<v-container rounded-0 fluid style="margin-top: 42px;">

    <userHeader :dialog="true" @chosenAddress="openDialog = $event"/>
    <Card_User style="z-index : 999" 
                          :currentID="currentID"
                          :dialog="openDialog"
                          :id="currentID"
                          :image_url="product.image_url"
                          :name="product.name"
                          :description="product.description"
                          :price="product.price"> 
                        </Card_User>
    <!-- <Card_User style="z-index : 999" 
                          :currentID="1"
                          :dialog="openDialog"
                          :id="1"
                          :image_url="1"
                          :name="1"
                          :description="1"
                          :price="1"> 
                        </Card_User> -->

    <div>
        <template style="board">
            <v-carousel cycle hide-delimiter-background show-arrows>
                <v-carousel-item v-for="(url_header, i) in urls_header" :key="i">
                    <div>
                        <a href="#">
                            <img :src="url_header" alt="" style="width: 100%" />
                        </a>
                    </div>
                </v-carousel-item>
            </v-carousel>
        </template>
    </div>
    <productListing :dialog="false" :currentID="currentID"/>
    <div>

    </div>
    <!-- <mainHeader/> -->
</v-container>
</template>

<script>
import axios from "axios";
export default {
    name: "ProductCode",
    //    components: {
    //     mainHeader: () => import('@/layouts/Header/mainHeader'),
    //   },
    data() {
        return {
            currentID: "0",
            openDialog: false,
            product: {},
            topping_items: [],
            product_relations: [],
            urls_header: [
                "https://file.hstatic.net/1000075078/file/hiteaday_desktop_564c8568fc48441badd3a492cdd127d9.jpg",
                "https://file.hstatic.net/1000075078/file/daitiec_desktop_2cd63f8cf8454da3ade2c990b9415c8b.jpg",
            ],
        }
    },
    created(){
        this.currentID = this.$route.path.slice(6)
        this.getProductByID()
        // setTimeout(()=>{}, 5000)
    },

    methods: {
        getProductByID() {
            axios
                .post("http://127.0.0.1:8000/api/admin/product/getProductInfo", {
                    product_id: this.currentID
                })
                .then((response) => {
                    console.log("START res product\n");
                    console.log(response);
                    console.log("END\n");
                    this.product = response.data.product;
                    this.product.id = this.product_id
                    // this.topping_items = response.data.toppings
                    // this.product_relations = response.data.same
                    // for(let index in this.topping_items){
                    //     let topping_item = this.topping_items[index]
                    //     topping_item.count = 0
                    //     // topping_item.id = index + 1
                           
                    // }

                    console.log("Product: ",this.product)
                    // console.log("ITEMS in function:")
                    // console.log(this.items)
                })
                .catch((error) => {
                    console.log("CAN NOT")
                    console.log(error.response);
                });
        }
    },

    watch: {
        openDialog() {
            console.log("Change: ", this.openDialog)
        }
    },
    components: {
        userHeader: () => import("@/layouts/Header/userHeader"),
        productListing: () => import("@/components/userComponents/productListing"),
        Card_User: () => import("@/components/userComponents/Card_User")
    },
}
</script>

<style scoped>
.board {
    background-color: orange;
    margin-top: -70px;
    margin-left: -24px;
    margin-right: -24px;
    padding-top: 20px;
    padding-left: 160px;
    padding-bottom: 0px;
    padding-right: 160px;
    margin-bottom: 0px;
}

.fill-height {
    align-items: start !important;
    margin-top: 42px;

}
</style>
