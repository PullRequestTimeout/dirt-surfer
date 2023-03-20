fetch("./src/trails/trail-trails.json")
    .then(response => response.json())
    .then(json => console.log(json))