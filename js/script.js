const botao = document.getElementById("btn");
let heroi = "" 

function ranks(xp){
  
  if (xp <= 1000){
    return heroi = "Ferro"
  }else if (xp >= 1001 && xp <= 2000){
    return heroi = "Bronze";
  }else if  (xp >= 2001 && xp <= 5000){
    return heroi= "Prata";
  }else if  (xp >= 5001 && xp <= 7000){
    return heroi = "Ouro";
  }else if  (xp >= 7001 && xp <= 8000){
    return heroi = "Platina";
  }else if  (xp >= 8001 && xp <= 9000){
    return heroi = "Ascendente";
  }else if  (xp >= 9001 && xp <= 10000){
    return heroi = "Imortal";
  }else if  (xp >= 10001){
    return heroi = "Radiante";
  }

}

botao.addEventListener("click", function (e) {
    let name = String(document.getElementById("name").value);
    let xp = Number(document.getElementById("xp").value); 
    ranks(xp);
        let box = document.getElementById("box-Child").innerHTML = "<h3>O Herói de nome " + name +" está no nível " + heroi + "</h3>";
    });
