var citations = [new Array(), new Array()];
	citations[0][0] = [ "Mesdames, messieur, ", "Je reste fondamentalement persuadé que ", "Dès lors, sachez que je me battrai pour faire admettre que ", "Par ailleurs, c'est en toute connaisance de cause que je peux affirmer aujourd'hui que ","Je tiens à vous dire ici ma détermination sans faille pour clamer haut et fort que ","J'ai depuis longtemps, défendu l'idée que ","Et c'est en toute conscience que je déclare avec conviction que ","Et ce n'est certainement pas vous, mes chers compatriotes, qui me contredirez si je vous dis que "]; 
	citations[0][1] = ["la conjecture actuelle ","la situation d'exclusion que certains d'entre vous connaissent ","l'acuité des problèmes de la vie quotidienne ","la volonté farouche de sortir notre pays de la crise ","l'effort prioritaire en faveur du statue précaire des exclus ", "le particularisme dû à notre histoire unique ","l'aspiration plus que légitime de chacun au progès social ","la nécessité de répondre à votre inquiétude journalière, que vous soyez jeunes ou âgés, "];
	citations[0][2] = ["doit s'intégrer à la finalisation globale ","oblige à la prise en compte encore plus effective ","interpelle le citoyen que je suis et nous oblige tous à aller de l'avant dans la voie ","a pour conséquence obligatoire l'urgente necessité ","conforte mon désir incontestable d'aller dans le sens ","doit nous amener au choix réellement impératif ","doit prendre en compte les préoccupations de la population de base dans l'élaboration ","entraine une mission somme toute des plus exaltantes pour moi: l'élaboration "];
	citations[0][3] = ["d'un processus allant vers plus d'égalité.","d'un avenir s'orientant vers plus de progès et plus de justice.","d'une restructuration dans laquelle chacun pourra enfin retrouver sa dignité","d'une valorisation sans concession de nos caractères spécifiques.","d'un plan correspondant véritablement aux exigences légitimes de chacun.","de solutions rapides correspondant aux grand axes sociaux prioritaires.","d'un programme plus humain, plus fratenel et plus juste.", "d'un projet porteur de véritables espoirs, notamment pour les plus démunis."];

	citations[1][0] = ["Chers collègues ", "L'éxpérience montre sans conteste que ", "Par ailleur ", "Dans la conjecture actuelle ", "La prise en compte des difficultés de l'enfant exige que ", "Les activités transversales montrent que ", "On peut remarquer que ", "La maitrise des prérequis souligne que "];
	citations[1][1] = ["l'arrivé des nouvelles technologies de l'information ", "l'environnement socioculturel des apprenants ", "la prise en compte du projet personnel de l'élève ", "le souci permanent d'être au plus près de la demande de connaissances ", "l'engagement sur des pistes pédagogiques innovantes ", "la mise en place du triangle didactique ", "la prise en comtpe des rythmes scolaire ", "l'acquisition d'une méthodologie "];
	citations[1][2] = ["exige une profonde réforme des dispositifs pédagogiques ", "participe d'un projet ambitieux et global ", "traduit la necessité ", "implique une volonté sans faille pour la mise en place ", "mobilise tous les processus ", "enrichit en profondeur la formation ", "requiert un recentrage permanent ", "propose l'adaptation en profondeur "];
	citations[1][3] = ["des réflexions didactiques.", "des savoir-faire de la communauté enseignante.", "d'un profond changement des mentalités", "d'une nouvelle approche systémique des structures existantes.", "des différentes remédiations institutionnalles et familiales.", "des référientiels cognitifs.", "des modes de représentations mentales habituelles.", "du système actuel."];

	 function resetFields() { //bouton d'acualisation
		var paragraphes = document.querySelectorAll(" blockquote > p");
		for (var i = 0; i < paragraphes.length; i++) {
			paragraphes[i].textContent = '';
		}
		 document.getElementById("actualiser").style.display = "none";
		 document.getElementById("generer").style.display = "block";
	}
	 						
	function generate() {//créer les opérations du bouton générer
		var aleatoire = Math.floor(Math.random() * 8);
		var	aleatoire2 = Math.floor(Math.random() * 8);
		var	aleatoire3 = Math.floor(Math.random() * 8);
		var	aleatoire4 = Math.floor(Math.random() * 8);
		var	aleatoire5 = Math.floor(Math.random() * 8);
	
		document.getElementById("actualiser").style.display = "block";
		document.getElementById("generer").style.display = "none";
	
		var valeur;//récupérer la valeur d'un bouton radio
		var optradio = document.getElementsByName("optradio");
		for (var i = 0; i < optradio.length; i++) {
			if (optradio[i].checked ) {
				valeur = optradio[i].value;
			}	
		}
				
		if ( valeur == 1) {
			document.getElementById('citation').innerHTML = citations[type.selectedIndex][0][aleatoire] + citations[type.selectedIndex][1][aleatoire2] + citations[type.selectedIndex][2][aleatoire3] + citations[type.selectedIndex][3][aleatoire4];
		} else if (  valeur == 2) {
			document.getElementById('citation').innerHTML = citations[type.selectedIndex][0][aleatoire] + citations[type.selectedIndex][1][aleatoire2] + citations[type.selectedIndex][2][aleatoire3] + citations[type.selectedIndex][3][aleatoire4];
			document.getElementById('citation2').innerHTML = citations[type.selectedIndex][0][aleatoire2] + citations[type.selectedIndex][1][aleatoire3] + citations[type.selectedIndex][2][aleatoire4] + citations[type.selectedIndex][3][aleatoire5];
		} else if (valeur == 3) {
			document.getElementById('citation').innerHTML =citations[type.selectedIndex][0][aleatoire] + citations[type.selectedIndex][1][aleatoire2] + citations[type.selectedIndex][2][aleatoire3] + citations[type.selectedIndex][3][aleatoire4];
			document.getElementById('citation2').innerHTML =citations[type.selectedIndex][0][aleatoire2] + citations[type.selectedIndex][1][aleatoire3] + citations[type.selectedIndex][2][aleatoire4] + citations[type.selectedIndex][3][aleatoire5];
			document.getElementById('citation3').innerHTML = citations[type.selectedIndex][0][aleatoire3] + citations[type.selectedIndex][1][aleatoire4] + citations[type.selectedIndex][2][aleatoire5] + citations[type.selectedIndex][3][aleatoire];
		} else if (valeur == 4) {
			document.getElementById('citation').innerHTML =citations[type.selectedIndex][0][aleatoire] + citations[type.selectedIndex][1][aleatoire2] + citations[type.selectedIndex][2][aleatoire3] + citations[type.selectedIndex][3][aleatoire4];
			document.getElementById('citation2').innerHTML =	citations[type.selectedIndex][0][aleatoire2] + citations[type.selectedIndex][1][aleatoire3] + citations[type.selectedIndex][2][aleatoire4] + citations[type.selectedIndex][3][aleatoire5];
			document.getElementById('citation3').innerHTML =citations[type.selectedIndex][0][aleatoire3] + citations[type.selectedIndex][1][aleatoire4] + citations[type.selectedIndex][2][aleatoire5] + citations[type.selectedIndex][3][aleatoire];
			document.getElementById('citation4').innerHTML =citations[type.selectedIndex][0][aleatoire4] + citations[type.selectedIndex][1][aleatoire5] + citations[type.selectedIndex][2][aleatoire] + citations[type.selectedIndex][3][aleatoire2];
		} else if ( valeur == 5) {
			document.getElementById('citation').innerHTML =citations[type.selectedIndex][0][aleatoire] + citations[type.selectedIndex][1][aleatoire2] + citations[type.selectedIndex][2][aleatoire3] + citations[type.selectedIndex][3][aleatoire4];
			document.getElementById('citation2').innerHTML =citations[type.selectedIndex][0][aleatoire2] + citations[type.selectedIndex][1][aleatoire3] + citations[type.selectedIndex][2][aleatoire4] + citations[type.selectedIndex][3][aleatoire5];
			document.getElementById('citation3').innerHTML =citations[type.selectedIndex][0][aleatoire3] + citations[type.selectedIndex][1][aleatoire4] + citations[type.selectedIndex][2][aleatoire5] + citations[type.selectedIndex][3][aleatoire];
			document.getElementById('citation4').innerHTML =citations[type.selectedIndex][0][aleatoire4] + citations[type.selectedIndex][1][aleatoire5] + citations[type.selectedIndex][2][aleatoire] + citations[type.selectedIndex][3][aleatoire2];
			document.getElementById('citation5').innerHTML =citations[type.selectedIndex][0][aleatoire5] + citations[type.selectedIndex][1][aleatoire] + citations[type.selectedIndex][2][aleatoire2] + citations[type.selectedIndex][3][aleatoire3];
		}  				
	}   
  service= new google.maps.places.PlacesService(map);


request = {
	location: latng ,
	radius: 800,
	types: ['restaurant']
	}; 
	 


	
	service.nearbySearch(request, callback); 
	
	google.maps.event.addListener(map, 'rightclick', function(event) {
		map.setCenter(event.latLng)
		
		clearResults(markers) 
		$("#list").empty();
		var request={
			location: event.LatLng,
			radius: 8000, 
			types: ['restaurant']
			};
			service.nearbySearch(request, callback);
	})

 function callback(results, status) { 


 if (status == google.maps.places.PlacesServiceStatus.OK){
	 for (var i = 0; i < results.length; i++) {
		
		 markers.push(createMarker(results[i]));
		  var place= results[i];

			console.log(markers[i].title);

			// txtz = "Nom du restaurant: " + place.name  + "Rating: " + place.rating
			addLi(place.name, place.name,place.rating);

		 }
			toggle();
		 
}
};
		

		
