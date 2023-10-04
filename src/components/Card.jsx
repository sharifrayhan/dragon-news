import React from 'react';

const Card = ({card}) => {
    
    return (
            <div className='mb-5'>
                <div className='flex justify-between items-center bg-[#F3F3F3] p-4'>
                    <div className='flex gap-2'>
                        <img className="btn btn-ghost btn-circle"  src={card?.author_image} alt="" />
                        <div>
                            <h1>{card?.author}</h1>
                            <p>{card?.date}</p>
                        </div>
                    </div>
                    <div className='flex gap-2'>
                        <img className="w-4  avatar"  src="https://i.ibb.co/hZ2h8nY/save-icon.png" alt="" />
                        <img className="w-4  avatar"  src="https://i.ibb.co/6gcs1PZ/share-icon.png" alt="" />
                    </div>
                </div>

                <h1 className='font-bold text-lg mb-2'>{card?.title}</h1>
                <img className='mb-2 h-[320px] w-[600px]' src={card?.image} alt="" />
                <p>{card?.content}</p>

                <div className='flex justify-between p-4'>
                    <div className=' flex gap-2'>
                        <img className="h-5  avatar" src="https://i.ibb.co/yFSXvx5/star-icon.png" alt="" />
                        <img className="h-5  avatar" src="https://i.ibb.co/yFSXvx5/star-icon.png" alt="" />
                        <img className="h-5  avatar" src="https://i.ibb.co/yFSXvx5/star-icon.png" alt="" />
                        <img className="h-5  avatar" src="https://i.ibb.co/yFSXvx5/star-icon.png" alt="" />
                        <img className="h-5  avatar" src="https://i.ibb.co/yFSXvx5/star-icon.png" alt="" />

                        <p>4.9</p>
                    </div>
                    <div className=' flex gap-2 items-center'>
                        <img className="w-4  avatar" src="https://i.ibb.co/TMJKvdr/eye-black-fill-icon.png" alt="" />
                        <p>{card?.views}</p>
                    </div>
                </div>


            </div>
    );
};

export default Card;