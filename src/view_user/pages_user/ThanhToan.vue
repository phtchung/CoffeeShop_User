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
    userHeader: () => import("@/layouts/Header/userHeader"),
    checkOut: () => import("@/view_user/pages_user/checkOut")
  },
}
</script>
