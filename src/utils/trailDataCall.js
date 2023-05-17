export default function TrailList(location) {
    fetch(`http://localhost:6969/trails/${location}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then((res) => res.json())
        .then((data) => console.log(data))
}
