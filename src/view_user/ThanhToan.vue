<template>
    <div>
        <header>
            <userHeader :dialog="false"/>
        </header>
        <div>
        <checkOut/>
        </div>
        <!-- <mainHeader/> -->
    </div>
</template>

<script>

export default {
   name: "ThanhToan",
//    components: {
//     mainHeader: () => import('@/layouts/Header/mainHeader'),
//   },
   components: {
    userHeader: () => import("@/layouts/Header/UserHeader"),
    checkOut: () => import("@/view_user/CheckOut")
  },
}
</script>
