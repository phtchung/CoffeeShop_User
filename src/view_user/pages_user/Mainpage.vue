<template class="mt-0  "  >

  <v-container fluid class="down-top-padding " style="margin-top: -66px;padding: 0" >
    <mainHeader>
    </mainHeader>
    <div>
    <template>
      <v-carousel
          cycle
          hide-delimiter-background
          show-arrows
      >
        <v-carousel-item
            v-for="(url_header, i) in urls_header"
            :key="i"
        >
          <div >
            <a href="#" >
              <img :src= url_header alt="" style="width: 100%;">
            </a>
          </div>
        </v-carousel-item>
      </v-carousel>
    </template>
    </div>
<!--    <v-tabs fixed-tabs >-->
<!--      <v-tab v-for="menuItem in menuItems" :key="menuItem.name" @click="menuType=menuItem.name">-->
<!--        {{menuItem.name}}-->
<!--      </v-tab>-->
<!--    </v-tabs>-->

<!--    <productInStore>-->
<!--    </productInStore>-->
    <div  style="width: 1200px;margin: 20px auto;padding: 0 0 32px;">
      <v-row style="padding: 12px">
        <!--     ảnh to mainpage , chiếm 1/2 width -->
          <v-col
              cols="12"
              sm="12"
              md="6"
              lg="6"
              style="padding: 0 26px;margin: 12px 0"
          >
            <v-row>
            <a href="#" style=" border-radius: 10px;
                                overflow: hidden;
                                display: block;
                                width: 100%;
                                position: relative;
                                -webkit-box-shadow: 0 0 13px 0 #00000040;
                                box-shadow: 0 0 13px 0 #00000040;
                                padding: 0 !important;">
              <img src="https://file.hstatic.net/1000075078/file/banner_app_59792ee4e6074b33aca7f140433e9292.jpg" alt=""
              style="width: 100%; height: 100%"
              >
            </a>
            </v-row>
          </v-col>



        <v-col cols="12" md="6" sm="12" lg="6" style="font-size: 16px;display: flex">
          <v-row>
            <v-col
                cols="12"
                sm="6"
                md="6"
                lg="6"
                style="padding: 0;margin: 12px 0"
                v-for="item in items.slice(0,2)"
                :key="item.name"
            >
              <Item_User
                  :imageURL="item.imageURL"
                  :name="item.name"
                  :description="item.description"
                  :price="item.price"
              />
            </v-col>
          </v-row>
        </v-col>

        <v-col
            cols="12"
            sm="6"
            md="3"
            lg="3"
            style="padding: 0;margin: 36px 0 36px"
            v-for="item in items.slice(2)"
            :key="item.name"
        >
          <Item_User
              :imageURL="item.imageURL"
              :name="item.name"
              :description="item.description"
              :price="item.price"
          />
        </v-col>
      </v-row>
    </div>

<!--    <div v-else-if="menuType === 'Menu'">-->
<!--      <menuMenu></menuMenu>-->
<!--    </div>-->
<!--    <div v-else-if="menuType === 'Trà'">-->
<!--      <menuMenuOthers></menuMenuOthers>-->
<!--    </div>-->
<!--    <div v-if="menuType === 'Cà phê'">-->
<!--      <menuMenuOthers></menuMenuOthers>-->
<!--    </div>-->
    <div class="advertisement">
      <v-row>
        <v-col cols="12" md="6" lg="6" sm="12">
          <img src="https://file.hstatic.net/1000075078/file/cloudtea_1_5dc49fd17ba04030993d2f797dc570f2.png" alt="">
        </v-col>

        <v-col cols="12" md="6" lg="6" sm="12">
          <div>
            <img src="https://file.hstatic.net/1000075078/file/cloudtea_tagline_1_c39d8fd0d46b4144be9cebd05e318796.png" alt="">
          </div>

          <div class="text_mainpage">
            Vừa êm mượt dịu dàng, vừa bùng nổ nồng nàn, BST Trà Sữa CloudTea Hương Vị Nụ Hôn Đầu mang đến trải nghiệm đầy mới mẻ.
            Chạm môi là foam béo mịn bồng bềnh, càng thêm đậm đà nhờ topping vụn bánh quy phô mai hoặc bột ca cao thơm lừng.
            Kế tiếp là tầng trà sữa sóng sánh, đậm hương, rõ vị. Và tầng thạch nguyên chất, dai giòn giúp giữ trọn vị trà sữa đến
            ngụm cuối cùng. 3 tầng hòa quyện, nhấp một ngụm là ghiền, nhớ mãi không thôi.
          </div>

          <v-col
              cols="12"
              sm="6" md="6" lg="6" class="pa-0">
            <a href="#"  class="my-2" style="text-decoration: none;padding: 0;border-radius: 8px" >
              <v-btn
                  x-large
                  color="#B3DDCA"
                  dark
                  width="100%"
              >
                Thử ngay
              </v-btn>
            </a>
          </v-col>


        </v-col>
      </v-row>
    </div>

    <div class="advertisement1" >
      <v-row>
        <v-col cols="12" sm="12" md="5" lg="5" style="display:flex;flex-wrap: wrap;
                                                                  align-content: center;
                                                                  flex-direction: column;
                                                                  justify-content: center;
" >
          <h3 style="    font-size: 28px;
                        color: #000000D9;
                        font-family: 'SF Pro Display', sans-serif;
                        font-weight: 600;
                         max-width: 75%;">
            The Coffee House
            <br>
            The Grace Tower
          </h3>
          <p style="    font-size: 16px;
                        line-height: 24px;
                        max-width: 75%;
                        display: -webkit-box;
                        height: 115px;
                        /* -webkit-box-orient: vertical; */
                        overflow: hidden;
                        text-overflow: ellipsis;">
            Nhà mới Quận 7 toạ lạc tại The Grace Tower, thuộc khu phố nhộn nhiệp, sầm uất. Cửa hàng nổi bật với không gian nhỏ nhắn nhưng lại có nhiều nguồn sáng tự nhiên, mang đến sự hứng khởi, năng động
          </p>
          <v-hover v-slot="{ hover }">
            <v-btn
                :color=" hover ? 'red' : 'blue'"
                dark
                large
                width="50%"
            >
              Tìm hiểu thêm
            </v-btn>
          </v-hover>
        </v-col>
        <v-col cols="12" sm="12" md="7" lg="7">
            <template>
              <v-carousel
                  cycle

                  hide-delimiter-background
                  show-arrows
              >
                <v-carousel-item
                    v-for="(url, i) in urls"
                    :key="i"
                >
                  <div style="position: relative">
                    <a href="#" >
                      <img :src= url alt="" style="width: 100%;">
                    </a>
                  </div>
                </v-carousel-item>
              </v-carousel>
            </template>
          </v-col>

      </v-row>

    </div>



  </v-container>
</template>
<script>

export default {
  name: "Mainpage",

  components: {
    Item_User: () => import("@/components/Item_User"),
    mainHeader: () => import("@/layouts/Header/mainHeader")
    // menuMenu: () => import('@/components/userComponents/menuMenu'),
    // menuMenuOthers: () => import('@/components/userComponents/menuOthers'),
    // headerIntro: () => import('@/layouts/Header/headerIntro'),
    // mainHeader: () => import('@/layouts/Header/mainHeader'),
    // productInStore:() => import("@/components/productInterface/productInStore"),
  },
  data: () => {
    return{
      menuType: 'The Coffee House',
      urls_header: [
        'https://file.hstatic.net/1000075078/file/hiteaday_desktop_564c8568fc48441badd3a492cdd127d9.jpg',
        'https://file.hstatic.net/1000075078/file/daitiec_desktop_2cd63f8cf8454da3ade2c990b9415c8b.jpg',

      ],
      urls: [
        'https://file.hstatic.net/1000075078/file/_kh_9431__1__e19a7a49963245b39b280271da3cd9fb_master.jpg',
        'https://file.hstatic.net/1000075078/file/_kh_9308_71dd5f99cfe4431a82bbf9dae99f71ea_master.jpg',
        'https://file.hstatic.net/1000075078/file/_kh_9302_5a346ad2dafa4f02afd24481f5ca9a1e_master.jpg',
        'https://file.hstatic.net/1000075078/file/_kh_9290_df84171506554f16b8e55bff9a6c0dd1_master.jpg',
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
      ],
      // menuType: 'NULL',
      // menuItems: [
      //   {name: 'The Coffee House'},
      //   {name: 'Cà phê'},
      //   {name: 'Trà'},
      //   {name:'Menu'},
      // ],
    }
  },

};
</script>

<style scoped>
.text_mainpage{
  font-size: 16px;
  line-height: 24px;
  color: rgba(0, 0, 0, 0.85);
  margin-bottom: 16px;
}

.advertisement{
  width: 1200px;
  margin: 36px auto;

}
.advertisement1{
  padding-left: 63.125px;

}


</style>