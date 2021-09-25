module.exports = {
  reactStrictMode: true,
  target: "serverless",
  // images: {
  //   loader: "imgix",
  //   path: "https://noop/",
  // },
};

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer({});
