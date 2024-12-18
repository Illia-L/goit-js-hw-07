const form = document.querySelector('.login-form');

function handleSubmit(e) {
  e.preventDefault();

  const email = form.elements.email.value.trim();
  const password = form.elements.password.value.trim();

  if (!email || !password) return alert('All form fields must be filled in');

  const data = {email, password}

  console.log(data);
  form.reset()
}

form.addEventListener('submit', handleSubmit);
