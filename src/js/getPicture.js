const about = document.getElementById('aboutPicture');

const profile = document.createElement('img');

profile.id = 'profilePicture';

const url = await getURL();

async function getURL() {
  const avatarUrl = fetch('https://api.github.com/users/LuisAntonimo')
    .then(response => response.json())
    .then(data => {
      return data.avatar_url
    })

  const url = await avatarUrl

  return url
}

profile.src = url;

about.appendChild(profile)