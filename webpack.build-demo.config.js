import path from 'path';
import HtmlWebPackPlugin from 'html-webpack-plugin';
import { fileURLToPath } from 'node:url'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

const config = {
  devtool: 'source-map',
  mode: 'production',
  entry: path.resolve(dirname, 'demo/index.tsx'),
  output: {
    filename: 'demo.bundle.js',
    path: path.resolve(dirname, 'dist-demo'),
  },
  module: {
    rules: [
      {
        exclude: /\/node_modules\/(?!.+\.tsx?$).*$/,
        test: /\.(t|j)sx?$/,
        use: [
          {
            loader: 'swc-loader',
            options: {
              jsc: {
                parser: {
                  syntax: 'typescript',
                  tsx: true,
                },
              },
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      '@faceless-ui/modal': path.resolve(dirname, 'src/index.ts'),
    },
    extensionAlias: {
      '.js': ['.ts', '.js', '.tsx', '.jsx'],
      '.mjs': ['.mts', '.mjs'],
    },
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: 'demo/index.html',
    }),
  ],
}

export default config;
