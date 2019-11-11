/**
 * @description createPage
 * @author zhangbing
 * @date 2019-10-25
 */
const fs = require('fs')
var colors = require('colors.ts');
const path = require('path')
const basePath = path.resolve(__dirname, '../')
console.log('basePath', basePath)
const dirName = process.argv[2]
const { _getTpl } = require('./template')

if (!dirName) {
    console.log('文件夹名称不能为空！'.red)
    console.log('示例：yarn page yourPageName'.red)
    process.exit(0)
}

const capPirName = dirName.substring(0, 1).toUpperCase() + dirName.substring(1)
const __getTpl = _getTpl(dirName, capPirName)


let dirAlreadyExists = fs.existsSync(`${basePath}/views/${dirName}`)
if (!dirAlreadyExists) {
    fs.mkdirSync(`${basePath}/views/${dirName}`)
    process.chdir(`${basePath}/views/${dirName}`)
    fs.writeFileSync(`index.vue`, __getTpl.VueTep)
    fs.writeFileSync(`data.ts`, __getTpl.controlerTep)
    fs.writeFileSync(`types.ts`, __getTpl.interfaceTep)

    fs.mkdirSync(`${basePath}/views/${dirName}/components`)
    process.chdir(`${basePath}/views/${dirName}/components`)
    fs.writeFileSync(`index.vue`, __getTpl.pageComponent)
    process.chdir(`${basePath}/service/api`)
    fs.writeFileSync(`${dirName}.ts`, __getTpl.apiTep)

    console.log(`页面创建成功！页面路径: src/views/${dirName}/`.green)

    // process.chdir(`${basePath}/store/module`)
    // fs.writeFileSync(`${dirName}.ts`, vuexTep)
} else {
    let fileAlreadyExists = fs.existsSync(`${basePath}/views/${dirName}/index.vue`)
    if (!fileAlreadyExists) {
        process.chdir(`${basePath}/views/${dirName}`)
        fs.writeFileSync(`index.vue`, __getTpl.VueTep)
        console.log(`页面创建成功！页面路径: src/views/${dirName}/`.green)
    } else {
        console.log(`创建失败，路径src/views/${dirName}/下已存在该文件`.red)
    }
}

process.exit(0)