const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  output: 'export',
  basePath: isProd ? '/diu-cgpa' : '',
  images: {
    unoptimized: true,
  },
};
