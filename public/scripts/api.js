export async function getPlaylist(mood) {
    try {
        const response = await fetch(`http://localhost:3000/api/playlist?mood=${mood}`);
        const playlist = await response.json();
        return playlist;
    } catch (error) {
        console.error('Error fetching playlist:', error);
        return [];
    }
}