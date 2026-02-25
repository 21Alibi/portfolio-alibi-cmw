var francais={"titre-page": "Mon Portfolio - Alicia BIWOLÉ",
    "presentation": "Présentation", 
    "texte-prez": "Je suis Alicia BIWOLÉ, designer graphique et exploratrice visuelle passionnée."
};


var english={"titre-page": "My Portfolio - Alicia BIWOLÉ",
    "presentation": "About me", 
    "texte-prez": "I am Alicia BIWOLÉ, a graphic designer and passionate visual explorer."

};


function traduction(langue){
    Object.keys(langue).forEach(function(cle){
        document.querySelector('#'+cle ).innerHTML = langue[cle];
    });  
}
traduction(english)

document.querySelector('#btn-fr').addEventListener('click',function(event){
    traduction(francais)
}); 

document.querySelector('#btn-en').addEventListener('click', function(event){
    traduction(english)
})