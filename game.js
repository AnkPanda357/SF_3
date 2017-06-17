var memory_array = ['A','A','B','B','C','C','D','D','E','E','F','F','G','G','H','H'];
var memory_values = [];
var memory_tile_ids = [];
var tiles_flipped = 0;
var flips = 0;
var timerInterval = null;

function changeValue() {
	document.getElementById("time").innerHTML = ++value
}

function start() {
	stop();
	flips = 0;
	document.getElementById("flips").innerHTML = flips;
	value = 0;
	timerInterval = setInterval(changeValue, 1000)
}

Array.prototype.memory_tile_shuffle = function(){
	var i = this.length, j, temp;
	while(--i > 0){
		j = Math.floor(Math.random() * (i+1));
		temp = this[j];
		this[j] = this[i];
		this[i] = temp;
	}
}

function newBoard(){
	tiles_flipped = 0;
	var output = '';
	memory_array.memory_tile_shuffle();
	for(var i = 0; i < memory_array.length; i++){
		output += '<div id ="tile_'+ i +'" onclick="memoryFlipTile(this,\''+memory_array[i]+'\')"></div>';
	}
	document.getElementById('memory_board').innerHTML = output;
}

function memoryFlipTile(tile,val){
	flips +=1;
	document.getElementById("flips").innerHTML = flips;
	if(memory_values.length < 2){
		tile.style.background = '#FFF';
		tile.innerHTML = val;
		if(memory_values.length == 0){
			memory_values.push(val);
			memory_tile_ids.push(tile.id);
		}
		else if(memory_values.length == 1){
			memory_values.push(val);
			memory_tile_ids.push(tile.id);
			if(memory_tile_ids[0] == memory_tile_ids[1]){
				function flipBack(){
					var tile_1 = document.getElementById(memory_tile_ids[0]);
					if(memory_tile_ids[0] == "tile_1" || memory_tile_ids[0] == "tile_3" || memory_tile_ids[0] == "tile_4" || memory_tile_ids[0] == "tile_6" || memory_tile_ids[0] == "tile_9" || memory_tile_ids[0] == "tile_11" || memory_tile_ids[0] == "tile_12" || memory_tile_ids[0] == "tile_14"){
						tile_1.style.background = 'url(base_2.jpg) no-repeat';
						tile_1.innerHTML = "";
					}
					else if(memory_tile_ids[0] == "tile_0" || memory_tile_ids[0] == "tile_2" || memory_tile_ids[0] == "tile_5" || memory_tile_ids[0] == "tile_7" || memory_tile_ids[0] == "tile_8" || memory_tile_ids[0] == "tile_10" || memory_tile_ids[0] == "tile_13" || memory_tile_ids[0] == "tile_15"){
						tile_1.style.background = 'url(base_1.jpg) no-repeat';
						tile_1.innerHTML = "";
					}					
					memory_values = [];
					memory_tile_ids  =[];
				}
				setTimeout(flipBack, 100);
			}	
			else if(memory_values[0] == memory_values[1]){
				tiles_flipped += 2;
				var tile_4 = document.getElementById(memory_tile_ids[0]);
				tile_4.style.boxShadow='0 0 0 10px blue';
				var tile_5 = document.getElementById(memory_tile_ids[1]);
				tile_5.style.boxShadow='0 0 0 10px blue';
				document.getElementById(memory_tile_ids[0]).style.pointerEvents = 'none';
				document.getElementById(memory_tile_ids[1]).style.pointerEvents = 'none';
				memory_values = [];
				memory_tile_ids = [];
				if(tiles_flipped == memory_array.length){
					stop()
					alert("Congratulations!     You Won\nLoading New Board..........");
					document.getElementById('memory_board').innerHTML = "";
					newBoard(); start();
				}	
			}
			else{
				function flip2Back(){
					var tile_2 = document.getElementById(memory_tile_ids[0]);
					var tile_3 = document.getElementById(memory_tile_ids[1]);
					if(memory_tile_ids[0] == "tile_1" || memory_tile_ids[0] == "tile_3" || memory_tile_ids[0] == "tile_4" || memory_tile_ids[0] == "tile_6" || memory_tile_ids[0] == "tile_9" || memory_tile_ids[0] == "tile_11" || memory_tile_ids[0] == "tile_12" || memory_tile_ids[0] == "tile_14"){
						tile_2.style.background = 'url(base_2.jpg) no-repeat';
						tile_2.innerHTML = "";
					}
					else if(memory_tile_ids[0] == "tile_0" || memory_tile_ids[0] == "tile_2" || memory_tile_ids[0] == "tile_5" || memory_tile_ids[0] == "tile_7" || memory_tile_ids[0] == "tile_8" || memory_tile_ids[0] == "tile_10" || memory_tile_ids[0] == "tile_13" || memory_tile_ids[0] == "tile_15"){
						tile_2.style.background = 'url(base_1.jpg) no-repeat';
						tile_2.innerHTML = "";
					}
					if(memory_tile_ids[1] == "tile_1" || memory_tile_ids[1] == "tile_3" || memory_tile_ids[1] == "tile_4" || memory_tile_ids[1] == "tile_6" || memory_tile_ids[1] == "tile_9" || memory_tile_ids[1] == "tile_11" || memory_tile_ids[1] == "tile_12" || memory_tile_ids[1] == "tile_14"){
						tile_3.style.background = 'url(base_2.jpg) no-repeat';
						tile_3.innerHTML = "";
					}
					else if(memory_tile_ids[1] == "tile_0" || memory_tile_ids[1] == "tile_2" || memory_tile_ids[1] == "tile_5" || memory_tile_ids[1] == "tile_7" || memory_tile_ids[1] == "tile_8" || memory_tile_ids[1] == "tile_10" || memory_tile_ids[1] == "tile_13" || memory_tile_ids[1] == "tile_15"){
						tile_3.style.background = 'url(base_1.jpg) no-repeat';
						tile_3.innerHTML = "";
					}
					memory_values = [];
					memory_tile_ids  =[];
				}
				setTimeout(flip2Back, 700);
			}	
		}
	}
}	

var stop = function () {
	clearInterval(timerInterval);
}

function instru() {
	alert("Match the tile with same letter");
}
