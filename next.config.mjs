/** @type {import('next').NextConfig} */
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import CopyPlugin from 'copy-webpack-plugin';
const __dirname = dirname(fileURLToPath(import.meta.url));

const nextConfig = {
    experimental: { esmExternals: 'loose' },
    webpack: (config, options) => {
        config.plugins.push(
          new CopyPlugin({
            patterns: [
              {
                from: resolve(__dirname, 'node_modules/@webcomponents/i2cwebcomponents/dist/assets/'),
                to: resolve(__dirname, 'public/dsm-assets/assets/')
              }
            ]
          })
        );
        return config;
      }
};

export default nextConfig;
