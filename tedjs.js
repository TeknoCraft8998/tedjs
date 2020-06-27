function ted(i="") {
    switch (i) {
        case "owner.name":
            console.log("Xevaltan")
        break;
        case "owner.discord.name":
            console.log("Xevaltan#1904")
        break;
        case "package.version":
            console.log("v1.0.0")
        break;
        case "owner.lang":
            console.log("French / Français")
        break;
        case "help":
            console.log("Hey ! \n you are using the first version of tedjs so there aren't so much things \n sorry, but you can contact me on discord \n I'm french so you can't call me")
        break
    
        default:
            break;
    }
}

ted.if = (condition, code) => {
    if(condition) {
        code;
    }
}
ted.ifelse = (condition, code, code2) => {
    if(condition) {
        code;
    } else {
        code2
    }
}
ted.expect = (condition, message) => {
    if(condition) {
        console.log(message)
    }
}

ted.clg = (message) => console.log(message);
ted.clw = (message) => console.warn(message);
ted.cld = (message) => console.debug(message);

ted.cl = console;
ted.array = {
    make: new Array
}
ted.gen = {
    num: function() {
        return Math.floor(Math.random() * 9)
    },
    letter: {
        upperCase: function(get=0) {
            var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P","Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
            return letters[get]
        },
        lowerCase: function(get=0) {
            var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u","v","w", "x", "y", "z"]
            return letters[get]
        }
    }
}
ted.alert = (message) => console.log(message);

ted.map = {
    a: function(startNum=0, endNum=20, count=1) {
        while(startNum <= endNum) {
            ted.clg(startNum);
            startNum=startNum+count
        }

    },
    b: function(startNum=20, endNum=0, count=1) {
        while(startNum >= endNum) {
            ted.clg(startNum);
            startNum=startNum-count
        }
    }
}
ted.sumOf = function(...numbers) {
    let sum = 0;
    for(let i = 0; i< numbers.length; i++) {
        sum += numbers[i]
    }
    return sum;
}
