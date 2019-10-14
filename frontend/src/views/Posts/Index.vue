<template>
  <div>
    <b-jumbotron class="text-center" bg-variant="white" header="All posts">
      <p>List of all posts.</p>
      <b-button variant="primary" :to="{ name: 'posts-new' }"
        >New post</b-button
      >
    </b-jumbotron>

    <b-card-group v-if="posts.length" columns>
      <post-card
        v-for="(post, index) in posts"
        :key="index"
        :post="post"
      ></post-card>
    </b-card-group>

    <p v-else>No posts.</p>
  </div>
</template>

<script>
import Post from "@/store/models/Post";
import PostCard from "@/components/Post/Card";

export default {
  components: {
    PostCard
  },

  metaInfo: {
    title: "Posts index"
  },

  mounted() {
    Post.$fetch();
  },

  computed: {
    posts() {
      return Post.query()
        .orderBy("created_at", "desc")
        .get();
    }
  }
};
</script>
