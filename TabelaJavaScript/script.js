function tabelaJava(times){

    existeTabela=true;
    loadingTela();

        var body =document.getElementById("tbody");

        for (var i=0; i<20;i++){
        var tr= document.createElement("tr");

        body.appendChild(tr);
        
        for (var j =0; j <13; j++){
            var td = document.createElement("td");

            if (j == 0){
                td.innerText = times[i].posicao;
            }
            else if (j==1){
                var escudo =document.createElement("img");
                escudo.setAttribute("class","escudo");
                escudo.setAttribute("src",times[i].time.escudo);
                td.appendChild(escudo);
            }
            else if (j==2){
                td.innerText = times[i].time.nome_popular;
            }
            
            else if (j==3){
                td.innerText=times[i].pontos;
            }
            else if (j==4){
                td.innerText=times[i].jogos;
            }
            else if (j==5){
                td.innerText=times[i].vitorias;
            }
            else if (j==6){
                td.innerText=times[i].empates;
            }
            else if (j==7){
                td.innerText=times[i].derrotas;
            }
            else if (j==8){
                td.innerText=times[i].gols_pro;
            }
            else if (j==9){
                td.innerText=times[i].gols_contra;
            }
            else if (j==10){
                td.innerText=times[i].saldo_gols;
            }
            else if (j==11){
                td.innerText=times[i].aproveitamento;
            }
            else{
                for(var k=0; k<5;k++){
                    var ultimos_jogos =document.createElement("span");
                    ultimos_jogos.setAttribute("class","ultJogos");

                    if (times[i].ultimos_jogos[k]=="v"){
                        ultimos_jogos.classList.add("vitoria");
                    }
                    else if (times[i].ultimos_jogos[k]=="d"){
                        ultimos_jogos.classList.add("derrota");
                    }
                    else if (times[i].ultimos_jogos[k]=="e"){
                        ultimos_jogos.classList.add("empate");
                    }
                    td.appendChild(ultimos_jogos);

                }
            }
        tr.appendChild(td);
        
        }



}



}


