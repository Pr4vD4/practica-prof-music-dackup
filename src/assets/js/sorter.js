export class SorterGame {
    constructor(sorter) {
        this.success = false

        this.stringed = 0
        this.sortedStringed = new Set()

        this.wind = 0
        this.sortedWind = new Set()

        this.keyboardIns = 0
        this.sortedKeyboard = new Set()

        this.percussion = 0
        this.sortedPercussion = new Set()

        this.countInstruments(sorter)
    }

    countInstruments(sorter) {
        this.stringed = sorter.querySelectorAll('.stringed').length
        this.wind = sorter.querySelectorAll('.wind').length
        this.keyboardIns = sorter.querySelectorAll('.keyboardIns').length
        this.percussion = sorter.querySelectorAll('.percussion').length

    }


}

export function startDragNDrop(sorterGame) {
    let position = require('touch-position')()
    let dragItems = document.querySelectorAll('.drag-item')


    dragItems.forEach((dragItem) => {

        let maxX = window.innerWidth - dragItem.getBoundingClientRect().width
        let maxY = window.innerHeight - dragItem.getBoundingClientRect().height

        dragItem.style.transform = `translateX(${randrange(0, maxX)}px) translateY(${randrange(0, maxY)}px)`
        dragItem.addEventListener('touchmove', drag)
        dragItem.addEventListener('touchend', checkContainerCollision)
    })

    function drag(event) {

        if (position[0] + event.target.getBoundingClientRect().width / 2 < window.innerWidth &&
            position[0] - event.target.getBoundingClientRect().width / 2 > 0 &&
            position[1] - event.target.getBoundingClientRect().height / 2 > 0 &&
            position[1] + event.target.getBoundingClientRect().width / 2 < window.innerHeight
        ) {
            anime({
                targets: event.target,
                translateX: position[0] - event.target.getBoundingClientRect().width / 2,
                translateY: position[1] - event.target.getBoundingClientRect().height / 2,
                easing: 'linear',
                duration: 20,
                update: () => {

                }
            })
        }
    }

    function checkContainerCollision(event) {

        let dragContainer = document.querySelector('#' + event.target.dataset.target)
        let dragContainerPositions = dragContainer.getBoundingClientRect()

        let dragItemPosition = event.target.getBoundingClientRect()

        if (dragItemPosition.x >= dragContainerPositions.x &&
            dragItemPosition.x < dragContainerPositions.x + dragContainerPositions.width &&
            dragItemPosition.y + dragItemPosition.height / 2 > dragContainerPositions.y &&
            dragItemPosition.y + dragItemPosition.height / 2 < dragContainerPositions.y + dragContainerPositions.height
        ) {
            console.log('inside')
            if (event.target.dataset.target === 'stringed') {
                sorterGame.sortedStringed.add(event.target)
            } else if (event.target.dataset.target === 'wind') {
                sorterGame.sortedWind.add(event.target)
            } else if (event.target.dataset.target === 'keyboardIns') {
                sorterGame.sortedKeyboard.add(event.target)
            } else if (event.target.dataset.target === 'percussion') {
                sorterGame.sortedPercussion.add(event.target)
            }
        }

        if (sorterGame.sortedWind.size === sorterGame.wind &&
            sorterGame.sortedStringed.size === sorterGame.stringed &&
            sorterGame.sortedKeyboard.size === sorterGame.keyboardIns &&
            sorterGame.sortedPercussion.size === sorterGame.percussion
        ) {
            console.log('congratulations')
            sorterGame.success = true
        }
    }

}

function randrange(min, max) {
    return Math.random() * (max - min) + min;
}