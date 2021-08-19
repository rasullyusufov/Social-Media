
const swicht = document.getElementById('swicht')
const body = document.querySelector('.body')
const text = document.getElementsByClassName('text')
const h1 = document.getElementsByTagName('h1')
const items = document.getElementsByClassName('items')
const cards = document.getElementsByClassName('cards')
const mode = document.querySelector('.mode')


let white 



swicht.addEventListener('click', function () {

    if (body.style.backgroundColor == 'white') {
        body.style.backgroundColor = 'rgb(19, 34, 56)';

        swicht.innerHTML = `<i class="fas fa-toggle-off fa-2x"></i> `

        for (let i = 0; i < items.length; i++) {
            items[i].classList.remove('backgrounds')
        }
        //
        for( i = 0; i < cards.length; i++){
            cards[i].classList.remove('backgrounds')
        }
       

        //
        for (let i = 0; i < h1.length; i++) {
            h1[i].style.color = 'white'
        }
        //
        for (let i = 0; i < text.length; i++) {
            text[i].classList.remove('black')
        }


    }
    else {
        body.style.backgroundColor = 'white';
        swicht.innerHTML = `<i class="fas fa-toggle-on fa-2x"></i> `

        for (let i = 0; i < text.length; i++) {
            text[i].classList.add('black')
        }

        for (let i = 0; i < items.length; i++) {
            items[i].classList.add('backgrounds')

        }

        //
        for (let i = 0; i < h1.length; i++) {
            h1[i].style.color = 'black'
        }
        //
        for( i = 0; i < cards.length; i++){
            cards[i].classList.add('backgrounds')
        }
       
        

    }
})

