module.exports = {
    babel: {
        plugins: [
            ["@babel/plugin-proposal-decorators", { legacy: true }],
            ["react-hot-loader/babel", { safetyNet: false }]
        ]
    }
}