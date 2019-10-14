<template>
  <b-form @submit.prevent="onSubmit">
    <b-form-group
      label="The title"
      :invalid-feedback="form.errors.get('title')"
      :state="form.errors.has('title') ? false : null"
    >
      <b-form-input
        v-model="form.title"
        :state="form.errors.has('title') ? false : null"
        trim
        placeholder="The post title"
      />
    </b-form-group>

    <b-form-group
      label="The content"
      :invalid-feedback="form.errors.get('content')"
      :state="form.errors.has('content') ? false : null"
    >
      <b-form-textarea
        v-model="form.content"
        placeholder="Enter something..."
        rows="3"
        max-rows="6"
        :state="form.errors.has('content') ? false : null"
      ></b-form-textarea>
    </b-form-group>

    <b-button type="submit">Submit</b-button>
  </b-form>
</template>

<script>
import Form from "@/utils/Form";
import Post from "@/store/models/Post";

export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  },

  methods: {
    onSubmit() {
      let handler = null;

      if (this.post.id) {
        handler = Post.$update({
          params: { id: this.post.id },
          data: this.form.data()
        });
      } else {
        handler = Post.$create({
          data: this.form.data()
        });
      }

      handler
        .then(() => {
          this.$router.push({ name: "posts-index" });
        })
        .catch(({ response }) => {
          this.form.onFail(response.data.errors);
        });
    }
  },

  data() {
    return {
      form: new Form({
        title: this.post.title,
        content: this.post.content
      })
    };
  }
};
</script>
