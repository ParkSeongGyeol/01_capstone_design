module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: process.env.VUE_APP_API_URL || 'http://backend:3000',
        changeOrigin: true,
      },
    },
  },
};
