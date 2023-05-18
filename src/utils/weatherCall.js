export default async function weatherDataCall(location) {
    function locationCoords(location) {
        switch (location) {
            case "rossland":
                return {
                    lat: "49.08",
                    long: "-117.80",
                }
            case "trail":
                return {
                    lat: "49.10",
                    long: "-117.70",
                }
            case "castlegar":
                return {
                    lat: "49.32",
                    long: "-117.66",
                }
        }
    }

    await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${locationCoords(location).lat}&longitude=${
            locationCoords(location).long
        }&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=America%2FLos_Angeles`
    )
        .then((response) => response.json())
        .then((weatherData) => {
            // console.log(weatherData.daily)
            return weatherData

            function weathercodeToDescription(weatherCode) {
                switch (weatherCode) {
                    case 0:
                        return "Clear sky."
                    case 1:
                        return "Mainly clear."
                    case 2:
                        return "Partly cloudy."
                    case 3:
                        return "Overcast."
                    case 45:
                        return "Fog."
                    case 48:
                        return "Freezing fog."
                    case 51:
                        return "Light drizzle."
                    case 53:
                        return "Moderate drizzle."
                    case 55:
                        return "Heavy drizzle."
                    case 56:
                        return "Light freezing drizzle."
                    case 57:
                        return "Heavy freezing drizzle."
                    case 61:
                        return "Light rain."
                    case 63:
                        return "Rain."
                    case 65:
                        return "Heavy rain."
                    case 66:
                        return "Freezing rain."
                    case 67:
                        return "Heavy freezing rain."
                    case 71:
                        return "Light snow."
                    case 73:
                        return "Snow."
                    case 75:
                        return "Heavy snow."
                    case 77:
                        return "Snow grains."
                    case 80:
                        return "Light rain showers."
                    case 81:
                        return "Rain showers."
                    case 82:
                        return "Violent rain showers."
                    case 85:
                        return "Slight snow showers."
                    case 86:
                        return "Heavy snow showers."
                    case 95:
                        return "Thunderstorms."
                    case 96:
                        return "Thunderstorms with light hail."
                    case 99:
                        return "Thunderstorms with hail."
                }
            }
        })
}
