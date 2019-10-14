<template>
  <b-card :title="post.title">
    <b-card-text v-html="post.content" />

    <b-link
      :to="{ name: 'posts-edit', params: { id: post.id } }"
      class="card-link"
      >Edit</b-link
    >
    <b-link @click.prevent="handleDelete(post)" class="card-link text-danger"
      >Delete</b-link
    >
  </b-card>
</template>

<script>
import Post from "@/store/models/Post";

export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  },

  methods: {
    handleDelete(post) {
      Post.$delete({
        params: {
          id: post.id
        }
      });
    }
  }
};
</script>
