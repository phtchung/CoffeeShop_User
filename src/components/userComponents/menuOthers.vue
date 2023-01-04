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
      category_id: this.$route.params.category_id,
      menuItems: [
        {
          name: "Tất cả",
        },
        {
          name: "Cafe",
          children: [
            {
              name: "Cafe Việt Nam",
              file: "dots",
            },
            {
              name: "Cafe máy",
              file: "dots",
            },
            {
              name: "Cold Brew",
              file: "dots",
            },
          ],
        },
        {
          name: "CloudFee",
          children: [
            {
              name: "CloudFee",
              file: "dots",
            },
          ],
        },
        {
          name: "Trà",
          children: [
            {
              name: "Trà trái cây",
              file: "dots",
            },
            {
              name: "Trà sữa Machiato",
              file: "dots",
            },
          ],
        },
      ],
      items: []
      // items: [
      //   {
      //     image_url:
      //         "https://product.hstatic.net/1000075078/product/1639377770_cfsua-nong_016e05cb3a334141898e5677fec34784_large.jpg",
      //     name: "Cà Phê Sữa Nóng",
      //     description: "Oishii1",
      //     price: "19891",
      //   },
      //   {
      //     image_url:
      //         "https://product.hstatic.net/1000075078/product/1665655345_tch-sua-da_e0737a64b29e452f9c7eadb23300821a_large.jpg",
      //     name: "The Coffee House Sữa Đá",
      //     description: "Oishii2",
      //     price: "19892",
      //   },
      //   {
      //     image_url:
      //         "https://product.hstatic.net/1000075078/product/1669736835_ca-phe-sua-da_966117a7eb0e42d398937f44cc63aca9_large.png",
      //     name: "Cà Phê Sữa Đá",
      //     description: "Oishii3",
      //     price: "19893",
      //   },
      //   {
      //     image_url:
      //         "https://product.hstatic.net/1000075078/product/1639377904_bac-siu_3df6607180474c2c81dfe213010be685_large.jpg",
      //     name: "Bạc Sỉu",
      //     description: "Oishii4",
      //     price: "19894",
      //   },
      //   {
      //     image_url: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
      //     name: "Tra dao 5",
      //     description: "Oishii5",
      //     price: "19895",
      //   },
      //   {
      //     image_url: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
      //     name: "Tra dao 6",
      //     description: "Oishii6",
      //     price: "19896",
      //   },
      //   {
      //     image_url: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
      //     name: "Tra dao 7",
      //     description: "Oishii7",
      //     price: "19897",
      //   },
      //   {
      //     image_url: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
      //     name: "Tra dao 8",
      //     description: "Oishii8",
      //     price: "19898",
      //   },
      //   {
      //     image_url: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
      //     name: "Tra dao 9",
      //     description: "Oishii9",
      //     price: "19899",
      //   },
      //   {
      //     image_url: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
      //     name: "Tra dao 0",
      //     description: "Oishii0",
      //     price: "19890",
      //   },
      // ],
    };
  },

  components: {
    Item_User: () => import("@/components/Item_User"),
    mainHeader: () => import("@/layouts/Header/mainHeader")
    // BtnNew: () => import("@/components/vuetifyComponents/BtnNew")
  },
  created(){
    // this.category_id = this.$route.params.category_id;
    this.$watch(
        () => this.$route.params,
        (toParams, previousParams) => {
          console.log(toParams);
          console.log(previousParams);
          this.category_id = this.$route.params.category_id;
          // react to route changes...
        }
    ),
        this.getItems();
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
    }
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