let flag = false;
let result = "\n"
for (i = 2; i <= 30; i++) {
    for (j = 1; j < i; j++) {
        if (i % j == 0 & i!=j & j!=1) {
            flag = false;
            break;
        }
        else {
            flag = true;
        }
    }
    if (flag) {
        console.log(i);
        result += i + " "
    }
}
console.log(result)
alert(result)