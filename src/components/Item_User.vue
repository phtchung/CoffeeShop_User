<template>
  <v-card

      color="transparent"
      flat


  >
    <img :src= 'imageURL' alt="" style="height: 16.875rem;width: 16.875rem">

    <v-card-title style="margin: 12px 0;font-size: 16px;font-family: 'SF Pro Display', sans-serif;color: #191919;font-weight: 600">
      {{name}}
    </v-card-title>

    <v-card-subtitle style="padding: 12px 0">
      {{price}}
    </v-card-subtitle>

    <v-card-actions>
      <!-- <v-btn
        color="orange lighten-2"
        text
      >
        Button
      </v-btn> -->

      <!--      <v-btn icon mdi-delete>-->
      <!--        <v-icon>mdi-delete</v-icon>-->
      <!--      </v-btn>-->
      <!-- <v-spacer></v-spacer> -->


    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>


      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
// import BtnEdit from './vuetifyComponents/BtnEdit.vue'
export default {
  props: {
    imageURL: String,
    name: String,
    description: String,
    price: String,
  },
  name: "Item_User",
  data: () => ({
    show: false,
  }),

}
</script>