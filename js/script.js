//ticket global
var efeitoInterval;

///////////////////////////////////////////////////////////////////
                    // Efeito de Verão
///////////////////////////////////////////////////////////////////
function createSummer() {
    let container = document.querySelector('.container')
    let summer = document.createElement('img');
    summer.classList.add('verao');
    summer.src = './imagem/verao.png'
    
    container.appendChild(summer);
}

///////////////////////////////////////////////////////////////////
                    // Efeito de Outono
///////////////////////////////////////////////////////////////////
function createFallingLeaf() {
    let container = document.querySelector('.container');
    let folhas = document.createElement('img');
    folhas.classList.add('leaves'); //adiciona a classe "leaves" para o css
    folhas.src = './imagem/leaves.png';
    folhas.style.left = Math.random() * innerWidth + 'px';

    container.appendChild(folhas);

    setTimeout(() => {
        folhas.remove();
    }, 7000);
}

///////////////////////////////////////////
            //efetio de Inverno
///////////////////////////////////////////
function createSnow() {
    let snow = document.querySelector('.container')
    let span = document.createElement('span') //adiciona o elemento "span" para gerar as particulas e edita-las no css
    span.style.left = Math.random() * innerWidth + 'px'
    
    snow.appendChild(span);

    setTimeout(() => {
        span.remove();
    }, 5000);
}

///////////////////////////////////////////////////////////////////
                    // Efeito de Primavera
///////////////////////////////////////////////////////////////////
function createFlower() {
    let flower = document.querySelector('main#img');
    let primavera = document.createElement('img');
    primavera.classList.add('primavera');
    primavera.src = './imagem/primavera.jpg';

    flower.appendChild(primavera);
}

///////////////////////////////////////////////////////////
        //Troca os efeitos de acordo com as estaçoes
///////////////////////////////////////////////////////////
function ativarEfeitoDaEstacao(nomeEstacao) {

    clearInterval(efeitoInterval);

    if (nomeEstacao === 'Inverno') {
        efeitoInterval = setInterval(createSnow, 100);
    } else if (nomeEstacao === 'Primavera') {
        createFlower();
    } else if (nomeEstacao === 'Outono') {
        efeitoInterval = setInterval(createFallingLeaf , 300);
    } else if (nomeEstacao === 'Verão') {
        createSummer();
    }
}

/////////////////////////////////////////////////////////
            //Define as estações
/////////////////////////////////////////////////////////
function verificarEstacao() {
    let mes = new Date();
    let numMes = mes.getMonth();
    let nomeEstacao = 'Verão';

   /* switch(numMes){

        case 11: case 0: case 1:
            nomeEstacao = 'Verão';
            break

        case 2: case 3: case 4:
            nomeEstacao = 'Outono';
            break

        case 5: case 6: case 7:
            nomeEstacao = 'Inverno';
            break

        case 8: case 9: case 10:
            nomeEstacao = 'Primavera';
            break

        default:
            nomeEstacao = 'Estação inválida!'
             break
    }*/
    document.getElementById('estacao').innerHTML = `<h3>Estação atual: ${nomeEstacao}</h3>`
    ativarEfeitoDaEstacao(nomeEstacao)
}