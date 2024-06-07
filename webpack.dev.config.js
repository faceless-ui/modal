import path from 'path';
import HtmlWebPackPlugin from 'html-webpack-plugin';
import { fileURLToPath } from 'node:url'
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import ESLintPlugin from 'eslint-webpack-plugin';

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default {
  devtool: 'inline-source-map',
  mode: 'development',
  entry: path.resolve(dirname, 'demo/index.tsx'),
  output: {
    filename: 'demo.bundle.js',
    path: path.resolve(dirname, 'demo'),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
        },
      }
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
    new ReactRefreshWebpackPlugin(),
    new HtmlWebPackPlugin({
      template: 'demo/index.html',
    }),
    new ESLintPlugin({
      fix: true,
      emitWarning: true,
    }),
  ],
  devServer: {
    port: 3000,
    host: '0.0.0.0',
  },
};
