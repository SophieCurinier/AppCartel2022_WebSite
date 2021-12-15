var map = L.map('map').setView([45.4359815350074, 4.386852783031122], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYmVuamFtaW50ZXlzc2llciIsImEiOiJja3d5dGZubnowb2R6MnhxcnpvdDMycGhuIn0.m0VcNCT5hmvsH9bsaFvPSg', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiYmVuamFtaW50ZXlzc2llciIsImEiOiJja3d5dGZubnowb2R6MnhxcnpvdDMycGhuIn0.m0VcNCT5hmvsH9bsaFvPSg'
}).addTo(map);

var bars = L.circle([45.436187667795686, 4.388028218630753], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 300
}).addTo(map);
bars.bindPopup("Bars", { closeOnClick: false, autoClose: false }).openPopup();

var jeangachet = L.marker([45.443221966219085, 4.381960303277351]).addTo(map);
jeangachet.bindPopup("Gymnase Jean Gachet", { closeOnClick: false, autoClose: false }).openPopup();

var lamartine = L.marker([45.44711615720677, 4.381389202084917]).addTo(map);
lamartine.bindPopup("Gymnase Lamartine", { closeOnClick: false, autoClose: false }).openPopup();

var michelon = L.marker([45.42421611649527, 4.423062876736448]).addTo(map);
michelon.bindPopup("Gymnase Michelon", { closeOnClick: false, autoClose: false }).openPopup();

var metare = L.marker([45.42133353089448, 4.426429626460251]).addTo(map);
metare.bindPopup("Gymnase Metare", { closeOnClick: false, autoClose: false }).openPopup();

var denispapin = L.marker([45.42701333100518, 4.38816637851597]).addTo(map);
denispapin.bindPopup("Gymnase Denis Papin", { closeOnClick: false, autoClose: false }).openPopup();

var fauriel = L.marker([45.43746258636759, 4.394791613203479]).addTo(map);
fauriel.bindPopup("Gymnase Fauriel", { closeOnClick: false, autoClose: false }).openPopup();

var clemenceau = L.marker([45.42790559133844, 4.412222954398381]).addTo(map);
clemenceau.bindPopup("Gymnase Clemenceau", { closeOnClick: false, autoClose: false }).openPopup();

var grouchy = L.marker([45.46335546405762, 4.379044831672798]).addTo(map);
grouchy.bindPopup("Piscine Grouchy", { closeOnClick: false, autoClose: false }).openPopup();

var etivalliere = L.circle([45.462941500156695, 4.386520520032072], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 300
}).addTo(map);
etivalliere.bindPopup("Etivallière", { closeOnClick: false, autoClose: false }).openPopup();