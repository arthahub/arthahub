import { faArrowTrendUp, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Search = () => {
    return (
        <div className="w-full h-fit bg-gradient-to-tr from-[#edf9f4] to-[#f6f4ee] p-6">
            <div className="w-full font-semibold">
              <div className="flex items-center space-x-3">
                <FontAwesomeIcon icon={faArrowTrendUp} className="w-4 text-main-theme-2"/>
                <span className="text-slate-800">
                  Pencarian Simbol
                </span>
              </div>
            </div>
            <form className="mt-2" action={'/simbol'} method="GET">
              <div className="w-full flex bg-white">
                <div className="w-[15%] grid place-content-center">
                  <FontAwesomeIcon icon={faSearch} className="w-3"></FontAwesomeIcon>
                </div>
                <input className="w-[85%] h-[45px] active:ring-0 active:outline-none focus:ring-0 focus:outline-none placeholder:text-slate-500 text-slate-800" placeholder="BBCA" name="simbol"></input>
              </div>
            </form>
        </div>
    )
}

export default Search;