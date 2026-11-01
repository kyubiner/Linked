function linked(link) {
    window.location.href = link;
}

function embedGame(){
    const embedGame = document.getElementById("embedGame")
    const games = [
        '<iframe class="embedGame" frameborder="2" src="https://itch.io/embed/5180114" width="552" height="167"><ahref="https://rubiriku-dev.itch.io/insert-coin"><span>Test</span> by Rubiriku</ahref=></iframe>',
        '<iframe class="embedGame" frameborder="0" src="https://itch.io/embed/4743002?linkback=true" width="552" height="167"><a href="https://rubiriku-dev.itch.io/world-end-at-3-pm">World End at 3 PM by Rubiriku</a></iframe>',
        '<iframe class="embedGame" frameborder="0" src="https://itch.io/embed/4627371" width="552" height="167"><a href="https://rubiriku-dev.itch.io/rusty-wheel">Rusty Wheel by Rubiriku, haratigames, KopalG, kucing ajwa, doells-dev, Exekyutor</a></iframe>',
        '<iframe class="embedGame" frameborder="0" src="https://itch.io/embed/4248308" width="552" height="167"><a href="https://rubiriku-dev.itch.io/ancientmask">AncientMask by Rubiriku</a></iframe>'
    ]
    const randomGame = games[Math.floor(Math.random() * games.length)];
    embedGame.innerHTML = randomGame
}
embedGame()