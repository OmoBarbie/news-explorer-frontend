const api_key = "7f5617283152434f93e115eae6bf932c";
const api_url = "https://newsapi.org/v2/everything";
function formatDate(date) {
  return date.toISOString().slice(0, 10);
}

async function searchNews(query) {
  const today = new Date();
  const previousWeek = new Date(today);
  previousWeek.setDate(today.getDate() - 7);

  const params = new URLSearchParams({
    q: query,
    from: formatDate(previousWeek),
    to: formatDate(today),

    apiKey: api_key,
    sortBy: "publishedAt",
  });

  const response = await fetch(`${api_url}?${params}`);
  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }

  const data = await response.json();

  return data.articles;
}
