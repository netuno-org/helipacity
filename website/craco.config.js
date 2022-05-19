const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': '#ff6200',
              '@font-size-base': '16px',
              '@border-radius-base': '20px'
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
