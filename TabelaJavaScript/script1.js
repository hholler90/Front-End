
var setas={
    setaDireita:'<svg class="setaDireita" stroke="#06AA48" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129"><path d="M40.4 121.3c-.8.8-1.8 1.2-2.9 1.2s-2.1-.4-2.9-1.2c-1.6-1.6-1.6-4.2 0-5.8l51-51-51-51c-1.6-1.6-1.6-4.2 0-5.8 1.6-1.6 4.2-1.6 5.8 0l53.9 53.9c1.6 1.6 1.6 4.2 0 5.8l-53.9 53.9z"></path></svg>',

    setaEsquerda:'<svg class="setaEsquerda" stroke="#06AA48" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129"><path d="M40.4 121.3c-.8.8-1.8 1.2-2.9 1.2s-2.1-.4-2.9-1.2c-1.6-1.6-1.6-4.2 0-5.8l51-51-51-51c-1.6-1.6-1.6-4.2 0-5.8 1.6-1.6 4.2-1.6 5.8 0l53.9 53.9c1.6 1.6 1.6 4.2 0 5.8l-53.9 53.9z"></path></svg>'
};

function CriaBotoes(rodadaObjeto, direcional)
{

    var button=document.createElement("botton");
    var direcaoBotao= direcional=="previous" ? "buttonEsquerdo" : "buttonDireito";
    button.setAttribute("class", direcaoBotao);

    var seta=document.createElement("span");
    var classeDirecaoBotao = direcional=="previous" ? "setaEsquerda" : "setaDireita";
    seta.setAttribute("class", classeDirecaoBotao);
    seta.innerHTML=direcional=="previous" ? setas.setaEsquerda : setas.setaDireita;
    button.appendChild(seta);

    if(rodadaObjeto != null){
        direcional=="previous" ? button.setAttribute("onclick",`ajaxJogos(${rodadaObjeto.rodada})`): button.setAttribute("onclick",`ajaxJogos(${rodadaObjeto.rodada})`);
    }else{
        button.disabled=true;
        var setaURL =direcional =="previous" ? setas.setaEsquerda : setas.setaDireita;
        seta.innerHTML=setaURL;
    }
    return button;
}

function tabelaJogos(placar){
    


diaSemana= new Array("DOM","SEG","TER","QUA","QUI","SEX","SÁB");


var TabelaBrasileirao=document.getElementById("TabelaBrasileirao")

if($(".divP")[0] != undefined){
    $(".divP")[0].remove();
} 

var divP =document.createElement("div");
divP.setAttribute("class","divP");
TabelaBrasileirao.appendChild(divP);

var titulo=document.createElement("h2");
titulo.setAttribute("class","titulo");
divP.appendChild(titulo);
titulo.innerText="JOGOS";

var nav=document.createElement("nav");
nav.setAttribute("class","nav");
divP.appendChild(nav);

var setaEsquerda = CriaBotoes(placar.rodada_anterior, "previous");
//setaDireita.setAttribute("class","setaDireita");
nav.appendChild(setaEsquerda);
//setaDireita.innerHTML=setas.setaDireita;

var rodada=document.createElement("span");
rodada.setAttribute("class","rodada");
nav.appendChild(rodada);
rodada.innerText=placar.nome;

var setaDireita = CriaBotoes(placar.proxima_rodada, "next");
//setaEsquerda.setAttribute("class","setaEsquerda");
nav.appendChild(setaDireita);
//setaEsquerda.innerHTML=setas.setaEsquerda;


for (var i=0; i<placar.partidas.length; i++){
    //div principal 
    var placar1=document.createElement("div");
    placar1.setAttribute("class","placar");
    divP.appendChild(placar1);
    
    //div descrição fica na div principal
    var descricao=document.createElement("div");
    descricao.setAttribute("class", "descricao");
    placar1.appendChild(descricao);
    
    var dataRealizacaoIso=document.createElement("span");
    var dataJogos= new Date(placar.partidas[i].data_realizacao_iso);
    dataRealizacaoIso.innerText=diaSemana[dataJogos.getDay()];
    descricao.appendChild(dataRealizacaoIso);

    var dataRealizacao=document.createElement("span");
    descricao.appendChild(dataRealizacao);
    descricao.append(placar.partidas[i].data_realizacao);

    var estadioLocal=document.createElement("span");
    descricao.appendChild(estadioLocal);
    descricao.append(placar.partidas[i].estadio.nome_popular);

    var horaRealizacao =document.createElement("span");
    descricao.appendChild(horaRealizacao);
    descricao.append(placar.partidas[i].hora_realizacao);
    
    //div interna dentro da div principal placar2
    var placar2=document.createElement("div");
    placar2.setAttribute("class", "placar2");
    placar1.appendChild(placar2);

    //div interna time mandante
    var timeMandante=document.createElement("div");
    timeMandante.setAttribute("class","timeMandante");
    placar2.appendChild(timeMandante);

    var siglaMandante=document.createElement("span");
    siglaMandante.setAttribute("class","siglaMandante");
    timeMandante.appendChild(siglaMandante);
    siglaMandante.innerHTML=placar.partidas[i].time_mandante.sigla;

    var logoMandante=document.createElement("img");
    logoMandante.setAttribute("class","logoMandante");
    timeMandante.appendChild(logoMandante);
    logoMandante.src=placar.partidas[i].time_mandante.escudo;

    //div interna versus 
    var versus=document.createElement("div");
    versus.setAttribute("class","versus");
    placar2.appendChild(versus);
    
    var golMandante=document.createElement("span");
    golMandante.setAttribute("class","golMandante");
    versus.appendChild(golMandante);
    golMandante.innerText=placar.partidas[i].placar_mandante;

    var versusX=document.createElement("span");
    versusX.setAttribute("class","versusX");
    versus.appendChild(versusX);
    versusX.innerText="X";

    var golVisitante=document.createElement("span");
    golVisitante.setAttribute("class","golVisitante");
    versus.appendChild(golVisitante);
    golVisitante.innerText=placar.partidas[i].placar_visitante;

    //div interna time visitante
    var timeVisitante=document.createElement("div");
    timeVisitante.setAttribute("class","timeVisitante");
    placar2.appendChild(timeVisitante);

    var logoVisitante=document.createElement("img");
    logoVisitante.setAttribute("class","logoVisitante");
    timeVisitante.appendChild(logoVisitante);
    logoVisitante.src=placar.partidas[i].time_visitante.escudo;

    var siglaVisitante=document.createElement("span");
    siglaVisitante.setAttribute("class","siglaVisitante");
    timeVisitante.appendChild(siglaVisitante);
    siglaVisitante.innerHTML=placar.partidas[i].time_visitante.sigla;

    //div veja aqui,fica na div principal
    var vejaAqui=document.createElement("div");
    vejaAqui.setAttribute("class","vejaAqui");
    vejaAqui.innerText = "VEJA COMO FOI";
    
    placar1.appendChild(vejaAqui);
    }


    divP.appendChild(placar1);
}
 