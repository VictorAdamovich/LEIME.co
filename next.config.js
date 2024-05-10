/** @type {import('next').NextConfig} */

const { withSentryConfig } = require("@sentry/nextjs");
const withPlugins = require('next-compose-plugins')


const isSentryEnable = process.env.SENTRY_ENABLED?.toLowerCase() === 'true';
const isSentryDebugEnable = process.env.NEXT_PUBLIC_ENVIRONMENT?.toLowerCase() === 'local';
const isBundleAnalyzerEnable = process.env.BUNDLE_ANALYZER_ENABLED?.toLowerCase() === 'true';

const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: isBundleAnalyzerEnable,
})

const SentryWebpackPluginOptions = {
    url: process.env.SENTRY_URL,
    release: process.env.NEXT_PUBLIC_COMMIT_ID,
    ignore: [],
};

const SentryOptions = {
    hideSourceMaps: true,
    widenClientFileUpload: true,
};

const nextConfig = {
    trailingSlash: true,
    output: 'standalone',
    images: {
        domains: ['**'],
    },
    webpack: (config, { webpack }) => {
        config.plugins.push(
            new webpack.DefinePlugin({
                __SENTRY_DEBUG__: isSentryDebugEnable,
            })
        );
        return config;
    },
};

const nextPlugins = [
    withBundleAnalyzer,
]

module.exports = withPlugins(
    nextPlugins,
    isSentryEnable ? withSentryConfig(nextConfig, SentryWebpackPluginOptions, SentryOptions) : nextConfig
)