const CollaborateWithUs = () => {
  return (
    <section className="relative ">

      <div className="w-4/5 mx-auto px-4 sm:px-6 relative z-20">
        <div className="pt-2 pb-12 md:pt-10 md:pb-20">
          <h3 className="text-6xl font-gluten font-bold text-yosh-blue text-center py-8">
          COLLABORATE WITH US
          </h3>

          <div className="flex justify-center  pb-12 md:pb-16 mx-auto  space-x-6">
            
            <div className="">
              <h3 className="text-yosh-blue font-rubik text-2xl mb-8 font-bold">WRITE TO US</h3>
              <div className="flex flex-col space-y-2">
              <input className="bg-[#BDCCEF] rounded-full px-4 py-2 w-full" placeholder="Email" />
              <textarea className="bg-[#BDCCEF] rounded-md px-4 py-2 w-full" rows={8} placeholder="Message" />
              <button className="rounded-full bg-yosh-yellow px-4 py-1 w-20">Send</button>
              </div>
              
            </div>


            <div className="">
              <h3 className="text-yosh-blue font-rubik text-2xl mb-8 font-bold">WRITE TO US</h3>
              <div className="flex flex-col space-y-2">
                <span className="">Write down your Address.</span>

                <span className="">Phone: (+62) XXX-XXXX-XXX
                <br /> E-mail: Loremipsum@gmail.com</span>

                <div className="flex space-x-2">
                  <img src="ICONS.png" className="w-8" />
                  <img src="ICONS.png" className="w-8" />
                </div>
              </div>
              
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

  
export default CollaborateWithUs;