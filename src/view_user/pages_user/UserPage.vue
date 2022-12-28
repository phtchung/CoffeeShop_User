<template>
    <div>
        <header>
            <userHeader/>
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
    userHeader: () => import("@/layouts/Header/userHeader"),
    userInfo: () => import("@/components/userComponents/userInfo")
  },
}
</script>
