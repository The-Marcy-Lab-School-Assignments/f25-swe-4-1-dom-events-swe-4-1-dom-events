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
selectedCards = [];
playlists.forEach((song) => {
  const songTitle = song.title;
  const songImg = song.image;

  const li = document.createElement('li');
  const img = document.createElement('img');
  const name = document.createElement('p');

  li.classList.add('playlist-card');
  li.setAttribute('data-title', songTitle);

  img.src = songImg;
  img.alt = `${song.title} playlist cover`;
  li.append(img);

  name.textContent = songTitle;
  li.append(songTitle)

  playlistGrid.append(li);

  li.addEventListener('click', () => {
    if (selectedCards.length > 0) {
      selectedCards[0].classList.toggle('selected');
      selectedCards.pop();
    }
    li.classList.toggle('selected');
    selectedCards.push(li);
  })
  
})