const list = [
    {firstName: 'Sofia',    country: 'Argentina',     continent: 'Americas', age: 35,   language: 'Java'},
    {firstName: 'Lukas',    country: 'Croatia',       continent: 'Europe',   age: 35,   language: 'Python'},
    {firstName: 'Madison',  country: 'United States', continent: 'Americas', age: 32,   language: 'Ruby'},
]

const existsProgrammersWithSameLanguage = language => list.some(person => person.language === language);

console.log(existsProgrammersWithSameLanguage('C#'));

//El metodo Array.some devuelve true si al menos un elemento del array cumple con la condicion
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some