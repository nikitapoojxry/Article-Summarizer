const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '', //Ensure your key.
		'x-rapidapi-host': 'article-extractor-and-summarizer.p.rapidapi.com'
	}
};

const btn = document.querySelector(".btn");
const summary = document.querySelector(".summary");

btn.addEventListener("click", (e) => {
    e.preventDefault();
    const input = document.querySelector("#url").value;
    const url = `https://article-extractor-and-summarizer.p.rapidapi.com/summarize?url=${input}&lang=en&engine=2`;
    summary.innerText = "Summarizing article, please wait...";

    if (!/[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/.test(input)) {
        summary.innerText = "Invalid URL! Please provide a valid URL!";
    } else {
        fetch(url, options)
        .then(response => response.json())
        .then(data => {
            summary.innerText = data?.summary || "No summary available for this article.";
        })
        .catch(error => {
            console.error(error);
            summary.innerText = "An error occurred. Please try again.";
        });
    }
});
