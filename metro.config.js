module.exports = {
    resolver: {
        sourceExts: ['ts', 'tsx', 'js']
    },
    transformer: {
        babelTransformerPath: require.resolve('react-native-typescript-transformer')
    },
    serializer: {

    },
    server: {

    }
};