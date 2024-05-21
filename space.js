async function populate() {

	const requestURL = "https://mihaelslipcevic.github.io/my-repository/JSON/space.json";

	const request = new Request(requestURL); 

	const response = await fetch(request);

	const spaceText = await response.text();

	const pIS = JSON.parse(spaceText);

	populateHeader(pIS);	

	populateAstronauts(pIS);

}

function populateHeader(obj){

	const header = document.querySelector('header');		

	const myH1 = document.createElement('h1');				

	myH1.textContent = 'PEOPLE IN SPACE';						

	header.appendChild(myH1);

}

function populateAstronauts(obj){

	const section = document.querySelector('section');

	const people = obj.people;

	for(const person of people){

		const myArticle = document.querySelector('article');

		const myH2 = document.createElement('span');

		myH2.textContent = person.name;			

		myArticle.appendChild(myH2);

	}

}

populate()