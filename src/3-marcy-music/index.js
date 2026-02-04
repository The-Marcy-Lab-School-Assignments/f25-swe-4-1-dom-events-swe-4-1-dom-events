const playlists = [
  {
    title: 'Chill Vibes',
    image: './img/playlist-chill.jpg',
    description: 'A playlist for chill vibes',
  },
  {
    title: 'Focus',
    image: './img/playlist-focus.jpg',
    description: 'A playlist for focus',
  },
  {
    title: 'Late Night',
    image: './img/playlist-late-night.jpg',
    description: 'A playlist for late night',
  },
  {
    title: 'Love Songs',
    image: './img/playlist-love.jpg',
    description: 'A playlist for love songs',
  },
  {
    title: 'Oldies',
    image: './img/playlist-oldies.jpg',
    description: 'A playlist for oldies',
  },
  {
    title: 'Sad',
    image: './img/playlist-sad.jpg',
    description: 'A playlist for sad songs',
  },
];

// Add your code here...
const playlistGrid = document.querySelector('#playlists-grid');

playlists.forEach((song) => {
  const li = document.createElement('li');
  const img = document.createElement('img');
  const name = document.createElement('p');

  img.src = song.image;
  img.alt = `${song.title} playlist cover`;
  name.textContent = `${song.title}`
  li.dataset.title = `${song.title}`
  li.classList = `playlist-card`

  
  li.append(img, name);
  playlistGrid.append(li);
});

playlistGrid.addEventListener('click', (event) => {
  const card = event.target.closest('li.playlist-card');

  card.classList.toggle(`selected`)
});
