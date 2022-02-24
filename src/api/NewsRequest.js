export const getNews = async (type = 'top', query) => {
  const query_build = query === '' ? '' : `?after=t3_${query}`;
  const url = `https://api.reddit.com/r/programming/${type.toLowerCase()}.json${query_build}`;

  const news = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return news.json();
};

// export const getHotNews = async () => {
//   const news = await fetch(`https://api.reddit.com/r/programming/hot.json`, {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });
//   return news.json();
// };

// export const getNewNews = async () => {
//   const news = await fetch(`https://api.reddit.com/r/programming/new.json`, {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });
//   return news.json();
// };
