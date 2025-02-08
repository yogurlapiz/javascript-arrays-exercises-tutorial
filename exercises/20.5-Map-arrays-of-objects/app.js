let people = [
	{ name: 'Joe', birthDate: new Date(1986,10,24) },
	{ name: 'Bob', birthDate: new Date(1975,5,24) },
	{ name: 'Erika', birthDate: new Date(1989,6,12) },
	{ name: 'Dylan', birthDate: new Date(1999,12,14) },
	{ name: 'Steve', birthDate: new Date(2003,4,24) }
];

let simplifier = function(person) {
	// Your code here
	let calculateAge = (birthday) => {
		const today = new Date();
		let age = today.getFullYear() - birthday.getFullYear();
		const month = today.getMonth() - birthday.getMonth();

		if (month < 0 || (month === 0 && today.getDate() < birthday.getDate())){
			age--;
		}
		return age;
	}
	return "Hello, my name is "+person.name+ " and I am " + calculateAge(person.birthDate) + " years old";
};

console.log(people.map(simplifier));
