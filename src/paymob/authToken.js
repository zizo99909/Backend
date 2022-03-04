const fetch= require('node-fetch')

const authToken = async()=>{
let authReq = {
  api_key:
    "ZXlKaGJHY2lPaUpJVXpVeE1pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SndjbTltYVd4bFgzQnJJam94TkRjNE9UTXNJbTVoYldVaU9pSnBibWwwYVdGc0lpd2lZMnhoYzNNaU9pSk5aWEpqYUdGdWRDSjkuNVlodlJoel95NkpibUtLRDlIQ2tUdXJZeFd1c3FHTC1FZUc3cGkybzFOR2hrVExCYnZDWGdheElQNUNIcldhMDJXakJWckZFZ1BPZGxwZFh0cEt5UWc=",
};

const response = await fetch("https://accept.paymob.com/api/auth/tokens", {
  method: "POST",
  body: JSON.stringify(authReq),
  headers: { 'Content-Type': 'application/json' }
})
const data = await response.json()
 return data.token
}


module.exports=authToken