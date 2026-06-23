import { withPayload } from "@payloadcms/next/withPayload"
import { dirname } from "path"

/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        browserDebugInfoInTerminal: true,

        typedEnv: true
    },

    images: {
        minimumCacheTTL: 2678400,

        remotePatterns: [
            {
                protocol: "https",
                hostname: "www.punktwolke-hamm.de"
            },

            {
                protocol: "https",
                hostname: "punktwolkehamm.de"
            },

            {
                hostname: "localhost"
            }
        ]
    },

    webpack: (webpackConfig) => {
        webpackConfig.resolve.extensionAlias = {
            ".cjs": [".cts", ".cjs"],
            ".js": [".ts", ".tsx", ".js", ".jsx"],
            ".mjs": [".mts", ".mjs"]
        }

        return webpackConfig
    }
}

export default withPayload(nextConfig, { devBundleServerPackages: false })
