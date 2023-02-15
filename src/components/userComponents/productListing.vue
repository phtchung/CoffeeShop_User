<template>
<div class="tch-box">
    <div>
        <!-- need to done search model -->
    </div>
    <div class="cover-listing">
        <div class="container">
            <div class="container-lg container-fluid">
                <div>
                    <!-- need to done pop up item -->
                </div>
                <div>
                    <div style="margin-bottom: 1.875rem">
                        <!-- header -->
                        <div class="product-listing-title">
                            <div style="display: flex">
                                <!-- icon + text title -->
                                <v-icon style="margin-right: 12px"> mdi-beer-outline </v-icon>
                                <span data-v-5abbf04c="" class="text">Sản phẩm từ Nhà</span>
                                <template>
                                    <v-row justify="center">
                                        <v-dialog v-model="dialogSearch" max-width="700" content-class="my-custom-dialog" style="z-index : 999;">
                                            <template v-slot:activator="{ on, attrs }">
                                                <v-btn v-bind="attrs" v-on="on" color="#e3e3e3" style="border-radius: 10px;padding: 0;margin: 0 12px 0 42px" min-width="34px" min-height="32px">
                                                    <v-icon style="font-weight: 200;font-size: 32px;color: #838387"> mdi-magnify </v-icon>

                                                </v-btn>
                                            </template>
                                            <v-card style="display: flex;flex-direction: column;border-radius: 8px;">
                                                <div class="modal-header ">
                                                    <v-btn text style="padding: 8px" @click="dialogSearch = false">
                                                        <v-icon x-large color="#808080" style="font-weight: 200;font-size: 32px"> mdi-close </v-icon>
                                                    </v-btn>
                                                    <div style="margin: auto;font-size: 14px;line-height: 24px;color: #262626;font-weight: 500">Tìm kiếm </div>
                                                </div>
                                                <hr style="color: #dee2e6">
                                                <div class="modal-body">
                                                    <div class="card-product-note-item">
                                                        <v-icon color="#808080" style="font-weight: 200;font-size: 32px;padding: 12px"> mdi-magnify </v-icon>
                                                        <input @keydown.delete="updateSearch()" type="text" placeholder="Tìm kiếm theo sản phẩm bạn quan tâm " class="card-product-text" v-model="searchProduct">
                                                    </div>
                                                </div>

                                                <v-row style="margin: 0 0px">
                                                    <v-col cols="12" md="6" sm="6" v-for="product_search in filteredList" :key="product_search.id">
                                                        <div class="cover-product">
                                                            <div class="product-search">
                                                                <div class="product-search-img">
                                                                    <img style="width: 100%;height: 100%" :src=product_search.image_url alt="">
                                                                </div>
                                                                <div class="product-search-right">
                                                                    <div style="flex: 1">
                                                                        <div class="product-search-name">{{product_search.name}}</div>
                                                                    </div>
                                                                    <div style="display: flex!important;justify-content: space-between;align-items: center">
                                                                        <div class="product-search-price">{{separator(product_search.price)}}</div>
                                                                        <Card_User style="z-index : 999" :currentID="product_search.id" :dialog="dialog" :id="product_search.id" :image_url="product_search.image_url" :name="product_search.name" :description="product_search.description" :price="product_search.price" :isInProductListing=1></Card_User>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </v-col>
                                                </v-row>
                                            </v-card>
                                        </v-dialog>
                                    </v-row>
                                </template>
                            </div>

                            <div>
                                <!-- icon search -->
                            </div>
                        </div>
                    </div>
                    <div>
                        <!-- category -->
                        <ul role="tablist" class="product-category">
                            <!-- Tung item mot -->
                            <li v-for="category in categories" :key="category.id" style="margin-left: 1rem">
                                <a aria-selected="true" class="nav-link">
                                    <div class="tch-category-card" @click="category_type = category.id">
                                        <!-- Picture of category -->
                                        <div class="
                          justify-content-center
                          align-items-center
                          tch-category-card__image
                        ">
                                            <img :src="category.image_url" style="max-width: 70%; max-height: 70%" />
                                        </div>
                                        <!-- Name of category -->
                                        <div style="margin-top: 0.375rem">
                                            <h5 class="tch-category-card__title text-center">
                                                {{ category.name }}
                                            </h5>
                                        </div>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <!-- table of item -->
                        <div class="row">
                            <div v-for="product in products" :key="product.product_id" class="product">
                                <div class="productDetail">
                                    <!-- image -->
                                    <div class="productImage">
                                        <img :src="product.image_url" style="width: 155px; height: 155px" />
                                    </div>
                                    <!-- block price and title -->
                                    <div style="padding-top: 0.75rem">
                                        <!-- title -->
                                        <div class="productTitleBlock">
                                            <h4 class="productTitle">{{ product.name }}</h4>
                                        </div>
                                        <!-- block price and + -->
                                        <div class="blockPriceAdd">
                                            <!-- price -->
                                            <p class="mb-0">
                                                <span class="d-block">{{
                            separator(product.price)
                          }}đ</span>
                                                <!---->
                                            </p>
                                            <!-- Nut + -->

                                            <Card_User style="z-index : 999" :currentID="currentID" :dialog="dialog" :id="product.id" :image_url="product.image_url" :name="product.name" :description="product.description" :price="product.price" :isInProductListing=1>
                                            </Card_User>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import axios from "axios";
// /* global axios */
export default {
    name: "productListing",
    components: {
        Card_User: () => import("@/components/userComponents/Card_User"),
    },
    props: {
        currentID: String,
        dialog: Boolean,
    },
    data() {
        return {
            dialogSearch: false,
            category_type: 1,
            categories: [],
            products: [],
            searchProduct: null,
            product_searchs: [{
                    id: 5,
                    image_url: "https://minio.thecoffeehouse.com/image/admin/1672731234_hitea-thom_400x400.jpg",
                    name: "Hi-Tea Thơm",
                    price: "75000",
                },
                {
                    id: 10,
                    image_url: "https://minio.thecoffeehouse.com/image/admin/1672731234_hitea-thom_400x400.jpg",
                    name: "Hi-Tea Đào",
                    price: "72000",
                }
            ]

        };
    },
    created() {
        console.log("Curent id: ", this.currentID)
        this.getCategories();
        this.getProducts();
        this.getAllProducts()
        // console.log("Start\n");
        // console.log(this.categories);
        // console.log(this.products)
        // console.log("END\n");
    },
    methods: {
        separator(numb) {
            var str = numb.toString().split(".");
            str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
            return str.join(".");
        },
        getCategories() {
            axios
                .post("http://127.0.0.1:8000/api/admin/category/indexByParentId", {
                    parent_id: 0
                })
                .then((response) => {
                    // console.log("RES:\n")
                    // console.log(response);
                    // console.log("END RES\n")
                    this.categories = response.data.Categories;
                })
                .catch((error) => {
                    console.log("ERR")
                    console.log(error.response);
                });
        },
        getProducts() {
            axios
                .post("http://127.0.0.1:8000/api/admin/product/indexByCategoryId", {
                    category_id: this.category_type
                })
                .then((response) => {
                    this.products = response.data.products;
                    // console.log(response);
                })
                .catch((error) => {
                    // console.log("Start\n");
                    console.log(error.response)
                    // console.log("END\n");
                });
        },
        getAllProducts() {
            axios
                .get("http://127.0.0.1:8000/api/admin/product/index")
                .then((response) => {

                    this.product_searchs = response.data.products;
                    console.log("All: ", response);
                })
                .catch((error) => {
                    // console.log("Start\n");
                    console.log(error.response)
                    // console.log("END\n");
                });
        },
        updateSearch() {
            if (this.searchProduct.length == 1) {
                this.searchProduct = null;
                console.log(this.searchProduct)
            }
        },
    },

    watch: {
        category_type() {
            this.getProducts();
        }
    },
    computed: {
        filteredList() {

            return this.product_searchs.filter(product_search => {
                return product_search.name.match(this.searchProduct)
            })
        },

    },
};
</script>

<style scoped>
Phạm Thànhh Chung /deep/.my-custom-dialog {
    margin-top: 110px;
    align-self: flex-start;
}

.modal-header {
    display: flex;
    padding: 16px;
    align-items: center;
}

.modal-body {
    padding: 16px;

}

button.close {
    background-color: transparent;
    border: 0;
}

.card-product-note-item {
    border: 1px solid #ededee;
    border-radius: 4px;
    background-color: #fafafa;
    display: flex;
    margin-top: 20px;
    height: 2.75rem;
}

.card-product-text {
    flex: 1 1 auto;
    padding: 0 14px;
    font-size: 13px;
    font-weight: 300;
}

textarea:focus,
input:focus {
    outline: none;
}

.cover-product {
    padding: 0 10px;
    margin: 0 0 20px 0;
}

.product-search {
    padding: 8px;
    background-color: white;
    display: flex;
}

.product-search-img {
    width: 6.25rem;
    height: 6.25rem;
    position: relative !important;
    flex-shrink: 0;
}

.product-search-img img {
    object-fit: cover;
}

.product-search-right {
    display: flex;
    flex-direction: column;
    padding-left: 14px;
    flex: 1
}

.product-search-name {
    color: #262626;
    font-size: 0.8375rem;
    height: 3rem;
    line-height: 1.5rem;
    font-weight: 600;
    margin-bottom: 8px;
}

.product-search-price {
    font-size: 14px;
}

.tch-box {
    /* padding-top: 3.125rem; */
    padding-bottom: 3.125rem;
}

.cover-listing {
    margin-top: 20px;
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
}

.container {
    margin-left: 123px;
    margin-right: 123px;
}

.product-listing-title {
    justify-content: center !important;
    width: 100%;
    display: flex;
}

.text {
    font-size: 1.75rem;
    line-height: 2.25rem;
    font-weight: 600;
    color: black;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
        "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif,
        "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}

.product-category {
    display: flex;
    overflow-x: auto;
    justify-content: center !important;
    margin-left: -0.5rem;
    list-style: none;
    list-style-position: initial;
    list-style-image: initial;
    list-style-type: none;
    margin-bottom: 1.5rem;
}

.nav-link {
    display: block;
    padding: 0.5rem 1rem;
    padding-top: 0.5rem;
    padding-right: 1rem;
    padding-bottom: 0.5rem;
    padding-left: 1rem;
}

.tch-category-card {
    transition: 0.4s;
    transition-duration: 0.4s;
    transition-timing-function: ease;
    transition-delay: 0s;
    transition-property: all;
    cursor: pointer;
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

.tch-category-card__image {
    width: 5.375rem;
    height: 5.375rem;
    background-color: #fff7e6;
    background-size: cover;
    flex-shrink: 0;
    overflow: hidden;
    display: flex;
    border-radius: 50%;
}

.align-items-center {
    align-items: center !important;
}

.justify-content-center {
    justify-content: center !important;
}

.tch-category-card__title {
    color: #b2b2b2;
    /*font-weight: 0.75rem;*/
    font-size: 12px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
        "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif,
        "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}

.text-center {
    text-align: center !important;
}

.row {
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
}

.product {
    flex: 0 0 16.666667%;
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: 16.6667%;
    max-width: 16.666667%;
    padding-left: 15px;
    padding-right: 15px;
    margin-top: 16px;
    position: relative;
}

.productDetail {
    padding: 0.625rem;
    background-color: #fff;
    border-radius: 0.5rem;
    cursor: pointer;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
    flex-direction: column !important;
    display: flex;
}

.productImage {
    border-radius: 0.5rem;
    overflow: hidden;
    height: 100%;
    width: 100%;
    object-fit: contain;
    /* -o-object-fit: cover;
  object-fit: cover; */
}

.productTitleBlock {
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 0%;
    margin-top: -0.125rem;
    margin-bottom: 1rem !important;
}

.productTitle {
    color: #262626;
    font-size: 0.8375rem;
    height: 3rem;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    line-height: 1.5rem;
    overflow: hidden;
    font-weight: 600;
    margin-bottom: 8px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
        "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif,
        "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}

.grid-container {
    display: grid;
}

.blockPriceAdd {
    align-items: center !important;
    justify-content: space-between !important;
    display: flex !important;
}

.d-block {
    display: block !important;
}

.mb-0,
.my-0 {
    margin-bottom: 0 !important;
}

.btn.btn--orange-1 {
    background: #fa861c;
}

.add-to-cart {
    border-radius: 50%;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.p-0 {
    padding: 0 !important;
}

.btn {
    font-weight: 400;
    color: #212529;
    text-align: center;
    vertical-align: middle;
    user-select: none;
    border: 1px solid transparent;
    font-size: 1rem;
    line-height: 1.5;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
        border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
</style>
