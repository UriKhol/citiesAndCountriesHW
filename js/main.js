const citiesAndCountries = {
    'Киев': 'Украина',
    'Нью-Йорк': 'США',
    'Амстердам': 'Нидерланды',
    'Берлин': 'Германия',
    'Париж': 'Франция',
    'Лиссабон': 'Португалия',
    'Вена': 'Австрия',
};

const result = []

for(let citi in citiesAndCountries) {
    result.push(`${citi} - это ${citiesAndCountries[citi]}`)
}

console.log(result)