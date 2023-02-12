<template>
    <v-container rounded-0 fluid style="margin-top: 42px;">
        
            <userHeader :dialog="false"/>
            
       
        <productListing :dialog="false"/>
        <div>
        
        </div>
        <!-- <mainHeader/> -->
    </v-container>
</template>

<script>
export default {
   name: "ProductList",
//    components: {
//     mainHeader: () => import('@/layouts/Header/mainHeader'),
//   },
   components: {
    userHeader: () => import("@/layouts/Header/UserHeader"),
    productListing: () => import("@/components/UserComponents/ProductListing")
  },
}
</script>

<style scoped>
.fill-height {
  align-items: start !important;
  margin-top: 42px;

}
</style>