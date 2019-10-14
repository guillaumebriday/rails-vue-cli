<template>
  <div>
    <form-post :post="post" />
  </div>
</template>

<script>
import FormPost from "@/components/Post/Form";
import Post from "@/store/models/Post";

export default {
  components: {
    FormPost
  },

  metaInfo: {
    title: "New post"
  },

  computed: {
    post() {
      return new Post();
    }
  }
};
</script>
