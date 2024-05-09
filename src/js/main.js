import "../scss/style.scss";
import "./slider";

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
}

initMap();
