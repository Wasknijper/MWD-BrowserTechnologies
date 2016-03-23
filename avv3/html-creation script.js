var section, h3, img, p, a, pokemonContainer = document.getElementById('pokemon');

var createElements = function(i){
	section = document.createElement('section');
	a = document.createElement('a');	
	h3 = document.createElement('h3');
	p = document.createElement('p');
	img = document.createElement('img');

	a.href = pokemonData[i].nr;

	section.setAttribute('id', pokemonData[i].naam);
	h3.innerHTML = '#' + pokemonData[i].nr + ' ' + pokemonData[i].naam;
	p.innerHTML = "Soort: " + pokemonData[i].soort + "<br />" + "Type: " + pokemonData[i].type; 

	section.appendChild(h3);
	section.appendChild(p);

	img.src = 'img/pokemon/' + pokemonData[i].nr + '.png'; 
	img.alt = pokemonData[i].naam;

	section.appendChild(img);
	a.appendChild(section);
	pokemonContainer.appendChild(a);

}

for(var i = 0, len = pokemonData.length; i < len; i++) {
	createElements(i);
}