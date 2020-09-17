const tdInput=document.querySelector('.td-input');
const tdButton=document.querySelector('.td-button');
const tdList=document.querySelector('.td-list');
 
tdButton.addEventListener('click',addTd);
tdList.addEventListener('click',deleteC);
 
 

function addTd(event) {
	event.preventDefault();
	//create Div
	const tdDiv=document.createElement('div');
	tdDiv.classList.add("td")
	//create Li
	const newTd=document.createElement('li');
	newTd.innerText=tdInput.value;
	newTd.classList.add("td-item");
	tdDiv.appendChild(newTd);
	//check button
	const completedButton = document.createElement('button');
	completedButton.innerHTML='<i class="fas fa-check"></i>';
	completedButton.classList.add('complete-btn');
	tdDiv.appendChild(completedButton);

	const trashButton = document.createElement('button');
	trashButton.innerHTML='<i class="fas fa-trash"></i>';
	trashButton.classList.add('trash-btn');
	tdDiv.appendChild(trashButton);


	//append
	tdList.appendChild(tdDiv);

	//clear

	tdInput.value="";	


}
function deleteC(e) {
	 const item=e.target;
	 //delete
	 if(item.classList[0]==='trash-btn'){
	 	const td=item.parentElement;
	 	td.classList.add('animasion');
	 	
	 }
	 if(item.classList[0]==='complete-btn'){
	 	const td=item.parentElement;
	 	td.classList.toggle('completed');
	 }
}
 

	  