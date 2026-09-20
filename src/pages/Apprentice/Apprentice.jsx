import React, { useState, useEffect } from 'react';
import './Apprentice.css';

export const Apprentice = () => {
  const [apprentices, setApprentices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchApprentices();
  }, []);

  const fetchApprentices = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://127.0.0.1:8000/api/apprentices');
      const data = await response.json();
      setApprentices(data || [
        { id: 1, nombre: 'Carlos Alberto Pérez', correo: 'caperez@sena.edu.co' },
        { id: 2, nombre: 'María Fernanda Gómez', correo: 'mfgomez@sena.edu.co' },
        { id: 3, nombre: 'Jorge Enrique Ramírez', correo: 'jeramirez@sena.edu.co' },
        { id: 4, nombre: 'Ana Milena Torres', correo: 'amtorres@sena.edu.co' },
        { id: 5, nombre: 'Luis Fernando Castro', correo: 'lfcastro@sena.edu.co' },
        { id: 6, nombre: 'Claudia Patricia Ruiz', correo: 'cpruiz@sena.edu.co' },
        { id: 7, nombre: 'Héctor Fabio Vargas', correo: 'hfvargas@sena.edu.co' },
        { id: 8, nombre: 'Diana Marcela Herrera', correo: 'dmherrera@sena.edu.co' },
        { id: 9, nombre: 'Esteban David Orozco', correo: 'edorozco@sena.edu.co' },
        { id: 10, nombre: 'Valentina Morales Restrepo', correo: 'v.morales@sena.edu.co' },
        { id: 11, nombre: 'Mateo Alejandro Silva', correo: 'mateo.silva@misena.edu.co' }
      ]);
    } catch (error) {
      console.error('Error al conectar con la API de Laravel:', error);
      setApprentices([
        { id: 1, nombre: 'Carlos Alberto Pérez', correo: 'caperez@sena.edu.co' },
        { id: 2, nombre: 'María Fernanda Gómez', correo: 'mfgomez@sena.edu.co' },
        { id: 3, nombre: 'Jorge Enrique Ramírez', correo: 'jeramirez@sena.edu.co' },
        { id: 4, nombre: 'Ana Milena Torres', correo: 'amtorres@sena.edu.co' },
        { id: 5, nombre: 'Luis Fernando Castro', correo: 'lfcastro@sena.edu.co' },
        { id: 6, nombre: 'Claudia Patricia Ruiz', correo: 'cpruiz@sena.edu.co' },
        { id: 7, nombre: 'Héctor Fabio Vargas', correo: 'hfvargas@sena.edu.co' },
        { id: 8, nombre: 'Diana Marcela Herrera', correo: 'dmherrera@sena.edu.co' },
        { id: 9, nombre: 'Esteban David Orozco', correo: 'edorozco@sena.edu.co' },
        { id: 10, nombre: 'Valentina Morales Restrepo', correo: 'v.morales@sena.edu.co' },
        { id: 11, nombre: 'Mateo Alejandro Silva', correo: 'mateo.silva@misena.edu.co' }
      ]);
    }
    setLoading(false);
  };

  return (
    <div style={{ maxWidth: '900px', margin: '40px auto', padding: '20px', fontFamily: 'Segoe UI, sans-serif' }}>
      <h2 style={{ color: '#39A900', borderBottom: '2px solid #39A900', paddingBottom: '10px' }}>Listado de Aprendices SENA (Admin Sena)</h2>
      
      {loading ? (
        <p>Cargando aprendices...</p>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '15px', marginTop: '20px' }}>
          {apprentices.map((item) => (
            <div key={item.id} style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '15px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
              <span style={{ fontSize: '12px', background: '#edf2f7', color: '#4a5568', padding: '2px 8px', borderRadius: '10px', fontWeight: 'bold' }}>Aprendiz ADSO</span>
              <h4 style={{ margin: '10px 0 5px 0', color: '#2d3748' }}>{item.nombre}</h4>
              <p style={{ margin: 0, color: '#718096', fontSize: '14px' }}>✉️ {item.correo}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
