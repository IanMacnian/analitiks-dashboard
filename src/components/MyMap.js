import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Definición del icono personalizado
const customIcon = L.icon({
  iconUrl: '/icon.png',   // Ruta del icono en la carpeta 'public'
  iconSize: [50, 50],     // Tamaño del icono (puedes ajustar esto)
  iconAnchor: [16, 32],   // Punto de anclaje del icono (ajusta si es necesario)
  popupAnchor: [0, -32]   // Punto de anclaje del popup (ajusta si es necesario)
});

// Ejemplo de lista de puntos
const points = [
  { id: 1, name: 'Punto 1', position: [-33.45, -70.6] },
  { id: 2, name: 'Punto 2', position: [-33.45694, -70.64827] },
  { id: 3, name: 'sawu spa', position: [-23.6984012,-70.41755979999999] },
  { id: 4, name: 'celulosa arauco y constitución S.A.', position: [-33.4143239,-70.5925717] },
  { id: 5, name: 'sierra gorda scm', position: [-33.4170982,-70.6016683] },
  { id: 6, name: 'sqm salar sa', position: [-33.4138241,-70.58659089999999] },
  { id: 7, name: "minera centinela", position: [-33.4154079,-70.588381] },
  { id: 8, name: "sqm nitratos sa", position: [-33.4139525,-70.5865262] },
  { id: 9, name: "anglo american sur", position: [-33.4133657,-70.60385409999999] },
  { id: 10, name: "colbun sa", position: [-33.4442571,-70.65648650000001] },
  { id: 11, name: "enap refinerias sa", position: [-33.4177154,-70.59913551] },
  { id: 12, name: "Compania Minera Teck Quebrada Blanca S.A.", position: [-20.2113591,-70.1513837] },
  { id: 13, name: "coexca sa", position: [-35.4413738,-71.6404244] },
  { id: 14, name: "orafti chile sa", position: [-36.9771977,-72.1008877] },
  { id: 15, name: "voens spa", position: [-33.2808048,-70.6443116] },
  { id: 16, name: "dacsi ltda", position: [-33.5474669,-70.6567974] },
  { id: 17, name: "aes gener ventanas", position: [-32.7262218,-71.4128372] },
  { id: 18, name: "vigaflow sa", position: [-33.2045451,-70.6759654] },
  { id: 19, name: "abcontrol ltda", position: [-33.4232752,-70.6084382] },
  { id: 20, name: "patagoniafresh sa planta molina", position: [-35.0946253,-71.3165015] },
  { id: 21, name: "wellser srl", position: [-17.798072,-63.1925079] },
  { id: 22, name: "patagoniafresh sa planta san fernando", position: [-34.5723843,-70.9722702] }
];


const MyMap = () => {
  return (
    <MapContainer center={[-33.4143239, -70.5925717]} zoom={8} style={{ height: "500px", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {points.map((point) => (
        <Marker key={point.id} position={point.position} icon={customIcon}>
          <Popup>{point.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MyMap;
