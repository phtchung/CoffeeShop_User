<template>
  <div class="menu_item">
    <div class="menu_item_image">
      <a title="CloudFee Hạnh Nhân Nướng">
        <img :src="image_url" class="lazyloaded"/>
      </a>
    </div>

    <div class="menu_item_info">
        <h3>
          <a title="CloudFee Hạnh Nhân Nướng">{{name}}</a>
        </h3>
    <div class="price_product_item">{{separator(price)}} đ</div>
    </div>
  </div>

</template>

<script>
export default {
  props: {
    image_url: String,
    name: String,
    description: String,
    price: String,
  },
  name: "Item_User",
  data: () => ({
    // product_id: "0",
    show: false,
  }),

  methods: {
    separator(numb) {
      var str = numb.toString().split(".");
      str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
      return str.join(".");
    },
  }

};
</script>

<style scoped>
.card {
  width: 250px;
  box-shadow: 0px 0px 13px 0px #00000040;
  text-align: center;
  border-radius: 10px;
}

.menu_item {
    background: #fff;
    -ms-flex: 0 0 calc(33.333% - 30px);
    -webkit-flex: 0 0 calc(33.333% - 30px);
    flex: 0 0 calc(33.333% - 30px);
    margin: 0 15px 40px;
    min-height: 145px;
}

.menu_item {
    background: transparent;
    -webkit-flex: 0 0 calc(25% - 30px);
    flex: 0 0 calc(25% - 30px);

}

.menu_item .menu_item_image {
    position: relative;
}

.menu_item .menu_item_image img {
    width: 100%;
}

.menu_item .menu_item_image > a {
    border-radius: 10px;
    overflow: hidden;
    display: block;
    width: 100%;
    padding-top: 100%;
    position: relative;
    box-shadow: 0px 0px 13px 0px #00000040;
}

.menu_item .menu_item_image > a > img {
    position: absolute;
    top: 0;
    left: 0;
}

.menu_item .labels {
    position: absolute;
    left: 14px;
    top: 12px;
    padding-left: 0;
    display: flex;
}

.menu_item .labels img {
    height: 50px;
    width: 50px;
    margin-right: 6px;
    display: inline-block;
    vertical-align: middle;
}

.menu_item .labels span {
    display: none;
}

.menu_item .menu_item_info {
    padding: 12px 0 0;
}

.menu_item .menu_item_info.bg_white {
    background: #fff;
    position: relative;
    z-index: 1;
}

.menu_item .menu_item_info h3 {
    margin-top: 0;
    margin-bottom: 4px;
    font-weight: 600;
    color: #191919;
    font-size: 16px;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
}

.menu_item .menu_item_info .menu_item_info_content {
    font-size: 16px;
    display: block;
    display: -webkit-box;
    height: 48px;
    margin-bottom: 15px;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
}

.menu_item .menu_item_action {
    font-size: 16px;
    font-weight: 700;
    color: #fff;
    display: inline-block;
    font-family: 'BebasNeue', 'Lato', "Times New Roman", serif;
    background: transparent;
    vertical-align: middle;
    border: 2px solid #EA8025;
    padding: 6px 15px;
}

.menu_item .menu_item_action:before {
    content: '';
    background-color: #EA8025;
}

.menu_item .menu_item_action:hover {
    background: transparent;
    color: #EA8025;
}

.menu_item .menu_item_action_view {
    font-size: 16px;
    font-weight: 700;
    color: #EA8025;
    display: inline-block;
    font-family: 'BebasNeue', 'Lato', "Times New Roman", serif;
    border: 2px solid #EA8025;
    vertical-align: middle;
    margin-left: 15px;
    position: relative;
    padding: 6px 15px;
    transition: .3s;
    overflow: hidden;
}

.menu_item .menu_item_action_view:after {
    content: '';
    position: absolute;
    transition: .3s;
    width: 0;
    left: 50%;
    bottom: 0;
    height: 3px;
    background: #EA8025;
    height: 120%;
    left: -10%;
    -webkit-transform: skewX(15deg);
    transform: skewX(15deg);
    z-index: -1;
}

.menu_item .menu_item_action_view:hover {
    color: #fff;
}

.menu_item .menu_item_action_view:hover:after {
    left: -10%;
    width: 120%;
}

.menu_item .variant_product_item select {
    font-size: 18px;
    font-weight: 700;
    border: 0;
    background: transparent;
    color: rgba(0, 0, 0, 0.5);
    font-family: 'BebasNeue', 'Lato', "Times New Roman", serif;
    display: inline-block;
}

.menu_item .price_product_item {
    font-size: 14px;
    color: #00000099;
    margin-bottom: 10px;
}

.menu_item .original_price {
    color: #EA8025;
}

.menu_item .menu_item_info{
  padding: 12px 0 0;
}
.menu_item .menu_item_info h3{
  margin-top: 0;
  margin-bottom: 4px;
  font-weight: 600;
  color: #191919;
  font-size: 16px;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
}
  .menu_item .menu_item_info h3 a {
    color: #000000;
    text-decoration: none;
    font-family: 'SF Pro Display', sans-serif;
  }
  .menu_item .menu_item_info .price_product_item{
    font-size: 14px;
    color: #00000099;
    margin-bottom: 10px;
    font-family: 'SF Pro Display', sans-serif;
  }

</style>