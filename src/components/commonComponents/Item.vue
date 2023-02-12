<template>
  <v-card
      class="mx-auto"
      max-width="344"
      color="transparent"
  >
    <v-img
        :src= 'image_url'
        height="200px"
    ></v-img>

    <v-card-title style="padding: 12px 0">
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
      <BtnEdit
          :image_url="image_url"
          :name="name"
          :price="price"
          :description="description"
      />
      <v-btn icon mdi-delete>
        <v-icon>mdi-delete</v-icon>
      </v-btn>
      <!-- <v-spacer></v-spacer> -->

      <v-btn
          icon
          @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          {{description}}
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
// import BtnEdit from './vuetifyComponents/BtnEdit.vue'
export default {
  props: {
    image_url: String,
    name: String,
    description: String,
    price: String,
  },
  name: "Item",
  data: () => ({
    show: false,
  }),
  components: {
    BtnEdit: () => import("@/components/vuetifyComponents/BtnEdit")
  },

}
</script>