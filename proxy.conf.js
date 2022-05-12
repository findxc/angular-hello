// 如果 dev 需要代理也可以配在这里，现在只配了 mock 的
module.exports =
  process.env.API_ENV === "mock"
    ? {
        "/api": {
          target: "http://localhost:5050",
          secure: false,
          pathRewrite: { "^/api": "" },
        },
      }
    : {};
