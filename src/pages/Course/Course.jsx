import React, { useState, useEffect } from 'react';

export default function Course() {
  const [courses, setCourses] = useState([]);
  const [form, setForm] = useState({ name: '', code: '' });
  const [showForm, setShowForm] = useState(false);
  const [jsonResponse, setJsonResponse] = useState(null);

  const fetchCourses = async () => {
    try {
      const res = await fetch('/api/courses');
      const data = await res.json();
      setCourses(data);
    } catch (error) {
      console.error('Error al cargar cursos:', error);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/courses', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      const data = await res.json();
      if (res.ok) {
        setJsonResponse(data);
        setForm({ name: '', code: '' });
        setShowForm(false);
        fetchCourses();
      } else {
        setJsonResponse({ error: 'Error al crear curso', details: data });
      }
    } catch (error) {
      console.error('Error:', error);
      setJsonResponse({ error: 'Error de conexión' });
    }
  };

  return (
    <div style={{ padding: '30px', maxWidth: '800px', margin: '0 auto', fontFamily: 'Segoe UI, sans-serif' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', borderBottom: '2px solid #39A900', paddingBottom: '10px' }}>
        <h2 style={{ color: '#39A900', margin: 0 }}>Gestión de Cursos SENA</h2>
        <button 
          onClick={() => setShowForm(!showForm)} 
          style={{ padding: '10px 20px', background: '#39A900', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}
        >
          {showForm ? 'Cancelar' : '+ Añadir Nuevo Curso'}
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px', background: '#f8fafc', padding: '20px', borderRadius: '8px', border: '1px solid #e2e8f0', marginBottom: '30px' }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#1e293b' }}>Registrar Nuevo Curso</h3>
          <input 
            type="text" 
            placeholder="Nombre del curso (ej. ADSO)" 
            value={form.name} 
            onChange={(e) => setForm({ ...form, name: e.target.value })} 
            required 
            style={{ padding: '10px', borderRadius: '4px', border: '1px solid #cbd5e1' }}
          />
          <input 
            type="text" 
            placeholder="Código de ficha (ej. 2873910)" 
            value={form.code} 
            onChange={(e) => setForm({ ...form, code: e.target.value })} 
            required 
            style={{ padding: '10px', borderRadius: '4px', border: '1px solid #cbd5e1' }}
          />
          <button type="submit" style={{ padding: '10px', background: '#1565c0', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}>Guardar Curso</button>
        </form>
      )}

      {jsonResponse && (
        <div style={{ background: '#1e293b', color: '#38bdf8', padding: '15px', borderRadius: '8px', marginBottom: '25px', fontFamily: 'monospace' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', color: '#94a3b8' }}>
            <span> Respuesta JSON del Servidor (API):</span>
            <button onClick={() => setJsonResponse(null)} style={{ background: 'transparent', border: 'none', color: '#f87171', cursor: 'pointer' }}>✖ Cerrar</button>
          </div>
          <pre style={{ margin: 0, overflowX: 'auto' }}>{JSON.stringify(jsonResponse, null, 2)}</pre>
        </div>
      )}

      <div className="course-list">
        <h3 style={{ color: '#1e293b' }}>Cursos Registrados</h3>
        {courses.length === 0 ? (
          <p style={{ color: '#64748b' }}>No hay cursos registrados actualmente.</p>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '15px', marginTop: '15px' }}>
            {courses.map((course) => (
              <div key={course.id} style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '15px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
                <span style={{ fontSize: '12px', background: '#e6f4ea', color: '#137333', padding: '2px 8px', borderRadius: '10px', fontWeight: 'bold' }}>Ficha: {course.code}</span>
                <h4 style={{ margin: '10px 0 5px 0', color: '#2d3748' }}>{course.name}</h4>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
