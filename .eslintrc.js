module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: 'airbnb-base',
  plugins: [
    'import'
  ],
  rules: {
    'indent': 0,
    'padded-blocks': ['warn'],
    'no-console': ['off'],
    'no-use-before-define': ['error', {
      'functions': false
    }],
    'no-param-reassign': ['error', {
      'props': false
    }],
    'no-dynamic-require': 0,
    'no-plusplus': 0,
    'comma-dangle': ['warn', {
        'arrays': 'never',
        'objects': 'always',
        'imports': 'always',
        'exports': 'always',
        'functions': 'ignore',
    }],
    'no-tabs': 0,
    'no-restricted-syntax': 0,
    'no-await-in-loop': 0,
  },
  globals: {
    angular: true,
    moment: true
  },
};
