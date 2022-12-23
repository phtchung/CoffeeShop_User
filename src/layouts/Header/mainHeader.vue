<template>
  <v-container>
  <div class="main_header">
    <div style="width: 17%;margin-right: 39px" class="categories_item" >
    <a href="">
      <img src="https://cdn.haitrieu.com/wp-content/uploads/2022/03/logo-the-coffee-house-chieu-dai.png" alt="" style="width: 100%">
    </a>
    </div>

    <div class="categories_item">
      <a href="">
        <span class="header_color">Cà phê</span>
      </a>
    </div>

    <div class="categories_item">
      <a href="">
        <span class="header_color">Trà</span>
      </a>
    </div>

    <div class="categories_item">
      <a href="">
        <span class="header_color">Menu</span>
      </a>
<!--      <v-icon mdi-menu-down-outline></v-icon>-->
    </div>

    <div class="categories_item">
      <a href="">
        <span class="header_color">Cảm hứng CloudFee</span>
      </a>
    </div>

    <div class="categories_item">
      <a href="">
        <span class="header_color">Cửa hàng</span>
      </a>
    </div>

    <div class="categories_item">
      <a href="">
        <span class="header_color">Tuyển dụng</span>
      </a>
    </div>


  </div>

  <ul class="menu_list">
    <li>
      <a href="" title="Tất cả">Tất cả</a>
      <ul class="list_item">
        <li >
          <a href="" title="Cà phê Việt Nam">Cà phê Việt Nam</a>
        </li>
        <li>
          <a href="" title="Cà phê Máy">Cà phê Máy</a>
        </li>

      </ul>
    </li>

    <li>
      <a href="" title="Cà phê">Cà phê</a>
    </li>

    <li>
      <a href="" title="CloudFee">CloudFee</a>
    </li>

    <li>
      <a href="" title="CloudTea">CloudTea</a>
    </li>

    <li>
      <a href="" title="Trà">Trà</a>
    </li>

    <li>
      <a href="" title="Hi-Tea Healthy">Hi-Tea Healthy</a>
    </li>

    <li>
      <a href="" title="Bánh & Snack">Bánh & Snack</a>
    </li>

    <li>
      <a href="" title="Tại nhà">Tại nhà</a>
    </li>

    <li>
      <a href="" title="Thức uống khác">Thức uống khác</a>
    </li>
  </ul>


  </v-container>
</template>

<script>
export default {
  name: "mainHeader"
}
</script>

<style scoped>

  .main_header{
    display: flex;
    justify-content: flex-start;
  }


  .main_header a{
    list-style: none;
    text-decoration: none;
  }
  .categories_item{
    padding: 19px 16px;
  }


  .categories_item :hover{
    color: #EA8025;
    cursor: pointer;
  }
  .header_color{
    color: #000;
    font-size: 14px;
    line-height: 22px;
    font-weight: 600;
    font-family: 'SF Pro Text', sans-serif;
  }
  /*.header_color:hover{*/
  /*  color: #EA8025;*/
  /*}*/

  .menu_list{
    display: flex;
    list-style: none;
    padding: 24px 15.4% 32px;
    flex-wrap: nowrap;
    width: 100%;
    left: 0;
    color: #000;
    font-size: 14px;
    background-color: white;

  }
  .menu_list > li > a{
    font-weight: 600;
    color: #000000;
    font-size: 16px;
    text-decoration: none;
    /*border-bottom: 2px solid;*/
    font-family: 'SF Pro Text', sans-serif;
  }





  .menu_list li{
    padding: 12px 2.2%;
  }
  .list_item {
    list-style: none;
    padding: 0;
  }



</style>