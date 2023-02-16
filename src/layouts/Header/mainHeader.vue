<template>
  <v-container>
  <div class="main_header"  id="myHeader" style="border-bottom: 1px solid #d9d9d9">
    <div style="width: 17%;margin-right: 39px" class="categories_item" >
    <a href="/">
      <img src="https://cdn.haitrieu.com/wp-content/uploads/2022/03/logo-the-coffee-house-chieu-dai.png" alt="" style="width: 100%">
    </a>
    </div>

    <div
      v-for="header_path in header_paths"
      :key = header_path.header_id
      :class="{has_child : header_path.header_active }"
      class="categories_item"
      @click="logout(header_path.header_id,header_path.header_path)"
    >
      <a >
        <span class="header_color">{{header_path.header_name}}</span>
      </a>

      <ul class="menu_list" v-if="header_path.header_active ===true">
        <li>
          <a href="/collections/menu" title="Tất cả">Tất cả</a>
        </li>
        <li>
          <a href="/collections/product/ca-phe"  title="Cà phê">Cà phê</a>
          <ul class="list_item">
            <li class="item_font">
              <a href="/collections/ca-phe-viet-nam" title="Cà phê Việt Nam" >Cà phê Việt Nam</a>
            </li>
            <li class="item_font">
              <a href="/collections/ca-phe-may" title="Cà phê Máy">Cà phê Máy</a>
            </li>
            <li class="item_font">
              <a href="/collections/cold-brew" title="Cold Brew">Cold Brew</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="/collections/cloudfee" title="CloudFee">CloudFee</a>
          <ul class="list_item">
            <li class="item_font">
              <a href="/collections/cloudfee" title="CloudFee">CloudFee</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="/collections/cloudtee" title="CloudTea">CloudTea</a>
          <ul class="list_item">
            <li class="item_font">
              <a href="/collections/cloudtea" title="CloudTea">CloudTea</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="/collections/product/tra" title="Trà">Trà</a>
          <ul class="list_item">
            <li class="item_font">
              <a href="/collections/tra-trai-cay" title="Trà trái cây">Trà trái cây</a>
            </li>
            <li class="item_font">
              <a href="/collections/tra-sua-macchiato" title="Trà sữa Macchiato">Trà sữa Macchiato</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="" title="Hi-Tea Healthy">Hi-Tea Healthy</a>
          <ul class="list_item">
            <li class="item_font">
              <a href="/collections/hi-tea-tra" title="Hi-Tea Trà">Hi-Tea Trà</a>
            </li>
            <li class="item_font">
              <a href="/collections/hi-tea-da-tuyet" title="Hi-Tea Đá Tuyết">Hi-Tea Đá Tuyết</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="/collections/banh-&-snack" title="Bánh & Snack">Bánh & Snack</a>
          <ul class="list_item">
            <li class="item_font">
              <a href="/collections/banh-man" title="Bánh mặn" >Bánh mặn</a>
            </li>
            <li class="item_font">
              <a href="/collections/banh-ngot" title="Bánh ngọt">Bánh ngọt</a>
            </li>
            <li class="item_font">
              <a href="/collections/snack" title="Snack">Snack</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="/collections/tai-nha" title="Tại nhà">Tại nhà</a>
          <ul class="list_item">
            <li class="item_font">
              <a href="/collections/ca-phe-tai-nha" title="Cà phê tại nhà">Cà phê tại nhà</a>
            </li>
            <li class="item_font">
              <a href="/collections/tra-tai-nha" title="Trà tại nhà">Trà tại nhà</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="/collections/thuc-uong-khac" title="Thức uống khác">Thức uống khác</a>
          <ul class="list_item">
            <li class="item_font">
              <a href="/collections/chocolate" title="Chocolate">Chocolate</a>
            </li>
          </ul>
        </li>
      </ul>

    </div>

  </div>

  <!-- <checkOut>

  </checkOut> -->


  </v-container>
</template>

<script>
// import header_paths from './headerConstant.js'

export default {
  name: "mainHeader",
  components:{

    // Mainpage: () => import("@/view_user/pages_user/Mainpage"),

  },
  data() {
    return {
      categories_id:"1",
      name: "",
      header_paths: [
        {
          header_id : "-1",
          header_name : "",
          header_path : "mainpage",
          header_active : false,
        },
        {
          header_id : "19",
          header_name : "Cà phê",
          header_path : "ca-phe",
          header_active : false,
        },
        {
          header_id : "20",
          header_name : "Trà",
          header_path : "tra",
          header_active : false
        },
        {
          header_id : "0",
          header_name : "Menu",
          header_path : "/#/menu",
          header_active : true,
        },
        {
          header_id : "4",
          header_name : "Truyện nhà",
          header_path : "truyen-nha",
          header_active : false
        },
        {
          header_id : "5",
          header_name : "Cảm hứng CloudFee",
          header_path : "cam-hung",
          header_active : false,
        },
        {
          header_id : "6",
          header_name : "Cửa hàng",
          header_path : "cua-hang",
          header_active : false
        },
        {
          header_id : "7",
          header_name : "Tuyển dụng",
          header_path : "tuyen-dung",
          header_active : false
        },
    
      ],
      // header_paths: headerConstant.header_paths,
    }
  },
  methods:{
    // getCategories(x) {
    //   this.categories_id = x;
    //   console.log(this.categories_id);
    // },
    logout(category_id,path_name){
      this.categories_id = category_id;
      this.name = path_name;
      if(category_id=="0")
      {
        this.$router.push({path:`/`,name:'menuMenu', params: { category_name: "menu"}});
      }
      else{
        console.log(path_name)
        this.$router.push({path:`/${category_id}`,name:'categoryMain', params: { category_id: `${this.categories_id}`, path_name: `${path_name}`}});
        // console.log(category_id,product_name);
      }
      },

  },
  mounted() {
    window.onscroll = function() {myFunction()};

    var header = document.getElementById("myHeader");
    var sticky = header.offsetTop;

    function myFunction() {
      if (window.scrollY > sticky) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    }
  },

}
</script>

<style scoped>

.sticky + .content {
  padding-top: 44px;
}
  .header_hidden{
    display: block !important;
  }
  .main_header{
    display: flex;
    justify-content: flex-start;
    z-index: 99;
    position: fixed;
    top: 2.625rem;
    background-color: white;
    left: 0;
    padding: 0 0 0 156px;
    opacity: 1;
  }

  .sticky {
    position: fixed;
    top: 0;
    width: 100%;

  }


  .main_header a{
    list-style: none;
    text-decoration: none;
  }
  .categories_item{
    padding: 19px 16px;
  }


  .header_color{
    color: #000;
    font-size: 14px;
    line-height: 22px;
    font-weight: 600;
    font-family: 'SF Pro Text', sans-serif;
  }
  .header_color:hover{
    color: #EA8025;
  }

  .menu_list{
    display: none;
    list-style: none;
    padding: 24px 7.7% 32px;
    flex-wrap: nowrap;
    width: 100%;
    left: 0;
    color: #000000;
    font-size: 14px;
    background-color: white;
    z-index: 99;
    justify-content: center;
    /*flex-wrap: wrap;*/
    position: absolute;
    opacity: 1;


  }

  .menu_list > li > a{
    font-weight: 550;
    color: rgb(0,0,0);
    font-size: 16px;
    text-decoration: none;
    border-bottom: 2px solid ;
    font-family: 'SF Pro Text', sans-serif;
    display: block;
  }
  .menu_list  >li{
    width: 7rem;
  }

  .menu_list > li > ul  > li >a{
    text-decoration: none;
    color: rgba(0, 0, 0, 0.6);
    font-size: 14px;
    font-family: 'SF Pro Text', sans-serif;
    font-weight: 400;
  }


  .menu_list > li{
    padding: 12px 1.7%;
  }
  .list_item {
    list-style: none;
    padding: 0;
    margin-top: 16px;
  }

  .item_font{
    margin-bottom: 4px;
  }


  .has_child:hover .menu_list{
    display: flex;
  }
  .menu_list a:hover{
    color: #EA8025;
    text-decoration: none;
  }
</style>