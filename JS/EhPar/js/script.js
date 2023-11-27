window.addEventListener("load", function() {
    verificaLogin();
    numerosGerados = 0;
    num = 0;
    tempo = 0;
    display = document.getElementById("numero");

    para();
    document.getElementById("iniciar").addEventListener("click", inicia);
    document.getElementById("pausar").addEventListener("click", pausa);
    document.getElementById("parar").addEventListener("click", para);
    document.getElementById("numero").addEventListener("click", jogo);
    document.getElementById("logout").addEventListener("click", logout);

    function jogo() {
        numeroPego = parseInt(display.innerHTML);
        score = parseInt(document.getElementById("acerto").innerHTML);
        erros = parseInt(document.getElementById("erro").innerHTML);
        if (numeroPego % 2 == 0) {
            playAudio(0, "audio/hit.mp3");
            score++;
            display.style = "text-shadow: 0 0 30px lime";
        } else {
            playAudio(0, "audio/miss.mp3");
            display.style = "text-shadow: 0 0 30px red";
            erros++;
        }
        document.getElementById("acerto").innerHTML = score;
        document.getElementById("erro").innerHTML = erros;
        document.getElementById("porAcerto").innerHTML = parseInt((100 * score) / (score + erros)); 
        display.disabled = true;
    }   
    function inicia() {
        desabilitaBotao(true, false);
        num = setInterval(geraNumero, selectDiff());
        tempoRes = setInterval(timer, 1000);
        playAudio(1, "audio/gameStart.mp3")
        setupHardcore(1);
        document.getElementById("diff").disabled = true;
    }
    function pausa() {
        setupHardcore(2);
        desabilitaBotao(false, true);
        clearInterval(num);
        clearInterval(tempoRes);
        display.disabled = true;
    }
    function para() {
        atualizaHighscore(localStorage.getItem("highscore"));
        pausa();
        displayTimer();
        numerosGerados = 0;
        num = 0;
        tempo = 0;
        
        display.innerHTML = 'É PAR?';
        document.getElementById("acerto").innerHTML = '0';
        document.getElementById("porAcerto").innerHTML = '0';
        document.getElementById("erro").innerHTML = '0';
        document.getElementById("parSort").innerHTML = '0';
        document.getElementById("highscore").innerHTML = localStorage.getItem("highscore");
        document.getElementById("diff").disabled = false;
    }
    function geraNumero() {
        display.innerHTML = Math.floor(Math.random() * 89 + 10);
        numerosGerados++;

        numeroPego = parseInt(display.innerHTML);
        if (numeroPego % 2 == 0) {
            document.getElementById("parSort").innerHTML++;
        }
        display.disabled = false;
        display.style = "text-shadow: 0 0 10px #198c9b"
    }
    function timer() {
        if (tempo > 0) {
            tempo--;
        } else {
            para();
        }
        displayTimer();
    }
    function displayTimer() {
        document.getElementById("tempoRes").innerHTML = String(Math.floor(tempo / 60)).padStart(2, '0') + ":" + String(tempo % 60).padStart(2, '0');
    }
    function desabilitaBotao(inicia, pausa) {
        document.getElementById("iniciar").disabled = inicia;
        document.getElementById("pausar").disabled = pausa;
    }
    function selectDiff() {
        diff = document.getElementById("diff").value;
        switch (diff) {
            case '1':
                if (tempo == 0) {
                    tempo = 80;
                }
                return 1000;
            case '2':
                if (tempo == 0) {
                    tempo = 50;
                }
                return 500;
            case '3':
                if (tempo == 0) {
                    tempo = 30;
                }
                return 200;
            case '4':
                if (tempo == 0) {
                    tempo = 20;
                }
                return 10;
        }
    }
    function verificaLogin() {
        user = localStorage.getItem("login");
        document.getElementById("user").innerHTML = user;
        if (user == "" || user == null) {
            window.open("login.html", "_self");
        }
    }

    function logout() {
        localStorage.removeItem("login");
        window.open("login.html", "_self");
    }
    function atualizaHighscore(highscore) {
        acertos = document.getElementById("acerto").innerHTML;
        erros = document.getElementById("erro").innerHTML;
        parSorts = document.getElementById("parSort").innerHTML;
        diff = document.getElementById("diff").value;
        highscore = parseInt(highscore);
        if (!highscore) {
            localStorage.setItem("highscore", "0");
        } 
        var score = (acertos * diff) - erros;
        if (highscore < score) {
            localStorage.setItem("highscore", score);
            alertWifi("Nova pontuação máxima!\n" + score, false, 0, "", 30, "");
        }
    }

    function playAudio(audio, source) {
        switch (audio) {
            case 0:
                audio = document.getElementById("hit");
                audio.src = source;
                audio.play();
                break;
            case 1:
                audio = document.getElementById("music");
                audio.src = source;
                audio.play();
                break;
            case 2:
                audio = document.getElementById("music");
                audio.pause();
                audio.currentTime = 0;
                break;
            
        }
    }
    function setupHardcore (action) {
        switch (action) {
            case 1:
                diff = document.getElementById("diff").value;
                if (diff == "4") {
                document.body.classList.add("hardcore");
                playAudio(1, "audio/hardcoreTheme.mp3");
                }
                break;
            case 2:
                document.body.classList.remove("hardcore")
                playAudio(2, "audio/gameStart.mp3");
                break;        
        }

    }
});


