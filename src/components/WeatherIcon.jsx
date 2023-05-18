import React from 'react'

import { WiDaySunny, WiDaySunnyOvercast, WiCloud, WiFog, WiRainMix, WiSnow, WiRain, WiSprinkle, WiSnowflakeCold, WiDayShowers, WiStormShowers, WiDaySnow, WiThunderstorm} from "weather-icons-react"

export default function WeatherIcon({weatherCode}) {
    return codeToIcon(weatherCode)

    function codeToIcon(code){
        switch (code) {
            case 0:
            case 1:
                return <WiDaySunny size={24} color='#fff'/>
            case 2:
                return <WiDaySunnyOvercast size={24} color='#fff'/>
            case 3:
                return <WiCloud size={24} color='#fff'/>
            case 45:
            case 48:
                return <WiFog size={24} color='#fff'/>
            case 51:
            case 53:
            case 55:
                return <WiSprinkle size={24} color='#fff'/>
            case 56:
            case 57:
            case 66:
            case 67:
                return <WiSnow size={24} color='#fff'/>
            case 61:
                return <WiRainMix size={24} color='#fff'/>
            case 63:
            case 65:
                return <WiRain size={24} color='#fff'/> 
            case 71:
            case 73:
            case 75:
            case 77:
                return <WiSnowflakeCold size={24} color='#fff'/>
            case 80:
            case 81:
                return <WiDayShowers size={24} color='#fff'/>
            case 82:
                return <WiStormShowers size={24} color='#fff'/>
            case 85:
            case 86:
                return <WiDaySnow size={24} color='#fff'/>
            case 95:
            case 96:
            case 99:
                return <WiThunderstorm size={24} color='#fff'/>
        }
    } 
}