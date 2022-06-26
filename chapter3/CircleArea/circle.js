const circleArea = (r) => {
    return 3.14 * r * r
}

const circleCircumference = (r) => {
    return 2 * circleArea(r)
}

module.exports = {
    circleArea,
    circleCircumference
}