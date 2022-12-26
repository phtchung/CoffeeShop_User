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

    <div class="categories_item ">
      <a href="">
        <span class="header_color">Trà</span>
      </a>
    </div>

    <div class="categories_item has_child">
      <a href="">
        <span class="header_color">Menu</span>
      </a>
      <ul class=" menu_list">
        <li>
          <a href="" title="Tất cả">Tất cả</a>
          <ul class="list_item">
            <li class="item_font">
              <a href="" title="Cà phê Việt Nam" >Cà phê Việt Nam</a>
            </li>
            <li class="item_font">
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




  </v-container>
</template>

<script>

export default {
  name: "mainHeader",

}
</script>

<style scoped>

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

</style>