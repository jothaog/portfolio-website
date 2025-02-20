
  const scriptURL = 'https://script.google.com/macros/s/AKfycbwJ6m1jMWcrOuIpik0Sn8bbc1Cc_EOEwRcbz1KyDh69Xoo1REqbC92V7NpSjAuvsDj4NQ/exec'
  const form = document.forms['submit to google sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })
