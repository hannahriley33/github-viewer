export const fetchCharacters = () => {
  return fetch('https://api.github.com/users/:username')
    .then(res => res.json())
    .then(json => json.results);
};
