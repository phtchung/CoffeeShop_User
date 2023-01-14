<template>
<v-container rounded-0 fluid style="margin-top: 42px;">

    <userHeader />

    <div>
        <template style="board">
            <v-carousel cycle hide-delimiter-background show-arrows>
                <v-carousel-item v-for="(url_header, i) in urls_header" :key="i">
                    <div>
                        <a href="#">
                            <img :src="url_header" alt="" style="width: 100%" />
                        </a>
                    </div>
                </v-carousel-item>
            </v-carousel>
        </template>
    </div>
    <productListing />
    <div>

    </div>
    <!-- <mainHeader/> -->
</v-container>
</template>

<script>
export default {
    name: "ProductCode",
    //    components: {
    //     mainHeader: () => import('@/layouts/Header/mainHeader'),
    //   },
    data() {
        return {
            urls_header: [
                "https://file.hstatic.net/1000075078/file/hiteaday_desktop_564c8568fc48441badd3a492cdd127d9.jpg",
                "https://file.hstatic.net/1000075078/file/daitiec_desktop_2cd63f8cf8454da3ade2c990b9415c8b.jpg",
            ],
        }
    },
    components: {
        userHeader: () => import("@/layouts/Header/userHeader"),
        productListing: () => import("@/components/userComponents/productListing")
    },
}
</script>

<style scoped>
.board {
    background-color: orange;
    margin-top: -70px;
    margin-left: -24px;
    margin-right: -24px;
    padding-top: 20px;
    padding-left: 160px;
    padding-bottom: 0px;
    padding-right: 160px;
    margin-bottom: 0px;
}

.fill-height {
    align-items: start !important;
    margin-top: 42px;

}
</style>
