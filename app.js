const fs = require('fs');
const randomId = require('@dark_wilk/id-generator');

const genders = ['M', 'F'];

//prettier-ignore
const manNames = [
	'Adam', 'Bartek', 'Cezary', 'Dawid', 'Edward', 'Filip', 'Grzegorz',	'Henryk','Ignacy',	'Jacek',	'Kamil',	'Łukasz',	'Marek',	'Norbert',	'Oskar',	'Paweł',	'Rafał','Stefan',	'Tomasz','Wiktor',
];

//prettier-ignore
const womanNames = [
	'Anna',	'Barbara',	'Cecylia',	'Dorota',	'Elżbieta',	'Franciszka',	'Grażyna',	'Halina',	'Izabela',	'Jadwiga',	'Katarzyna',	'Łucja',	'Maria',	'Natalia',	'Oliwia',	'Paulina',	'Róża',	'Stefania',	'Teresa',	'Wiktoria',
];

//prettier-ignore
const surnames = [
	'Walczak', 'Nowak',	'Kaczmarek',	'Wójcik',	'Kowalczyk',	'Król',	'Jawor',	'Wróbel',	'Zając',	'Woźniak',
];

const people = [];

const randChoice = arr => {
	const random = Math.floor(Math.random() * arr.length);
	return arr[random];
};

for (let i = 1; i <= 20; i++) {
	const personObj = {};
	personObj.gender = randChoice(genders);
	if (personObj.gender === 'M') {
		personObj.firstName = randChoice(manNames);
	} else {
		personObj.firstName = randChoice(womanNames);
	}
	personObj.lastName = randChoice(surnames);
	personObj.age = Math.floor(Math.random() * 60 + 18);
	personObj.id = randomId(10);

	people.push(personObj);
}

const jsonFormat = JSON.stringify(people, null, 2);

try {
	fs.writeFile('people.json', jsonFormat, err => {
		if (err) throw err;
		console.log('The file has been saved!');
	});
} catch (err) {
	console.log('Something went wrong! ' + err);
}
