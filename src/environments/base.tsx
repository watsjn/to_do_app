export default function(baseApi: string) {
  return {
    // intervals: {
    //   logout: 3600, // 1 hour in seconds
    // },
    api: {
      auth: `${baseApi}/api/auth`,
      // schedule: `${baseApi}/api/schedule`,
    },
    // token: {
    //   auth: process.env.AUTH_TOKEN,
    // },
    isProduction: true,
    isDevelopment: false,
  };
}
