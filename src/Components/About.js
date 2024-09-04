import { FooterDivider } from "flowbite-react";
import React from "react";

export const About = () => {
  return (
    <section>
    <div className="container mx-auto relative">
      <div className="uppercase py-3 text-white headernav text-center relative">
        {/* <img src="/Images/BG-1.jpg" className="mix-blend-screen absolute" /> */}
        <h1 className="md:text-xl text-sm wow animate__animated animate__slideInLeft">A Few Words</h1>
        <h2 className="md:text-8xl text-2xl wow animate__animated animate__slideInRight">About Us</h2>
      </div>
      <div className="flex md:flex-row flex-col">
        <img src="/Images/BG-3.jpg" className="mix-blend-screen w-full h-full absolute" />
        <div className="flex mx-6 text-left md:w-2/5 py-28 wow animate__animated animate__slideInLeft">
          <p className="headernav text-white text-2xl md:text-6xl">
            Our journey began with a shared love for this bewitching season
          </p>
        </div>
        <div className="flex flex-col mx-6  md:w-2/4 md:py-28 text-white ">
          <div className="wow animate__animated animate__slideInRight">
            <p className="headernav md:text-2xl text-2xl">
              Our journey began with a shared passion for all things Halloween,
              from the thrill of dressing up in spooky costumes to the joy of
              decorating our homes with enchanting decorations and indulging in
              sweet treats that make the season truly special.
            </p>
          </div>
          <div className="text-base py-10 text-gray-400 wow animate__animated animate__slideInUp">
            <p>
              Our team of Halloween enthusiasts and connoisseurs has scoured the
              realms of costumes, decorations, and confections to bring you a
              handpicked selection of the finest and most bewitching items. Each
              costume we offer has been chosen to ignite your imagination and
              make your Halloween dreams a reality. Our decorations are designed
              to transform your space into a haunted wonderland, and our
              delectable sweets are chosen to tantalize your taste buds and add
              a sweet touch to your celebrations. Our shop is your trusted
              partner in embracing the spirit of Halloween, and we're here to
              make sure your Halloween is filled with thrills, chills, and
              unforgettable moments. Join us as we celebrate the magic,
              creativity, and enchantment that Halloween has to offer.
            </p>
          </div>
          <hr class="h-px my-8 bg-gray-400 border-0 dark:bg-gray-700" />

          <div className="wow animate__animated animate__slideInLeft">
            <p className="headernav md:text-2xl text-2xl">
              As devoted Halloween aficionados ourselves, we understand the
              importance of finding the perfect costume that transforms you into
              your favorite character.
            </p>
          </div>
          <div className="text-base py-10 text-gray-400 wow animate__animated animate__slideInUp">
            <p>
              We curate a handpicked selection of costumes, decorations, and
              sweets that capture the essence of Halloween, ensuring that you
              can create spooktacular memories and embrace the magic of this
              bewitching holiday. Whether you're preparing for the most epic
              Halloween party, looking for a special treat, or simply reveling
              in the joy of the season, our online shop is your trusted partner
              in making Halloween unforgettable. Join us in celebrating this
              timeless holiday, and let's embark on a thrilling journey into the
              enchanting world of Halloween together.
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <img
          src="/Images\gallery-0005.jpg"
          className="md:h-[590px] h-[590px] mx-auto mix-blend-screen w-[100%] absolute md:w-full object-cover rounded-3xl items-center overflow-hidden"
        />

        <div className="text-white text-center pt-20 mx-6 backdrop-blur-sm wow animate__animated animate__slideInLeft">
          <h1 className="headernav text-center text-2xl">
            Join the Spooky Shopping Spree Now
          </h1>
          <h1 className="md:text-6xl lg:w-2/4 md:w-3/4 mx-auto py-4 text-4xl text-center headernav ">
            Unwrap Sweets, Embrace Costumes, and Decorate with Delight! Shop,
            Create, and Celebrate Halloween with Us Today!
          </h1>
        </div>
        <div className="flex flex-col justify-center mb-40 backdrop-blur-sm">
        <button className="wow animate__animated animate__slideInLeft text-white text-base  mx-auto text-center bg-[#E35701] p-2 rounded-lg md:w-36 w-28 font-bold">
          SHOP NOW
        </button>
        </div>
      </div>
    </div>
    </section>
  );
};
