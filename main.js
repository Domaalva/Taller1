// Plantilla para cada canción:
let card_song = `<article class="song-card">
    <div class="cover">
        <img src="https://i.ytimg.com/vi/V9PVRfjEBTI/maxresdefault.jpg"
            alt="Portada: Billie Eilish - BIRDS OF A FEATHER (Official Music Video)">
        <span class="badge">3:51:00</span>
    </div>
    <div class="content">
        <h2 class="title">Billie Eilish - BIRDS OF A FEATHER (Official Music Video)</h2>
        <div class="meta">558,329,099 vistas</div>
        <div class="footer">
            <span class="channel">Canal: <a href="https://www.youtube.com/channel/UCDGmojLIoWpXok597xYo8cg"
                    target="_blank" rel="noopener noreferrer">Billie Eilish</a></span>
        </div>
    </div>
</article>`

// Formateador de números
let formatter = new Intl.NumberFormat('en-US');

// Ejemplo de uso:
// let views_witoutformat = 2536628;


// let views_withformat= formatter.format(views_witoutformat); 
// Valor de views_withformat: "2,536,628"
