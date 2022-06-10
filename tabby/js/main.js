// Start writing JavaScript here!

const tabs = Array.from(document.querySelectorAll('.tab'))
const tabby = document.querySelector('.tabby')
const tabContents = Array.from(tabby.querySelectorAll('.tab-content'))

tabs.forEach(tab => {
    tab.addEventListener('click', event => {
        const target = tab.getAttribute('data-theme')
        // const target = tab.dataset.target
        const tabContent = tabby.querySelector('#' + target)
        // console.log(tabContent)


        tabs.forEach(t => {
            t.classList.remove('is-selected')
            tab.classList.add('is-selected')
        })

        tabContents.forEach(c => {
            c.classList.remove('is-selected')
            tabContent.classList.add('is-selected')
        })

    })
})

