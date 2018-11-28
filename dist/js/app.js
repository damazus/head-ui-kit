document.addEventListener('DOMContentLoaded', function () {
    const $header = document.querySelector('#header')
    const $brand = document.querySelector('#header__brand')
    const $trigger = document.querySelector('#header__trigger')
    const $menu_links = document.querySelectorAll('.header-menu-link')
    const active_classname = 'header--mobile'

    $trigger.addEventListener('click', function (e) {
        e.preventDefault()
        $header.classList.toggle(active_classname)
    })

    const closeMenu = function (e) {
        e.preventDefault()
        $header.classList.contains(active_classname) ? $header.classList.remove(active_classname) : null
    }

    $brand.addEventListener('click', closeMenu)

    $menu_links.forEach(($item) => {
        $item.addEventListener('click', closeMenu)
    })
})