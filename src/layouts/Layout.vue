<template>
  <v-app id="inspire" >
    <Header v-model="expandOnHover"></Header>
    <Sidebar :expand-on-hover.sync="expandOnHover"></Sidebar>
    <v-content style="background-color: white">
      <headerIntro></headerIntro>
      <v-container rounded-0 class="fill-height" fluid>
        <router-view />

      </v-container>
    </v-content>
    <Footer></Footer>
  </v-app>
</template>

<script>
// import Header from "./header/Header";
// import Sidebar from "./sidebar/Sidebar";
import { mapState, mapMutations } from "vuex";
import headerIntro from "./Header/headerIntro";
import Footer from "./footer/Footer";

export default {
  name: "Layout",

  components: {
    // Header,
    headerIntro,
    Footer
  },

  props: {
    source: String
  },
  data: () => ({
    expandOnHover: false
  }),
  computed: {
    ...mapState(["Customizer_drawer"])
  },

  methods: {
    ...mapMutations({
      setCustomizerDrawer: "SET_CUSTOMIZER_DRAWER"
    })
  }
};
</script>

<style>
.fill-height {
  align-items: start !important;
  margin-top: 42px;

}
</style>
