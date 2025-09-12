import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        // тут можно разрешить внешние домены для картинок, если нужно
        remotePatterns: [],
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.(png|jpe?g|gif|svg)$/i,
            type: "asset/resource",
        });
        return config;
    },
};

export default nextConfig;
