var output = document.getElementById('output');

async function search() {
    var s = document.getElementById('s').value;
    if (!s) {
        output.innerHTML = `Please fill out form!`;
    } else {
        var response = await fetch(`https://www.omdbapi.com/?apikey=74087ee1&t=${s}`);
    
        var data = await response.json();

        console.log(data);
    
        output.style.padding = '0 1rem 1rem 1rem';
        output.innerHTML = ``;
        output.innerHTML += `<p><span>Title:</span> ${data.Title}</p>`;
        output.innerHTML += `<p><span>Year:</span> ${data.Year}</p>`;
        output.innerHTML += `<p><span>Rated:</span> ${data.Rated}</p>`;
        output.innerHTML += `<p><span>Runtime:</span> ${data.Runtime}</p>`;
        output.innerHTML += `<p><span>Genre:</span> ${data.Genre}</p>`;
        output.innerHTML += `<p><span>Plot:</span> ${data.Plot}</p>`;
        output.innerHTML += `<p><span>imdb Rating:</span> ${data.imdbRating}</p>`;
        output.innerHTML += `<p style='margin-top: 1rem;'><img src='${data.Poster}' alt='Movie Poster'></p>`;
    }
    
}