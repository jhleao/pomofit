module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ],
    '@babel/preset-typescript'
  ],
  plugins: [
    ['module-resolver', {
      alias: {
        '@controllers': './src/controllers',
        '@utils': './src/utils',
        '@models': './src/models',
        '@routes': './src/routes',
        '@types': './src/types',
      }
    }]
  ],
  ignore: [
    '**/*.spec.ts'
  ]
}