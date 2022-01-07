// Square Inc

function area(size) {
    return size * size;
}

function circumference(size) {
    return size * 4;
}


function diagonal(size) {
    const size_squared = size * size
    return Math.sqrt((size_squared) + (size_squared))
}


module.exports = {
    area,
    circumference,
    diagonal
}