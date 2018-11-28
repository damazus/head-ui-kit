document.addEventListener('DOMContentLoaded', function () {
    const $header = document.querySelector('#header')
    const $trigger = document.querySelector('#header__trigger')

    $trigger.addEventListener('click', function () {
        console.log($header)
        $header.classList.toggle('header--mobile')
    })
})