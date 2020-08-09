const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const path = require('path')

const resolve = pathString => {
  return path.resolve(__dirname, pathString)
}

module.exports = async ({ config }) => {

  config.module.rules.push({
    test: /\.css$/,
    loaders: ['style-loader', 'css-loader', 'postcss-loader'],
    include: resolve('../'),
  })

  config.module.rules.push({
    test: /\.scss$/,
    use: [
      'style-loader',
      'css-loader',
      'sass-loader',
      {
        loader: 'sass-resources-loader',
        options: {
          sourceMap: true,
          resources: [
            resolve('../src/assets/scss/modules/_global.scss'),
          ]
        }
      }
    ],
    include: resolve('../')
  })

  config.resolve = {
    extensions: ['.js', '.ts', '.vue', '.json'],
    alias: {
      vue$: 'vue/dist/vue.esm.js',
      'assets': resolve('../src/assets'),
      '@': resolve('../src'),
    }
  }

  config.module.rules.push({
    test: /\.ts$/,
    exclude: /node_modules/,
    use: [
      {
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/],
          transpileOnly: true
        },
      }
    ]
  })

  config.plugins.push(new ForkTsCheckerWebpackPlugin())

  return config
}
