const range = document.getElementById('range')

range.addEventListener('input', (e) => {
    const value = +e.target.value
    const label = e.target.nextElementSibling

    /* to have label follow thumb of range */
    // 1. get the width of the range & label
    const range_width = getComputedStyle(e.target).getPropertyValue('width')
    const label_width = getComputedStyle(label).getPropertyValue('width')

    // 2. to get just the number of width (remove px)
    const num_width = +range_width.substring(0, range_width.length - 2)
    const num_label_width = +label_width.substring(0, label_width.length - 2)

    // 3. get the min & max values
    const max = +e.target.max
    const min = +e.target.min

    // 4. get the left position of the input[type='range'] + label
    // const left = value * (num_width / max) - num_label_width / 2
    // to center label as it follows the thumb see scale
    const left = value * (num_width / max) - num_label_width / 2 + scale(value, min, max, 10, -10)

    // 5. apply thumb to left value to label
    label.style.left = `${left}px`


    console.log(left)

    label.innerHTML = value
})

// to get the label centered over the thumb see
// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
  }