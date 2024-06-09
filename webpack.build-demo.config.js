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
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: [{
          loader: 'ts-loader',
          options: {
            configFile: 'tsconfig.json',
            compilerOptions: {
              outDir: "./dist-demo",
              declarationDir: undefined,
              declaration: false
            },
          },
        }],
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
