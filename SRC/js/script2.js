// script tabla acordion
document.querySelector('.toggle-btn').addEventListener('click', function() {
    const table = document.getElementById('apprenticeList');
    if (table.style.display === 'none' || table.style.display === '') {
    table.style.display = 'table';
    this.textContent = 'Listado de aprendices ▲';
    } else {
    table.style.display = 'none';
    this.textContent = 'Listado de aprendices ▼';
    }
});

/* */
function mostrarAprendiz() {
    window.location.href = "/SRC/Pages/Aprendiz/index.html";
}