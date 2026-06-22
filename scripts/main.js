"use strict";

const loadSongs = async () => {
    const url = "https://raw.githubusercontent.com/DATA-DAWM/Datos/refs/heads/main/Youtube/only_songs.json";
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`Error al cargar los datos: ${response.status} ${response.statusText}`);
    }

    const songs = await response.json();
    return songs.slice(0, 12);
};

(function () {
    document.addEventListener("DOMContentLoaded", async () => {
        const songsGrid = document.querySelector('.songs-grid');

        if (!songsGrid) {
            console.error('No se encontró el contenedor de canciones.');
            return;
        }

        try {
            const songs = await loadSongs();
            const formatter = new Intl.NumberFormat('en-US');

            songsGrid.innerHTML = songs.map((song) => {
                const card_song = `
                    <article class="song-card">
                        <div class="cover">
                            <img src="${song.thumbnail}"
                                alt="Portada: ${song.title}">
                            <span class="badge">${song.duration_string}</span>
                        </div>
                        <div class="content">
                            <h2 class="title">${song.title}</h2>
                            <div class="meta">${formatter.format(song.view_count)} vistas</div>
                            <div class="footer">
                                <span class="channel">Canal: <a href="${song.channel_url}"
                                        target="_blank" rel="noopener noreferrer">${song.channel}</a></span>
                            </div>
                        </div>
                    </article>
                `;
                return card_song;
            }).join('');
        } catch (error) {
            alert(`Error al cargar canciones: ${error.message || error}`);
        }
    });
})();
