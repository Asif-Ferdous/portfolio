// next.config.mjs
const nextConfig = {
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
      // Note: we provide webpack above so you should not `require` it
      // Perform customizations to webpack config
      if (dev) {
        config.watchOptions = {
          poll: 1000, // Check for changes every second
          aggregateTimeout: 300, // Delay the rebuild after the first change
        };
      }
  
      // Important: return the modified config
      return config;
    },
  };
  
  export default nextConfig;
  