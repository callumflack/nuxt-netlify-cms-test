<template>
  <div>
    <nav>
      <ul>
        <li
          v-for="post in posts"
          :key="post.title"
          :title="post.title"
          :permalink="post.permalink"
        >
          <nuxt-link :to="post.permalink">{{ post.title }}</nuxt-link>
        </li>
      </ul>
    </nav>
    <h2>Welcome!</h2>
  </div>
</template>

<script>
export default {
  asyncData: async ({ app, route, payload }) => {
    return {
      posts: (await app.$content("/posts").getAll()) || payload
    };
  }
};
</script>
