export function updateUI(playlist, mood) {
  const playlistContainer = document.getElementById('playlist');
  const resultSection = document.getElementById('result');
  playlistContainer.innerHTML = '';

  if (playlist.length === 0) {
    resultSection.classList.remove('active');
    playlistContainer.innerHTML = `<p>No results found for "${mood}". Try again!</p>`;
    return;
  }

  resultSection.classList.add('active');

  playlist.forEach(item => {
    const truncatedTitle = truncateTitle(item.title, 7);
    const videoDiv = document.createElement('div');
    videoDiv.className = 'swiper-slide';
    
    videoDiv.innerHTML = `
        <div class="playlist-item">
          <img src="${item.thumbnail}" alt="${item.title}" class="listThumbnail">
          <p class="listTitle">${truncatedTitle}</p>
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
    loop: true
  });
}

function truncateTitle(text, wordLimit) {
  const words = text.split(' ');
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(' ') + '...';
  }
  return text;
}