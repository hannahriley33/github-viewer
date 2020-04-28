export const fetchRepos = (username) => {
  return fetch(`https://api.github.com/users/${username}/repos`)
    .then(res => res.json())
    .then(json => json.results);
};
