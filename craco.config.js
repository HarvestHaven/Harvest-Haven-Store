const CracoWorkboxPlugin = require('craco-workbox');

module.exports = {
    babel: {
        plugins: [
            ["@babel/plugin-proposal-decorators", { legacy: true }]
        ]
    }
};