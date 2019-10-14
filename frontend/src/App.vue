<template>
  <div id="app">
    <navbar />

    <b-container>
      <router-view />
    </b-container>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";

export default {
  components: {
    Navbar
  },

  metaInfo: {
    titleTemplate: "%s - My awesome rails app with vue cli!",
    htmlAttrs: {
      lang: "en"
    }
  }
};
</script>
