const Banner = () => {
  return (
    <div className="font-rancho text-white bg-banner-img bg-no-repeat bg-cover bg-left-bottom">
      <div className="py-48 px-10 text-center lg:pl-[45%] lg:pr-[5%] space-y-5">
        <h1 className="text-4xl md:text-6xl">
          Would you like a Cup of Delicious Coffee?
        </h1>
        <p className="font-raleway text-base text-gray-400">
          It's coffee time - Sip & Savor - Relaxation in every sip! Get the
          nostalgia back!! Your companion of every moment!!! Enjoy the beautiful
          moments and make them memorable.
        </p>
        <button className="btn rounded-none text-black bg-primary tracking-wider text-xl">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Banner;
