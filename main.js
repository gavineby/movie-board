var output = document.getElementById('output');

async function searchd() {
    output.style.padding = '0 1rem 1rem 1rem';
    output.innerHTML = '';
    var s = document.getElementById('s').value,
        y = document.getElementById('y').value;
    if (!s || !y) {
        output.style.padding = '0 1rem 1rem 1rem';
        output.innerHTML = `Please fill out movie or show!`;
    } else {
        var response = await fetch(`https://www.omdbapi.com/?apikey=74087ee1&t=${s}&y=${y}`);
    
        var data = await response.json();

        // console.log(data);
        console.log(data.Response);

        if (data.Response == 'True') {
            output.innerHTML += `<p><span>Title:</span> ${data.Title}</p>`;
            output.innerHTML += `<p><span>Year:</span> ${data.Year}</p>`;
            output.innerHTML += `<p><span>Rated:</span> ${data.Rated}</p>`;
            output.innerHTML += `<p><span>Runtime:</span> ${data.Runtime}</p>`;
            output.innerHTML += `<p><span>Genre:</span> ${data.Genre}</p>`;
            output.innerHTML += `<p><span>Plot:</span> ${data.Plot}</p>`;
            output.innerHTML += `<p><span>imdb Rating:</span> ${data.imdbRating}</p>`;
            if (data.Poster != 'N/A') {
                output.innerHTML += `<p style='margin-top: 1rem;'><img src='${data.Poster}'</p>`;
            } else {
                output.innerHTML += `<p><span>Movie poster not found!</span></p>`;
            }
        } else {
            output.innerHTML = 'Please enter valid movie or show!';
        }
    }
}

async function search() {
    var s = document.getElementById('s').value,
        y = document.getElementById('y').value;

    if (s) {
        output.style.padding = '0 1rem 1rem 1rem';
        output.innerHTML = '';
        var response = await fetch(`https://www.omdbapi.com/?apikey=74087ee1&t=${s}&y=${y}`);
    
        var data = await response.json();

        // console.log(data);
        console.log(data.Response);

        if (data.Response == 'True') {
            output.innerHTML = (`<p><span>Title: </span>${data.Title}<br><span>Year: </span>${data.Year}<br><span>Runtime: </span>${data.Runtime}<br><span>Genre: </span>${data.Genre}<br><span>Plot: </span>${data.Plot}<br><span></span><img src='${data.Poster}' alt="Poster doesn't exist."></p>`);
        } else {
            output.innerHTML = "<p>Movie or show doesn't Exist!</p>";
        }
    }
}