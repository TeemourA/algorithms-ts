var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var quickSort = function (arr) {
    if (arr.length < 2) {
        return arr;
    }
    var pivot = arr[Math.floor(Math.random() * arr.length)];
    var less = arr.filter(function (el) { return el < pivot; });
    var greater = arr.filter(function (el) { return el > pivot; });
    return __spreadArrays(quickSort(less), [pivot], quickSort(greater));
};
var arr = [2, 18, 22, 14, 54, 33, 41, 1102, 1];
console.log(quickSort(arr));
