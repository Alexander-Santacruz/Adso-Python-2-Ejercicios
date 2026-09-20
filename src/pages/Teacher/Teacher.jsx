import React, { useState, useEffect } from 'react';
import './Teacher.css';

export const Teacher = () => {
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTeachers();
  }, []);

  const fetchTeachers = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://127.0.0.1:8000/api/teachers');
      const data = await response.json();
      setTeachers(data || [{ id: 1, nombre: 'David Santacruz', correo: 'davidalexanderchangosantacruz@gmail.com', especialidad: 'Instructor Líder ADSO' }]);
    } catch (error) {
      console.error('Error al conectar con la API de Laravel:', error);
      setTeachers([{ id: 1, nombre: 'David Santacruz', correo: 'davidalexanderchangosantacruz@gmail.com', especialidad: 'Instructor Líder ADSO' }]);
    }
    setLoading(false);
  };

  return (
    <div style={{ maxWidth: '900px', margin: '40px auto', padding: '20px', fontFamily: 'Segoe UI, sans-serif' }}>
      <h2 style={{ color: '#39A900', borderBottom: '2px solid #39A900', paddingBottom: '10px' }}>Instructores SENA (Admin Sena)</h2>
      
      {loading ? (
        <p>Cargando instructores...</p>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '15px', marginTop: '20px' }}>
          {teachers.map((item) => (
            <div key={item.id} style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '15px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
              <span style={{ fontSize: '12px', background: '#e6f4ea', color: '#137333', padding: '2px 8px', borderRadius: '10px', fontWeight: 'bold' }}>Instructor Autorizado</span>
              <h4 style={{ margin: '10px 0 5px 0', color: '#2d3748' }}>{item.nombre}</h4>
              <p style={{ margin: '0 0 5px 0', color: '#718096', fontSize: '14px' }}>✉️ {item.correo}</p>
              <p style={{ margin: 0, color: '#4a5568', fontSize: '13px' }}><strong>Especialidad:</strong> {item.especialidad || 'Instructor SENA'}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
