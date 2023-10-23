const toggle = document.getElementById('toggle');
const toggleText = document.querySelector('.toggle-text');
var language = 'dataEnglish.json'; // Language default

toggle.addEventListener('change', function() {
  if (this.checked) {
    toggleText.textContent = 'Spanish';
    language = 'dataSpanish.json'; // Change to language Spanish
  } else {
    toggleText.textContent = 'English';
    language = 'dataEnglish.json'; // Change to language English
  }

  loadContent(language);
});

// Load content from language selected
function loadContent(language) {
  fetch('./data/' + language)
    .then(response => response.json())
    .then(data => {
      for (let key in data) {
        if (document.getElementById(key)) {
          document.getElementById(key).innerHTML = data[key];
        }
      }
    })
    .catch(error => console.log('Error al cargar los datos:', error));
}

// Load content from default language
loadContent(language);


  