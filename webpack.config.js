const IS_DEV = process.env.NODE_ENV === 'development'

const rules = [
    {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
    },
    {
        test: /\.(ts|tsx)$/,
        use: ['ts-loader'],
        exclude: /node_modules/,
    },
    {
        test: /\.svg$/,
        use: [
            {
                loader: 'babel-loader',
            },
            {
                loader: 'react-svg-loader',
            },
        ],
    },
]

const config = {
    devtool: IS_DEV ? 'eval-source-map' : 'source-map',
    module: {
        rules,
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.jsx'],
    },
}

module.exports = {
    renderer: {
        entry: './src/renderer/scripts/index.tsx',
        ...config,
    },
    main: {
        entry: './src/main/index.ts',
        ...config,
    },
    preload: {
        entry: './src/preload/index.js',
    },
}
