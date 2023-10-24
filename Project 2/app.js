let data = [
    {
        name: 'John',
        age: '30'
    },
    {
        name: 'Maria',
        age: '32'
    },
    {
        name: 'Ali',
        age: '25'
    },
    {
        name: 'Mick',
        age: '49'
    },
    {
        name: 'Sarah',
        age: '20'
    },
    {
        name: 'Rabica',
        age: '27'
    },
    {
        name: 'Ramirez',
        age: '27'
    },
    {
        name: 'Alia',
        age: '19'
    },
]

const info = document.querySelector('#info');

let details = data.map(function(item){
    return '<div>' + item.name + ' ' + 'is ' + item.age + ' years old' + '</div>';
});

info.innerHTML = details.join('\n');