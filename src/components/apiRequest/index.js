import Cookies from 'js-cookie'

const apiRequest = async ({method, apiUrl, body = ''}) => {
  const jwtToken = Cookies.get('jwt_token')
  const isBody = body === '' ? null : body
  const options = {
    method,
    headers: {Authorization: `Bearer ${jwtToken}`},
    body: isBody,
  }
  const response = await fetch(apiUrl, options)
  const data = await response.json()
  if (response.ok) {
    return data
  }
  return response.status
}

export default apiRequest
