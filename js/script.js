function sortear(){
    var min = Number(document.getElementById('min').value) 
    var max = Number(document.getElementById('max').value) 
    var qtd = Number(document.getElementById('qtd').value)
    
    var i = 0;
    
    document.getElementById('resultado').innerHTML = ' ';

    if(qtd>max){
        alert('Nao é possível sortear uma quantidade de números maior que o número máximo')
    }else{
        while(i < qtd){
        var random = Math.floor(Math.random() * (max - min) + min) 
        document.getElementById('resultado').innerHTML += ' ' +random;
        i++;
    }
    }
    
}