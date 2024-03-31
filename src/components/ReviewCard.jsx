import React from 'react'
import { star } from '../assets/icons'

const ReviewCard = ({ imgURL, feedback, rating, customerName }) => {
    return (
        <div className='flex justify-center items-center flex-col'>
            <img
                src={imgURL}
                alt='Profile Photo '
                width={120}
                height={120}
                className='rounded-full object-cover'
            />
            <p className='mt-6 max-w-sm text-center info-text'>{feedback}</p>
            <div className='mt-3 flex justify-center items-center gap-3'>
                <img
                    src={star}
                    alt='star'
                    width={24}
                    height={24}
                    className='m-0 object-contain'
                />
                <p className='text-xl font-montserrat text-slate-gray'>{rating}</p>
            </div>
            <h3 className='mt-1 font-palanquin text-3xl text-center font-bold'>{customerName}</h3>
        </div>
    )
}

export default ReviewCard
