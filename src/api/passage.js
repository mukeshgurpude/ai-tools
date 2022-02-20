const base_url = 'https://api.cellstrathub.com/cellstrat/extractive-qa'

export async function get_answer(context, question) {
  return fetch(base_url, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'x-api-key': process.env.REACT_APP_API_KEY
    },
    method: 'POST',
    body: JSON.stringify({context, question})
  }).then(res => res.json())
}

export function wake_up_model() {
  fetch(base_url, {
    headers: {
      'x-api-key': process.env.REACT_APP_API_KEY
    }
  })
}
