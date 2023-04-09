const TrailList = ({ src }) => {
    if (src !== "") {
        fetch(`../../data/${src}-trails.json`)
            .then(response => response.json())
            .then(data => console.log(data))
    }

}

export default TrailList;