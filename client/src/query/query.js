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
const deletePhrase = (lang, id) => {
  axios.delete(`/api/pronunciation/deletephrase/${lang}/${id}`)
    .then(r => console.log(r.data))
    .catch(err => console.error(err))
}

const sendAudio = (audio) => {
  axios({
    url: "/api/pronunciation/result",
    method: 'POST',
    data: audio,
    headers: {
      "Content-Type": "multipart/form-data"
    }
  })
}

export default {fetchPhrase, addNewPhrase, deletePhrase, sendAudio}