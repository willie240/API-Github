var contenido = document.querySelector("#cont");
fetch("https://api.github.com/users/willie240/repos")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data.length);
    var cont = 0;
    for (cont = 0; cont < data.length; cont++) {
      contenido.innerHTML += `
			 <div class="card">
				<a href="${data[cont].html_url}" target="blank_"> ${data[cont].name} </a>
			 </div>
			 `;
    }
  });

