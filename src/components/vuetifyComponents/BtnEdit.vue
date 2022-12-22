<template>
  <v-row>
    <v-dialog v-model="dialog" persistent max-width="600px" right>
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" dark v-bind="attrs" v-on="on" mdi-edit icon>
          <!-- Open Dialog  -->
          <!-- <v-icon icon="fa:fas fa- edit"></v-icon> -->
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">Item edit</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field label="ImageURL" required v-model="imageURL"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Name" required v-model="name"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Gia" required v-model="price"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-textarea label="Mo ta" required v-model="description"></v-textarea>
              </v-col>
            </v-row>
          </v-container>
          <!-- <small>*indicates required field</small> -->
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">
            Close
          </v-btn>
          <v-btn color="blue darken-1" text @click="dialog = false">
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  props: {
    imageURL: String,
    name: String,
    price: String,
    description: String,
  },
  name: "BtnEdit",
  data: () => ({
    dialog: false,
  }),
};
</script>