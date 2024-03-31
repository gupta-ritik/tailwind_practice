import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from "../components/Button"

const SpecialOffer = () => {
  return (
    <section id="product" className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">

      <div className="flex-1">
        <img 
        src={offer}
        alt='offer'
        width={773}
        height={687}
        className="object-contain"
        />
      </div>
      {/* here we written code for Right Side  */}

      <div className="flex flex-1 flex-col">
        <h2 className='font-palanquin text-4xl font-bold capitalize lg:max-w-lg'>

          <span className='text-coral-red inline-block mt-3'>Special</span> Offer
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas obcaecati molestiae, maxime sequi vero odio! Tempore repellat ullam itaque fuga, exercitationem hic quam?
        </p>
        <p className="mt-6 lg:max-w-lg info-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates enim laborum ipsum!</p>
        <div className="flex flex-row"><div className="mt-8"><Button label='Shop now' iconURL={arrowRight} /></div>
          <div className="mt-8 mx-5"><Button label='Learn More' 
          backgroundColor="bg-white" /></div></div>



      </div>


    </section>
  )
}

export default SpecialOffer
