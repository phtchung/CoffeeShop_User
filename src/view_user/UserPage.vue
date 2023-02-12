<template>
    <div>
        <header>
            <userHeader :dialog="false"/>
        </header>
        <div>
        <userInfo/>
        </div>
        <!-- <mainHeader/> -->
    </div>
</template>

<script>

export default {
   name: "UserPage",
//    components: {
//     mainHeader: () => import('@/layouts/Header/mainHeader'),
//   },
   components: {
    userHeader: () => import("@/layouts/Header/UserHeader"),
    userInfo: () => import("@/components/UserComponents/UserInfo")
  },
}
</script>
