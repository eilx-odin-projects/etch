export const $ = document.querySelector.bind(document)

export function* range (min, max=null) {
    if (!max) {
        max = min
        min = 0
    }

    for (let i = min; i < max; i++) {
        yield i
    }
}