import React, { useState, useEffect } from 'react';
import './Area.css';

export default function Area() {
  const [areas, setAreas] = useState([]);
  const [form, setForm] = useState({ name: '', description: '' });
  const [showForm, setShowForm] = useState(false);
  const [message, setMessage] = useState('');

  const fetchAreas = async () => {
    try {
      const res = await fetch('/api/areas');
      const data = await res.json();
      setAreas(data);
    } catch (error) {
      console.error('Error al cargar áreas:', error);
    }
  };

  useEffect(() => {
    fetchAreas();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/areas', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      if (res.ok) {
        setMessage('Área creada exitosamente');
        setForm({ name: '', description: '' });
        setShowForm(false);
        fetchAreas();
      } else {
        setMessage('Error al crear área');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('Error de conexión');
    }
  };

  return (
    <div className="area-container" style={{ padding: '30px', maxWidth: '800px', margin: '0 auto', fontFamily: 'Segoe UI, sans-serif' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', borderBottom: '2px solid #39A900', paddingBottom: '10px' }}>
        <h2 style={{ color: '#39A900', margin: 0 }}>Gestión de Áreas SENA</h2>
        <button 
          onClick={() => setShowForm(!showForm)} 
          style={{ padding: '10px 20px', background: '#39A900', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}
        >
          {showForm ? 'Cancelar' : '+ Añadir Nueva Área'}
        </button>
      </div>

      {message && <p className="message" style={{ color: '#137333', background: '#e6f4ea', padding: '10px', borderRadius: '6px' }}>{message}</p>}
      
      {showForm && (
        <form onSubmit={handleSubmit} className="area-form" style={{ display: 'flex', flexDirection: 'column', gap: '15px', background: '#f8fafc', padding: '20px', borderRadius: '8px', border: '1px solid #e2e8f0', marginBottom: '30px' }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#1e293b' }}>Registrar Nueva Área</h3>
          <input 
            type="text" 
            placeholder="Nombre del área (ej. Tecnologías de la Información, Automatización)" 
            value={form.name} 
            onChange={(e) => setForm({ ...form, name: e.target.value })} 
            required 
            style={{ padding: '10px', borderRadius: '4px', border: '1px solid #cbd5e1' }}
          />
          <textarea 
            placeholder="Descripción detallada del área de formación..." 
            value={form.description} 
            onChange={(e) => setForm({ ...form, description: e.target.value })} 
            rows="3"
            style={{ padding: '10px', borderRadius: '4px', border: '1px solid #cbd5e1' }}
          />
          <button type="submit" style={{ padding: '10px', background: '#1565c0', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}>Guardar Área</button>
        </form>
      )}

      <div className="area-list">
        <h3 style={{ color: '#1e293b' }}>Áreas Registradas en el Sistema</h3>
        {areas.length === 0 ? (
          <p style={{ color: '#64748b' }}>No hay áreas registradas actualmente. ¡Haz clic en "+ Añadir Nueva Área" para registrar una!</p>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '15px', marginTop: '15px' }}>
            {areas.map((area) => (
              <div key={area.id} style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '15px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
                <h4 style={{ margin: '0 0 8px 0', color: '#2d3748' }}>{area.name}</h4>
                <p style={{ margin: 0, color: '#718096', fontSize: '14px' }}>{area.description || 'Sin descripción'}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
