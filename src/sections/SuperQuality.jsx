import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { shoe8 } from "../assets/images";
const SuperQuality = () => {
  return (
    <div>
      <section id="about-us" className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
        <div className="flex flex-1 flex-col">
          <h2 className='font-palanquin text-4xl font-bold capitalize lg:max-w-lg'>
            <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>
              We provide You

            </span>
            <br />
            <span className='text-coral-red inline-block mt-3'>Super Quality</span> Shoes
          </h2>
          <p className='mt-4 lg:max-w-lg info-text'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas obcaecati molestiae, maxime sequi vero odio! Tempore repellat ullam itaque fuga, exercitationem hic quam?
          </p>
          <p className="mt-6 lg:max-w-lg info-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates enim laborum ipsum!</p>
          <div className="mt-8"><Button label='View details' /></div>

        </div>
        {/* Here we code for right side  */}
        <div className="flex-1 flex justify-center items-center">
          <img 
          src={shoe8}
          alt='shoes8'width={650}
          height={600}
          className="object-contain"/>
          
        </div>
      </section>
    </div>
  )
}

export default SuperQuality
