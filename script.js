document.getElementById('projects').addEventListener('click', function() {
  alert('Button clicked');
});

function showDetails(id) {
    var element = document.getElementById(id);
    element.classList.toggle("togglestyle");
}