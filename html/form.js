window.onload = function() {
    let btn_buy = document.querySelector('.buy-btn')
    let btn = document.querySelector('.pay');

    function stop(event){
        event.preventDefault();
    }
    btn_buy.addEventListener('click', stop, false);

    

    btn_buy.addEventListener('click', function(){
        let form = document.querySelector('#modal_form');

        form.style.display = 'block';
        overlay.style.display = 'block';

        let close = document.querySelector('#modal_close');

        close.addEventListener('click', function(){
            let form = document.querySelector('#modal_form');
            let overlay = document.querySelector('#overlay');
            form.style.display = 'none';
            overlay.style.display = 'none';
        })
    })

    btn.addEventListener('click', stop, false);
}
