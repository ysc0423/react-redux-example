export function getAllPosts() {
    return fetch('https://jsonplaceholder.typicode.com/posts')
        .then(function(response) {
            if (response.status >= 400) {
                throw new Error();
            }
            return response.json();
        })
        .then(function(posts) {
            return posts;
        });
}
