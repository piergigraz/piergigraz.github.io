var input = document.getElementById('userinput') ;
var button = document.getElementById('enter') ;
var ul = document.querySelector('ul');
var list = document.getElementsByTagName('li');
var i =0;
function addToList(){
		if(input.value != ''){// console.log("click!!");
		var li = document.createElement('li');
		var text = document.createTextNode(input.value);
		li.appendChild(text);
		ul.appendChild(li);
		}
	input.value = '';
	li.classList.add('item'+i);
	createBtn();
	toggleItem();
	i++;
	};

function addToListAfterKeyPress(e){
	// console.log(" è stato premuto il tasto: " + e.keyCode);
	if (e.keyCode === 13){
	addToList();	
	}
};

button.addEventListener('click', addToList);

input.addEventListener('keypress', addToListAfterKeyPress);

function toggleItem (){
	list[i].addEventListener('click', function(objClicked){
		// console.log("something has been clicked!! maybe item n. " + objClicked.target.className);
		objClicked.target.classList.toggle("done");
	});
};

function createBtn (){
	var btn = document.createElement('button');
	btn.appendChild(document.createTextNode('cancella'));
	var li = document.getElementsByTagName('li');
	li[i].appendChild(btn);
	btn.className = ('deleteBtn');
	btn.addEventListener('click', function(event){
		let trigger = event;
		trigger.target.parentNode.parentNode.removeChild(trigger.target.parentNode);
		i--;
		});
};


	

