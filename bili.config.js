module.exports = {
    banner: true,
    bundleNodeModules: true,
    output: {
        fileName: "studip-vue-components.[format][ext]",
        format: ['cjs', 'esm'],
        extractCSS: false
    },
    plugins: {
        vue: {
            css: true
        }
    }
};
