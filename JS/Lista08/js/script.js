window.addEventListener("load", function() {
    numerosGerados = 0;
    num = 0;
    tempo = 0;
    display = document.getElementById("numero");

    para();
    document.getElementById("iniciar").addEventListener("click", inicia);
    document.getElementById("pausar").addEventListener("click", pausa);
    document.getElementById("parar").addEventListener("click", para);
    document.getElementById("numero").addEventListener("click", jogo);

    function jogo() {
        numeroPego = parseInt(display.innerHTML);
        score = parseInt(document.getElementById("acerto").innerHTML);
        erros = parseInt(document.getElementById("erro").innerHTML);
        if (numeroPego % 2 == 0) {
            score++;
            display.style = "text-shadow: 0 0 30px lime"
        } else {
            display.style = "text-shadow: 0 0 30px red"
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
        document.getElementById("diff").disabled = true;
    }
    function pausa() {
        desabilitaBotao(false, true);
        clearInterval(num);
        clearInterval(tempoRes);
        display.disabled = true;
    }

    function para() {
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
                    tempo = 5;
                }
                return 10;
        }
    }
});


