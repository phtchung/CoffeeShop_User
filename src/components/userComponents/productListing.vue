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
                <li
                  v-for="category in categories"
                  :key="category.id"
                  style="margin-left: 1rem"
                >
                  <a
                    aria-selected="true"
                    class="nav-link"
                  >
                    <div class="tch-category-card" @click="category_type = category.id">
                      <!-- Picture of category -->
                      <div
                        class="
                          justify-content-center
                          align-items-center
                          tch-category-card__image
                        "
                      >
                        <img
                          :src="category.image_url"
                          style="max-width: 70%; max-height: 70%"
                        />
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
                <div
                  v-for="product in products"
                  :key="product.product_id"
                  class="product"
                >
                  <div class="productDetail">
                    <!-- image -->
                    <div class="productImage">
                      <img
                        :src="product.image_url"
                        style="width: 155px; height: 155px"
                      />
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
                          <span  class="d-block">{{
                            product.price
                          }}</span
                          ><!---->
                        </p>
                        <!-- Nut + -->
                        
                        
                        <Card_User style="z-index : 999" 
                          :image_url="product.image_url"
                          :name="product.name"
                          :description="product.description"
                          :price="product.price"> 
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
import axios  from "axios";
// /* global axios */
export default {
  name: "productListing",
  components:{
    Card_User: () => import("@/components/userComponents/Card_User"),
  },
  data() {
    return {
      dialog:false,
      category_type: 1,
      categories: [],
      products: [],
    };
  },
  created() {
    this.getCategories();
    this.getProducts();
    console.log("Start\n");
    console.log(this.categories);
    console.log(this.products)
    console.log("END\n");
  },
  methods: {
    getCategories() {
      axios
        .post("http://127.0.0.1:8000/api/admin/category/indexByParentId", 
        {
          parent_id: 0
        })
        .then((response) => {
          console.log("RES:\n")
          console.log(response);
          console.log("END RES\n")
          this.categories = response.data.Categories;
        })
        .catch((error) => {
          console.log("ERR")
          console.log(error.response);
        });
    },
    getProducts() {
      axios
      .post("http://127.0.0.1:8000/api/admin/product/indexByCategoryId", 
      {
        category_id: this.category_type
      }
      )
      .then((response) => {
        this.products = response.data.products;
        // console.log(response);
      })
      .catch((error) => {
        console.log("Start\n");
        console.log(error.response)
        console.log("END\n");
      });
    }
  },

  watch: {
    category_type() {
      this.getProducts();
    }
  }
};
</script>


<style scoped>
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