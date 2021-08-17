#!/usr/bin/env node

// 第一行是申明的注释，mac 文件的权限需要修改为 755，才能正常使用 cli

// 传递参数
process.argv.push('--cwd')
process.argv.push(process.cwd())
process.argv.push('--gulpfile')
// process.argv.push(require.resolve('../lib/index.js'))
process.argv.push(require.resolve('..'))

require('gulp/bin/gulp')


