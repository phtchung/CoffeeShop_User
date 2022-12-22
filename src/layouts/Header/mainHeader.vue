<template>
  <div class="main_header">
    <div style="width: 17%" class="categories_item">
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
        <span class="header_color">Chuyện nhà</span>
      </a>
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

  .header_color{
    color: #000;
    font-size: 14px;
    line-height: 22px;
    font-weight: 600;
    font-family: 'SF Pro Text', sans-serif;
  }
</style>