const button = document.querySelector('button.greet');
button.addEventListener('click', e => {
    alert("Hi");
});
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})