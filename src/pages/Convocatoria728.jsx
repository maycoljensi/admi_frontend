import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Convocatoria728 from './Convocatoria728'; // Este es el componente donde se mostrarán los datos
import Practicas from './Practicas';

const Convocatoria = () => {
  const [selectedOption, setSelectedOption] = useState('728');
  const [convocatorias, setConvocatorias] = useState([]); // Estado para almacenar los datos de la convocatoria

  // Maneja el cambio del combo box
  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  // Función para obtener las convocatorias desde el backend
  const fetchConvocatorias = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/convocatorias'); // URL de la API de Laravel
      const data = await response.json();
      setConvocatorias(data); // Guardamos las convocatorias en el estado
    } catch (error) {
      console.error('Error fetching convocatorias:', error);
    }
  };

  // Obtener convocatorias al cargar el componente
  useEffect(() => {
    fetchConvocatorias();
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">Convocatoria</h2>

      {/* Combo box */}
      <div className="mb-6">
        <label htmlFor="convocatoria" className="text-gray-600">
          Selecciona una opción:
        </label>
        <select
          id="convocatoria"
          value={selectedOption}
          onChange={handleChange}
          className="w-full p-2 mt-2 border border-gray-300 rounded"
        >
          <option value="728">Convocatoria DS Nº728</option>
          <option value="practicas">Prácticas</option>
        </select>
      </div>

      {/* Mostrar vista según la opción seleccionada */}
      {selectedOption === '728' ? (
        <Convocatoria728 convocatorias={convocatorias} /> // Pasamos los datos a Convocatoria728
      ) : selectedOption === 'practicas' ? (
        <Practicas />
      ) : null}
    </div>
  );
};

export default Convocatoria;
