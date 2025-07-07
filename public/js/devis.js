const form = document.getElementById('devisForm');
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = new FormData(form);

  const response = await fetch('/send-devis', {
    method: 'POST',
    body: formData
  });

  const result = await response.json();
  alert(result.message || 'Erreur serveur');
  if (response.ok) form.reset();
});



