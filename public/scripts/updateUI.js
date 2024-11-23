export function updateUI(playlist, mood) {
    const playlistContainer = document.getElementById('playlist');
    playlistContainer.innerHTML = ''; 
  
    if (playlist.length === 0) {
      playlistContainer.innerHTML = `<p>No results found for "${mood}". Try again!</p>`;
      return;
    }
  
    playlist.forEach(item => {
      const videoDiv = document.createElement('div');
      videoDiv.className = 'playlist-item';
      videoDiv.innerHTML = `
        <img src="${item.thumbnail}" alt="${item.title}">
        <p>${item.title}</p>
        <a href="https://www.youtube.com/watch?v=${item.videoId}" target="_blank">Watch</a>
      `;
      playlistContainer.appendChild(videoDiv);
    });
  }