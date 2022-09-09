// don't show api like thish
const API_KEY = `f7dda4d608320439be0f30400e51a612`;
const loadtemperature = city => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
  fetch(url)
    .then(res => res.json())
    .then(data => LoadCurrentTemperature(data))
}

const LoadCurrentTemperature = data => {
  console.log(data)
  SetInnerTextBy('temp', data.main.temp);
  SetInnerTextBy('conditions', data.weather[0].main)

}

const SetInnerTextBy = (id, text) => {
  const Temperature = document.getElementById(id);
  Temperature.innerText = text;
}

document.getElementById('btn-search').addEventListener('click', function () {
  const SearchField = document.getElementById('search-field');
  const SearchValue = SearchField.value;
  SearchField.value = '';
  document.getElementById('city').innerText = SearchValue;

  loadtemperature(SearchValue)
})
loadtemperature()