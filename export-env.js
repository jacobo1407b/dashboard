const { writeFileSync, accessSync } = require('fs')
const chalk = require('chalk')

require('dotenv').config()

function fileExists(path) {
  try {
    if(accessSync(path)) {
      return{
        error:false,
        e:'FILE ENV EXIST'
      }
    }
  } catch (e) {
    return {
      error:true,
      e:e
    }
  }
}

const result = fileExists('.env')
if(result?.error){
  console.log(chalk.red('Error: ENOENT: no such file or directory'))
  throw result.e
}else if (!process.env.app) {
  console.log(chalk.red('Reference error: Cannot export environment variables'));
  console.log(chalk.redBright('".env" file found'))
  throw `".env" file found`
} else {
  const varsToExport = [
    'app',
    'urldatabase',
    'CLOUDINARY_API_KEY',
    'CLOUDINARY_API_SECRET',
    'CLOUDINARY_NAME'
  ]

  function getSerializedVal(varName) {
    const val = process.env[varName]
    return typeof val === 'string' ? `'${val}'` : val
  }

  const vals = varsToExport
    .map(varName => `${varName}: ${getSerializedVal(varName)}`)
    .join(',\n  ')

  const jsFile = `${__dirname}/electron/env.ts`

  console.log(chalk.blue('Export .env to: ') + chalk.green(jsFile))

  writeFileSync(jsFile,
    `
    export  const config  = {
      ${vals}
   };
  `, 'utf8'
  )
}

