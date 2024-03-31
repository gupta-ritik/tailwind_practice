import React from 'react'
import ReviewCard from '../components/ReviewCard';
import { reviews } from '../constants';
const CustomerReviews = () => {
  return (
    <section className='max-container'>
      <h3 className='font-palanquin text-center text-4xl font-bold'>What Our 
      <span className='text-coral-red'> Customers </span>
      Say?</h3>
      <p className='info-text m-auto mt-4 max-w-lg text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus corrupti ab labore inventore eum! Tenetur provident perspiciatis adipisci eos, enim inventore ad alias rem soluta, autem doloremque, ullam repellendus commodi.</p>
      <div className='mt-24 flex flex-1  justify-evenly items-center max-lg:flex-col gap-14'>
        {reviews.map((re) => (
          <ReviewCard 
          
          key={re.customerName}
          imgURL={re.imgURL}
          customerName={re.customerName}
          rating={re.rating}
          feedback={re.feedback}
          
          /> ))}
      </div>
    </section>
  )
}

export default CustomerReviews
