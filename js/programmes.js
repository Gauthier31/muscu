// Declaration variable
var exo;                // num exo 
var numExo = 1;         // enieme exo du programme
var serie = 1;          // num serie 
var numProg = 0         // Numéro du programme
var newSerieNum = 0;    // Numéro de la série suivant en fonction de l'exo

var totalTemps = 0;     // temps en sec
var total, t1, t2;

var progLancer = false; // par defaut

// Liste des exo
// @numProg numéro du programme
function programmes(numProgramme) {

    progLancer = true;
    numProg = numProgramme;

    // Masque
    const masque = document.getElementsByClassName('bloc');
    for (i = 0; i < masque.length; i++) {
        masque[i].style.display = "none";
    }

    const f1 = document.getElementById('blocFicheResultat');
    page("programmeLancer");

    f1.innerHTML = "";

    let listExoInfo = "";
    let listExo = "";

    for (i = 1; i < BD_Programme[numProg].length; i++) {

        let tab = "";

        // On mets en place les lignes du tableau de l'exo
        for (j = 1; j < BD_Stat[BD_Programme[numProg][i]].length; j += 2) {

            exoTab = BD_Programme[numProg][i];
            serieTab = (j + 1) / 2;

            tab +=
                `<div class="lineTab taille2" id="exo` + exoTab + `serie` + serieTab + `" onclick="colorSerie(` + serieTab + `)">
                
                    <div class="caseTab_4_SE fw-9">` + serieTab + `</div>

                    <div class="caseTab_4_Mid">
                        <!-- <p class="valeurTab" id="exo` + exoTab + `serie` + serieTab + `-Repetition">` + BD_Stat[exoTab][j] + `</p> -->
                        <input class="input2" id="exo` + exoTab + `serie` + serieTab + `-Repetition" value="` + BD_Stat[exoTab][j] + `">
                    </div>

                    <div class="caseTab_4_Mid">
                        <!-- <p class="valeurTab" id="exo` + exoTab + `serie` + serieTab + `-Poids">` + BD_Stat[exoTab][j + 1] + `</p> -->
                        <input class="input2" id="exo` + exoTab + `serie` + serieTab + `-Poids" value="` + BD_Stat[exoTab][j + 1] + `">
                    </div>

                    <div class="caseTab_4_SE">
                        <button class="btn-module4" id="exo` + exoTab + `serie` + serieTab + `-Avis" 
                            onclick="avis(` + exoTab + `, ` + serieTab + `)" value="+">
                            <i class="fa-solid fa-plus"></i>
                        </button>
                    </div>
                </div>`;
        }


        listExoInfo +=
            `<div class="none" id="Info_Exo` + BD_Programme[numProg][i] + `">
                <div class="exoHead">
                    <p class="modal-title taille fw-9 depasse" id="titre-modal">` + BD_Exo[BD_Programme[numProg][i]][1] + `</p>
                </div>

                <div class="exoBody">
                    <div class="card-img-bloc2">
                        <img class="imgExo mx-auto d-block" src="document/exo/` + BD_Exo[BD_Programme[numProg][i]][1] + `.jpg" alt="` + BD_Exo[BD_Programme[numProg][i]][1] + `" />
                    </div>
                    <hr class="hr-orange" />

                    <div class="tableStat" id="` + BD_Exo[BD_Programme[numProg][i]][0] + `_statModule">
                        <div class="lineTabHead taille1">
                            <div class="caseTab_4_SE fw-9">Serie</div>
                            <div class="caseTab_4_Mid fw-9">Rep</div>
                            <div class="caseTab_4_Mid fw-9">Kilos</div>
                            <div class="caseTab_4_SE fw-9">
                                <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                    <i class="fa-solid fa-pen btn-i"></i>
                                </button>
                            </div>
                        </div>
                        ` + tab + `
                    </div>

                    <button onclick="addSerie()" class="btn btn-module3">
                        <i class="fa-solid fa-plus"></i>
                    </button>
                </div>
            </div>`;




        listExo +=
            `<div class="ligne-list-exo" id="Lancement_Exo` + BD_Programme[numProg][i] + `">

                <div class="ligne-img-bloc2">
                    <img class="ligne-img-left2" src="document/exo/` + BD_Exo[BD_Programme[numProg][i]][1] + `.jpg"/>
                </div>

                <div class="taille1 fw-9 txt-center">` + BD_Exo[BD_Programme[numProg][i]][1] + `</div>

                <div class="triangle1" onclick = "exoSuivant(` + i + `)"></div>
            </div>`;



    }


    f1.innerHTML +=
        `<div class="ticket0">
            <div class="container-fluid" id="ficheResultat">

                <div class="row g-5" id="listExo">
                </div>

            </div>

            <div class="bouchon3"></div>
                
            <div class="ticket1">
                <div class="bloc-tiret">
                    <div class="tiret"></div>
                </div>

                <div class="detail3">

                    <div id="bouchon4" class="bouchon4">
                        
                        ` + listExoInfo + `
                    
                        <div class="exoFooter">
                            <button class="btn btn-dark btn-module2" onclick="stop()" id="btn-MA" value="Marche">Marche</button>
                            
                            <div class="temps">
                                <p id="temps" class="taille fw-9">00:00,0</p>
                                <p id="temps.1" class="temps1">00:00,00</p>
                                <p id="temps.2" class="temps1">00:00,00</p>
                            </div>

                            <button class="btn btn-warning btn-module2" onclick="serieSuivant()">Suivant</button>

                        </div>
                    
                    </div> 
                
                </div>
            </div>

        
            <div id="ticket2" class="ticket2">
                <div class="bloc-tiret" onclick="ticket2Up_Down()">
                    <div class="tiret"></div>
                </div>

                <div id="detail4" class="detail4_Down">
                    <div class="div-btn">
                            <button onClick="page('ajoutExo')" class="btn btn-ticket2 taille1">Ajouter un exercice</button>
                    </div>
                    ` + listExo + `
                </div>
                
            </div>
        </div>`;

    // On affiche et color
    document.getElementById("Info_Exo" + BD_Programme[numProg][1]).classList.remove("none");
    document.getElementById("Lancement_Exo" + BD_Programme[numProg][1]).classList.add("exoActu");

    exo = BD_Programme[numProg][1];
    // serie = 1 // On le sait déja

    // On colorie la premiere série du premier exo
    document.getElementById("exo" + exo + "serie" + serie).classList.add("serieActu");

    ficheInitialisation(numProg);

}

// Initialise la page des résultats
// @numProg numéro du programme
function ficheInitialisation(numProg) {
    let ficheResultat = document.getElementById("listExo");

    // Date de créa
    var today = new Date();

    ficheResultat.innerHTML =
        `<p class="text-center taille fw-9" > `
        + BD_Programme[numProg][0] + ` : `
        + today.toLocaleDateString("en-US") +
        `</p >
        <div class="col-6" style="display: none">`;
}

function ticket2Up_Down() {

    const detail4 = document.getElementById("detail4");

    if (detail4.className == "detail4_Down") {

        detail4.classList.remove("detail4_Down");
        detail4.classList.add("detail4_Up");
        detail4.style.transition = "height 0.75s";
    } else {

        detail4.classList.remove("detail4_Up");
        detail4.classList.add("detail4_Down");
        detail4.style.transition = "height 0.75s";
    }

}

// Appuie sur le bouton pour changer de module et appelle la fonction suivant2(exoNext)
// numExoNext numéro de l'exo suivant dans la table programme
function exoSuivant(numExoNext) {

    numExo = numExoNext;                            // Numéro de la case dans la tableau stat
    exoNext = BD_Programme[numProg][numExoNext];    // Numéro de l'exercice

    // On décolore le la ligne
    document.getElementById("exo" + exo + "serie" + serie).classList.remove("serieActu");
    // On enleve et affiche les infos des exos
    document.getElementById("Info_Exo" + exo).classList.add("none");
    document.getElementById("Info_Exo" + exo).classList.remove("block");

    document.getElementById("Info_Exo" + exoNext).classList.remove("none");
    document.getElementById("Info_Exo" + exoNext).classList.add("block");

    // On enleve et affiche l'exo actuel dans ticket2
    colorExo(exoNext)
}


function serieSuivant() {
    fiche(exo, serie);
    colorSerie(serie + 1);

    clearInterval(boucle);
    total = 0;
    temps();

    document.getElementById("btn-MA").innerHTML = "Arret";
    document.getElementById("btn-MA").value = "Arret";

    document.getElementById("temps.1").innerHTML = dateActu();
}

// On enleve et affiche l'exo actuel dans ticket2
function colorExo(exoNext) {

    document.getElementById("Lancement_Exo" + exo).classList.remove("exoActu");
    document.getElementById("Lancement_Exo" + exoNext).classList.add("exoActu");

    //
    document.getElementById("exo" + exo + "serie" + 1).classList.add("serieActu");

    exo = exoNext;
    newSerieNum = 0;
    serie = 1;
    colorSerie(1);
}

// On colorie la premiere série du premier exo
function colorSerie(numSerie) {

    try {
        document.getElementById("exo" + exo + "serie" + serie).classList.remove("serieActu");
        document.getElementById("exo" + exo + "serie" + numSerie).classList.add("serieActu");

        serie = numSerie;
    } catch (err) {
        console.log(err);
        exoSuivant(numExo + 1);
    }
}

// AJoute une serie a l'exo
function addSerie() {

    var tab = document.getElementById(exo + "_statModule");

    if (newSerieNum == 0) {
        newSerieNum = (BD_Stat[exo].length + 1) / 2;
    } else {
        newSerieNum++;
    }

    tab.innerHTML +=
        `<div class="lineTab taille2" id="exo` + exo + `serie` + newSerieNum + `" onclick="colorSerie(` + newSerieNum + `)">
                
            <div class="caseTab_4_SE fw-9">` + newSerieNum + `</div>

            <div class="caseTab_4_Mid">
                <input class="input2" id="exo` + exoTab + `serie` + serieTab + `-Repetition" value="` + BD_Stat[exoTab][j] + `">
            </div>

            <div class="caseTab_4_Mid">
               <input class="input2" id="exo` + exoTab + `serie` + serieTab + `-Poids" value="` + BD_Stat[exoTab][j] + `">
            </div>

            <div class="caseTab_4_SE">
                <button class="btn-module4" id="exo` + exo + `serie` + newSerieNum + `-Avis" 
                    onclick="avis(` + exo + `, ` + newSerieNum + `)" value="+">
                    <i class="fa-solid fa-plus"></i>
                </button>
            </div>
        </div>`;
}

function avis(exoActu, serieActu) {

    let avis = document.getElementById("exo" + exoActu + "serie" + serieActu + "-Avis");

    if (avis.value == "-") {
        avis.innerHTML = `<i class="fa-solid fa-plus"></i>`;
        avis.value = "+";

    } else if (avis.value == "=") {
        avis.innerHTML = `<i class="fa-solid fa-minus"></i>`;
        avis.value = "-";

    } else if (avis.value == "+") {
        avis.innerHTML = `<i class="fa-solid fa-equals"></i>`;
        avis.value = "=";
    }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Lance le chrone
function temps() {
    const time = document.getElementById("temps");


    if (total == 0) {
        const d = new Date();
        t1 = Math.floor(d.getTime() / 100);
    } else {
        const f = new Date();
        t1 = Math.floor(f.getTime() / 100) - total;
    }

    boucle = setInterval(function () {

        const e = new Date();
        t2 = Math.floor(e.getTime() / 100);

        let tempsFinal = t2 - t1;

        var min = Math.floor(tempsFinal / 600);
        var sec = Math.floor(tempsFinal / 10 % 60);
        var micro = tempsFinal % 10;

        min = (min < 10) ? "0" + min : min;
        sec = (sec < 10) ? "0" + sec : sec;

        time.innerHTML = min + ":" + sec + "," + micro;
    }, 100);
}

// Stop le chrono
function stop() {
    var btn = document.getElementById("btn-MA");

    // Lance chrono
    if (btn.value == "Marche") {
        temps(exo);

        btn.innerHTML = "Arret";
        btn.value = "Arret";

        // Stop chrono
    } else {
        clearInterval(boucle);
        document.getElementById("temps.2").innerHTML = dateActu();

        total = t2 - t1;

        btn.innerHTML = "Marche";
        btn.value = "Marche";

    }
}

// Renvoie le temps du jour
function dateActu() {

    const d = new Date();

    let nowH = (d.getHours() < 10) ? "0" + d.getHours() : d.getHours();
    let nowM = (d.getMinutes() < 10) ? "0" + d.getMinutes() : d.getMinutes();
    let nowS = (d.getSeconds() < 10) ? "0" + d.getSeconds() : d.getSeconds();

    return nowH + ":" + nowM + ":" + nowS;
}

// Clean le chrono et initialise le btn marche arret
function clear() {
    clearInterval(boucle);
    var btn = document.getElementById("btn-MA");
    btn.innerHTML = "Arret";
    btn.value = "Arret";
}



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// On écrit dans la fiche les résultats
// @exo numéro de l'exercice
// @serie numéro de la répétition
function fiche(exoActu, serieActu) {

    // On verifie que le tableau existe
    let exist = document.getElementById("colExo" + exoActu);

    // Si la tableau n'existe pas
    if (!exist) {

        let listExo = document.getElementById("listExo");

        listExo.innerHTML +=
            `<div class="col-6" id="colExo` + exoActu + `">
            <p class="taille2 txtExo fw-600 depasse">` + BD_Exo[exoActu][1] + `</p>
            <hr class="hr-orange"/>
        
            <div class="lineMiniTabHead">
                <p class="caseMiniTab_3 fw-9">Rep</p>
                <p class="caseMiniTab_3 fw-9">Kilos</p>
                <p class="caseMiniTab_3 fw-9">Durée</p>
            </div>`;
    }

    // prends les valeurs de la ligne du tableau
    let nbRep = document.getElementById("exo" + exoActu + "serie" + serieActu + "-Repetition").value;
    let nbPoids = document.getElementById("exo" + exoActu + "serie" + serieActu + "-Poids").value;
    let avis = document.getElementById("exo" + exoActu + "serie" + serieActu + "-Avis");
    let couleur = "";

    if (avis.value == "+") {
        couleur = "fd-vert";

    } else if (avis.value == "-") {
        couleur = "fd-orange";
    }

    // on prends le temps
    let tempsSerie = document.getElementById("temps").textContent;

    // On écrit la def de la rep
    let colExo = document.getElementById("colExo" + exoActu);

    colExo.innerHTML +=
        `<div class="lineMiniTab ` + couleur + `">
            <p class="caseMiniTab_3">` + nbRep + `</p>
            <p class="caseMiniTab_3">` + nbPoids + `</p>
            <p class="caseMiniTab_3">` + tempsSerie + `</p>
        </div>`;
}


// Ajoute un exo
function addExo(numExo) {

    // si prog lancer alors on l'ajoute sinon on let mets au prog par defaut
    if (progLancer) {
        const count = BD_Programme[numProg].push(numExo);

        // Masque
        const masque = document.getElementsByClassName('bloc');
        for (i = 0; i < masque.length; i++) {
            masque[i].style.display = "none";
        }

        const f1 = document.getElementById('blocFicheResultat');
        f1.style.display = "block";



        //////////////////////////////////////////////////////////////////////////////////////////////////

        let tab = "";

        // On mets en place les lignes du tableau
        for (j = 1; j < BD_Stat[numProg].length; j += 2) {

            exoTab = numExo;
            serieTab = (j + 1) / 2;

            tab +=
                `<div class="lineTab taille2" id="exo` + exoTab + `serie` + serieTab + `" onclick="colorSerie(` + serieTab + `)">
                
                <div class="caseTab_4_SE fw-9">` + serieTab + `</div>

                <div class="caseTab_4_Mid">
                    <input class="input2" id="exo` + exoTab + `serie` + serieTab + `-Repetition" value="` + BD_Stat[exoTab][j] + `">
                </div>

                <div class="caseTab_4_Mid">
                    <input class="input2" id="exo` + exoTab + `serie` + serieTab + `-Poids" value="` + BD_Stat[exoTab][j + 1] + `">
                </div>

                <div class="caseTab_4_SE">
                    <button class="btn-module4" id="exo` + exoTab + `serie` + serieTab + `-Avis" 
                        onclick="avis(` + exoTab + `, ` + serieTab + `)" value="+">
                        <i class="fa-solid fa-plus"></i>
                    </button>
                </div>
            </div>`;
        }

        //<p class="valeurTab" id="exo` + exoTab + `serie` + serieTab + `-Repetition">` + BD_Stat[exoTab][j] + `</p> 
        //<p class="valeurTab" id="exo` + exoTab + `serie` + serieTab + `-Poids">` + BD_Stat[exoTab][j + 1] + `</p> 

        let idExo = BD_Programme[numProg][BD_Programme[numProg].length - 1];

        // On l'ajoute dans le body du ticket1
        const bouchon4 = document.getElementById("bouchon4");
        bouchon4.innerHTML +=
            `<div class="none" id="Info_Exo` + idExo + `">
                <div class="exoHead">
                    <p class="modal-title taille fw-9 depasse" id="titre-modal">` + BD_Exo[idExo][1] + `</p>
                </div>

                <div class="exoBody">
                    <div class="card-img-bloc2">
                        <img class="imgExo mx-auto d-block" src="document/exo/` + BD_Exo[idExo][1] + `.jpg" alt="` + BD_Exo[idExo][1] + `" />
                    </div>
                    <hr class="hr-orange" />

                    <div class="tableStat" id="` + BD_Exo[idExo][0] + `_statModule">
                        <div class="lineTabHead taille1">
                            <div class="caseTab_4_SE fw-9">Serie</div>
                            <div class="caseTab_4_Mid fw-9">Rep</div>
                            <div class="caseTab_4_Mid fw-9">Kilos</div>
                            <div class="caseTab_4_SE fw-9">
                                <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                    <i class="fa-solid fa-pen btn-i"></i>
                                </button>
                            </div>
                        </div>
                        ` + tab + `
                    </div>

                    <button onclick="addSerie()" class="btn btn-module3">
                        <i class="fa-solid fa-plus"></i>
                    </button>
                </div>
            </div>`;



        ////////////////////////////////////////////////////////////////////////////////////////////////////

        // On l'ajoute dans le detail4
        const detail4 = document.getElementById("detail4");
        detail4.innerHTML +=
            `<div class="ligne-list-exo" id="Lancement_Exo` + idExo + `">

                <div class="ligne-img-bloc2">
                    <img class="ligne-img-left2" src="document/exo/` + BD_Exo[numExo][1] + `.jpg"/>
                </div>

            <div class="taille1 fw-9 txt-center">` + BD_Exo[numExo][1] + `</div>

                <div class="triangle1" onclick = "exoSuivant(` + idExo + `)"></div>
            </div>`;

        exoSuivant(BD_Programme[numProg].length - 1);
    } else {
        const count = BD_Programme[0].push(numExo);
        programmes(numProg);
    }
}