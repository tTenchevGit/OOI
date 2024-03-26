const baseUrl = 'https://blog-apps-c12bf.firebaseio.com/'

function attachEvents() {
    const loadPost = document.getElementById('btnLoadPosts');
    const selectElement = document.getElementById('posts');
    loadPost.addEventListener('click', () => {
        fetch(`${baseUrl}/posts.json`)
            .then(res => {
                if(!res.ok){
                    throw new Error('wrong  URL')
                }
               return res.json();
            })
            .then(data => {
                Object.keys(data).forEach(x => {
                    let newOption = document.createElement('option');
                    newOption.value = x;
                    newOption.text = data[x].title;
                    selectElement.appendChild(newOption);
                })
                console.log(data)
            })
            .catch(err => console.log(err.message))
    });
}

attachEvents();