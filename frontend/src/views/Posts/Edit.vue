<template>
  <div>
    <form-post v-if="post" :post="post" />
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
    title: "Post edit"
  },

  async created() {
    await Post.$get({
      params: {
        id: this.$route.params.id
      }
    });
  },

  computed: {
    post() {
      return Post.find(this.$route.params.id);
    }
  }
};
</script>
