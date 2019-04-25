// package.json的設定會再覆蓋掉這邊的設定
module.exports = {
  devServer: {
    // 不設定historyApiFallback，會吃到電腦的目錄
    historyApiFallback: true,
    hot: true,
    inline: true,
    // console 不印編譯的stats
    stats: {
      // 各chunks的大小
      chunks: false,
      // assets: false,
    },
    // 有錯誤顯示在browser
    overlay: {
      errors: true,
      warnings: false,
    },
    proxy: {
      '/': {
        changeOrigin: true,
        target: process.env.HOST_URL,
        secure: false,
      },
    },
  },
};
