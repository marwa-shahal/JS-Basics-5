const computer_choice = Math.floor(Math.random() * 101)+1
let trial = 8
while (trial>0){
    let guess = prompt("Enter a number between 1 and 100: ")
    if (guess < computer_choice){
        trial = trial - 1
        alert("too small trial " + trial +"/8")
    } else if (guess > computer_choice){
        trial = trial - 1
        alert("too large trial " + trial +"/8")
    }else{
        alert("Correct with "+ trial + " trials!")
        break
    }
}

