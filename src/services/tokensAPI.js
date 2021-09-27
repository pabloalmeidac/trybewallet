const tokensAPI = () => {
  const urlAPI = 'https://economia.awesomeapi.com.br/json/all';

  return fetch(urlAPI)
    .then((response) => response.json())
    .then((tokens) => tokens);
};

export default tokensAPI;
