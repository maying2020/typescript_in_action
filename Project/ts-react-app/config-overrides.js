const { override, fixBabelImports } = require('customize-cra');
// antd组件官方提供的按需加载 
module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css'
    })
);
 