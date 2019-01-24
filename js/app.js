/*Hey Prepsters! Let's help Ronald McDonald find true love by revising his online dating profile!*/

//1. In the nav element, target the span element with the id of 'matCount' and change the number from 0 to 11.

var navElemOne = document.getElementById('matCount');
navElemOne.innerHTML = 11;

//2. In the nav element, target the span element with the id of 'msgCount' and change the number from 0 to 23.

var navElemTwo = document.getElementById('msgCount');
navElemTwo.innerHTML = 23;

//3. In the div id data section, target the div element with the id of 'fullname' and change Full Name to Ronald McDonald.

var fullName = document.getElementById('fullname');
fullName.innerHTML = "Ronald McDonald";

//4. In the div id data section, target the div element with the id of 'age' and change Age to 63 Years Old.

var newAge = document.getElementById('age');
newAge.innerHTML = 63;

//5. In the div id data section, create a div with an id of job and give it the following information: Clown and Restauranteur.

var newJob = document.createElement('div');
newJob.id = "job";
newJob.innerHTML = "Clown and Restauranteur";
data.appendChild(newJob);

//6. In the div id data section, create a div with an id of hobbies and give it the following information: Long romantic walks on the beach, candle light Big Mac dinners and tormenting the King.

var newHobby = document.createElement('div');
newHobby.id = "Hobbies";
newHobby.innerHTML = "Long romantic walks on the beach, candle light Big Mac dinners and tormenting the King.";
data.appendChild(newHobby);

//7. In the div id data section, create a div with an id of location and give it the following information: Honolulu, HI.

var newLocation = document.createElement('div');
newLocation.id = "location";
newLocation.innerHTML = "Honolulu, HI";
data.appendChild(newLocation);

//8. In the div id data section, create a div with an id of wants and give it the following information: Looking for a Mrs. McDonald.

var newWants = document.createElement('div');
newWants.id = "wants";
newWants.innerHTML = "Looking for Mrs. McDonald";
data.appendChild(newWants);

//9. In the div id profile section, create a paragraph element with an id of pro2 and create a your own profile for Ronald (at least 2 sentences).

var newPara = document.createElement('p');
newPara.id = "pro2";
newPara.innerHTML = "It's not easy being a clown. Most people hate clowns.";
pro1.appendChild(newPara);

//10. In the div id matches section, target the first div element with the class name of firstName and change Name to Wendy.

var nameOne = document.getElementsByClassName('firstName');
nameOne[0].innerHTML = "Wendy";

//11. In the div id matches section, target the first div element with the class name of otherAge and change Age to 48.

var howOld = document.getElementsByClassName('otherAge');
howOld[0].innerHTML = "48";

//12. In the div id matches section, target the first div element with the class name of status and change Status to Single Mother.

var newstatus = document.getElementsByClassName('status');
newstatus[0].innerHTML = "Single Mother"

//13. In the div id matches section, target the second div element with the class name of firstName and change Name to Peko Chan.

var nameTwo = document.getElementsByClassName('firstName');
nameTwo[1].innerHTML = "Peko Chan";

//14. In the div id matches section, target the second div element with the class name of otherAge and change Age to 68.

var howOldYou = document.getElementsByClassName("otherAge");
howOldYou[1].innerHTML = 68;

 //Final Boss Create your own profile into the page:
 //change image to match your profile
 //div with class name of firstName
 //div with class name of otherAge
 //div with class name of status
 //div with class anem of Motto

var myPic = document.getElementsByClassName('other');
myPic[2].setAttribute('id', 'newID');

var testingItOut = document.getElementById('newID').src = "data:image/jpeg;base64,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";

var newName = document.getElementsByClassName('firstName');
newName[2].innerHTML = "Arya Stark";
var newAge = document.getElementsByClassName('otherAge');
newAge[2].innerHTML = "18";
var newStatus = document.getElementsByClassName('status');
newStatus[2].innerHTML = "A girl has no name. A girl has no status...";
var newMotto = document.getElementsByClassName('motto');
newMotto[2].innerHTML = "Valar Morghulis.."


