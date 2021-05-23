
var List_of_people = [];
    
function submit()
{
    var GuestName = document.getElementById("name").value;
	List_of_people.push(GuestName);

	console.log(GuestName);
        
    console.log(List_of_people);
    var lenght_of_name = List_of_people.length;
    console.log(lenght_of_name);
	document.getElementById("display_name").innerHTML=List_of_people.toString();
	
   }

   function show()
{
	var i= List_of_people.join("<br>");
	console.log(List_of_people);
	document.getElementById("showList").innerHTML=i.toString();
	document.getElementById("sort_button").style.display="block";
	}


function sortList()
{
	List_of_people.sort();
	var i= List_of_people.join("<br>");
    console.log(List_of_people);		
	document.getElementById("sortList").innerHTML=i.toString();
	}


function searching()
{
	var s= document.getElementById("s1").value;
	var found=0;
	var j;
	for(j=0; j<List_of_people.length; j++)
		{
			if(s==List_of_people[j]){
				found=found+1;
			}	
		}
	document.getElementById("p2").innerHTML="Name is found "+found+" time/s";
	console.log("found name "+found+" time/s");
}