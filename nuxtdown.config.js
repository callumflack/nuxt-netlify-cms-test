module.exports = {
  // api: function(isStatic) {
  //   return { browserBaseURL: isStatic ? "https://callumflack.design" : "" };
  // }
  api: function(isStatic) {
    const baseURL = "http://localhost:3000";
    const browserBaseURL = !isStatic
      ? "https://nuxt-netlify-cms-test.netlify.com/"
      : process.env.BASE_URL;

    return {
      baseURL,
      browserBaseURL
    };
  },
  content: [
    // My blog posts are in content/blog
    [
      "posts",
      {
        page: "/blog/_post",
        permalink: "/blog/:slug"
      }
    ],
    // pages
    [
      "pages",
      {
        page: "/page/_page",
        permalink: "/:slug",
        isPost: false
      }
    ]
  ]
};
