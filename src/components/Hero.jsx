import React from 'react'

const Hero = ({title='Union Job Board', subtitle='Find the union job that fits your skill set'}) => {
  return (
    <>
          <section className="bg-unionRed py-20 mb-4 text-paleHoney">
          <div className="text-center">
            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-paleHoney tracking-wide drop-shadow-lg"
            >
              {title}
            </h1>
            <p className="my-4 text-xl font-semibold text-cream sm:text-2xl">
              {subtitle}
            </p>
          </div>
        </section>   
    </>

  )
}

export default Hero