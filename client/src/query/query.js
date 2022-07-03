import axios from "axios";

const fetchPhrase = async (lang) => {
  let arr = []
  console.log(lang)
  await axios.get(`/api/pronunciation/allphrases/${lang}`)
    .then(r => arr = r.data)
    .catch(err => console.error(err))
  return arr
}

const addNewPhrase = async (lang, phrase, set) => {
  axios.post(`/api/pronunciation/createphrase`, {
    language: lang,
    phrase: phrase
  })
    .then(r => {
      set(r.data)
      console.log(r.data)
    })
    .catch(err => console.error(err))
}

const deletePhrase = async (lang, id, set) => {
  axios.delete(`/api/pronunciation/deletephrase/${lang}/${id}`)
    .then(r => {
      set(r.data)
      console.log(r)
    })
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
  }).then(res => console.log(res?.data))
}

export default {fetchPhrase, addNewPhrase, deletePhrase, sendAudio}