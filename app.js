const searchBtn = document.getElementById('search-btn');
const searchInput = document.getElementById('search-input');
const result = document.getElementById('result');

// Run search when button is clicked
searchBtn.addEventListener('click', () => {
  const username = searchInput.value.trim();
  if (username) {
    fetchProfile(username);
  }
});

// Also run search when user presses Enter
searchInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    const username = searchInput.value.trim();
    if (username) fetchProfile(username);
  }
});

async function fetchProfile(username) {
  result.innerHTML = '<p style="text-align:center; color:#8b949e;">Loading...</p>';

  try {
    // Fetch user profile from GitHub API
    const userResponse = await fetch(`https://api.github.com/users/${username}`);

    if (!userResponse.ok) {
      result.innerHTML = `<div class="error">❌ User "${username}" not found.</div>`;
      return;
    }

    const user = await userResponse.json();

    // Fetch their repositories
    const reposResponse = await fetch(`https://api.github.com/users/${username}/repos?sort=stars&per_page=5`);
    const repos = await reposResponse.json();

    displayProfile(user, repos);

  } catch (error) {
    result.innerHTML = `<div class="error">Something went wrong. Check your internet connection.</div>`;
  }
}

function displayProfile(user, repos) {
  // Build the repo list HTML
  const repoHTML = repos.map(repo => `
    <div class="repo-item">
      <a href="${repo.html_url}" target="_blank">${repo.name}</a>
      <p>${repo.description || 'No description provided'} — ⭐ ${repo.stargazers_count}</p>
    </div>
  `).join('');

  result.innerHTML = `
    <div class="profile-card">
      <div class="profile-top">
        <img src="${user.avatar_url}" alt="${user.login}" />
        <div>
          <h2>${user.name || user.login}</h2>
          <p>${user.bio || 'No bio available'}</p>
          <p>📍 ${user.location || 'Location not set'}</p>
        </div>
      </div>

      <div class="stats">
        <div class="stat">
          <span>${user.followers}</span>
          <p>Followers</p>
        </div>
        <div class="stat">
          <span>${user.following}</span>
          <p>Following</p>
        </div>
        <div class="stat">
          <span>${user.public_repos}</span>
          <p>Repos</p>
        </div>
      </div>

      <div class="repos">
        <h3>Top Repositories</h3>
        ${repoHTML}
      </div>
    </div>
  `;
}