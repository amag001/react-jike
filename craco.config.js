const path = require("path");
const pathResolve = (pathUrl) => path.join(__dirname, pathUrl);
// 拓展webpack配置
module.exports = {
  webpack: {
    alias: {
      "@": pathResolve("src"),
      "@assets": pathResolve("src/assets"),
      "@components": pathResolve("src/components"),
      "@apis": pathResolve("src/apis"),
      "@router": pathResolve("src/router"),
      "@pages": pathResolve("src/pages"),
      "@utils": pathResolve("src/utils"),
    },
  },
  devServer: {},
};
