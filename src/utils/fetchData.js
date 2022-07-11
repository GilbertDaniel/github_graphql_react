import github from '../db.js';
import query from '../Query.js';

export const githubOptions = {
    method: "POST",
    headers: github.headers,
    body: JSON.stringify(query),
};
export const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();

    return data;
};