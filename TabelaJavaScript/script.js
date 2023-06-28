window.onload=function tabelaJava(){

var times=[];

times[0]={Classificação:"1", Time:"Fortaleza",logo:"https://s.sde.globo.com/media/organizations/2021/09/19/Fortaleza_2021_1.svg",Pontos:"15",Jogos:"5",Vitorias:"5",Empates:"0",Derrotas:"0",GP:"12",GC:"4",SG:"8",Porcentagem:"100%",ultJogos:["V","D","E","D","D"]};

times[1]={Classificação:"2", Time:"Botafogo",logo:"https://s.sde.globo.com/media/organizations/2019/02/04/botafogo-svg.svg",Pontos:"15",Jogos:"5",Vitorias:"5",Empates:"0",Derrotas:"0",GP:"12",GC:"4",SG:"8",Porcentagem:"100%",ultJogos:["V","D","E","D","D"]};

times[2]={Classificação:"2",Time:"Flamengo", logo:"https://s.sde.globo.com/media/organizations/2018/04/10/Flamengo-2018.svg",Pontos:"15",Jogos:"5",Vitorias:"5",Empates:"0",Derrotas:"0",GP:"12",GC:"4",SG:"8",Porcentagem:"100%",ultJogos:["V","D","E","D","D"]};

times[3]={Classificação:"2", Time:"Vasco",logo:"https://s.sde.globo.com/media/organizations/2021/09/04/vasco_SVG.svg",Pontos:"15",Jogos:"5",Vitorias:"5",Empates:"0",Derrotas:"0",GP:"12",GC:"4",SG:"8",Porcentagem:"100%",ultJogos:["V","D","E","D","D"]};

times[4]={Classificação:"2", Time:"Bahia",logo:"https://s.sde.globo.com/media/organizations/2018/03/11/bahia.svg",Pontos:"15",Jogos:"5",Vitorias:"5",Empates:"0",Derrotas:"0",GP:"12",GC:"4",SG:"8",Porcentagem:"100%",ultJogos:["V","D","E","D","D"]};

var body =document.getElementById("tbody")


for (var i=0; i<5;i++){
    var tr= document.createElement("tr");

    body.appendChild(tr);
    
    for (var j =0; j <13; j++){
        var td = document.createElement("td")

        if (j == 0){
            td.innerText = times[i].Classificação;
        }
        else if (j==1){
            td.innerText = times[i].Time;
        }
         else if (j==2){
             var icone =document.createElement("img")
             icone.src=times[i].logo;
             icone.setAttribute("class","logo");
             td.appendChild(icone);
        }
        else if (j==3){
            td.innerText=times[i].Pontos;
        }
        else if (j==4){
            td.innerText=times[i].Jogos;
        }
        else if (j==5){
            td.innerText=times[i].Vitorias;
        }
        else if (j==6){
            td.innerText=times[i].Empates;
        }
        else if (j==7){
            td.innerText=times[i].Derrotas;
        }
        else if (j==8){
            td.innerText=times[i].GP;
        }
        else if (j==9){
            td.innerText=times[i].GC;
        }
        else if (j==10){
            td.innerText=times[i].SG;
        }
        else if (j==11){
            td.innerText=times[i].Porcentagem;
        }
        else{
            for(var k=0; k<5;k++){
                var bola =document.createElement("span");
                bola.setAttribute("class","ultJogos");

                if (times[i].ultJogos[k]=="V"){
                    bola.classList.add("vitoria");
                }
                else if (times[i].ultJogos[k]=="D"){
                    bola.classList.add("derrota");
                }
                else if (times[i].ultJogos[k]=="E"){
                    bola.classList.add("empate");
                }
                td.appendChild(bola);

            }
        }
       tr.appendChild(td);
       
    }



}



}