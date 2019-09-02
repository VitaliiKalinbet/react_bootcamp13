module.exports = {
  'src/**/*.js?(x)': filenames =>
    filenames.length > 10 ? 'eslint .' : `eslint ${filenames.join(' ')}`,
};
