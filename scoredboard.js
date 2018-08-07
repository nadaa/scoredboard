// assuming the giving input only contains alphabitcal charecters
function scoreboard(input){
		var scores={};
		for (var i=0;i<input.length;i++){
			var c=input[i];
			if(!scores[c.toLowerCase()]){
				scores[c.toLowerCase()]=0;
			}
			if(c.charCodeAt()>=65 && c.charCodeAt()<=90){
				scores[c.toLowerCase()]-=1;
			}
			else{
				scores[c]+=1;
			}			
		}
	//reorder scores
	var output={};
	var orderScores= Object.keys(scores).sort(function(a,b){return scores[b]-scores[a]});
	for(var i=0;i<orderScores.length;i++){
		output[orderScores[i]]=scores[orderScores[i]];
	}
	return output;
}

scoreboard('dbbaCEDbdAacCEAadcB');


