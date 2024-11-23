import { getPlaylist } from './api.js';
import { updateUI } from './updateUI.js';

document.addEventListener('DOMContentLoaded', () => {
  const dropdown = document.getElementById('moodDropdown');
  const generateButton = document.getElementById('generatePlaylist');

  generateButton.addEventListener('click', async () => {
    const mood = dropdown.value;

    if (!mood) {
      alert('Please select a mood!');
      return;
    }

    const playlist = await getPlaylist(mood);
    updateUI(playlist, mood);
  });
});