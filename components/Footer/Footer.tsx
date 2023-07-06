import React, {useState} from 'react';

const Footer: React.FC = () => {
    return (
        <footer className='flex h-[320px] bg-customColorHeader mt-20 justify-center'>
            <div className='flex flex-col h-[90px] w-[130px] mr-[120px]'>
                <img
                    className='mt-11 mb-10'
                    src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg" 
                    alt="logo footer" 
                />
                <button 
                    className='w-[220px] h-[40px] bg-white font-[700] text-[18px] rounded-[5px] p-2 text-[rgba(1,180,228)]'>
                        JOIN THE COMMUNITY
                </button>
            </div>

            <div className='flex flex-col mt-[90px] mr-10'>
                <h3 className='text-white font-[700]'>THE BASICS</h3>
                <div>
                    <p className='text-white font-medium'>About TMDB</p>
                    <p className='text-white font-medium'>Contact Us</p>
                    <p className='text-white font-medium'>Support Forums</p>
                    <p className='text-white font-medium'>API</p>
                    <p className='text-white font-medium'>System Status</p>
                </div>
            </div>

            <div className='flex flex-col mt-[90px] mr-11'>
                <h3 className='text-white font-[700]'>GET INVOLVED</h3>
                <div>
                    <p className='text-white font-medium'>Contribution Bible</p>
                    <p className='text-white font-medium'>Add New Movie</p>
                    <p className='text-white font-medium'>Add New TV Show</p>
                </div>

            </div>

            <div className='flex flex-col mt-[90px] mr-11'>
                <h3 className='text-white font-[700]'>COMUNNITY</h3>
                <div>
                    <p className='text-white font-medium'>Guidelines</p>
                    <p className='text-white font-medium'>Discussions</p>
                    <p className='text-white font-medium'>Leaderboard</p>
                    <p className='text-white font-medium'>Twitter</p>
                </div>
            </div>

            <div className='flex flex-col mt-[90px]'>
                <h3 className='text-white font-[700]'>LEGAL</h3>
                <div>
                    <p className='text-white font-medium'>Terms of Use</p>
                    <p className='text-white font-medium'>API Terms of Use</p>
                    <p className='text-white font-medium'>Privacy Policy</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;