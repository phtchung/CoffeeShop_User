<template>
  <div style="top: -206px">
    <v-row justify="center">
      <v-dialog
          transition="dialog-top-transition"
          max-width="26.25rem"
          content-class="my-custom-dialog"

      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
              color="primary"
              v-bind="attrs"
              v-on="on"
          >Login</v-btn>
        </template>
        <template >
          <div class="login_modal">
            <div class="img_login">
              <img src="https://order.thecoffeehouse.com/_nuxt/img/thumbnail-login-pop-up.e10d0dd.png" alt="">
            </div>
            <div class="login_content" :class="{hidden : loginHidden}">
              <div class="welcome-login">
                Chào mừng bạn đến với
              </div>
              <img class="logo_tch" src="https://cdn.haitrieu.com/wp-content/uploads/2022/03/logo-the-coffee-house-chieu-dai.png" alt="" style="width: 65%">
              <!--            nhập sdt người dùng -->
              <div class="login-input-content" >
                <div class="region-code" >
                  <img style="vertical-align: middle;margin-right: 4px" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjUiIHZpZXdCb3g9IjAgMCAyNCAyNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDI0LjM2NTdDMTguNjI3NCAyNC4zNjU3IDI0IDE4Ljk5MzEgMjQgMTIuMzY1N0MyNCA1LjczODMxIDE4LjYyNzQgMC4zNjU3MjMgMTIgMC4zNjU3MjNDNS4zNzI1OCAwLjM2NTcyMyAwIDUuNzM4MzEgMCAxMi4zNjU3QzAgMTguOTkzMSA1LjM3MjU4IDI0LjM2NTcgMTIgMjQuMzY1N1oiIGZpbGw9IiNGNTIyMkQiLz4KPHBhdGggZD0iTTEyLjAwMTYgMTUuMTY1OEwxNS45NjE2IDE3Ljk2NThMMTQuNDgxNiAxMy40MDU4TDE4LjQwMTYgMTAuNDQ1OEgxMy41MjE2TDEyLjAwMTYgNS45NjU4MkwxMC41MjE2IDEwLjQ0NThINS42MDE1Nkw5LjUyMTU2IDEzLjQwNThMOC4wNDE1NiAxNy45NjU4TDEyLjAwMTYgMTUuMTY1OFoiIGZpbGw9IiNGRkU2MkUiLz4KPC9zdmc+Cg==" alt="">
                  <span>+84</span>
                </div>
                <input type="text" class="phone-input" placeholder="Nhập số điện thoại">
              </div>

              <v-btn @click="otpActive = !otpActive;loginHidden = !loginHidden" width="100%" block depressed  color="#e87800" class="login_btn">Đăng nhập</v-btn>
            </div>


            <div :class="{ activeOtp : otpActive}" class="get-otp_content" style="background-color: white">
              <div class="welcome-login">Xác thực mã OTP</div>
              <div class="welcome-login" style="text-align: center">Một mã xác thực gồm 6 số đã được gửi đến số điện thoại
              <span class="font-weight-bold" >0971751698</span>
              </div>
              <div class="welcome-login">Nhập mã để tiếp tục</div>
              <div class="cover-input-otp">
<!--                nhập otp-->
              <div style="display: flex;justify-content: space-around">
                <div style="display: flex;align-items: center" >
                  <input type="tel" class="otp-input" min="0" max="9" maxlength="1" pattern="[0-9]" >
                </div>
                <div style="display: flex;align-items: center">
                  <input type="tel" class="otp-input" min="0" max="9" maxlength="1" pattern="[0-9]">
                </div>
                <div style="display: flex;align-items: center">
                  <input type="tel" class="otp-input" min="0" max="9" maxlength="1" pattern="[0-9]">
                </div>
                <div style="display: flex;align-items: center">
                  <input type="tel" class="otp-input" min="0" max="9" maxlength="1" pattern="[0-9]">
                </div>
                <div style="display: flex;align-items: center">
                  <input type="tel" class="otp-input" min="0" max="9" maxlength="1" pattern="[0-9]">
                </div>
                <div style="display: flex;align-items: center">
                  <input type="tel" class="otp-input" min="0" max="9" maxlength="1" pattern="[0-9]">
                </div>
              </div>
              </div>
              <div class="welcome-login" style="margin-bottom: 0.5rem"> Bạn không nhận được mã ?
                <a class="addborder" style="text-decoration: none;cursor: pointer;margin-left: 0.25rem" href=""> Gửi lại</a>
              </div>
            </div>


          </div>
        </template>
      </v-dialog>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Authentication_User",
  data: () => {
    return {
      dialog:false,
      otpActive:false,
      loginHidden:false,
    }
  },

}
</script>

<style scoped>

/deep/.my-custom-dialog {
  align-self: flex-start;
}
.width_2625{
  max-width: 26.25rem;
}
.width_275{
  max-width: 27.5rem;
}
.activeOtp{
  display: flex !important;
}
.hidden{
  display: none!important;
}
.login_modal{
  width: 26.25rem;
  border-radius:0.5rem;
  padding-right: 0!important;
  height: unset;
  transform: none;
  border: none;
  box-shadow: 0 -4px 10px rgb(0 0 0 / 12%);
}
.img_login{
  height: 12.5rem;
  overflow: hidden;
}

.img_login img{
  width: 100%;
  object-fit: cover;
}
.login_content{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px;
  background-color: white;
}

.welcome-login{
  margin-bottom: 0.75rem;
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
}

.logo_tch{
  margin-bottom: 2rem;
  vertical-align: middle;
}
.login-input-content{
  display: flex;
  align-items: center;
  height: 2.75rem;
  background: #fafafa;
  border: 1px solid #ededed;
  border-radius: 0.25rem;
  margin-bottom: 1.25rem;
  width: 100%;
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";


}
.region-code{
  margin: 10px 0 10px 10px;
  padding-right: 16px;
  border-right: 1px solid #ededed;
  height: 1.5rem;

}

.phone-input{
  padding:10px 16px;

}
input {
  border: none;
  background: transparent;
  outline: none;
  margin: 0;

}
.login_btn{
  width: 100%;
  color: #fff;
  border-radius: 6.25rem;
  line-height: 1.5;
}
.get-otp_content{

  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  display: none;
}

.cover-input-otp {
  margin: 0.5rem 0;
  width: 19rem;
}
.otp-input{
  width: 2.75rem;
  height: 2.75rem;
  padding: 0.625rem 0.8375rem;
  font-size: 0.8375rem;
  border-radius: 0.25rem;
  border: 1px solid #ededed;
  text-align: center;
  background: #fafafa;
}
.addborder:hover{
  text-decoration: #1e88e5;

}
</style>