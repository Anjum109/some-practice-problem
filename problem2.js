// 2 no problem:
function isJavaScriptFile(fileName) {


    if (typeof fileName !== "string") {
        return 'Wrong! Enter a valid string';
    }
    else if (fileName.endsWith('.js')) {
        return true;
    }

    else {
        return false;
    }
}

const fileName = 'js.png';
console.log(isJavaScriptFile(fileName));