function getAllNews() {
  return fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=676d688cd14246a18001fd1ec5f1bfb4')
    .then((response) => {
      if (!response.ok) {
        throw new Error(`${response.status}`);
      } else {
        return response.json();
      }
    });
}

export default getAllNews