let texto = document.getElementById("div_texto");
let source_imagem = document.getElementById("imagem");
let contador_imagem = 1;
let ativa_slide = setTimeout(Esconde, 4000);

function Esconde(){
    texto.classList.add("opacity_false");
    imagem.classList.add("opacity_false");
    setTimeout(Mostra, 1000);
}

function Mostra(){
    if (contador_imagem == 1){
        texto.innerHTML = "Model X - Black";
        imagem.src = "https://cdn.shopify.com/s/files/1/0043/8471/8938/products/154950588629316999.jpg?v=1565120317";
        contador_imagem += 1;
    }else if(contador_imagem == 2){
        texto.innerHTML = "Model X - Red";
        imagem.src = "https://www.tesla.com/sites/tesla/files/curatedmedia/model-s-performance.jpg";
        contador_imagem += 1;
    }else if(contador_imagem == 3){
        texto.innerHTML = "Model X - Aqua";
        imagem.src = "https://cdn.shopify.com/s/files/1/1724/5219/articles/project-tifany-x-tesla-model-x-p90d-pearl-white-22-inch-forged-wheels-3.jpg?v=1493759763";
        contador_imagem = 1;
    }
    texto.classList.remove("opacity_false");
    imagem.classList.remove("opacity_false");
    setTimeout(Esconde, 4000);
}
