const Search = () => {
    return (
        <div>
          <div className="relative">
            <input type="text" className="w-full bg-white border-2 focus:outline-0 border-gray-300 px-4 py-2 rounded-md	 "/>
            <div className="absolute right-0 top-0">
               <button className="bg-[#FF444A] border-2 border-[#FF444A] px-4 py-2 rounded-r-md">Get Started</button>
            </div>
          </div>
        </div>
    );
};

export default Search;