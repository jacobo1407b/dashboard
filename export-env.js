const { writeFileSync } = require('fs')
const chalk = require('chalk')

require('dotenv').config()

if (!process.env.app) {
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

