// /** @type {import('next').NextConfig} */
// const nextConfig = {};
// cdn.sanity.io
// export default nextConfig;

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     images: {
//       domains: ["cdn.sanity.io"], // Allow Sanity images
//     },
//   };
  
//   module.exports = nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ["cdn.sanity.io"], // Allow Sanity images
    },
    experimental: {
      appDir: true, // Ensure if you're using App Router
    },
  };
  
  module.exports = nextConfig;
  


  
