import React, {useState} from 'react';
import Link from 'next/link';

const Header: React.FC = () => {

  const [selectedOption, setSelectedOption] = useState('popular');
  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <header className="flex justify-between items-center p-4 bg-customColorHeader font-sans font-semibold text-white h-[64px]">
      <div className="flex items-center ml-[85px]">
        <Link href={"/"}>
          <img 
            src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" 
            alt="Logo" 
            className="w-[154px] h-[20px] mr-2 cursor-pointer" 
          />
        </Link>
        <Link href="/?filter=popular">
          <p 
            className={`mr-4 ml-[15px] ${selectedOption === 'popular' ? 'font-bold' : ''}`} 
            onClick={() => handleOptionClick('popular')}
          >
            Popular
          </p>
        </Link>
        <Link href="/?filter=upcoming">
          <p 
            className={`mr-4 ml-[15px] ${selectedOption === 'upcoming' ? 'font-bold' : ''}`} 
            onClick={() => handleOptionClick('upcoming')}
          >
            Upcoming
          </p>
        </Link>
        <Link href="/?filter=top-rated">
          <p
            className={`mr-4 ml-[15px] ${selectedOption === 'top-rated' ? 'font-bold' : ''}`} 
            onClick={() => handleOptionClick('top-rated')}
          >
            Top Rated
          </p>
        </Link>
        <a href="#" className="mr-4 ml-[15px]">TV Shows</a>
        <a href="#" className="mr-4 ml-[15px]">People</a>
        <a href="#" className="mr-4 ml-[15px]">More</a>
      </div>
      <div className="flex items-center mr-[80px]">
        <img src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-371-plus-white-0bac34f16124808a12ea863b4d9cc6e599dee7c0a80658cfe9ead26939e64517.svg" 
          alt="Profile" 
          className="mr-2 w-[22px] h-[22px] mr-[30px] cursor-pointer" 
        />
        <button className="mr-[30px] border border-white rounded-md py-0.2 px-1 transition duration-100 linear hover:bg-white hover:text-black">EN</button>
        <a href="#" className="mr-[30px]">Login</a>
        <a href="#" className="mr-[30px]">Join TMDB</a>
        <img 
          src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-28-search-blue-177462d06db81ff2a02aa022c1c0be5ba4200d7bd3f51091ed9298980e3a26a1.svg" 
          alt="Other Image" 
          className='w-[29px] h-[29px] cursor-pointer'
        />
      </div>
    </header>
  );
};

export default Header;