import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { LatLng } from 'leaflet';
import 'leaflet/dist/leaflet.css';

interface Station {
  name: string;
  timestamp: string;
  latitude: number;
  longitude: number;
  free_bikes: number;
  empty_slots: number;
}

const StationDetailsPage: React.FC = () => {
  const { networkId } = useParams<{ networkId: string }>();
  const [station, setStation] = useState<Station | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get<{
          network: { stations: Station[] };
        }>(`https://api.citybik.es/v2/networks/${networkId}`);
        setStation(response.data.network.stations[0]);
      } catch (error) {
        setError('Error fetching data. Please try again later.');
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [networkId]);

  if (loading) {
    return <div className="container mx-auto p-4">Loading...</div>;
  }

  if (error) {
    return (
      <div className="container mx-auto p-4 text-red-500">
        {error}
      </div>
    );
  }

  if (!station) {
    return null;
  }

  const center = new LatLng(station.latitude, station.longitude);

  return (
    <div className="container mx-auto p-4 flex">
      <div className="w-1/2 p-4">
        <h1 className="text-2xl font-bold mb-2">{station.name}</h1>
        <p className="mb-1">Last Updated: {station.timestamp}</p>
        <p className="mb-1">Available Bikes: {station.free_bikes}</p>
        <p>Empty Slots: {station.empty_slots}</p>
      </div>
      <div className="w-1/2">
        <MapContainer center={center} zoom={13} style={{ height: '400px' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={center}>
            <Popup>{station.name}</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default StationDetailsPage;
