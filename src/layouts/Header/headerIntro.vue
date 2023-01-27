<template>
  <div class="row">
  <div class="col-sm-12 col-md-12 col-lg-12">
  <div class="header_metaintro  ">
    <div class=" " >
      <a href="/" >
        <img src="https://file.hstatic.net/1000075078/file/vector_706a88566eab4f009bed6eea93cd890b.png" alt="" style="margin-right: 5px">
        <span class="fix_color">154 Cửa hàng khắp cả nước</span>
      </a>
    </div>

    <div class="distance " >
      <a href="/">
        <img src="https://file.hstatic.net/1000075078/file/group_8de276faa50c486b9d485826c506803b.png" alt="" style="margin-right: 5px">
        <span class="fix_color">Đặt hàng: 1800.6936</span>
      </a>
    </div>

    <div class="distance ">
      <a href="/">
        <img src="https://file.hstatic.net/1000075078/file/vector_c337310f409d440f890b370ff9cefe44.png" alt="" style="margin-right: 5px">
        <span class="fix_color">Freeship từ 50.000vnd</span>
      </a>
    </div>
  </div>
  </div>
  </div>
</template>

<script>
export default {
  name: "headerIntro"
}
</script>

<style scoped>
  .header_metaintro {
    display: flex;
    justify-content: center;
    padding: 10px 4.2%;

  }
  .header_metaintro a{
    text-decoration: none;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 1.42;
  }

  .distance{
    padding: 0 4.2%;
  }

  .fix_color{
    color: #00000099;
    font-size: 12px;
    font-weight: 400;
    font-family: 'SF Pro Text', sans-serif;
    line-height: 1.42;
  }
</style>