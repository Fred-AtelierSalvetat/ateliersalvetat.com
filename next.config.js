//TODO Add purge CSS -> useless for now
//TODO Add securityHeader params
//TODO Add Cache-Control: "public, max-age=31536000, immutable", for static item cache

const securityHeaders = [
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Content-Security-Policy",
    value:
      "default-src 'self'; font-src 'self' 'https://fonts.googleapis.com'; img-src 'self'; script-src 'self'",
  },
];

module.exports = {
  // plugins: [
  //   "postcss-flexbugs-fixes",
  //   [
  //     "postcss-preset-env",
  //     {
  //       autoprefixer: {
  //         flexbox: "no-2009",
  //       },
  //       stage: 3,
  //       features: {
  //         "custom-properties": false,
  //       },
  //     },
  //   ],
  //   [
  //     "@fullhuman/postcss-purgecss",
  //     {
  //       content: [
  //         "./pages/**/*.{js,jsx,ts,tsx}",
  //         "./components/**/*.{js,jsx,ts,tsx}",
  //       ],
  //       defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
  //       safelist: ["html", "body"],
  //     },
  //   ],
  // ],

  i18n: {
    // These are all the locales you want to support in
    // your application
    locales: ["fr"],
    // This is the default locale you want to be used when visiting
    // a non-locale prefixed path e.g. `/hello`
    defaultLocale: "fr",
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  images: {
    deviceSizes: [640, 750, 1080, 1200, 1920, 2048],
    imagesSizes: [300, 400, 500, 600, 800, 1000],
    domains: ["master.dtncfjjfssgsx.amplifyapp.com"],
  },

  // async headers() {
  //   return [
  //     {
  //       // Apply these headers to all routes in your application.
  //       source: "/:path*",
  //       headers: securityHeaders,
  //     },
  //   ];
  // },
};
