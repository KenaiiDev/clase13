const list = [
    {firstName: 'Noah', country: 'Switzerland', continent: 'Europe', age: 19, language: 'Javascript'},
    {firstName: 'Carla', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'Javascript'},
    {firstName: 'Maria', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML'},
    {firstName: 'Ramiro', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS'}
]


const getContinentCount = continent => {
    let count = 0;
    list.forEach(person => {
        if(person.continent === continent){
            count++;
        }
    })
    return count;
}

console.log(getContinentCount('Europe'));