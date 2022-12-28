<template>
  <v-container>
    <!-- <v-row>
      <v-col cols="12" sm="12" md="6" lg="3" v-for="item in items" :key="item.name">
          <Item :imageURL="item.imageURL" :name="item.name" :description="item.description" :price="item.price"/>
      </v-col>
  </v-row> -->

    <v-row>
      <v-col cols="12" md="4" lg="3" style="margin: 24px 0">
        <v-treeview
            v-model="tree"
            :open="initiallyOpen"
            :items="menuItems"
            activatable
            item-key="name"
            open-on-click
            transition
            @input = "categoryType = items.id"
        >
          <template v-slot:prepend="{ item, open }">
            <v-icon v-if="!item.file">
              {{ open ? "mdi-coffee-to-go-outline" : "" }}
            </v-icon>
            <v-icon v-else>
              {{ files[item.file] }}
            </v-icon>

          </template>
        </v-treeview>
      </v-col>

      <v-col cols="12" sm="12" md="8" lg="9" style="margin: 24px 0">
        <v-row class="menu_bar">
          <v-col
              cols="12"
              sm="12"
              md="6"
              lg="4"
              v-for="item in items"
              :key="item.name"
          >
            <!-- <v-card class="mx-auto" max-width="344" color="transparent">
          <v-card-actions>
            <BtnNew>
            </BtnNew>
          </v-card-actions>
        </v-card> -->
            <Item
                :imageURL="item.imageURL"
                :name="item.name"
                :description="item.description"
                :price="item.price"
            />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "menuCategory",
  props: {
    menuType: String,
  },

  //  set up data base on menuType from backend
  // this data below is manually set up, neet to get from backend when have a api
  data() {
    return {
      categoryType: 1,
      initiallyOpen: ["public"],
      tree: [],
      files: {
        dots: "mdi-circle-small",
      },
      menuItems: [
        {
          name: "Tất cả",
          id: '1',
        },
        {
          name: "Cafe",
          id : '2',
          children: [
            {
              name: "Cafe Việt Nam",
              file: "dots",
              id :'3',
            },
            {
              name: "Cafe máy",
              file: "dots",
              id :'4',
            },
            {
              name: "Cold Brew",
              file: "dots",
              id :'5',
            },
          ],
        },
        {
          name: "CloudFee",
          id :'6',
          children: [
            {
              name: "CloudFee",
              file: "dots",
              id:'7',
            },
          ],
        },
        {
          name: "Trà",
          id:'8',
          children: [
            {
              name: "Trà trái cây",
              file: "dots",
              id:'9',
            },
            {
              name: "Trà sữa Machiato",
              file: "dots",
              id:'10',
            },
          ],
        },
      ],
      items: [
        {
          imageURL:
              "https://product.hstatic.net/1000075078/product/1639377770_cfsua-nong_016e05cb3a334141898e5677fec34784_large.jpg",
          name: "Cà Phê Sữa Nóng",
          description: "Oishii1",
          price: "19891",
        },
        {
          imageURL:
              "https://product.hstatic.net/1000075078/product/1665655345_tch-sua-da_e0737a64b29e452f9c7eadb23300821a_large.jpg",
          name: "The Coffee House Sữa Đá",
          description: "Oishii2",
          price: "19892",
        },
        {
          imageURL:
              "https://product.hstatic.net/1000075078/product/1669736835_ca-phe-sua-da_966117a7eb0e42d398937f44cc63aca9_large.png",
          name: "Cà Phê Sữa Đá",
          description: "Oishii3",
          price: "19893",
        },
        {
          imageURL:
              "https://product.hstatic.net/1000075078/product/1639377904_bac-siu_3df6607180474c2c81dfe213010be685_large.jpg",
          name: "Bạc Sỉu",
          description: "Oishii4",
          price: "19894",
        },
        {
          imageURL: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
          name: "Tra dao 5",
          description: "Oishii5",
          price: "19895",
        },
        {
          imageURL: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
          name: "Tra dao 6",
          description: "Oishii6",
          price: "19896",
        },
        {
          imageURL: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
          name: "Tra dao 7",
          description: "Oishii7",
          price: "19897",
        },
        {
          imageURL: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
          name: "Tra dao 8",
          description: "Oishii8",
          price: "19898",
        },
        {
          imageURL: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
          name: "Tra dao 9",
          description: "Oishii9",
          price: "19899",
        },
        {
          imageURL: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
          name: "Tra dao 0",
          description: "Oishii0",
          price: "19890",
        },
      ],
    };
  },
  components: {
    Item: () => import("@/components/Item"),
    // BtnNew: () => import("@/components/vuetifyComponents/BtnNew")
  },

};
</script>

<style>
.menu_bar::after {
  content: "";
  position: absolute;
  width: 2px;
  top: 12px;
  background: #00000026;
}
</style>