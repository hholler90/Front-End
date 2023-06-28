window.onload=function tabelaJava(){

var placar=[];

var setas={
    setaDireita:'<svg class="setaDireita" stroke="#06AA48" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129"><path d="M40.4 121.3c-.8.8-1.8 1.2-2.9 1.2s-2.1-.4-2.9-1.2c-1.6-1.6-1.6-4.2 0-5.8l51-51-51-51c-1.6-1.6-1.6-4.2 0-5.8 1.6-1.6 4.2-1.6 5.8 0l53.9 53.9c1.6 1.6 1.6 4.2 0 5.8l-53.9 53.9z"></path></svg>',

    setaEsquerda:'<svg class="setaEsquerda" stroke="#06AA48" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129"><path d="M40.4 121.3c-.8.8-1.8 1.2-2.9 1.2s-2.1-.4-2.9-1.2c-1.6-1.6-1.6-4.2 0-5.8l51-51-51-51c-1.6-1.6-1.6-4.2 0-5.8 1.6-1.6 4.2-1.6 5.8 0l53.9 53.9c1.6 1.6 1.6 4.2 0 5.8l-53.9 53.9z"></path></svg>'

};


placar[0]={
            siglaMandante:"FOR",
            logoMandante:"https://s.sde.globo.com/media/organizations/2021/09/19/Fortaleza_2021_1.svg",
            versusX:"X",
            logoVisitante:"https://s.sde.globo.com/media/organizations/2018/03/11/bahia.svg",
            siglaVisitante:"BAH",
            golVisitante: Math.floor(Math.random()*4),
            golMandante: Math.floor(Math.random()*4),
            descricao:"SÁB 24/06/2023 CASTELÃO (CE) 18:30"
        };
placar[1]={
            siglaMandante:"SAO",
            logoMandante:"https://s.sde.globo.com/media/organizations/2018/03/11/sao-paulo.svg",
            versusX:"X",
            logoVisitante:"https://s.sde.globo.com/media/organizations/2019/09/09/Athletico-PR.svg",
            siglaVisitante:"CAP",
            golVisitante: Math.floor(Math.random()*4),
            golMandante: Math.floor(Math.random()*4),
            descricao:"SÁB 24/06/2023 INDEPENDÊNCIA 21:00"
};
placar[2]={
            siglaMandante:"CRU",
            logoMandante:"https://s.sde.globo.com/media/organizations/2021/02/13/cruzeiro_2021.svg",
            versusX:"X",
            logoVisitante:"https://s.sde.globo.com/media/organizations/2018/03/10/atletico-mg.svg",
            siglaVisitante:"CAM",
            golVisitante: Math.floor(Math.random()*4),
            golMandante: Math.floor(Math.random()*4),
            descricao:"DOM 25/06/2023 ALLIANZ PARQUE 16:00"
};

var divP =document.getElementById("container");
divP.setAttribute("class","container");

var titulo=document.createElement("h2");
titulo.setAttribute("class","titulo");
divP.appendChild(titulo);
titulo.innerText="JOGOS";

var nav=document.createElement("nav");
nav.setAttribute("class","nav");
divP.appendChild(nav);

var setaDireita=document.createElement("span");
setaDireita.setAttribute("class","setaDireita");
nav.appendChild(setaDireita);
setaDireita.innerHTML=setas.setaDireita;

var rodada=document.createElement("span");
rodada.setAttribute("class","rodada");
nav.appendChild(rodada);
rodada.innerText=" 10 RODADA";

var setaEsquerda=document.createElement("span");
setaEsquerda.setAttribute("class","setaEsquerda");
nav.appendChild(setaEsquerda);
setaEsquerda.innerHTML=setas.setaEsquerda;


for (var i=0; i<3; i++){
    //div principal 
    var placar1=document.createElement("div");
    placar1.setAttribute("class","placar");
    divP.appendChild(placar1);
    
    //div descrição fica na div principal
    var descricao=document.createElement("div");
    descricao.setAttribute("class", "descricao");
    placar1.appendChild(descricao);
    descricao.innerText=placar[i].descricao;

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
    siglaMandante.innerText=placar[i].siglaMandante;

    var logoMandante=document.createElement("img");
    logoMandante.setAttribute("class","logoMandante");
    timeMandante.appendChild(logoMandante);
    logoMandante.src =placar[i]. logoMandante;

    //div interna versus 
    var versus=document.createElement("div");
    versus.setAttribute("class","versus");
    placar2.appendChild(versus);
    
    var golMandante=document.createElement("span");
    golMandante.setAttribute("class","golMandante");
    versus.appendChild(golMandante);
    golMandante.innerText=placar[i].golMandante;

    var versusX=document.createElement("span");
    versusX.setAttribute("class","versusX");
    versus.appendChild(versusX);
    versusX.innerText="X";

    var golVisitante=document.createElement("span");
    golVisitante.setAttribute("class","golVisitante");
    versus.appendChild(golVisitante);
    golVisitante.innerText=placar[i].golVisitante;

    //div interna time visitante
    var timeVisitante=document.createElement("div");
    timeVisitante.setAttribute("class","timeVisitante");
    placar2.appendChild(timeVisitante);

    var logoVisitante=document.createElement("img");
    logoVisitante.setAttribute("class","logoVisitante");
    timeVisitante.appendChild(logoVisitante);
    logoVisitante.src =placar[i]. logoVisitante;

    var siglaVisitante=document.createElement("span");
    siglaVisitante.setAttribute("class","siglaVisitante");
    timeVisitante.appendChild(siglaVisitante);
    siglaVisitante.innerText=placar[i].siglaVisitante

    //div veja aqui fica na div principal
    var vejaAqui=document.createElement("div");
    vejaAqui.setAttribute("class","vejaAqui");
    vejaAqui.innerText = "VEJA COMO FOI";
    
    placar1.appendChild(vejaAqui);
    }
    

}

divP.appendChild(placar);


