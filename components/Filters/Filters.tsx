import React from 'react';

const Filters: React.FC = () => {
    return (
        <div className="flex flex-col space-y-3 ml-20 mr-8">
            <div className="w-[260px] h-[50px] flex justify-between items-center flex-nowrap p-4 border border-solid border-[1px] border-gray-300 rounded-md cursor-pointer shadow-md">
                <h2 className='text-[17px] font-medium'>Sort</h2>
                <img 
                    src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-224-chevron-right-d1f88a6c15e68190c3b47e1ee4f39fe47f4b69f4966ca7c250c2e14cfa689a04.svg"
                    className="w-[16px] h-[16px]"
                />
            </div>

            <div className="w-[260px] h-[50px] flex justify-between items-center flex-nowrap p-4 border border-solid border-[1px] border-gray-300 rounded-md cursor-pointer shadow-md">
                <h2 className='text-[17px] font-medium'>Where to Watch</h2>
                <img 
                    src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-224-chevron-right-d1f88a6c15e68190c3b47e1ee4f39fe47f4b69f4966ca7c250c2e14cfa689a04.svg"
                    className="w-[16px] h-[16px]"
                />
            </div>

            <div className="w-[260px] h-[50px] flex justify-between items-center flex-nowrap p-4 border border-solid border-[1px] border-gray-300 rounded-md cursor-pointer shadow-md">
                <h2 className='text-[17px] font-medium'>Filters</h2>
                <img 
                    src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-224-chevron-right-d1f88a6c15e68190c3b47e1ee4f39fe47f4b69f4966ca7c250c2e14cfa689a04.svg"
                    className="w-[16px] h-[16px]"
                />
            </div>

            <button className="w-[260px] h-[44px] text-[18px] font-medium bg-[rgba(1,180,228)] rounded-[20px] hover:bg-customColorHeader text-white">Search</button>
        </div>
    );
  };
  
export default Filters;