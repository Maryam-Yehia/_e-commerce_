import withFlowbiteReact from "flowbite-react/plugin/nextjs";
import type { NextConfig } from "next";
// import withFlowbiteReact from "flowbite-react/plugin/nextjs";

// const withFlowbite = require("flowbite-react/plugin/nextjs");

// module.exports = withFlowbite({
//   reactStrictMode: true,
// });



const nextConfig: NextConfig = {
   images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ecommerce.routemisr.com',
        pathname: '/**/**',
      },
    ],
  },
};


export default withFlowbiteReact(nextConfig);