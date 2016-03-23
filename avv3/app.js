var app = (function(){

	var message =  document.getElementById('message');
	var pokedex = document.getElementById('pokemon');
	//since the only links in the document are now pokedex links we can use document.links
	var links = document.links;
	var slots = document.getElementById('slots');
	var team = [];
	var lastDragged;

	function dragStart(ev) {
		//here be dragging!
        ev.dataTransfer.effectAllowed='move';
        ev.dataTransfer.setData("text", ev.target.getAttribute('href'));
        //ev.dataTransfer.setDragImage(ev.target,0,0);
        

        pokedex.classList.add('active');
        slots.classList.add('active');

        return true;
     }

     function dragEnd(e){
        pokedex.classList.remove('active');
        slots.classList.remove('active');
     }
     
	function dragOver(e) {
	  if (e.preventDefault) {
	    e.preventDefault(); // Necessary. Allows us to drop.
	  }

	  e.dataTransfer.dropEffect = 'move';  // See the section on the DataTransfer object.

	  return false;
	}

function dragDrop(e, obj) {
    if (e.stopPropagation) {
    e.stopPropagation(); // stops the browser from redirecting.
  }

  pokedex.classList.remove('active');
  slots.classList.remove('active');

  if (obj === slots && lastDragged.className != 'added'){
  	addPokemon(lastDragged);
  } else if (obj === pokedex){
  	removePokemon(lastDragged);
  }

  return false;
}  

	var addClickListeners = function(i){
		var num = i +1;
		links[i].addEventListener('click',
			function (event) {
				event.preventDefault();
				var element = this;
				//only add the pokemon if not added already
				if(this.className != 'added'){
					addPokemon(element);	
				} else {
					removePokemon(element);
				}
			}, false);
	};

	var addPokemon = function(element){
		if(team.length < 6){
			team.push(element);
			element.classList.add('added');
			var newTeamMember = team[team.length - 1];
			slots.appendChild(element);
		} else {
			alert('team is full!');
		}
		return false;
	};

	var removePokemon = function(element){
		var slot = element.parentNode;

		pokedex.appendChild(element);
		element.classList.remove('added');

		var teamMember = team.indexOf(element);
		if (teamMember > -1) {
 		   team.splice(teamMember, 1);
		}
	};

	if (document.addEventListener){
		message.classList.add('hidden');

		for(var i = 0; i < links.length;  i++){
			addClickListeners(i);
		}

		//since draggin and dropping is more of an enhanchent, we dont want to remove the click listeners
		//source for detecting: http://stackoverflow.com/a/2856275
		if('draggable' in document.createElement('span')) {
			console.log("Drag support detected");

            slots.addEventListener('drop', function(e){var curObj = this; dragDrop(e, curObj);});
            slots.addEventListener('dragover', function(e){ var curObj = this; dragOver(e, curObj);});

            pokedex.addEventListener('drop', function(e){var curObj = this; dragDrop(e, curObj);});
            pokedex.addEventListener('dragover', function(e){var curObj = this; dragOver(e, curObj);});


			for(var j = 0; j < links.length; j++){
				links[j].setAttribute('draggable', 'true');
				links[j].addEventListener('dragstart', function(){lastDragged = this; dragStart(event);}, false);
			}
		}
	} else {
		//if we cant add event listeners then, well, we cant do much
		//If I knew php I could write something that happens when you click on the a href of a pokemon
		//and surf to the number of the pokemon, but I cant, so instead we show a message
		message.innerHTML =  "Your browser is outdated and doesn't support a feature we need! Feel free to browse the Pokédex and use old fashioned pen and paper to write down your team!";
	}
})();
