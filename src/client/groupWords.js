export default words => {
  return new Promise((resolver, reject) => {
    try {

      const groupedWords = words.reduce((obj,word) => {
        if (obj[word]) {
          obj[word] = obj[word] + 1
        } else {
          obj[word] = 1
        }
        return obj
      }, {})

      const groupedWordsArray = Object
        .keys(groupedWords)
        .map(key => ({ name : key, amount : groupedWords[key] }))
        .sort((w1, w2) => w2.amount - w1.amount)

    resolver(groupedWordsArray)

    } catch (e) {
      reject(e)
    }
  })
}