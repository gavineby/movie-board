var output = document.getElementById('output');

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
