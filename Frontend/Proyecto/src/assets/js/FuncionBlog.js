var vistaV = document.getElementById('vista');
var vistaE = document.getElementById('editVista')
var edit = document.getElementById('click');
var save = document.getElementById('save');
var cancel = document.getElementById('cancel');

edit.addEventListener("click", function(event) {
    console.log('click');
    event.preventDefault();
    vistaV.style.display = 'none';
    vistaE.style.display = 'block';
    //document.getElementById('Register').style.display = 'block';
});

save.addEventListener("click", function(event) {
    console.log('click');
    event.preventDefault();
    vistaE.style.display = 'none';
    vistaV.style.display = 'block';
    document.getElementById("formularioBlog").reset();
    //document.getElementById('Register').style.display = 'block';
});
cancel.addEventListener("click", function(event) {
    console.log('click');
    event.preventDefault();
    vistaE.style.display = 'none';
    vistaV.style.display = 'block';
    //document.getElementById('Register').style.display = 'block';
});


//vista.style.display = 'block';
