<template class="mt-0  "  >
  <v-container
      fluid
      class="down-top-padding "
      style="margin-top: -66px; padding: 0;"

  >
    <mainHeader > </mainHeader>

    <div>
      <template>
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
    <!--    <v-tabs fixed-tabs >-->
    <!--      <v-tab v-for="menuItem in menuItems" :key="menuItem.name" @click="menuType=menuItem.name">-->
    <!--        {{menuItem.name}}-->
    <!--      </v-tab>-->
    <!--    </v-tabs>-->

    <!--    <productInStore>-->
    <!--    </productInStore>-->

    <div style="width: 1200px; margin: 20px auto; padding: 0 0 32px">
      <v-row style="padding: 12px">
        <!--     ảnh to mainpage , chiếm 1/2 width -->
        <v-col
            cols="12"
            sm="12"
            md="6"
            lg="6"
            style="padding: 0 26px; margin: 12px 0"
        >
          <v-row>
            <a
                href="#"
                style="
                border-radius: 10px;
                overflow: hidden;
                display: block;
                width: 100%;
                position: relative;
                -webkit-box-shadow: 0 0 13px 0 #00000040;
                box-shadow: 0 0 13px 0 #00000040;
                padding: 0 !important;
              "
            >
              <img
                  src="https://file.hstatic.net/1000075078/file/banner_app_59792ee4e6074b33aca7f140433e9292.jpg"
                  alt=""
                  style="width: 100%; height: 100%"
              />
            </a>
          </v-row>
        </v-col>

        <v-col
            cols="12"
            md="6"
            sm="12"
            lg="6"
            style="font-size: 16px; display: flex"
        >
          <v-row>
            <v-col
                cols="12"
                sm="6"
                md="6"
                lg="6"
                style="padding: 0; margin: 12px 0"
                v-for="item in items.slice(0, 2)"
                :key="item.id"
                @click="handleProduct(item.id, item.name)"
            >
              <Item_User
                :image_url="item.image_url"
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
            style="padding: 0; margin: 36px 0 36px"
            v-for="item in items.slice(2)"
            :key="item.id"
            @click="handleProduct(item.id, item.name)"
        >
          <Item_User
            :image_url="item.image_url"
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
          <img
              src="https://file.hstatic.net/1000075078/file/cloudtea_1_5dc49fd17ba04030993d2f797dc570f2.png"
              alt=""
          />
        </v-col>

        <v-col cols="12" md="6" lg="6" sm="12">
          <div>
            <img
                src="https://file.hstatic.net/1000075078/file/cloudtea_tagline_1_c39d8fd0d46b4144be9cebd05e318796.png"
                alt=""
            />
          </div>

          <div class="text_mainpage">
            Vừa êm mượt dịu dàng, vừa bùng nổ nồng nàn, BST Trà Sữa CloudTea
            Hương Vị Nụ Hôn Đầu mang đến trải nghiệm đầy mới mẻ. Chạm môi là
            foam béo mịn bồng bềnh, càng thêm đậm đà nhờ topping vụn bánh quy
            phô mai hoặc bột ca cao thơm lừng. Kế tiếp là tầng trà sữa sóng
            sánh, đậm hương, rõ vị. Và tầng thạch nguyên chất, dai giòn giúp giữ
            trọn vị trà sữa đến ngụm cuối cùng. 3 tầng hòa quyện, nhấp một ngụm
            là ghiền, nhớ mãi không thôi.
          </div>

          <v-col cols="12" sm="6" md="6" lg="6" class="pa-0">
            <a
                href="#"
                class="my-2"
                style="text-decoration: none; padding: 0; border-radius: 8px"
            >
              <v-btn x-large color="#B3DDCA" dark width="100%">
                Thử ngay
              </v-btn>
            </a>
          </v-col>
        </v-col>
      </v-row>
    </div>

    <div class="advertisement1">
      <v-row>
        <v-col
            cols="12"
            sm="12"
            md="5"
            lg="5"
            style="
            display: flex;
            flex-wrap: wrap;
            align-content: center;
            flex-direction: column;
            justify-content: center;
          "
        >
          <h3
              style="
              font-size: 28px;
              color: #000000d9;
              font-family: 'SF Pro Display', sans-serif;
              font-weight: 600;
              max-width: 75%;
            "
          >
            The Coffee House
            <br />
            The Grace Tower
          </h3>
          <p
              style="
              font-size: 16px;
              line-height: 24px;
              max-width: 75%;
              display: -webkit-box;
              height: 115px;
              /* -webkit-box-orient: vertical; */
              overflow: hidden;
              text-overflow: ellipsis;
            "
          >
            Nhà mới Quận 7 toạ lạc tại The Grace Tower, thuộc khu phố nhộn
            nhiệp, sầm uất. Cửa hàng nổi bật với không gian nhỏ nhắn nhưng lại
            có nhiều nguồn sáng tự nhiên, mang đến sự hứng khởi, năng động
          </p>
          <v-hover v-slot="{ hover }">
            <v-btn :color="hover ? 'red' : 'blue'" dark large width="50%">
              Tìm hiểu thêm
            </v-btn>
          </v-hover>
        </v-col>
        <v-col cols="12" sm="12" md="7" lg="7">
          <template>
            <v-carousel cycle hide-delimiter-background show-arrows>
              <v-carousel-item v-for="(url, i) in urls" :key="i">
                <div style="position: relative">
                  <a href="#">
                    <img :src="url" alt="" style="width: 100%" />
                  </a>
                </div>
              </v-carousel-item>
            </v-carousel>
          </template>
        </v-col>
      </v-row>
    </div>

    <section class="blog_home">
      <div class="container_blog">
        <div class="clear_fix">
          <h2 class="blog_home_title">
            <img
                src="https://file.hstatic.net/1000075078/file/coffee-2_2_92db24958ff14ac4b4249b3256f7a415.png" alt=""
            />
            Chuyện Nhà
          </h2>
        </div>
        <h3 class="blog_home_blogtitle">
          <a href="" style="text-decoration: none; color: #191919">
            Coffeeholic
          </a>
        </h3>
        <div class="blog_lists" style="display: flex">
          <v-row>
            <v-col
                cols="12"
                md="4"
                lg="4"
                sm="12"
                class="blog_item"
                style="display: flex; flex-direction: column"
            >
              <img
                  class="article_item_image"
                  style="
                  background-size: cover;
                  background-position: center center;
                  background-repeat: no-repeat;
                "
                  src="https://file.hstatic.net/1000075078/article/1__1__88407c0ec0b84592ade162dcc6860bed_grande.jpg"
                  alt=""
                  title="CÀ PHÊ SỮA ESPRESSO THE COFFEE HOUSE - BẬT LON BẬT VỊ NGON"
              />
              <div class="article_item_info">
                <div class="article_published_at">
                  <span>01/01/2023</span>
                </div>
                <h3>
                  <a
                      href=""
                      title="CÀ PHÊ SỮA ESPRESSO THE COFFEE HOUSE - BẬT LON BẬT VỊ NGON"
                  >CÀ PHÊ SỮA ESPRESSO THE COFFEE HOUSE - BẬT LON BẬT VỊ
                    NGON</a
                  >
                </h3>
                <p style="font-size: 14px; line-height: 24px">
                  Cà phê sữa Espresso là một lon cà phê sữa giải khát với hương
                  vị cà phê đậm đà từ 100% cà phê Robusta cùng vị sữa béo nhẹ
                  cho bạn một trải nghiệm...
                </p>
              </div>
            </v-col>
            <v-col
                cols="12"
                md="4"
                lg="4"
                sm="12"
                class="blog_item"
                style="display: flex; flex-direction: column"
            >
              <img
                  class="article_item_image"
                  src="https://file.hstatic.net/1000075078/article/1__1__88407c0ec0b84592ade162dcc6860bed_grande.jpg"
                  alt=""
                  title="CÀ PHÊ SỮA ESPRESSO THE COFFEE HOUSE - BẬT LON BẬT VỊ NGON"
              />
              <div class="article_item_info">
                <div class="article_published_at">
                  <span>01/01/2023</span>
                </div>
                <h3>
                  <a
                      href=""
                      title="CÀ PHÊ SỮA ESPRESSO THE COFFEE HOUSE - BẬT LON BẬT VỊ NGON"
                  >CÀ PHÊ SỮA ESPRESSO THE COFFEE HOUSE - BẬT LON BẬT VỊ
                    NGON</a
                  >
                </h3>
                <p style="font-size: 14px; line-height: 24px">
                  Cà phê sữa Espresso là một lon cà phê sữa giải khát với hương
                  vị cà phê đậm đà từ 100% cà phê Robusta cùng vị sữa béo nhẹ
                  cho bạn một trải nghiệm...
                </p>
              </div>
            </v-col>
            <v-col
                cols="12"
                md="4"
                lg="4"
                sm="12"
                class="blog_item"
                style="display: flex; flex-direction: column"
            >
              <img
                  class="article_item_image"
                  src="https://file.hstatic.net/1000075078/article/1__1__88407c0ec0b84592ade162dcc6860bed_grande.jpg"
                  alt=""
                  title="CÀ PHÊ SỮA ESPRESSO THE COFFEE HOUSE - BẬT LON BẬT VỊ NGON"
              />
              <div class="article_item_info">
                <div class="article_published_at">
                  <span>01/01/2023</span>
                </div>
                <h3>
                  <a
                      href=""
                      title="CÀ PHÊ SỮA ESPRESSO THE COFFEE HOUSE - BẬT LON BẬT VỊ NGON"
                  >CÀ PHÊ SỮA ESPRESSO THE COFFEE HOUSE - BẬT LON BẬT VỊ
                    NGON</a
                  >
                </h3>
                <p style="font-size: 14px; line-height: 24px">
                  Cà phê sữa Espresso là một lon cà phê sữa giải khát với hương
                  vị cà phê đậm đà từ 100% cà phê Robusta cùng vị sữa béo nhẹ
                  cho bạn một trải nghiệm...
                </p>
              </div>
            </v-col>
          </v-row>
        </div>
        <h3 class="blog_home_blogtitle">
          <a href="" style="text-decoration: none; color: #191919">
            Teaholic
          </a>
        </h3>
        <div class="blog_lists" style="display: flex">
          <v-row>
            <v-col
                cols="12"
                md="4"
                lg="4"
                sm="12"
                class="blog_item"
                style="display: flex; flex-direction: column"
            >
              <img
                  class="article_item_image"
                  style="
                  background-size: cover;
                  background-position: center center;
                  background-repeat: no-repeat;
                "
                  src="https://file.hstatic.net/1000075078/article/1__1__88407c0ec0b84592ade162dcc6860bed_grande.jpg"
                  alt=""
                  title="CÀ PHÊ SỮA ESPRESSO THE COFFEE HOUSE - BẬT LON BẬT VỊ NGON"
              />
              <div class="article_item_info">
                <div class="article_published_at">
                  <span>01/01/2023</span>
                </div>
                <h3>
                  <a
                      href=""
                      title="CÀ PHÊ SỮA ESPRESSO THE COFFEE HOUSE - BẬT LON BẬT VỊ NGON"
                  >CÀ PHÊ SỮA ESPRESSO THE COFFEE HOUSE - BẬT LON BẬT VỊ
                    NGON</a
                  >
                </h3>
                <p style="font-size: 14px; line-height: 24px">
                  Cà phê sữa Espresso là một lon cà phê sữa giải khát với hương
                  vị cà phê đậm đà từ 100% cà phê Robusta cùng vị sữa béo nhẹ
                  cho bạn một trải nghiệm...
                </p>
              </div>
            </v-col>
            <v-col
                cols="12"
                md="4"
                lg="4"
                sm="12"
                class="blog_item"
                style="display: flex; flex-direction: column"
            >
              <img
                  class="article_item_image"
                  src="https://file.hstatic.net/1000075078/article/1__1__88407c0ec0b84592ade162dcc6860bed_grande.jpg"
                  alt=""
                  title="CÀ PHÊ SỮA ESPRESSO THE COFFEE HOUSE - BẬT LON BẬT VỊ NGON"
              />
              <div class="article_item_info">
                <div class="article_published_at">
                  <span>01/01/2023</span>
                </div>
                <h3>
                  <a
                      href=""
                      title="CÀ PHÊ SỮA ESPRESSO THE COFFEE HOUSE - BẬT LON BẬT VỊ NGON"
                  >CÀ PHÊ SỮA ESPRESSO THE COFFEE HOUSE - BẬT LON BẬT VỊ
                    NGON</a
                  >
                </h3>
                <p style="font-size: 14px; line-height: 24px">
                  Cà phê sữa Espresso là một lon cà phê sữa giải khát với hương
                  vị cà phê đậm đà từ 100% cà phê Robusta cùng vị sữa béo nhẹ
                  cho bạn một trải nghiệm...
                </p>
              </div>
            </v-col>
            <v-col
                cols="12"
                md="4"
                lg="4"
                sm="12"
                class="blog_item"
                style="display: flex; flex-direction: column"
            >
              <img
                  class="article_item_image"
                  src="https://file.hstatic.net/1000075078/article/1__1__88407c0ec0b84592ade162dcc6860bed_grande.jpg"
                  alt=""
                  title="CÀ PHÊ SỮA ESPRESSO THE COFFEE HOUSE - BẬT LON BẬT VỊ NGON"
              />
              <div class="article_item_info">
                <div class="article_published_at">
                  <span>01/01/2023</span>
                </div>
                <h3>
                  <a
                      href=""
                      title="CÀ PHÊ SỮA ESPRESSO THE COFFEE HOUSE - BẬT LON BẬT VỊ NGON"
                  >CÀ PHÊ SỮA ESPRESSO THE COFFEE HOUSE - BẬT LON BẬT VỊ
                    NGON</a
                  >
                </h3>
                <p style="font-size: 14px; line-height: 24px">
                  Cà phê sữa Espresso là một lon cà phê sữa giải khát với hương
                  vị cà phê đậm đà từ 100% cà phê Robusta cùng vị sữa béo nhẹ
                  cho bạn một trải nghiệm...
                </p>
              </div>
            </v-col>
          </v-row>
        </div>

        <h3 class="blog_home_blogtitle">
          <a href="" style="text-decoration: none; color: #191919"> Blog </a>
        </h3>

        <div class="blog_lists" style="display: flex">
          <v-row>
            <v-col
                cols="12"
                md="4"
                lg="4"
                sm="12"
                class="blog_item"
                style="display: flex; flex-direction: column"
            >
              <img
                  class="article_item_image"
                  style="
                  background-size: cover;
                  background-position: center center;
                  background-repeat: no-repeat;
                "
                  src="https://file.hstatic.net/1000075078/article/1__1__88407c0ec0b84592ade162dcc6860bed_grande.jpg"
                  alt=""
                  title="CÀ PHÊ SỮA ESPRESSO THE COFFEE HOUSE - BẬT LON BẬT VỊ NGON"
              />
              <div class="article_item_info">
                <div class="article_published_at">
                  <span>01/01/2023</span>
                </div>
                <h3>
                  <a
                      href=""
                      title="CÀ PHÊ SỮA ESPRESSO THE COFFEE HOUSE - BẬT LON BẬT VỊ NGON"
                  >CÀ PHÊ SỮA ESPRESSO THE COFFEE HOUSE - BẬT LON BẬT VỊ
                    NGON</a
                  >
                </h3>
                <p style="font-size: 14px; line-height: 24px">
                  Cà phê sữa Espresso là một lon cà phê sữa giải khát với hương
                  vị cà phê đậm đà từ 100% cà phê Robusta cùng vị sữa béo nhẹ
                  cho bạn một trải nghiệm...
                </p>
              </div>
            </v-col>
            <v-col
                cols="12"
                md="4"
                lg="4"
                sm="12"
                class="blog_item"
                style="display: flex; flex-direction: column"
            >
              <img
                  class="article_item_image"
                  src="https://file.hstatic.net/1000075078/article/1__1__88407c0ec0b84592ade162dcc6860bed_grande.jpg"
                  alt=""
                  title="CÀ PHÊ SỮA ESPRESSO THE COFFEE HOUSE - BẬT LON BẬT VỊ NGON"
              />
              <div class="article_item_info">
                <div class="article_published_at">
                  <span>01/01/2023</span>
                </div>
                <h3>
                  <a
                      href=""
                      title="CÀ PHÊ SỮA ESPRESSO THE COFFEE HOUSE - BẬT LON BẬT VỊ NGON"
                  >CÀ PHÊ SỮA ESPRESSO THE COFFEE HOUSE - BẬT LON BẬT VỊ
                    NGON</a
                  >
                </h3>
                <p style="font-size: 14px; line-height: 24px">
                  Cà phê sữa Espresso là một lon cà phê sữa giải khát với hương
                  vị cà phê đậm đà từ 100% cà phê Robusta cùng vị sữa béo nhẹ
                  cho bạn một trải nghiệm...
                </p>
              </div>
            </v-col>
            <v-col
                cols="12"
                md="4"
                lg="4"
                sm="12"
                class="blog_item"
                style="display: flex; flex-direction: column"
            >
              <img
                  class="article_item_image"
                  src="https://file.hstatic.net/1000075078/article/1__1__88407c0ec0b84592ade162dcc6860bed_grande.jpg"
                  alt=""
                  title="CÀ PHÊ SỮA ESPRESSO THE COFFEE HOUSE - BẬT LON BẬT VỊ NGON"
              />
              <div class="article_item_info">
                <div class="article_published_at">
                  <span>01/01/2023</span>
                </div>
                <h3>
                  <a
                      href=""
                      title="CÀ PHÊ SỮA ESPRESSO THE COFFEE HOUSE - BẬT LON BẬT VỊ NGON"
                  >CÀ PHÊ SỮA ESPRESSO THE COFFEE HOUSE - BẬT LON BẬT VỊ
                    NGON</a
                  >
                </h3>
                <p style="font-size: 14px; line-height: 24px">
                  Cà phê sữa Espresso là một lon cà phê sữa giải khát với hương
                  vị cà phê đậm đà từ 100% cà phê Robusta cùng vị sữa béo nhẹ
                  cho bạn một trải nghiệm...
                </p>
              </div>
            </v-col>
          </v-row>
        </div>
      </div>
    </section>


  </v-container>
</template>
<script>


// const $ = document.querySelector.bind(document);
// const header = $('#my')

// const header = document.getElementById('my')
// console.log(header)
export default {
  name: "Mainpage",

  components: {
    Item_User: () => import("@/components/Item_User"),
    mainHeader: () => import("@/layouts/Header/mainHeader"),
    // Authentication_User: () => import("@/components/userComponents/Authentication_User"),
    // checkOut: () => import("@/view_user/pages_user/checkOut"),
    // Card_User: () => import("@/components/userComponents/Card_User"),
    // menuMenu: () => import('@/components/userComponents/menuMenu'),
    // menuMenuOthers: () => import('@/components/userComponents/menuOthers'),
    // productInStore:() => import("@/components/productInterface/productInStore"),
  },
  data: () => {
    return {
      menuType: "The Coffee House",
      product_id: "-1",
      product_name: "",
      activeHeader:false,
      dialog:0,

      urls_header: [
        "https://file.hstatic.net/1000075078/file/hiteaday_desktop_564c8568fc48441badd3a492cdd127d9.jpg",
        "https://file.hstatic.net/1000075078/file/daitiec_desktop_2cd63f8cf8454da3ade2c990b9415c8b.jpg",
      ],
      urls: [
        "https://file.hstatic.net/1000075078/file/_kh_9431__1__e19a7a49963245b39b280271da3cd9fb_master.jpg",
        "https://file.hstatic.net/1000075078/file/_kh_9308_71dd5f99cfe4431a82bbf9dae99f71ea_master.jpg",
        "https://file.hstatic.net/1000075078/file/_kh_9302_5a346ad2dafa4f02afd24481f5ca9a1e_master.jpg",
        "https://file.hstatic.net/1000075078/file/_kh_9290_df84171506554f16b8e55bff9a6c0dd1_master.jpg",
      ],

      items: [
        {
          id: 1,
          image_url:
              "https://product.hstatic.net/1000075078/product/1639377770_cfsua-nong_016e05cb3a334141898e5677fec34784_large.jpg",
          name: "Cà Phê 1",
          description: "Oishii1",
          price: "34000",
        },
        {
          id: 2,
          image_url:
              "https://product.hstatic.net/1000075078/product/1665655345_tch-sua-da_e0737a64b29e452f9c7eadb23300821a_large.jpg",
          name: "Cà Phê 2",
          description: "Oishii2",
          price: "39000",
        },
        {
          id: 3,
          image_url:
              "https://product.hstatic.net/1000075078/product/1669736835_ca-phe-sua-da_966117a7eb0e42d398937f44cc63aca9_large.png",
          name: "Cloudtea1",
          description: "Oishii3",
          price: "19893",
        },
        {
          id: 4,
          image_url:
              "https://product.hstatic.net/1000075078/product/1639377904_bac-siu_3df6607180474c2c81dfe213010be685_large.jpg",
          name: "Cloudtea2",
          description: "Oishii4",
          price: "19894",
        },
        {
          id: 5,
          image_url: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
          name: "Cloudtea3",
          description: "Oishii5",
          price: "19895",
        },
        {
          id: 6,
          image_url: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
          name: "Cà phê Cao nguyên",
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
    };
  },

  computed: {
    product_name_convert_computed(){
      return this.removeVietnameseTones(this.product_name).replaceAll(' ', '-').toLowerCase()
    }
  },

  methods: {
    handleProduct(product_id, product_name) {
      this.product_id = product_id;
      this.product_name = product_name;
      // console.log(this.product_name_convert),
      this.$router.push({
        path: `/${this.product_name_convert_computed}`,
        name: "item",
        params: {product_id: `${this.product_id}`, product_name_convert: `${this.product_name_convert_computed}`},
      });
    },
    removeVietnameseTones(str) {
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,"a"); 
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e"); 
    str = str.replace(/ì|í|ị|ỉ|ĩ/g,"i"); 
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,"o"); 
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u"); 
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y"); 
    str = str.replace(/đ/g,"d");
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
}
  },
}
</script>

<style scoped>
.text_mainpage {
  font-size: 16px;
  line-height: 24px;
  color: rgba(0, 0, 0, 0.85);
  margin-bottom: 16px;
}

.advertisement {
  width: 1200px;
  margin: 36px auto;
}
.advertisement1 {
  padding-left: 63px;
}
.blog_home {
  background: #fff7e6;
  padding-bottom: 11%;
  margin: 7rem -12px -52px;
}
.container_blog {
  margin-left: auto;
  margin-right: auto;
  width: 1200px;
}
.blog_home_title {
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "SF Pro Display", sans-serif;
  font-size: 28px;
  padding-top: 40px;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  line-height: 1.4;
  color: #000;
  font-weight: 600;
  font-family: "SF Pro Display", sans-serif;
}
.blog_home_blogtitle {
  font-size: 24px;
  margin: 24px 0;
  padding-left: 12px;
  border-left: 4px solid #e57905;
}
.article_item_info {
  padding: 16px 0;
  background: #fff7e6 50%;
}

.article_published_at {
  color: #00000099;
}

a {
  text-decoration: none;
  color: #191919;
}
.article_item_image {
  position: relative;
  display: block;
  overflow: hidden;
  border-radius: 8px;
}
.article_published_at span {
  font-family: "SF Pro Text", sans-serif;
  line-height: 1.42857143;
  font-weight: 400;
  font-size: 14px;
}
.blog_item .article_item_info h3 {
  font-size: 18px;
  margin: 8px 0;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  display: -webkit-box;
  height: 25px;
}

/*::-webkit-scrollbar {*/
/*  -webkit-appearance: none;*/
/*  width: 7px;*/
/*}*/
/*::-webkit-scrollbar-thumb {*/
/*  border-radius: 4px;*/
/*  background-color: rgba(0,0,0,.5);*/
/*  -webkit-box-shadow: 0 0 1px rgba(255,255,255,.5);*/
/*}*/

</style>

<style>
:root {
  --scrollbar-width: 12px;
  --scrollbar-default: 234 236 240;
  --scrollbar-active: 208 213 221;
  --scrollbar-hover: 152 162 179;
}
::-webkit-scrollbar {
  width: var(--scrollbar-width);
}
::-webkit-scrollbar-track {
  background-color: transparent;
}
::-webkit-scrollbar-thumb {
  background-color: rgb(var(--scrollbar-default));
  border-radius: var(--scrollbar-width);
  border: 3px solid transparent;
  background-clip: content-box;
}
::-webkit-scrollbar-thumb:hover {
  background-color: rgb(var(--scrollbar-hover));
}
::-webkit-scrollbar-thumb:active {
  background-color: rgb(var(--scrollbar-active));
}
</style>