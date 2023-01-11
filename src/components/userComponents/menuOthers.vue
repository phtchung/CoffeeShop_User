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
      <v-col
          cols="12"
          xs="12"
          sm="6"
          md="3"
          lg="3"
          v-for="item in items"
          :key="item.name"
          style="margin: 24px 0"
      >
        <Item_User
            :image_url="item.image_url"
            :name="item.name"
            :description="item.description"
            :price="item.price"
        />
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
      items: JSON.parse(localStorage.getItem("items"))
    };
  },

  components: {
    Item_User: () => import("@/components/Item_User"),
    mainHeader: () => import("@/layouts/Header/mainHeader")
    // BtnNew: () => import("@/components/vuetifyComponents/BtnNew")
  },
  created(){
    // this.category_id = this.$route.params.category_id;
    if(this.$route.params.path_name == "ca-phe"){
      this.category_id = 1
    }
    else if(this.$route.params.path_name == "tra"){
      this.category_id = 2
    }
    this.$watch(
        () => this.$route.params,
        (toParams, previousParams) => {
          console.log(toParams);
          console.log(previousParams);
          if(this.$route.params.path_name == "ca-phe"){
            this.category_id = 1
          }
          else if(this.$route.params.path_name == "tra"){
            this.category_id = 2
          }
          // this.category_id = this.$route.params.category_id;
          // react to route changes...
        }
    ),
    this.getItems();
    this.items =  JSON.parse(localStorage.getItem("items"))
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
      this.category_id = this.$route.params.category_id;
      // console.log(this.category_id);
      axios
          .post("http://127.0.0.1:8000/api/admin/product/indexByCategoryId",
              {
                category_id: this.category_id
              }
          )
          .then((response) => {
            this.items = response.data.products;
            // console.log(response);
          })
          .catch((error) => {
            console.log("Start\n");
            console.log(error.response)
            console.log("END\n");
          });
      localStorage.setItem("items", JSON.stringify(this.items))
    }
  },
  mounted(){
    this.items =  JSON.parse(localStorage.getItem("items"))
  }
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