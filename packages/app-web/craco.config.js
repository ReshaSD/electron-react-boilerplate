// Setup aliases:
//  https://github.com/facebook/create-react-app/issues/5118#issuecomment-464025389
//  https://github.com/facebook/create-react-app/issues/5118#issuecomment-468771438

const path = require('path');
const { getLoader, loaderByName } = require('@craco/craco');

const absolutePath = p => path.join(__dirname, p);

const ALIASES = {
  // '@': path.resolve(__dirname, 'src'),
  '@shared': '@app/shared/src',
};

const packagesPaths = [
  absolutePath('../shared'),
];

module.exports = {
  jest: {
    configure: {
      moduleDirectories: [
        // Need to map peer dependencies from my modules:
        '<rootDir>/node_modules',
      ],
      moduleNameMapper: {
        '^@shared(.*)$': '@app/shared/src$1',

        // Handle ESM import for styles
        // https://github.com/keyz/identity-obj-proxy/issues/8#issuecomment-430241345
        '^.+\\.module\\.(css|sass|scss)$': '<rootDir>/.jest/identity-obj-proxy-esm.js',
      },
    },
  },
  webpack: {
    alias: {},
    plugins: [],
    configure: (webpackConfig, { env, paths }) => {
      const { resolve } = webpackConfig;
      resolve.alias = { ...resolve.alias, ...ALIASES };

      const { isFound, match } = getLoader(
        webpackConfig,
        loaderByName('babel-loader'),
      );
      if (isFound) {
        // match.loader.include = undefined; // TODO: Weird, we do not need to set paths, just set it undefined and it works properly
        const include = Array.isArray(match.loader.include)
          ? match.loader.include
          : [match.loader.include];
        match.loader.include = include.concat(packagesPaths);
      }

      return webpackConfig;
    },
  },
};
