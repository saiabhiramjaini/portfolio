/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol:"https",
                hostname:"images.unsplash.com"
            },
            {
                protocol:"https",
                hostname:"github.com"
            },
            {
                protocol:"https",
                hostname:"private-user-images.githubusercontent.com"
            },
            {
                protocol:"https",
                hostname:"llama-2.ai"
            },
            {
                protocol:"https",
                hostname:"cdn.dribbble.com"
            },
        ]
    }
};

export default nextConfig;
