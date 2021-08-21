const { writeFileSync } = require('fs')

require('dotenv').config()

const varsToExport = [
  'app',
  'urldatabase',
  'CLOUDINARY_API_KEY',
  'CLOUDINARY_API_SECRET',
  'CLOUDINARY_NAME'
]

function getSerializedVal (varName) {
  const val = process.env[varName]
  return typeof val === 'string' ? `'${val}'` : val
}

const vals = varsToExport
  .map(varName => `${varName}: ${getSerializedVal(varName)}`)
  .join(',\n  ')

const jsFile = `${__dirname}/electron/env.ts`

console.log(`Export .env to ${jsFile}`)

writeFileSync(jsFile,
  `
  export  const config  = {
    ${vals}
 };
`, 'utf8'
)