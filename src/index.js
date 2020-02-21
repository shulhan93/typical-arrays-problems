exports.min = function min(array = 0) {
    if ((array.length == 0) || (array == 0)) {
        return 0
    }

    return array.sort((a, b) => a - b)[0]
}

exports.max = function max(array = 0) {
    if ((array.length == 0) || (array == 0)) {
        return 0
    }

    return array.sort((a, b) => b - a)[0]
}

exports.avg = function avg(array = 0) {
    if ((array.length == 0) || (array == 0)) {
        return 0
    }
    let sum = array.reduce((sum, cur) => sum + cur);
    let avg = Math.floor((sum / array.length) * 100) / 100
    return avg
}
