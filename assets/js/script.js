 
 //escribo variable temperatura y utilizo parseFloat 
 let temperatura = parseFloat(prompt("¿Cuál es la temperatura actual?"));
 console.log(temperatura)
 //escribo la variable del tiempo libre y parseInt para que sean numeros enteros
 let tiempoLibre = parseInt(prompt("¿Cuantos minutos libres tienes? "));
 console.log(tiempoLibre)
 // variable para saber si hay lluvia y lo dejo todo en minusculas
 let lluvia = prompt("¿Está lloviendo? si/no.").toLowerCase();
 console.log(lluvia);

 // funcion para ver si los datos ingresados coinciden con las condiciones dadas
 function vamosDePicnic () {
    //compara el valor de lluvia
    let noHaylluvia = lluvia === "no";
    // compara los dartos ingresados con los necesarios para el picnic 
    let esBuenMomento = (temperatura >= 12 && temperatura <= 30) && noHaylluvia && tiempoLibre >= 90;
    console.log (esBuenMomento);
    
     const mensaje = esBuenMomento ? "Es un buen momento para organizar un Picnic" : "Mejor quédate en casa";
     alert(mensaje);

 }
// llamo a la funcion para ejecutarla 
 vamosDePicnic ();

