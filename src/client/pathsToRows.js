import { readFileSync } from 'fs'

export default paths => {
  return new Promise((resolver, reject) => {
    try {
      const rows = paths
      .map(path => readFileSync(path).toString('utf-8'))
      .reduce(( fullText, fileText) => `${fullText}\n${fileText}` )
      .split('\n') 
    resolver(rows)
    } catch (e) {
      reject(e)
    }
  })
}