function downloadFile(url) {
    var a = document.createElement("a");
    a.href = url;
    a.download = url.split("/").pop();
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }



    col_finderlohn = document.getElementsByClassName('col_finderlohn')

    col_1 = document.getElementsByClassName('col_1')
    col_2 = document.getElementsByClassName('col_2')
    col_3 = document.getElementsByClassName('col_3')
    col_4 = document.getElementsByClassName('col_4')
    col_5 = document.getElementsByClassName('col_5')
    col_6 = document.getElementsByClassName('col_6')


    kaufen_fenster = document.getElementsByClassName('kaufen_fenster')
    kaufen_fenster[0].classList.add('hidden');

    nummer_fenster = document.getElementsByClassName('nummer_fenster')
    nummer_fenster[0].classList.add('hidden');
    
    banner = document.getElementsByClassName('banner')

    vorschau_btn_1 = document.getElementsByClassName('vorschau_btn_1')
    vorschau_btn_2 = document.getElementsByClassName('vorschau_btn_2')
    vorschau_btn_3 = document.getElementsByClassName('vorschau_btn_3')
    vorschau_btn_4 = document.getElementsByClassName('vorschau_btn_4')
    vorschau_btn_5 = document.getElementsByClassName('vorschau_btn_5')
    vorschau_btn_6 = document.getElementsByClassName('vorschau_btn_6')







subject_6   = "Bio Arbeit"
topics_6    = `<p>In Arbeit</p>`
pages_6     = ""
price_6     = 1.5
//vorschau_btn_6[0].classList.add('durchgestichen');

function download_6() {
    downloadFile("");
}
//////////////////////////////////////////////////////////////////////////
subject_5   = "Chemie Arbeit"
topics_5    = `<p>In Arbeit</p>`
pages_5     = ""
price_5     = 1.5

function download_5() {
    downloadFile("");
}
//////////////////////////////////////////////////////////////////////////
subject_4   = ""
topics_4    = `<ul class="topics_list">
                <li>auswählen</li>
               </ul>`
pages_4     = ""
price_4     = ""

function download_4() {
    downloadFile("");
}
//////////////////////////////////////////////////////////////////////////
subject_3   = ""
topics_3    = `<ul class="topics_list">
                <li>auswählen</li>
               </ul>`
pages_3     = ""
price_3     = ""

function download_3() {
    downloadFile("");
}
//////////////////////////////////////////////////////////////////////////
subject_2   = ""
topics_2    = `<ul class="topics_list">
                <li>auswählen</li>
               </ul>`
pages_2     = ""
price_2     = ""

function download_2() {
    downloadFile("");
}
//////////////////////////////////////////////////////////////////////////
subject_1   = ""
topics_1    = `<ul class="topics_list">
                <li>auswählen</li>
               </ul>`
pages_1     = ""
price_1     = ""

function download_1() {
    downloadFile("");
}
//////////////////////////////////////////////////////////////////////////






if(subject_1 != "" && topics_1 != "" & pages_1 != "" && price_1 != ""){
    //Wenn bei allen etwas steht
} else {
    //Wenn bei mind. einem nichts steht 
    vorschau_btn_1[0].classList.add('durchgestichen');
}
//////////////////////////////////////////////////////////////////////////
if(subject_2 != "" && topics_2 != "" & pages_2 != "" && price_2 != ""){
    //Wenn bei allen etwas steht
} else {
    //Wenn bei mind. einem nichts steht 
    vorschau_btn_2[0].classList.add('durchgestichen');
}
//////////////////////////////////////////////////////////////////////////
if(subject_3 != "" && topics_3 != "" & pages_3 != "" && price_3 != ""){
    //Wenn bei allen etwas steht
} else {
    //Wenn bei mind. einem nichts steht 
    vorschau_btn_3[0].classList.add('durchgestichen');
}
//////////////////////////////////////////////////////////////////////////
if(subject_4 != "" && topics_4 != "" & pages_4 != "" && price_4 != ""){
    //Wenn bei allen etwas steht
} else {
    //Wenn bei mind. einem nichts steht 
    vorschau_btn_4[0].classList.add('durchgestichen');
}
//////////////////////////////////////////////////////////////////////////
if(subject_5 != "" && topics_5 != "" & pages_5 != "" && price_5 != ""){
    //Wenn bei allen etwas steht
} else {
    //Wenn bei mind. einem nichts steht 
    vorschau_btn_5[0].classList.add('durchgestichen');
}
//////////////////////////////////////////////////////////////////////////
if(subject_6 != "" && topics_6 != "" & pages_6 != "" && price_6 != ""){
    //Wenn bei allen etwas steht
} else {
    //Wenn bei mind. einem nichts steht 
    vorschau_btn_6[0].classList.add('durchgestichen');
}









var price_1_anzeige = price_1.toString().replace(".", ",");
var price_2_anzeige = price_2.toString().replace(".", ",");
var price_3_anzeige = price_3.toString().replace(".", ",");
var price_4_anzeige = price_4.toString().replace(".", ",");
var price_5_anzeige = price_5.toString().replace(".", ",");
var price_6_anzeige = price_6.toString().replace(".", ",");

document.getElementById('subject_1').innerHTML = subject_1;
document.getElementById('topics_1').innerHTML = topics_1;
document.getElementById('pages_1').innerHTML = pages_1;
document.getElementById('price_1').innerHTML = price_1_anzeige + " €";

document.getElementById('subject_2').innerHTML = subject_2;
document.getElementById('topics_2').innerHTML = topics_2;
document.getElementById('pages_2').innerHTML = pages_2;
document.getElementById('price_2').innerHTML = price_2_anzeige + " €";

document.getElementById('subject_3').innerHTML = subject_3;
document.getElementById('topics_3').innerHTML = topics_3;
document.getElementById('pages_3').innerHTML = pages_3;
document.getElementById('price_3').innerHTML = price_3_anzeige + " €";

document.getElementById('subject_4').innerHTML = subject_4;
document.getElementById('topics_4').innerHTML = topics_4;
document.getElementById('pages_4').innerHTML = pages_4;
document.getElementById('price_4').innerHTML = price_4_anzeige + " €";

document.getElementById('subject_5').innerHTML = subject_5;
document.getElementById('topics_5').innerHTML = topics_5;
document.getElementById('pages_5').innerHTML = pages_5;
document.getElementById('price_5').innerHTML = price_5_anzeige + " €";

document.getElementById('subject_6').innerHTML = subject_6;
document.getElementById('topics_6').innerHTML = topics_6;
document.getElementById('pages_6').innerHTML = pages_6;
document.getElementById('price_6').innerHTML = price_6_anzeige + " €";





function hide_all_kasten() {
    col_finderlohn[0].classList.add('hidden');

    col_1[0].classList.add('hidden');
    col_2[0].classList.add('hidden');
    col_3[0].classList.add('hidden');
    col_4[0].classList.add('hidden');
    col_5[0].classList.add('hidden');
    col_6[0].classList.add('hidden');
}



hide_leer_kasten()
function hide_leer_kasten() {    
    col_finderlohn[0].classList.remove('hidden');

    col_1[0].classList.remove('hidden');
    col_2[0].classList.remove('hidden');
    col_3[0].classList.remove('hidden');
    col_4[0].classList.remove('hidden');
    col_5[0].classList.remove('hidden');
    col_6[0].classList.remove('hidden');

    if (subject_1 == "") {
        col_1[0].classList.add('hidden');
    }
    if (subject_2 == "") {
        col_2[0].classList.add('hidden');
    }
    if (subject_3 == "") {
        col_3[0].classList.add('hidden');
    }
    if (subject_4 == "") {
        col_4[0].classList.add('hidden');
    }
    if (subject_5 == "") {
        col_5[0].classList.add('hidden');
    }
    if (subject_6 == "") {
        col_6[0].classList.add('hidden');
    }
}
















function hide_kaufen_fenster() {
    kaufen_fenster[0].classList.add('hidden');
    nummer_fenster[0].classList.add('hidden');
    banner[0].classList.remove('hidden');
    hide_leer_kasten()
}


function kaufen_fenster_anzeigen() {
    hide_all_kasten()
    if (vorname == false){
    kaufen_fenster[0].classList.remove('hidden');
    } else {
        kaufen()
    }

    banner[0].classList.add('hidden');
    window.scrollTo(0, 0);

    preis_3 = preis * 2


    preis_anzeige_1 = preis.toString().replace(".", ",")
    preis_anzeige_3 = preis_3.toString().replace(".", ",")

    document.getElementById('kaufen_optionen').innerHTML = `
    
    <h2>` + fach + `</h2>
    <h3>3x zum Preis von 2x</h3>
    <p>Für 1 Person: ` + preis_anzeige_1 + ` €</p>
    <p>Für 3 Personen: ` + preis_anzeige_3 + ` €</p>
    <br>

`



}



vorname = false
function kaufen() {
    var name = document.getElementById("name").value;
    var name = name.trim().toLowerCase();
    
    name = name.charAt(0).toUpperCase() + name.slice(1);
    console.log(name);

    if (name == "Alexander"||name == "Alissa"||name == "Amelie"||name == "Amelie B."||name == "Amelie S."||name == "Amelie B"||name == "Amelie S"||name == "Azar"||name == "Bastian"||name == "Basti"||name == "Benita"||name == "Binar"||name == "Bohdan"||name == "Charlotte"||name == "Clemens"||name == "David"||name == "Diana"||name == "Elisa"||name == "Ella"||name == "Elsa"||name == "Emma"||name == "Emmi"||name == "Felix"||name == "Fiona"||name == "Franca"||name == "Hanna"||name == "Hannah"||name == "Hannes"||name == "Ilsi"||name == "Isabel"||name == "Isabelle"||name == "Ivan"||name == "Ivana"||name == "Jack"||name == "Jan Malte"||name == "Jan"||name == "Manuel"||name == "Janek"||name == "Jarne"||name == "Jaron"||name == "Jette"||name == "Joleen"||name == "Julian"||name == "Kellner"||name == "Hoffi"||name == "Lea"||name == "Leon"||name == "Linus"||name == "Liv"||name == "Lotta"||name == "Luana"||name == "Luca"||name == "Lucas"||name == "Lukas"||name == "Lya"||name == "Maja"||name == "Marisa"||name == "Marlene"||name == "Marnie"||name == "Marno"||name == "Massimiliano"||name == "Massi"||name == "Mia"||name == "Mika"||name == "Mika"||name == "Moritz"||name == "Naimeh"||name == "Nelia"||name == "Nguyen"||name == "Niklas"||name == "Niklas K."||name == "Niklas K"||name == "Nina"||name == "Noemi"||name == "Nuria"||name == "Pauline"||name == "Rayyan"||name == "Roya"||name == "Sebastien"||name == "Selin"||name == "Selin"||name == "Sophie"||name == "Tabasom"||name == "Tim"||name == "Torben"||name == "Tristan"||name == "Valeria"||name == "Vanessa"||name == "Viktor"||name == "Willi"||name == "Yara"||name == "Zoe"){
        kaufen_fenster[0].classList.add('hidden');
        nummer_fenster[0].classList.remove('hidden');
        vorname = true
    }
    else {
    document.getElementById("name_text_oben").innerHTML = `Gib deinen <b class="red"> richtigen Vornamen</b> ein, um zu kaufen.`
    vorname = false

    }

}











const inputs = document.querySelectorAll('input');

inputs.forEach(el => {
  el.addEventListener('blur', e => {
    if(e.target.value) {
      e.target.classList.add('dirty');
    } else {
      e.target.classList.remove('dirty');
    }
  })
})




function kaufen_1() {
    fach = subject_1
    preis = price_1
    kaufen_fenster_anzeigen()
}

function kaufen_2() {
    fach = subject_2
    preis = price_2
    kaufen_fenster_anzeigen()
}

function kaufen_3() {
    fach = subject_3
    preis = price_3
    kaufen_fenster_anzeigen()
}

function kaufen_4() {
    fach = subject_4
    preis = price_4
    kaufen_fenster_anzeigen()
}

function kaufen_5() {
    fach = subject_5
    preis = price_5
    kaufen_fenster_anzeigen()
}

function kaufen_6() {
    fach = subject_6
    preis = price_6
    kaufen_fenster_anzeigen()
}








function download_alt() {
    downloadFile("Mathe Test Strahlensätze Lernzettel.pdf");
}