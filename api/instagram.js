const INSTAGRAM_CLIENT_ID = process.env.INSTAGRAM_CLIENT_ID
const INSTAGRAM_SECRET = process.env.INSTAGRAM_SECRET
const INSTAGRAM_REDIRECT_URI = process.env.INSTAGRAM_REDIRECT_URI

const DEV_CALLBACK = process.env.DEV_CALLBACK

export default async function (req, res) {
  const { code } = req.query

  return res.redirect(DEV_CALLBACK + `?code=${code}`)
  
  const form = {
    client_id: INSTAGRAM_CLIENT_ID,
    client_secret: INSTAGRAM_SECRET,
    code,
    grant_type: 'authorization_code',
    redirect_uri: INSTAGRAM_REDIRECT_URI
  }
  const fetch_response = await fetch('https://graph.facebook.com/oauth/access_token',{
    method: 'POST',
    body: JSON.stringify(form),
  })
  const response = await fetch_response.json()
  return res.status(200).json(response)
}