function mostrarNoticia() {
    document.getElementById('noticia').style.display = 'block';
}

let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) slide.classList.add('active');
  });
}

function moveSlide(step) {
  currentSlide = (currentSlide + step + slides.length) % slides.length;
  showSlide(currentSlide);
}

document.addEventListener('DOMContentLoaded', () => {
  showSlide(currentSlide);
});

function mostrarNoticia(id) {
  const noticia = document.getElementById(id);
  noticia.style.display = noticia.style.display === 'none' ? 'block' : 'none';
}

function validarFormulario() {
  const nombre = document.forms[0]["nombre"].value.trim();
  const correo = document.forms[0]["correo"].value.trim();
  const asunto = document.forms[0]["asunto"].value.trim();
  const mensaje = document.forms[0]["mensaje"].value.trim();

  if (!nombre || !correo || !asunto || !mensaje) {
    alert("Por favor, completa todos los campos antes de enviar.");
    return false;
  }

  alert("Formulario enviado correctamente.");
  return true;
}

