import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

interface Network {
  id: string;
  name: string;
  location: {
    city: string;
  };
  href: string;
}

const MainAppPage: React.FC = () => {
  const [networks, setNetworks] = useState<Network[]>([]);
  const [filter, setFilter] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get<{ networks: Network[] }>(
          'https://api.citybik.es/v2/networks'
        );
        setNetworks(response.data.networks);
      } catch (error) {
        setError('Error fetching data. Please try again later.');
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredNetworks = networks.filter((network) =>
    network.location.city.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Bike Networks</h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Filter by city"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {!loading && !error && (
        <ul>
          {filteredNetworks.map((network) => (
            <li key={network.id} className="mb-2">
              <Link
                to={`/station/${network.id}`}
                className="text-blue-500 hover:text-blue-700"
              >
                {network.name} - {network.location.city}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MainAppPage;
