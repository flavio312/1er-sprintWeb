import React, { useState } from 'react';
import './App.css';

function App() {
  const [profile, setProfile] = useState({
    name: 'Nombre de Usuario',
    email: 'usuario@example.com',
    birthDate: '01/01/1990',
    aboutMe: 'Pasatiempos...',
  });
  const handleAboutMeChange = (event) => {
    setProfile({ ...profile, aboutMe: event.target.value });
  };

  return (
    <div className="container">
      <header>
        <h1>CampusLINK</h1>
        <nav>
          <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Grupos</a></li>
            <li><a href="#">Articulos</a></li>
            <li><a href="#">Comunicados</a></li>
            <li><a href="#">Ver Perfil</a></li>
            <li><a href="#">Configuración</a></li>
          </ul>
        </nav>
        <div className="search-box">
          <input type="text" placeholder="Buscar..." />
          <button>Buscar</button>
        </div>
      </header>
      <main>
        <div className="profile-info">
          <img src="profile-picture.jpg" alt="Foto de Perfil" className="profile-picture" />
          <div className="profile-details">
            <h2>{profile.name}</h2>
            <p>Correo Electrónico: {profile.email}</p>
            <p>Fecha de Nacimiento: {profile.birthDate}</p>
            <button>Editar Perfil</button>
          </div>
        </div>
        <div className="about-me">
          <h2>Acerca de Mí</h2>
          <textarea
            value={profile.aboutMe}
            onChange={handleAboutMeChange}
            rows={4}
            cols={50}
          />
          <button>Guardar Cambios</button>
        </div>
      </main>
      <aside>
        <h2>Articulos</h2>
        <div className="article-card">
          <h3>Título del Artículo</h3>
          <p>Descripción corta del artículo...</p>
          <a href="#">Leer más</a>
        </div>
        <div className="article-card">
          <h3>Título del Artículo</h3>
          <p>Descripción corta del artículo...</p>
          <a href="#">Leer más</a>
        </div>
      </aside>
      <div className="posts">
        <h2>Publicaciones</h2>
        {/* Aquí puedes mapear las publicaciones y crear las cards */}
        <div className="post-card">
          <h3>Título de la Publicación</h3>
          <p>Contenido de la publicación...</p>
          <a href="#">Ver más</a>
        </div>
        <div className="post-card">
          <h3>Título de la Publicación</h3>
          <p>Contenido de la publicación...</p>
          <a href="#">Ver más</a>
        </div>
        {/* Agrega más cards según sea necesario */}
      </div>
    </div>
  );
}

export default App;
