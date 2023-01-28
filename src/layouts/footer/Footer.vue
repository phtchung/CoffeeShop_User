<template>
    <v-footer  color="white" class="footerpart" inset>
      <div class="container" style="background-color: black">
        <v-row>
          <v-col cols="12" lg="3" md="3" sm="6" xs="6" class="col-xs-6">
              <h3 class=" foot_title" style="color: white">Giới thiệu</h3>
              <ul class="ma-0 pa-0 footer_content"  >
                <li>
                  <a href="#" title="Về chúng tôi ">Về Chúng Tôi</a>
                </li>
                <li>
                  <a href="#" title="Sản phẩm">Sản phầm</a>
                </li>
                <li>
                  <a href="#" title="Khuyến mại">Khuyến mại</a>
                </li>
                <li>
                  <a href="#" title="Chuyện cà phê">Chuyện cà phê</a>
                </li>
                <li>
                  <a href="#" title="Cửa hàng">Cửa Hàng</a>
                </li>
                <li>
                  <a href="#" title="Tuyển dụng">Tuyển dụng</a>
                </li>
              </ul>
          </v-col>

          <v-col cols="12" lg="3" md="3" sm="6" xs="6" class="col-xs-6">
            <h3 class=" foot_title">Điều khoản</h3>
            <ul class="ma-0 pa-0 footer_content" >
              <li>
                <a href="#" title="Điều khoản sử dụng">Điều khoản sử dụng</a>
              </li>
              <li>
                <a href="#" title="Chính sách bảo mật thông tin">Chính sách bảo mật thông tin</a>
              </li>
            </ul>
          </v-col>

          <v-col cols="12" lg="3" md="3" sm="6" xs="12">
            <div class="hotline_footer ">
            <p class="mb-6 " >
              <img src="https://file.hstatic.net/1000075078/file/phone_0a42df1c753c4fa0910108daa73fe2ef.png" alt="">
              Đặt hàng: 1800 6936
            </p>
            <p class="mb-6 " >
              <img src="https://file.hstatic.net/1000075078/file/map-pin-2-line_575ccb91b6f94a308d1bd507d4ae72a7.png" alt="">
              Liên hệ
            </p>
            </div>

            <div>
              <p class="adress_footer set_color">
                Tầng 3-4 Hub Building
                <br>
                195/10E Điện Biên Phủ, P.15 ,
                <br>
                Q.Bình Thạnh, TP.Hồ Chí Minh
              </p>
            </div>

          </v-col>

          <v-col cols="12" lg="3" md="3" sm="6" xs="12">
            <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FThe.Coffee.House.2014&tabs=timeline&width=270&height=130&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="270" height="130" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
            <div class="tch_social" >
              <ul>
                <li style="margin-right: 13px">
                  <a href="https://www.facebook.com/The.Coffee.House.2014/">
                    <img src="https://file.hstatic.net/1000075078/file/test_fd4e30831d14438f9d0f1fcf255dfadb.svg" alt="">
                  </a>
                </li>
              </ul>

              <ul>
                <li>
                  <a href=" https://www.instagram.com/thecoffeehousevn/">
                    <img src="https://file.hstatic.net/1000075078/file/test_db37bb3840ac45f3a0a3cf7aa8a57d9e.svg" alt="">
                  </a>
                </li>
              </ul>

            </div>
          </v-col>

        </v-row>
          <v-col cols="12" lg="12" md="12" sm="12" class="pa-0">
            <hr>
          </v-col>


          <div class="text-center">
            <v-dialog
                v-model="dialog"
                width=450
                style="border-radius: 8px;"
            >
              <template v-slot:activator="{ on, attrs }">

                <a  class="hotline_button" v-bind="attrs" v-on="on">
                  <img style="width: 30px;height: 30px;" src="https://file.hstatic.net/1000075078/file/customer-service-line_2x_e5acb85c9abd40a2a95f2bf1f7253f05.png" alt="" >
                </a>

              </template>
              <v-card>
                <div  class="hotline  lighten-2 text-center font-weight-thin" style="padding: 26px 0 22px 0;font-family: 'SF Pro Text', sans-serif;">
                  Gọi hỗ trợ 19006936
                </div>

                <div style="display: flex;justify-content: space-between">
                  <v-btn
                      color="orange"
                      text
                      @click="dialog = false"
                      style="padding-bottom: 28px;padding-top: 28px;align-items: center;right: -15%;width: 35%"
                      height="32px"
                      class="hotline_call"

                  >
                    Call
                  </v-btn>

                  <v-btn
                      color="black"
                      text
                      @click="dialog = false"
                      style="left: -15%;padding-bottom: 28px;padding-top: 28px;align-items: center;width: 35%"
                      height="32px"
                  >
                    Cancel
                  </v-btn>
                </div>
              </v-card>
            </v-dialog>
          </div>

        <v-col cols="12" lg="9" md="9" sm="9" class="ma-n3">
          <div class="footer_items">
          <ul>
            <li>Công ty cổ phần thương mại dịch vụ Trà Cà Phê VN</li>
            <li>Mã số DN: 0312867172 do sở kế hoạch và đầu tư tp. HCM cấp ngày 23/07/2014. Người đại diện: NGÔ NGUYÊN KHA</li>
            <li>Địa chỉ: 86-88 Cao Thắng, phường 04, quận 3, tp Hồ Chí Minh   Điện thoại: (028) 7107 8079   Email: hi@thecoffeehouse.vn</li>
            <li>© 2014-2022 Công ty cổ phần thương mại dịch vụ Trà Cà Phê VN mọi quyền bảo lưu</li>
          </ul>
          </div>
        </v-col>

      </div>
    </v-footer>
</template>
<script>
export default {
    name: "Footer",
  data () {
    return {
      dialog: false,
    }
  },
}
</script >
<style lang="scss" scoped>
  .v-application .footerpart{
    border-top:1px solid rgba(0,0,0,0.1)!important;
    background-color: black !important;
  }
  .footerpart{
    margin: 41px 0px -8px 0px;
    font-family: 'SF Pro Text', sans-serif;
    background-color: black;

  }
  .container{
    margin-right: auto;
    margin-left: auto;
    padding: 34px 15px 54px 15px;
  }
  .hotline_button{
    width: 60px;
    height: 60px;
    position: fixed;
    right: 24px;
    bottom: 100px;
    background: #E57905;
    border-radius: 50%;
    text-align: center;
    line-height: 76px;
    box-shadow: 0 8px 36px rgb(0 0 0 / 17%);
    z-index: 10;
    padding: 0 !important;
  }
  .footerpart a{
    text-decoration: none;
    color: black;
    padding-top: 34px;
    padding-bottom: 54px;
  }
  .footer_content{
    list-style: none;
    font-size: 12px;
    line-height: 20px;
  }
  .footer_content li{
    margin-bottom: 8px;
    font-weight: 500;
  }
  .footer_content li a{
    color: white;
  }
  .foot_title{
    font-weight: 600;
    font-size: 14px;
    color: white;
    margin-top: 0;
    margin-bottom: 16px;
  }

  .hotline_footer{
    font-size: 14px;
    line-height: 24px;
    font-weight: 600;
    background-color: black;
    color: white;
    font-family: 'SF Pro Text', sans-serif;
  }
  .hotline_footer p img {
    margin-right: 8px;
    width: 20px;
    height: 20px;
    margin-bottom: -8px;
  }
  .hotline::after{
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 42%;
    border-bottom:0.1px solid lightgrey ;

  }
  .hotline_call::after{
    content: "";
    position: absolute;
    right: 0;
    bottom: 0;
    top: 4%;
    border-right: 0.1px solid lightgrey;
  }

  .img {
    border: none;
    max-width: 100%;
  }
  .adress_footer{
    font-size: 12px;
    line-height: 20px;
  }
  hr{
    margin-top: 20px;
    margin-bottom: 20px;
    border: 0;
    border-top: 1px solid #eee;

  }
  .footer_items ul {
    font-size: 12px;
    color: white;
    line-height: 18px;
    font-family: 'Lato', sans-serif;
    list-style: none;
    padding: 0;
  }

  .thecfh_page{
    background-image: url("https://scontent.fhan5-6.fna.fbcdn.net/v/t39.30808-6/319616673_3421434561463879_8841387469300708973_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=e3f864&_nc_ohc=D3XTU4D4UHkAX8Rkw78&_nc_ht=scontent.fhan5-6.fna&oh=00_AfAKKO5elEe6QiOkSRbSX6aSOdyBQ4ndiB52hb_cVKm5gw&oe=63A5C5F9");
    overflow: hidden;
    background-color: #cccccc;
  }
  .part1_left img{
    border: 2px solid #fff;
    margin-right: 4px;
    padding: 0;
  }
  .thecfh_page{
    position: relative;
    display: flex;

  }
  .part1_right a{
    max-width: 170px;
    font-size: 18px;
    font-weight: 500;
    line-height: 1.358;
    margin-bottom: -5px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: white;
  }

  .tch_social {
    display: flex;
    padding: 0;
    margin-top: 18px;
  }
  .tch_social ul{
    list-style: none;
    padding: 0;
  }
  .tch_social img{
    border: none;
    max-width: 100%;
    height: auto;
  }

  .set_color{
    color: white;
  }
  @media screen and (max-width: 46.1875em) {
    .col-xs-6{
      flex: 0 0 50%;
      max-width: 50%;
    }
  }
</style>