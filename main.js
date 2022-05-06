import { $, range } from './utils.js'

const grid = $`#Grid`

let grid_size = 16
let current_color = 'black'


function updateGridSize (new_size) {
    grid_size = new_size
    grid.style.setProperty("--grid-size", new_size)
}


function onGridHover () { this.style.backgroundColor = current_color }


function repopulateGrid () {
    [...grid.children].map(x => x.remove())

    for (let i of range(grid_size)) {
        for (let j of range(grid_size)) {
            let elem = document.createElement('div')
            elem.addEventListener('mouseenter', onGridHover)
            grid.appendChild(elem)
        }
    }
}


$`#Color`.addEventListener('input', function () {
    current_color = this.value
})


$`#Clear`.addEventListener('click', function () {
    for (let child of grid.children) {
        child.style.backgroundColor = 'white'
    }
})


$`#Scale`.addEventListener('input', function () {
    $`label`.innerText = this.value
})


$`#Scale`.addEventListener('change', function () {
    updateGridSize(this.value)
    repopulateGrid()
})


onload = () => {
    repopulateGrid()
}