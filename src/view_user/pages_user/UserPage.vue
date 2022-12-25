<template>
    <div>
        <userHeader/>
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
    
  },
}
</script>
