<template>
  <div>
    <nuxtdown-body class="body" :body="post.body"/>
  </div>
</template>

<script>
export default {
  head: function() {
    return {
      title: `${this.post.title}`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.post.description
        }
      ]
    };
  },
  asyncData: async ({ app, route, payload }) => {
    return {
      post: (await app.$content("/posts").get(route.path)) || payload
    };
  }
};
</script>

<style>
p img {
  display: block;
  max-width: 100%;
  max-height: 600px;
  object-fit: contain;
  margin: auto;
}
</style>

