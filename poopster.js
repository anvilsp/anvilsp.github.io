async function generateArray(url) {
    try {
        const response = await fetch(url);
        const text = await response.text();
        let words = text.split('\n');
        return words;
    } catch (err) {
        console.error(err);
    }
}

function randomRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let monkeyHalfOne = 'https://pastebin.com/raw/hsrY9WLf'
let monkeyHalfTwo = 'https://pastebin.com/raw/cEq259UX'
let ratHalfOne = 'https://pastebin.com/raw/iVZgwuH4'
let ratHalfTwo = 'https://pastebin.com/raw/D8ymqwDk'

async function generateOopster() {
    let half1;
    let half2;
    let rng1 = randomRange(0, 1);
    let rng2 = randomRange(0, 1);

    if(rng1 == 0) { // populate the first half with monkey ball levels
        half1 = await generateArray(monkeyHalfOne);
    }
    else { // populate the first half with rolled out levels
        half1 = await generateArray(ratHalfOne);
    }

    if(rng2 == 0) { // populate the second half with monkey ball levels
        half2 = await generateArray(monkeyHalfTwo);
    }
    else { // populate the second half with rolled out levels
        half2 = await generateArray(ratHalfTwo);
    }

    let generateRng1 = randomRange(0, half1.length - 1)
    let generateRng2 = randomRange(0, half2.length - 1)
    let oopster = half1[randomRange(0, generateRng1)].concat(half2[randomRange(0, generateRng2)]);
    let oopsterFixed = oopster.replace(/_/g, ' ');
    return oopsterFixed
}

window.onload = function(){
    document.getElementById("makeOopster").onclick = function(){
        generateOopster().then(result => {
            alert(result);
        });
    }
}