// ------------------------------------------------------------------------ //
                      // JS - CATALOQUE VOITURE  //
// ------------------------------------------------------------------------ //
                            // HOME PAGE //
// ------------------------------------------------------------------------ //
//
// IMPORTATION DU FICHIER JSON
fetch("luxdrive_site_data_full.json")
  // CHARGEMENT DU FICHIER OK ou NOK
  .then(function(verif){
    if (!verif.ok) {
      console.log("Erreur du chargement du fichier JSON !");
      throw new Error("Erreur du chargement du fichier JSON !");
    }
    console.log("Chargement du fichier JSON OK !");
    return verif.json();
  })
    //
  // ------------------------------------------ //
                  // BANNER //
  // ------------------------------------------ //
  .then(function(data){
    //
    // ELEMENT DIV HTML
    let LogementsContainer = document.getElementById("container-banner");
    //
    if (LogementsContainer){
        //
        // BACKGROUND
        let backGround = document.querySelector(".titre-principal");
        backGround.style.backgroundImage = "url('./images/banners/voiture-banner.jpg')";
        backGround.style.backgroundRepeat = "no-repeat";
        backGround.style.backgroundPosition = "center";
        backGround.style.backgroundSize = "cover";
        //
        // SELECTION DE LA CATEGORIE
        let heroBanner = data.pagesContent.Accueil.heroBanner;
        //
        // ------------------------------------------------ //
        // CREATION DE LA DIV POUR L'AFFICHAGE
        let divHomePage = document.createElement("div");
        //
        //  JS - STYLE CSS
        // AJOUT CLASS POUR STYLE -> VOIR CSS
        divHomePage.classList.add('title')
        // ------------------------------------------------ //
        //
        // FILTRE - RECUPERATION DES DONNEES DU HERO BANNER
        let htmlHomePage = "<h1>" + heroBanner.title + "</h1>";
        htmlHomePage += "<p>" + heroBanner.subtitle + "</p>";
        htmlHomePage += "<a href='./catalogue.html' title='Voir le catalogue'>" + heroBanner.cta + "</a>";
        //
        // INSERER LE CONTENU DANS LA DIV
        divHomePage.innerHTML = htmlHomePage;
        //
        // ENCAPSULATION FINAL
        LogementsContainer.appendChild(divHomePage);
        //
    };
  // ------------------------------------------ //
                  // STATS //
  // ------------------------------------------ //
    //
    // ELEMENT DIV HTML
    let statsID = document.querySelector(".stats");
    //
    if(statsID){
    //
      for (let i = 0; i < data.pagesContent.Accueil.stats.length; i++) {
        //
        let listing = data.pagesContent.Accueil.stats[i];
        //
        if(listing){
        // ------------------------------------------------ //
        // CREATION DE LA DIV POUR L'AFFICHAGE
          let divHomePage2 = document.createElement("div");
          //
          //  JS - STYLE CSS
          // AJOUT CLASS POUR STYLE -> VOIR CSS
          divHomePage2.classList.add('avis');
          //
          let htmlHomePage2 = "<p>" + listing.label + "</p>";
          htmlHomePage2 += "<p>" + listing.value + "</p>";
          //
          // AJOUT DU CONTENU DANS LA DIV
            divHomePage2.innerHTML = htmlHomePage2;

          // ENCAPSULATION FINAL
          statsID.appendChild(divHomePage2);
        };
      };
    };
  // ------------------------------------------ //
                // TESTIMONIALS //
  // ------------------------------------------ //
    //
    // ELEMENT DIV HTML
    let testimonialsData = document.querySelector(".testimonials");
    //
    if(testimonialsData){
        //
        for (let i = 0; i < data.testimonials.length; i++) {
            //
            let listing2 = data.testimonials[i];
            //
            if (listing2) {
                //
                // ------------------------------------------------ //
                // CREATION DE LA DIV POUR L'AFFICHAGE
                let divHomePage3 = document.createElement("div");
                //
                //
                divHomePage3.classList.add("avis")
                // SELECTION DES DATAS DANS JSON
                let htmlHomePage3 = "<p>" + "Nom:" + " " + listing2.name + "</p>";
                htmlHomePage3 += "<p>" + "Note:" + " " + listing2.note + "</p>";
                htmlHomePage3 += "<p>" + "Avis :" + " " + listing2.message + "</p>";
                //
                // AJOUT DU CONTENU DANS LA DIV
                divHomePage3.innerHTML = htmlHomePage3;
                //
                // ENCAPSULATION FINAL
                testimonialsData.appendChild(divHomePage3);
            };
        };
      };
    // ------------------------------------------ //
    //
    // ELEMENT DIV HTML
    let footer = document.querySelector(".container-footer");
    //
    if (footer){
      //  Pointer sur sa Class HTML
      //
      // RECUP SOCIAL
      let socials = data.footer.socials;
      //
      // ------------------------------------------------ //
      // CREATION DE LA DIV POUR L'AFFICHAGE
      let divHomePage4 = document.createElement("div");
      //
      // CREATION CLASS POUR STYLE -> VOIR CSS
      divHomePage4.classList.add("socials");
      //
      // SELECTION DES DATAS DANS JSON
      let htmlHomePage4 = "<div class='links'>" + "<p>" +" Suivez nos réseaux sociaux :" + "</p>" + "</div>";
      htmlHomePage4 += "<a href='" + socials.instagram + "'>Instagram</a>";
      htmlHomePage4 += "<a href='" + socials.youtube + "'>Youtube</a>";
      htmlHomePage4 += "<a href='" + socials.twitter + "'>Twitter</a>";
      //
      // AJOUT DU CONTENU DANS LA DIV
      divHomePage4.innerHTML = htmlHomePage4;
      //
      // ENCAPSULATION FINAL
      footer.appendChild(divHomePage4);
    };
  // ------------------------------------------------------------------------ //
                              // CATALOGUE //
  // ------------------------------------------------------------------------ //
    //
    // ELEMENT DIV HTML
    let Catalogue =  document.querySelector(".cars-line1");
    let Catalogue2 =  document.querySelector(".cars-line2");
    let Catalogue3 =  document.querySelector(".cars-line3");
    //
    if (Catalogue){

      // TEST CHARGEMENT
      console.log("Class Cars OK");
      //
      // INCREMENTE
      for (let i = 0; i < data.cars.length; i++){
          //
          // STOCK DES DATAS DANS VARIABLE
          let catalogueCars = data.cars[i];
          //
          if (catalogueCars.brandId === 1 || catalogueCars.brandId === 2 || catalogueCars.brandId === 3){
          //
          // CREATION DE LA DIV POUR L'AFFICHAGE
          let divCatalogue = document.createElement("div");
              //
              divCatalogue.classList.add('item')
              // SELECTION DES DATAS DANS JSON
              let htmlCatalogue = "<img src=' " + "." + catalogueCars.image + " '/>";
              htmlCatalogue += "<p>" + " " + catalogueCars.name + "</p>";
              htmlCatalogue += "<p>" + " " + catalogueCars.description + "</p>";
              htmlCatalogue += "<p>" + "Prix :" + " " + catalogueCars.price + "€" + "</p>";
              htmlCatalogue += "<button>" + "Voir détails" + "</button>";
              //
              // AJOUT DU CONTENU DANS LA DIV
              divCatalogue.innerHTML = htmlCatalogue;
              //
              // ENCAPSULATION FINAL
              Catalogue.appendChild(divCatalogue);
        };
        //
        //----------------------------------------------------------------------------------------------//
        if (catalogueCars.brandId === 4 || catalogueCars.brandId === 5 || catalogueCars.brandId === 6){
          //
          // CREATION DE LA DIV POUR L'AFFICHAGE
          let divCatalogue2 = document.createElement("div");
          //
          divCatalogue2.classList.add('item')
          // SELECTION DES DATAS DANS JSON
          let htmlCatalogue = "<img src=' " + "." + catalogueCars.image + " '/>";
          htmlCatalogue += "<p>" + " " + catalogueCars.name + "</p>";
          htmlCatalogue += "<p>" + " " + catalogueCars.description + "</p>";
          htmlCatalogue += "<p>" + "Prix :" + " " + catalogueCars.price + "€" + "</p>";
          htmlCatalogue += "<button>" + "Voir détails" + "</button>";
          //
          // AJOUT DU CONTENU DANS LA DIV
          divCatalogue2.innerHTML = htmlCatalogue;
          //
          // ENCAPSULATION FINAL
          Catalogue2.appendChild(divCatalogue2);
        };
        //----------------------------------------------------------------------------------------------//
        if (catalogueCars.brandId === 7 || catalogueCars.brandId === 8){
          //
          // CREATION DE LA DIV POUR L'AFFICHAGE
          let divCatalogue3 = document.createElement("div");
          //
          divCatalogue3.classList.add('item');
          // SELECTION DES DATAS DANS JSON
          let htmlCatalogue = "<img src=' " + "." + catalogueCars.image + " '/>";
          htmlCatalogue += "<p>" + " " + catalogueCars.name + "</p>";
          htmlCatalogue += "<p>" + catalogueCars.description + "</p>";
          htmlCatalogue += "<p>" + "Prix :" + " " + catalogueCars.price + "€" + "</p>";
          htmlCatalogue += "<button>" + "Voir détails" + "</button>";
          //
          // AJOUT DU CONTENU DANS LA DIV
          divCatalogue3.innerHTML = htmlCatalogue;
          //
          // ENCAPSULATION FINAL
          Catalogue3.appendChild(divCatalogue3);
        }
      };
    };
  });