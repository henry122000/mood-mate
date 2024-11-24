export function updateUI(playlist, mood) {
  const playlistContainer = document.getElementById('playlist');
  playlistContainer.innerHTML = '';

  if (playlist.length === 0) {
    playlistContainer.innerHTML = `<p>No results found for "${mood}". Try again!</p>`;
    return;
  }

  playlist.forEach(item => {
    const videoDiv = document.createElement('div');
    videoDiv.className = 'swiper-slide';
    videoDiv.innerHTML = `
        <div class="playlist-item">
          <img src="${item.thumbnail}" alt="${item.title}" class="listThumbnail">
          <p class="listTitle">${item.title}</p>
          <a href="https://www.youtube.com/watch?v=${item.videoId}" target="_blank" class="listLink">Watch</a>
        </div>
      `;
    playlistContainer.appendChild(videoDiv);
  });

  new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 10,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      640: { slidesPerView: 1, spaceBetween: 10 },
      768: { slidesPerView: 2, spaceBetween: 20 },
      1024: { slidesPerView: 3, spaceBetween: 30 },
    },
  });
}