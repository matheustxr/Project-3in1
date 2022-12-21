function abrirMenu() {
    document.getElementById('side-bar').style.width = "250px";
    document.getElementById('conteudo').style.marginLeft = "250px";
    document.getElementById('imgTop').style.marginLeft = "165px";
    document.getElementById('imgBottom').style.marginLeft = "165px";
    

    document.getElementById('menu2').textContent = "Fechar";
    document.getElementById('pesquisar').textContent = "Pesquisar";
    document.getElementById('itens').textContent = "Itens";
    document.getElementById('user').textContent = "Perfil";
    document.getElementById('config').textContent = "Configurações";
}

function fecharMenu() {
    document.getElementById('side-bar').style.width = "85px";
    document.getElementById('conteudo').style.marginLeft = "0px";
    document.getElementById('imgTop').style.marginLeft = "0px";
    document.getElementById('imgBottom').style.marginLeft = "0px";
    /*document.getElementById('theme').style.marginLeft = "0px"*/

    document.getElementById('menu2').textContent = ""
    document.getElementById('pesquisar').textContent = ""
    document.getElementById('itens').textContent = ""
    document.getElementById('user').textContent = ""
    document.getElementById('config').textContent = ""
}


/*    CONTAGEM REGRESSIVA   */ 
const formatarDigito = (digito) => `0${digito}`.slice(-2);

const atualizar = (tempo) => {
    const segundos = document.getElementById('segundos');
    const minutos = document.getElementById('minutos');
    const horas = document.getElementById('horas');
    const dias = document.getElementById('dias');

    const qtdSegundos = tempo % 60;
    const qtdMinutos = Math.floor((tempo % (60 * 60)) / 60);
    const qtdHoras = Math.floor((tempo % (60 * 60 * 24)) / (60 * 60));
    const qtdDias = Math.floor(tempo / (60 * 60 * 24));

    segundos.textContent = formatarDigito(qtdSegundos);
    minutos.textContent = formatarDigito(qtdMinutos);
    horas.textContent = formatarDigito(qtdHoras);
    dias.textContent = formatarDigito(qtdDias)
}

const contagemRegressiva =  (tempo) => {
    const pararContagem = () => clearInterval(id);

    const contar = () => {
        if(tempo === 0){
            pararContagem()
        }
        atualizar (tempo);
        tempo--;
    }
    const id = setInterval(contar,1000)
    
}

const tempoRestante = () => {
    const dataEvento  = new Date ('2022-12-31 00:00:00');
    const hoje = Date.now();
    return Math.floor((dataEvento - hoje) / 1000);
}

contagemRegressiva(tempoRestante())


/*   MODAL   */

function onOff(){
    document
        .querySelector("#subscribe")
        .classList
        .toggle("hide")
}


/*    DARK MODE   */
function darkMode(){
    document
        .querySelector("#boddy")
        .classList
        .toggle("darkMode"),

    document
        .querySelector(".timer")
        .classList
        .toggle("darkModeh1")
}

