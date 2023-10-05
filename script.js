var time = 60;
var random = 0;
var score = 0;


function makebubble() {
    var clutter = ""

    for (i = 1; i <= 102; i++) {
        clutter += `<div class="bubble">${Math.floor(Math.random() * 10)}</div>`
    }
    document.querySelector('#bottom').innerHTML = clutter

}

function runtimer() {
    setInterval(() => {
        if (time > 0) {
            time--;
            document.querySelector('#timer').textContent = time;
        } else {
            clearInterval(time)
            document.querySelector('#bottom').innerHTML = `<h1 style="color: #002D62;">GAME OVER YOUR SCORE IS ${score}</h1>`
        }
    }, 1000)
}

function hitvalue() {
    random = Math.floor(Math.random() * 10);
    document.querySelector('#hitval').textContent = random;
}

function Incscore() {
    score += 10;
    document.querySelector('#scoreval').textContent = score;
}

document.querySelector('#bottom').addEventListener('click', (detail) => {
    var num = (Number(detail.target.textContent))
    if (num === random) {
        Incscore();
        hitvalue();
        makebubble();
    }
    else {
        score -= 10;
        document.querySelector('#scoreval').textContent = score;
    }
})

hitvalue()
runtimer()
makebubble()