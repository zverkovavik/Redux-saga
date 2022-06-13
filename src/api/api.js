export const getNews = async (searchQuery) => {
    const result = await fetch(`https://hn.algolia.com/api/v1/search?query=${searchQuery}&hitsPerPage=10&page=0`);
    return result.json();
}