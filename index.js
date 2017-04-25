module.exports = {
  filter: function (func, arr) {
    var newArr = []
    arr.forEach(function(el) {
      if (func(el)) { newArr.push(el) }
    })
    return newArr
  },
  map: function (func, arr) {
    var newArr = []
    arr.forEach(function(el) {
      newArr.push(func(el))
    })
    return newArr
  },
  countIf: function (testFunc, arr) {
    console.log(testFunc)
    return arr.filter(testFunc).length
  }
}
return module.exports
