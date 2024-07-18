import "../scss/style.scss";
import "./slider";

async function initMap() {
  await ymaps3.ready;

  const { YMap, YMapDefaultSchemeLayer } = ymaps3;

  const map = new YMap(document.getElementById("map-test"), {
    location: {
      center: [37.588144, 55.733842],
      zoom: 10,
    },
  });

  map.addChild(new YMapDefaultSchemeLayer());

  map.controls.remove("geolocationControl"); // удаляем геолокацию
  map.controls.remove("searchControl"); // удаляем поиск
  map.controls.remove("trafficControl"); // удаляем контроль трафика
  map.controls.remove("typeSelector"); // удаляем тип
  map.controls.remove("fullscreenControl"); // удаляем кнопку перехода в полноэкранный режим
  map.controls.remove("zoomControl"); // удаляем контрол зуммирования
  map.controls.remove("rulerControl"); // удаляем контрол правил
  map.behaviors.disable(["scrollZoom"]); // отключаем скролл карты (опционально)

  var objects = [
    { name: "Москва", coordinates: [55.755773, 37.617761] },
    { name: "Санкт-Петербург", coordinates: [59.939095, 30.315868] },
    { name: "Новосибирск", coordinates: [55.008352, 82.935732] },
  ];

  var listContainer = document.getElementById("object-list");

  objects.forEach(function (object) {
    var listItem = document.createElement("li");
    listItem.textContent = object.name;
    listItem.addEventListener("click", function () {
      map.setCenter(object.coordinates, 12);
    });
    listContainer.appendChild(listItem);
  });

  const layer = new YMapDefaultSchemeLayer();
  map.addChild(layer);
}

initMap();

// function init() {
//   const ymaps = window.ymaps;
//   let map = new ymaps.Map(
//     "map-test",
//     {
//       center: [55.684013520979256, 37.55043825396722],
//       zoom: 17,
//     },
//     {
//       searchControlProvider: "yandex#search",
//     }
//   );
// }

// ymaps.ready(init);
