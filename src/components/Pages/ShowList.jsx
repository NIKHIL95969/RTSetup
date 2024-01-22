import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const ShowList = ({ shows }) => {
  const navigate = useNavigate();

  const handleShowClick = (id) => {
    console.log("Clicked");
    navigate(`/show/${id}`);
  };

  return (
    <div className='flex flex-wrap pt-8 gap-20 container justify-center'>
        {shows.map((show) => (
          <>
            <div key={show.show.id} class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <Link to="#" className='justify-center flex p-4'>
                  
                {show.show.image ? (
                  <img class="rounded-t-lg" src={show.show.image.medium} alt="" />
                ) : (
                  // Replace 'default-image.jpg' with the path to your default image
                  <img src="default-image.jpg" alt="default" />
                )}
                </Link>
                <div class="p-5">
                    <Link to="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{show.show.name}</h5>
                    </Link>
                    {/* <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{show.show.summary}</p> */}
                    <Link to={`/show/${show.show.id}` } class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Detail
                        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </Link>
                </div>
            </div>
          </>
        ))}
    </div>
  );
};

export default ShowList;