import axios from "axios";

const fetchPhrase = async (lang) => {
  let arr = []
  console.log(lang)
  await axios.get(`/api/pronunciation/allphrases/${lang}`)
    .then(r => arr = r.data)
    .catch(err => console.error(err))
  return arr
}

const addNewPhrase = (lang, phrase) => {
  axios.post(`/api/pronunciation/createphrase`, {
    language: lang,
    phrase: phrase
  })
    .then((res) => {
      console.log(res)
    })
}

export default {fetchPhrase, addNewPhrase}