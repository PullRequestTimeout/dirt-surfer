import React from 'react'

import { WiDaySunny, WiDaySunnyOvercast, WiCloud, WiFog, WiRainMix, WiSnow, WiRain, WiSprinkle, WiSnowflakeCold, WiDayShowers, WiStormShowers, WiDaySnow, WiThunderstorm} from "weather-icons-react"

export default function WeatherIcon({weatherCode, size, color}) {
    return codeToIcon(weatherCode)

    function codeToIcon(code){
        switch (code) {
            case 0:
            case 1:
                return <WiDaySunny size={size} color={color}/>
            case 2:
                return <WiDaySunnyOvercast size={size} color={color}/>
            case 3:
                return <WiCloud size={size} color={color}/>
            case 45:
            case 48:
                return <WiFog size={size} color={color}/>
            case 51:
            case 53:
            case 55:
                return <WiSprinkle size={size} color={color}/>
            case 56:
            case 57:
            case 66:
            case 67:
                return <WiSnow size={size} color={color}/>
            case 61:
                return <WiRainMix size={size} color={color}/>
            case 63:
            case 65:
                return <WiRain size={size} color={color}/> 
            case 71:
            case 73:
            case 75:
            case 77:
                return <WiSnowflakeCold size={size} color={color}/>
            case 80:
            case 81:
                return <WiDayShowers size={size} color={color}/>
            case 82:
                return <WiStormShowers size={size} color={color}/>
            case 85:
            case 86:
                return <WiDaySnow size={size} color={color}/>
            case 95:
            case 96:
            case 99:
                return <WiThunderstorm size={size} color={color}/>
        }
    } 
}