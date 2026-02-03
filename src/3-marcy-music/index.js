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

  const playlistList = document.querySelector('#playlists-grid');

  playlists.forEach((playlist) => {
    const li = document.createElement('li');
    const img = document.createElement('img');
    const titleP = document.createElement('p');

    //Adding a class
    li.classList.add('playlist-card');

    li.dataset.title = playlist.title;

    img.src = playlist.image;
    img.alt = `${playlist.title} playlist cover`;

    titleP.textContent = playlist.title;

    li.append(img, titleP);
    playlistList.append(li);
  });

  const nowPlayingTitle = document.querySelector('#now-playing-title');

  playlistList.addEventListener('click', (event) => {
    //Click on playlist card
    const clickedCard = event.target.closest('.playlist-card');

    //If there is no click on the playlist card do nothing.
    if (!clickedCard) return;

    // Remove previously selected card
    const previouslySelected = document.querySelector('.playlist-card.selected');
    if (previouslySelected) {
      previouslySelected.classList.remove('selected');
    }

    // Mark current card as selected
    clickedCard.classList.add('selected');

    // Update "Now Playing"
    nowPlayingTitle.textContent = clickedCard.dataset.title;
  });