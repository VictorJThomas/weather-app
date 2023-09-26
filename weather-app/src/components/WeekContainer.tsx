import { DayCard } from "./DayCard"


const week = ([
    {
        day: 'sun',
        weather: 'https://www.svgrepo.com/show/502423/weather.svg',
        c: '15°',
        f: '-3°'
    },
    {
        day: 'Mon',
        weather: 'https://www.svgrepo.com/show/502423/weather.svg',
        c: '12°',
        f: '7°'
    },
    {
        day: 'Tue',
        weather: 'https://www.svgrepo.com/show/502423/weather.svg',
        c: '9°',
        f: '7°'
    },
    {
        day: 'Wed',
        weather: 'https://www.svgrepo.com/show/502423/weather.svg',
        c: '8°',
        f: '-1°'
    },
    {
        day: 'Thu',
        weather: 'https://www.svgrepo.com/show/502423/weather.svg',
        c: '5°',
        f: '-2°'
    },
    {
        day: 'Fri',
        weather: 'https://www.svgrepo.com/show/502423/weather.svg',
        c: '4°',
        f: '-4°'
    },
    {
        day: 'Sat',
        weather: 'https://www.svgrepo.com/show/502423/weather.svg',
        c: '3°',
        f: '-3°'
    },
])

export const WeekContainer = () => {
    return (
        <div className="flex flex-7 justify-between gap-2">
            {
                week!.map((days) => (
                    <DayCard key={days.day} day={days.day} weather={days.weather} c={days.c} f={days.f}/>
                ))
            }
        </div>
    )
}