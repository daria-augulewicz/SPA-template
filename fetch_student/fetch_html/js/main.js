function create(wEl){
	return document.createElement(wEl);
}

function el (id) {
	return document.getElementById(id);
}	

function loadHTML(){
    el('test').innerHTML = '';
    
    fetch('data/test.html')                  // lade etwas
    .then(function(response){
        return response.text();
        
    }) // warte bis es da ist
    
    .then(function(data){
        
        el('test').innerHTML = data; 
    })     // tu etwas damit
};

function loadJSON (){
    el('test').innerHTML = '';  
    
    fetch('data/test.json')
    
    .then(function(response){
        return response.json();
    })
    
    .then(function(data){
          
            tabellenGenerator(data,el('test'));
    })
}

//fetch()
//.then()
//.then()

function loadGeoJSON(){
    
    fetch('data/all.geojson')
    
    .then(function(response){
        return response.json();
    })
    
    .then(function(data){
        tabellenGenerator(convertGeoJSON(data),el('test'));
        // convertGeoJSON ...
    });
};

function tabellenGenerator(data,parentEl){
    parentEl.innerHTML = '';
        
    let table,tHead,tBody,tr,zelle; // wszystkie elementy, ktorych potrzebuje
    // Erzeugen der Kerneelemente
    table = create('table');
    tHead = create('thead');
    tBody = create('tbody');
    
    // Einsetzen der Elemente
    parentEl.appendChild(table);
    table.appendChild(tHead);
    table.appendChild(tBody);
    
    data.forEach(function(val,i){ // Schleife aussen
        tr = create('tr'); //tr = table row
        
        data[i].forEach(function(vall, il){ // Schleife innen
            
            if (i == 0){ // 1. Reihe für thead
                zelle = create('th');
            }else{ //alle weiteren Reihen für tbody
                zelle = create('td');
            }
            
            zelle.innerHTML = vall;
            tr.appendChild(zelle);
            
        }); // ENDE Schleife innen // wewnetrznej
        
        tHead.appendChild(tr);
        
    }); // ENDE Schleife aussen // zewnetrznej
    
    
};

function tabellenGeneratorClassic(data,parentEl){
    parentEl.innerHTML = '';
        
    let table,tHead,tBody,tr,zelle; // wszystkie elementy, ktorych potrzebuje
    // Erzeugen der Kerneelemente
    table = create('table');
    tHead = create('thead');
    tBody = create('tbody');
    
    // Einsetzen der Elemente
    parentEl.appendChild(table);
    table.appendChild(tHead);
    table.appendChild(tBody);
    
for (let i = 0; i < data.length; i ++){ // äussere Schleife
		tr = create('tr');
		 for(let ii = 0; ii < data[i].length; ii ++){ // innere Schleife
			 if (i == 0){
				 // th Elemente für die 1. Reihe -- thead
				zelle = create('th'); 
			 }else{
				 // td Elemente für die weiteren Reihen -- tbody
				zelle = create('td'); 
			 }
			 // Text Zuweisung
			 zelle.innerHTML = data[i][ii];
			 // Zelle in tr einfügen
			tr.appendChild(zelle);
		 }// ENDE innere Schleife
		 
		if (i == 0){ // 1. tr in den thead
			tHead.appendChild(tr);
		}else{       // alle weiteren in den tbody
			tBody.appendChild(tr);
		}
		
		
	}// ENDE äussere Schleife
}

function convertGeoJSON(data){
    // input: geojson ---- output 2 dimensionales Array
    let result = []; // 2 domensionales
    let rows = []; // tr

    let head = ['Schwimmbad Name', 'Berliner Bezirk', 'Gewässer'];
    result.push(head); // 1. Eintrag für den thead
    
    data.features.forEach(function(val,i){
        
        rows = []; // po dodaniu tej linii tabela robi sie przejrzysta
        
        // Einträge tbody
        rows.push(val.properties.data.badname);
        rows.push(val.properties.data.bezirk);
        rows.push(val.properties.data.profil);
        result.push(rows);
    });

    
return result;
}

el('b1').addEventListener('click',loadHTML);
el('b2').addEventListener('click',loadJSON);
el('b3').addEventListener('click',loadGeoJSON);