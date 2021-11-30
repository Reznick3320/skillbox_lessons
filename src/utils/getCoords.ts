export function getCoords(elem: HTMLElement) {
    let box = elem.getBoundingClientRect();

    return {
        top: box.top + pageXOffset,
        left: box.left + pageYOffset,
    }
}