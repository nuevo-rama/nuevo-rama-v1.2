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
      document.getElementById("heading").innerHTML = data.heading;
      document.getElementById("content").innerHTML = data.content;
      document.getElementById("menuItem1").innerHTML = data.menuItem1;
      document.getElementById("menuItem2").innerHTML = data.menuItem2;
      document.getElementById("menuItem3").innerHTML = data.menuItem3;
      document.getElementById("title").innerHTML = data.title;
      document.getElementById("subtitle").innerHTML = data.subtitle;
      document.getElementById("textItem1").innerHTML = data.textItem1;

      document.getElementById("step1").innerHTML = data.textItem2.step1;
      document.getElementById("step2").innerHTML = data.textItem2.step2;
      document.getElementById("step3").innerHTML = data.textItem2.step3;
      document.getElementById("step4").innerHTML = data.textItem2.step4;
      document.getElementById("step5").innerHTML = data.textItem2.step5;
      document.getElementById("step6").innerHTML = data.textItem2.step6;
      document.getElementById("step7").innerHTML = data.textItem2.step7;
      document.getElementById("step8").innerHTML = data.textItem2.step8;
      
      
    })
    .catch(error => console.log('Error al cargar los datos:', error));
}

// Load content from default language
loadContent(language);


  