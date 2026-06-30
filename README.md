GitHub Profile Finder

A web app that searches any GitHub username and displays their profile information, stats, and top repositories — pulling live data directly from the GitHub REST API.

Live demo:** https://fmotaleb.github.io/github-profiles-app

Features

- Search any GitHub username
- Displays profile picture, name, bio, and location
- Shows live follower, following, and repo counts
- Lists top repositories sorted by stars, with links and descriptions
- Clean, responsive dark-themed UI inspired by GitHub's own design
- Handles errors gracefully (e.g. when a username doesn't exist)

Built With

- HTML5
- CSS3
- Vanilla JavaScript (no frameworks)
- [GitHub REST API](https://docs.github.com/en/rest)

What I Learned

This project helped me practice:
- Making asynchronous API requests with `fetch()` and `async/await`
- Handling API errors and edge cases (e.g. invalid usernames)
- Dynamically rendering HTML based on JSON data
- Designing a clean, responsive UI from scratch

Running Locally

1. Clone this repository
2. Open `index.html` in your browser (or use the Live Server extension in VS Code)
3. Search any GitHub username

