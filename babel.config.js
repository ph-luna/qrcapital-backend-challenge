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
        ["@babel/plugin-proposal-decorators", { "legacy": true }],
        "@babel/plugin-proposal-class-properties",
        ['module-resolver', {
            alias: {
                '@modules': './src/modules',
                '@shared': './src/shared',
                '@config': './src/config'
            }
        }]
    ],

    ignore: ['./src/@types/*']
}