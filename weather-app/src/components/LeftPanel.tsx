import { SearchBar } from './SearchBar'

export const LeftPanel = () => {
    return(
        <div className="w-[40%] container p-4 rounded-l-[50px] bg-white items-center">
            <SearchBar />
            <div className="text-black pl-8 text-6xl">
                12°C
            </div>
            <div className="flex flex-2 text-base pl-8 my-4">
                <div className="text-gray-900 text-end">
                    <strong>Monday,</strong>
                </div>
                <div className="text-gray-500 text-start">
                    16:00
                </div>
            </div>
            <hr />
            <div className="text-sm m-2 my-3 pl-6">
                <div className="my-4">Mostly Cloudy</div>
                <div className="my-4">Rain - 30%</div>
            </div>
            <div>
                <img src=""/>
            </div>
        </div>
    )
}