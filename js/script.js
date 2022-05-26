const $main = document.getElementById('main')
const $template = document.getElementById('card').content 
const $fragmentCard = document.createDocumentFragment()

let $clone = document.importNode($template, true)
$fragmentCard.append($clone)
$main.appendChild($fragmentCard)

document.addEventListener('click', e => {

    if(e.target.matches('.link__share') || e.target.matches('.link--2')){
        document.querySelector('.people__share').classList.toggle('active')
        if(document.querySelector('.people__share').classList.contains('active')){
            document.querySelector('.data__people').style.setProperty('margin-bottom','0')
        }
        else{
            document.querySelector('.data__people').style.setProperty('margin-bottom','20px')
        }
    }

})
