const scomparso=document.querySelector('#barra-altro em');
const scomparsoMobile= document.querySelector('#solo-mobile em');
const boxes= document.querySelectorAll('#sezioni div'); //funge da variabile globale

/*l'idea successiva è quella di creare una funzione (changeSection) in cui vado a inserire diverse liste che contengano tutte le informazioni che mi servono per
il processo che ho intenzione di svolgere, in più avevo pensato di aggiungere a ogni elemento che costituisce #sezioni un data-index in modo tale da distinguere
tra di loro gli elementi del contenitore*/
function changeSection(event){
	const scelta= event.currentTarget;
	
	if(scelta.dataset.index==="1"){
		console.log('è stato cliccato LIBRI');
		
		//iniziamo modificando i dati presenti in #first. nel caso in cui dovessero esserci altri errori, provare con createElement e appendChild.
		const new_img= document.querySelector('#first div img');
		new_img.src= './libro1.png';
		const new_title= document.querySelector('#first a');
		new_title.textContent='Il ritmo della guerra. Le cronache della Folgoluce. Vol.4';
		const new_author= document.querySelector('#first #autore');
		new_author.textContent='di Brandon Sanderson';
		const new_editor= document.querySelector('#first em');
		new_editor.textContent='Mondadori, 2020';
		
		//passiamo a #others
		const contenitore= document.querySelector('#others'); //corrisponde al contenitore che conterrà i 4 div 
		contenitore.innerHTML= ''; //rimuoviamo tutto il contenuto di #others in maniera dinamica
		
		const titoli= ['La strada giovane', 'L ultimo giorno di un condannato', 'Tutti nella mia famiglia hanno ucciso qualcuno', 'Il vento conosce il mio nome'];
		const copertine=['./libro2.png', './libro3.png', './libro4.png', './libro5.png'];
		const autori= ['di Antonio Albanese', 'di Victor Hugo', 'di Benjamin Stevenson', 'di Isabel Allende'];
		const editori= ['Feltrinelli, 2025', 'Feltrinelli, 2025', 'Feltrinelli, 2025', 'Feltrinelli, 2025'];
		
		for(let i=0; i < titoli.length; i++){
			const div= document.createElement('div');
			div.classList.add('libri');//aggiungiamo a questo elemento la classe libri, che corrisponde alla classe di cui gode di default il div presente in html
			
			const copertina=document.createElement('img');
			copertina.src=copertine[i];
			div.appendChild(copertina); //inseriamo nel div con classe 'libri' l'immagine. successivamente inseriremo in questo div il sottodiv e tutto ciò che contiene
			
			const sottoDiv= document.createElement('div');
			sottoDiv.classList.add('info');
			
			const titolo= document.createElement('a');
			titolo.textContent= titoli[i];
			const autore= document.createElement('strong');
			autore.textContent= autori[i];
			const editore= document.createElement('em');
			editore.textContent= editori[i];
			//adesso inseriamo nel sottodiv tutte queste informazioni
			sottoDiv.appendChild(titolo);
			sottoDiv.appendChild(autore);
			sottoDiv.appendChild(editore);
			//adesso inseriamo il sottodiv nel div con classe LIBRI
			div.appendChild(sottoDiv);
			//una volta inserito tutto nel div principale, inseriamo il div nel contenitore principale
			contenitore.appendChild(div);
			
		}
		
	}
	else if(scelta.dataset.index==="2"){
		console.log('è stato cliccato FILM');
		//#first
		const new_img= document.querySelector('#first div img'); // se ci sono errori, ricontrolla
		new_img.src= './film1.png';
		const new_title= document.querySelector('#first a');
		new_title.textContent='The Substance (DVD)';
		const new_author= document.querySelector('#first #autore');
		new_author.textContent='di Coralie Fargeat';
		const new_editor= document.querySelector('#first em');
		new_editor.textContent='I Wonder'; 
		
		//passiamo a #others
		const contenitore= document.querySelector('#others'); //corrisponde al contenitore che conterrà i 4 div 
		contenitore.innerHTML= ''; //rimuoviamo tutto il contenuto di #others in maniera dinamica
		
		const titoli= ['Conclave (DVD)', 'Oceania 2 (DVD)', 'Parthenope (DVD)', 'Mufasa. Il Re Leone (DVD)'];
		const copertine=['./film2.png', './film3.png', './film4.png', './film5.png'];
		const registi= ['di Edward Berger', 'di David J. Derrick Jr.', 'di Paolo Sorrentino', 'di Barry Jenkins'];
		const editori= ['Eagle', 'Disney', 'Piper Film', 'Disney'];
		
		for(let i=0; i < titoli.length; i++){
			const div= document.createElement('div');
			div.classList.add('libri');//aggiungiamo a questo elemento la classe libri, che corrisponde alla classe di cui gode di default il div presente in html
			
			const copertina=document.createElement('img');
			copertina.src=copertine[i];
			div.appendChild(copertina); //inseriamo nel div con classe 'libri' l'immagine. successivamente inseriremo in questo div il sottodiv e tutto ciò che contiene
			
			const sottoDiv= document.createElement('div');
			sottoDiv.classList.add('info');
			
			const titolo= document.createElement('a');
			titolo.textContent= titoli[i];
			
			const autore= document.createElement('strong');
			autore.textContent= registi[i];
			
			const editore= document.createElement('em');
			editore.textContent= editori[i];
			
			//adesso inseriamo nel sottodiv tutte queste informazioni
			sottoDiv.appendChild(titolo);
			sottoDiv.appendChild(autore);
			sottoDiv.appendChild(editore);
			//adesso inseriamo il sottodiv nel div con classe LIBRI
			div.appendChild(sottoDiv);
			//una volta inserito tutto nel div principale, inseriamo il div nel contenitore principale
			contenitore.appendChild(div);
			
		}
	}
	else if(scelta.dataset.index==="3"){
		console.log('è stato cliccato MUSICA');
		//iniziamo modificando le informazioni contenute di default in #first nel file html
		const new_img= document.querySelector('#first div img');
		new_img.src= './musica1.png';
		const new_title= document.querySelector('#first a');
		new_title.textContent='Volevo essere un duro';
		const new_author= document.querySelector('#first #autore');
		new_author.textContent='di Lucio Corsi';
		const new_editor= document.querySelector('#first em');
		new_editor.textContent='Super Music, 2025';
		
		//passiamo a #others
		const contenitore= document.querySelector('#others'); //corrisponde al contenitore che conterrà i 4 div 
		contenitore.innerHTML= ''; //rimuoviamo tutto il contenuto di #others in maniera dinamica
		
		const titoli= ['El Galactico', 'Parsifal. Uomo delle stelle', 'Buon compleanno Elvis', 'Libertà negli occhi'];
		const copertine=['./musica2.png', './musica3.png', './musica4.png', './musica5.png'];
		const autori= ['di Baustelle', 'di Roby Facchinetti', 'di Ligabue', 'di Niccolò Fabi'];
		const editori= ['Universal, 2025', 'WM Italy, 2025', 'Warner Music Italy, 2025', 'Universal, 2025'];
		
		for(let i=0; i < titoli.length; i++){
			const div= document.createElement('div');
			div.classList.add('libri');//aggiungiamo a questo elemento la classe libri, che corrisponde alla classe di cui gode di default il div presente in html
			
			const copertina=document.createElement('img');
			copertina.src=copertine[i];
			div.appendChild(copertina); //inseriamo nel div con classe 'libri' l'immagine. successivamente inseriremo in questo div il sottodiv e tutto ciò che contiene
			
			const sottoDiv= document.createElement('div');
			sottoDiv.classList.add('info');
			
			const titolo= document.createElement('a');
			titolo.textContent= titoli[i];
			const autore= document.createElement('strong');
			autore.textContent= autori[i];
			const editore= document.createElement('em');
			editore.textContent= editori[i];
			//adesso inseriamo nel sottodiv tutte queste informazioni
			sottoDiv.appendChild(titolo);
			sottoDiv.appendChild(autore);
			sottoDiv.appendChild(editore);
			//adesso inseriamo il sottodiv nel div con classe LIBRI
			div.appendChild(sottoDiv);
			//una volta inserito tutto nel div principale, inseriamo il div nel contenitore principale
			contenitore.appendChild(div);
			
		}
	}
	else if(scelta.dataset.index==="4"){
		console.log('è stato cliccato GIOCHI');
		//
		const new_img= document.querySelector('#first div img');
		new_img.src= './gioco1.png';
		const new_title= document.querySelector('#first a');
		new_title.textContent='Mercante in fiera';
		const new_author= document.querySelector('#first #autore');
		new_author.textContent='di Clementoni';
		const new_editor= document.querySelector('#first em');
		new_editor.textContent='';
		
		//passiamo a #others
		const contenitore= document.querySelector('#others'); //corrisponde al contenitore che conterrà i 4 div 
		contenitore.innerHTML= ''; //rimuoviamo tutto il contenuto di #others in maniera dinamica
		
		const titoli= ['FABA arriva Lucilla!', 'Toy Band Play. Tromba Cromata Grande', 'BRIO WORLD', 'Computer Kid Smart Laptop'];
		const copertine=['./gioco2.png', './gioco3.png', './gioco4.png', './gioco5.png'];
		const autori= ['di Faba', 'di Bontempi', 'di BRIO', 'di Clementoni'];
		
		for(let i=0; i < titoli.length; i++){
			const div= document.createElement('div');
			div.classList.add('libri');//aggiungiamo a questo elemento la classe libri, che corrisponde alla classe di cui gode di default il div presente in html
			
			const copertina=document.createElement('img');
			copertina.src=copertine[i];
			div.appendChild(copertina); //inseriamo nel div con classe 'libri' l'immagine. successivamente inseriremo in questo div il sottodiv e tutto ciò che contiene
			
			const sottoDiv= document.createElement('div');
			sottoDiv.classList.add('info');
			
			const titolo= document.createElement('a');
			titolo.textContent= titoli[i];
			const autore= document.createElement('strong');
			autore.textContent= autori[i];
			const editore= document.createElement('em');
			editore.textContent= '';
			//adesso inseriamo nel sottodiv tutte queste informazioni
			sottoDiv.appendChild(titolo);
			sottoDiv.appendChild(autore);
			sottoDiv.appendChild(editore);
			//adesso inseriamo il sottodiv nel div con classe LIBRI
			div.appendChild(sottoDiv);
			//una volta inserito tutto nel div principale, inseriamo il div nel contenitore principale
			contenitore.appendChild(div);
			
		}
	}
}
//con questa funzione teoricamente quando clicco su uno dei div segnalati questo deve cambiare colore del font in rosso
function changeColor(event){
	const scelta= event.currentTarget;
	
	for(const box of boxes){
		box.classList.remove('rosso'); //in questo modo eliminiamo la classe rosso a tutti gli elementi cliccati fino a questo momento
	}
	
	scelta.classList.add('rosso');
	// non metto "scelta.removeEventListener('click', changeColor);" perché voglio che possa ripetersi più volte
}

function disappear(event){
	const scelta= event.currentTarget;
	
	scelta.classList.add('hidden');
}

console.log(boxes);
for(const box of boxes){
	box.addEventListener('click', changeColor);
	box.addEventListener('click', changeSection);
}
scomparso.addEventListener('click', disappear);
scomparsoMobile.addEventListener('click', disappear);
