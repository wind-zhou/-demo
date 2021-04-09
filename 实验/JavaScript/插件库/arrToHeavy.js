$(function() {
    $.extend({
        arrToHeavy: function(arr) {
            var newArr = [];
            for (var i = 0; i < arr.length; i++) {
                if (newArr.indexOf(arr[i]) == -1) {
                    newArr.push(arr[i]);
                }
            }
            return newArr;
        },

        bubbleSort: function(arr) {

            for (i = 0; i < arr.length - 1; i++) { //外层需要排序的次数
                for (j = 0; j < arr.length - 1 - i; j++) { //每次循环时，需要交换的次数
                    if (arr[j] > arr[j + 1]) {
                        var tmp = arr[j];
                        arr[j] = arr[j + 1];
                        arr[j + 1] = tmp;
                    }
                }
            }
            return arr;
        }
    })

})