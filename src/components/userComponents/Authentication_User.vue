<template>
  <div style="top: -206px">
    <v-row justify="center">
      <v-dialog
          transition="dialog-top-transition"
          max-width="26.25rem"
          content-class="my-custom-dialog"
      >
        <template v-slot:activator="{ on, attrs }">
          <p
              color="primary"
              v-bind="attrs"
              v-on="on"
              style="margin-left: 17px; width: 124.75px; margin-bottom: 0"
          >Login</p>
        </template>
        <template >
          <div class="login_modal">
            <div class="img_login">
              <img src="https://order.thecoffeehouse.com/_nuxt/img/thumbnail-login-pop-up.e10d0dd.png" alt="">
            </div>

<!--             User nhập SDT -->

            <div class="login_content" :class="{hidden : loginHidden}">
              <div class="welcome-login">
                Chào mừng bạn đến với
              </div>
              <img class="logo_tch" src="https://cdn.haitrieu.com/wp-content/uploads/2022/03/logo-the-coffee-house-chieu-dai.png" alt="" style="width: 65%">
              <!--            nhập sdt người dùng -->
              <form @submit.prevent="sendPhoneNumber" >
              <div class="login-input-content" >
                <div class="region-code" >
                  <img style="vertical-align: middle;margin-right: 4px" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjUiIHZpZXdCb3g9IjAgMCAyNCAyNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDI0LjM2NTdDMTguNjI3NCAyNC4zNjU3IDI0IDE4Ljk5MzEgMjQgMTIuMzY1N0MyNCA1LjczODMxIDE4LjYyNzQgMC4zNjU3MjMgMTIgMC4zNjU3MjNDNS4zNzI1OCAwLjM2NTcyMyAwIDUuNzM4MzEgMCAxMi4zNjU3QzAgMTguOTkzMSA1LjM3MjU4IDI0LjM2NTcgMTIgMjQuMzY1N1oiIGZpbGw9IiNGNTIyMkQiLz4KPHBhdGggZD0iTTEyLjAwMTYgMTUuMTY1OEwxNS45NjE2IDE3Ljk2NThMMTQuNDgxNiAxMy40MDU4TDE4LjQwMTYgMTAuNDQ1OEgxMy41MjE2TDEyLjAwMTYgNS45NjU4MkwxMC41MjE2IDEwLjQ0NThINS42MDE1Nkw5LjUyMTU2IDEzLjQwNThMOC4wNDE1NiAxNy45NjU4TDEyLjAwMTYgMTUuMTY1OFoiIGZpbGw9IiNGRkU2MkUiLz4KPC9zdmc+Cg==" alt="">
                  <span>+84</span>
                </div>
                <input type="text" class="phone-input" placeholder="Nhập số điện thoại" v-model="data.mobile_no">
              </div>
                <v-btn type="submit" @click="otpActive = !otpActive;loginHidden = !loginHidden" width="100%" block depressed  color="#e87800" class="login_btn">Đăng nhập</v-btn>
              </form>
            </div>


            <div :class="{ activeOtp : otpActive}" class="get-otp_content" style="background-color: white">
              <div class="welcome-login">Xác thực mã OTP</div>
              <div class="welcome-login" style="text-align: center">Một mã xác thực gồm 6 số đã được gửi đến số điện thoại
              <span class="font-weight-bold" >{{data.mobile_no}}</span>
              </div>
              <div class="welcome-login">Nhập mã để tiếp tục</div>
              <!--                nhập otp-->
              <form @submit.prevent="sendOTP" >
                <div class="cover-input-otp">
                  <div style="display: flex;justify-content: space-around">
                    <div style="display: flex;align-items: center"  >
                      <input type="tel" class="otp-input" min="0" max="9" maxlength="1" pattern="[0-9]"  id="input1" @keyup="inputenter()">
                    </div>
                    <div style="display: flex;align-items: center">
                      <input type="tel" class="otp-input" min="0" max="9" maxlength="1" pattern="[0-9]" id="input2" @keyup="inputenter()">
                    </div>
                    <div style="display: flex;align-items: center">
                      <input type="tel" class="otp-input" min="0" max="9" maxlength="1" pattern="[0-9]" id="input3" @keyup="inputenter()">
                    </div>
                    <div style="display: flex;align-items: center">
                      <input type="tel" class="otp-input" min="0" max="9" maxlength="1" pattern="[0-9]" id="input4" @keyup="inputenter()">
                    </div>
                    <div style="display: flex;align-items: center">
                      <input type="tel" class="otp-input" min="0" max="9" maxlength="1" pattern="[0-9]" id="input5" @keyup="inputenter()">
                    </div>
                    <div style="display: flex;align-items: center">
                      <input type="tel" class="otp-input" min="0" max="9" maxlength="1" pattern="[0-9]" id="input6" @keyup="inputenter()">
                    </div>
                  </div>
                </div>
                <div class="welcome-login" style="margin-bottom: 0.5rem"> Bạn không nhận được mã ?
                  <a class="addborder" style="text-decoration: none;cursor: pointer;margin-left: 0.25rem" href=""> Gửi lại</a>
                </div>
                <v-btn  type="submit" width="100%" block depressed  color="#e87800" class="login_btn">Đăng nhập</v-btn>
              </form>

<!--                <p v-if="showError" id="error">SMS OTP chưa chính xác </p>-->
              </div>


          </div>
        </template>
      </v-dialog>
    </v-row>
  </div>
</template>

<script>
import axios from "axios";
// import router from "@/router";
export default {
  name: "AuthenticationUser",
  setup(){

  },
  data: () => {
    return {
      dialog:false,
      otpActive:false,
      loginHidden:false,
      showError:false,
      data:{
        mobile_no:'',
        otp:'',
      },
      user: {}
    }

  },

  methods:{
    inputenter() {
      const inputs = document.querySelectorAll('.otp-input');
      console.log(inputs)
      for (let i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener('keydown', function(event) {
          if (event.key === "Backspace") {
            inputs[i].value = '';
            if (i !== 0) inputs[i - 1].focus();
          } else {
            if (i === inputs.length - 1 && inputs[i].value !== '') {
              return true;
            } else if (event.keyCode > 47 && event.keyCode < 58) {
              inputs[i].value = event.key
              if (i !== inputs.length - 1) inputs[i + 1].focus();
              event.preventDefault();
            }
            else if (event.keyCode > 64 && event.keyCode < 91) {
              inputs[i].value = String.fromCharCode(event.keyCode);
              if (i !== inputs.length - 1) inputs[i + 1].focus();
              event.preventDefault();
            }
          }
        });
      }
      let otp = "";
      inputs.forEach((input) => {
      otp += input.value;
      this.data.otp = otp;
        console.log(otp)
  })
    },



    sendPhoneNumber() {
      console.log("Gia tri truyen di: ",this.data.mobile_no)
      axios.post("http://127.0.0.1:8000/api/user/auth/login", {
        mobile_no: this.data.mobile_no
      }).then((response) => {
        console.log("Gia tri tra ve: ", response)
      })
          .catch((error) => {
            console.log("ERR")
            console.log(error.response);
          });
    },
    sendOTP(){
      axios
          .post("http://127.0.0.1:8000/api/user/auth/checkOtp",this.data)
          .then((response) => {
              // let id = response.data.id;
              // Need to check
              console.log(response.data)
              if(response.data.userInfo == null)
              {
                // Neef to do stthg else
                alert("Khong thanh cong!")
              }
              else {
                this.user = response.data.userInfo
                localStorage.setItem('user',JSON.stringify(this.user));
                localStorage.setItem('oldAddress', JSON.stringify(this.user.address))
                this.$router.push('/userAcount')
              }
              // this.$store.dispatch('setAuth',true);
          })
          .catch((error) => {
            console.log("Start\n");
            console.log(error.response)
            // this.$store.dispatch('setAuth',false);
          });
    }
  },
}
</script>

<style scoped>

/deep/.my-custom-dialog {
  align-self: flex-start;
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
  text-decoration: #1e88e5!important;

}
.otp-input:focus{
  border: 2px solid #000000;
}
</style>