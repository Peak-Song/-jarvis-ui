// todo https://blog.csdn.net/qq_38402659/article/details/100163936

module.exports = {
  presets: [
    '@vue/app',
    ['@babel/preset-env', { 'modules': false }]
  ],
  'plugins': [['component',
    {
      'libraryName': 'element-ui',
      'styleLibraryName': 'theme-chalk'
    }
  ]]
}
