export default function AboutUs() {
    
  return (
    <main className="top-0 mx-auto  flex flex-col  border border-gray-100">
      <section className="relative bg-yosh-blue">
        <div className="absolute top-20">
          <svg
            width="80%"
            height="80%"
            viewBox="0 0 300 530"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g transform="matrix(0.806452,0,0,0.806452,0,0)">
              <path
                d="M-259.969,317.938C-261.463,376.173 -208.324,431.795 -181.567,452.327C-146.1,506.455 -159.167,476.591 -142.366,577.383C-125.566,678.174 -15.43,661.376 23.771,638.977C62.971,616.579 104.039,607.247 139.506,618.446C253.376,666.975 294.443,648.31 316.844,625.912C413.913,536.32 359.778,405.664 328.044,323.538C296.31,241.411 335.511,198.482 341.111,142.487C342.357,130.028 344.844,45.428 258.976,37.962C173.107,30.496 230.975,34.229 89.105,6.231C-52.765,-21.766 -131.166,49.161 -140.5,127.554C-147.967,190.269 -185.923,224.613 -203.968,233.945C-222.635,248.255 -259.969,285.088 -259.969,317.938Z"
                fill="#F8CC13"
              />
            </g>
          </svg>
        </div>
        <div className="absolute right-0 top-0">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 300 320"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g transform="matrix(0.594059,0,0,0.594059,0,0)">
              <path
                d="M0.031,199.938C-1.463,258.173 51.676,313.795 78.433,334.327C113.9,388.455 100.833,358.591 117.634,459.383C134.434,560.174 244.57,543.376 283.771,520.977C322.971,498.579 364.039,489.247 399.506,500.446C513.376,548.975 554.443,530.31 576.844,507.912C673.913,418.32 619.778,287.664 588.044,205.538C556.31,123.411 595.511,80.482 601.111,24.487C602.357,12.028 604.844,-72.572 518.976,-80.038C433.107,-87.504 490.975,-83.771 349.105,-111.769C207.236,-139.766 128.834,-68.839 119.5,9.554C112.033,72.269 74.077,106.613 56.032,115.945C37.365,130.255 0.031,167.088 0.031,199.938Z"
                fill="#F8CC13"
              />
            </g>
          </svg>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
            <div className="text-center w-2/3 pb-12 md:pb-16 mx-auto">
              <h3 className="text-center text-[5rem] font-bold font-gluten text-white stroke-red-300 stroke-[20px]">
                YOUR ONE STOP HOBBY
              </h3>
            </div>
          </div>
        </div>
      </section>


      <div className="bg-yosh-yellow about-background">
        <div className="w-4/5 mx-auto grid grid-cols-2 gap-2 justify-items-center  py-14 px-4">
          <div className="">
            <h3 className="text-6xl font-gluten font-bold text-yosh-blue">
              ABOUT YOSH
            </h3>
            <p className="font-rubik">
              We believe imagination is one of the way to bring our audience
              into a new dimension of joy and excitement. With a focus on
              innovation and creativity, we strive to leave a lasting impression
              on our customers, making their memories with us truly exceptional.
            </p>
          </div>
          <div className="">
            <img
              src="dugong-head.png"
              alt="Founder 1"
              className="w-72 h-72 object-cover"
            />
          </div>
        </div>
      </div>

      <div className="w-4/5 mx-auto">
        <p className="text-6xl  font-gluten font-bold  text-yosh-blue">
          MEET THE FOUNDERS
        </p>
        <div className="grid grid-cols-3 gap-6">
          <div className="flex flex-col items-center">
            <div className="">
              <img
                src="TIMOTIUS.png"
                alt="Founder 1"
                className="w-48 h-48 object-cover"
              />
            </div>
            <p className="mt-4 text-lg font-semibold">Founder 2</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="">
              <img
                src="GARRY.png"
                alt="Founder 1"
                className="w-48 h-48 object-cover"
              />
            </div>
            <p className="mt-4 text-lg font-semibold">Founder 2</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="">
              <img
                src="CALVIN.png"
                alt="Founder 1"
                className="w-48 h-48 object-cover"
              />
            </div>
            <p className="mt-4 text-lg font-semibold">Founder 3</p>
          </div>
        </div>
        {/* <Button variant="outline">Cool Button</Button> */}
      </div>
    </main>
  );
  }
  