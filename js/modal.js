
window.addEventListener('load', function() {
    console.log("Modal cargado");
    let modal = document.querySelector('.modale');
    let images = document.querySelectorAll('.img-card img');
    let modal_img = document.querySelector('#myModalImg');
    let imgBox = document.querySelectorAll('.list img');
    let caption = document.querySelector('.caption-text');
    let close = document.querySelector('.close');

    images.forEach(function(images) {
        images.addEventListener('click', function() {
            document.querySelector('.header').style.display = 'none';
            modal.style.display = 'flex';
            modal_img.src = images.src;
        });
    });

    imgBox.forEach( img => img.addEventListener('click', cambiarImg) );

    function cambiarImg (event) {
    	modal_img.src = event.target.src;
    }

    close.addEventListener('click', function() {
    	modal.style.display = 'none';
        document.querySelector('.header').style.display = 'block';
    });
});