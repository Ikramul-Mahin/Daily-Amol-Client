import React from 'react';

const Testimonial = () => {
	return (
		<div class="flex justify-center ">
		<div class="flex flex-col justify-center  my-10 w-[90%] space-y-28 lg:space-y-24 max-w-7xl">
			 <div class="flex flex-col justify-center items-center ">
				  <div class="text-xl md:text-3xl text-orange-500 font-bold uppercase">testimonials</div>
				  <div class="border-b-4 border-orange-500 -mt-2"> </div>
				  <div class="text-black text-sm text-center my-5">Review Of Our Users
				  </div>
			 </div>
			 <div class="flex flex-col justify-center items-center lg:flex-row space-y-28 lg:space-y-0  lg:space-x-10">
				  <div
						class="bg-slate-200 shadow-lg flex flex-col justify-center items-center py-4 h-56 md:w-[80%] lg:w-fit">
						<div class="-mt-20 ">
						<div className="avatar">
  <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src="https://img.freepik.com/premium-photo/beautiful-arabic-muslim-man-portrait-digital-art-illustration_805816-90.jpg" />
  </div>
</div>
						</div>
						<p class="text-center text-sm p-5">A spiritual oasis! This website offers a profound journey into Islamic teachings and practices, rooted in the rich cultural heritage of Amol. The content is enlightening, and the design reflects a serene ambiance. A must-visit for seekers of knowledge and spiritual nourishment."</p>
						<div class="flex flex-col lg:flex-row justify-center text-center lg:space-x-3">
							 <h1 class="text-orange-500 text-lg font-semibold">Anas</h1>
							 <p class="text-black text-sm lg:mt-[5px]">Student</p>
						</div>
				  </div>
				  <div
						class="bg-slate-200 shadow-lg flex flex-col justify-center items-center py-4 h-56 md:w-[80%] lg:w-fit">
						<div class="-mt-20 ">
						<div className="avatar">
  <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src="https://c8.alamy.com/comp/MHR4YC/muslim-man-praying-MHR4YC.jpg" />
  </div>
</div>
						</div>
						<p class="text-center text-sm p-5">A gem of Islamic wisdom! Navigating through this website is like embarking on a soulful pilgrimage. The articles and resources delve deep into the teachings of Islam, complemented by the unique insights from Amol's Islamic heritage. An invaluable platform for both scholars and enthusiasts alike..</p>
						<div class="flex flex-col lg:flex-row justify-center text-center lg:space-x-3">
							 <h1 class="text-orange-500 text-lg font-semibold">Rahat</h1>
							 <p class="text-black text-sm lg:mt-[5px]">Businessmen</p>
						</div>
				  </div>
				  <div
						class="bg-slate-200 shadow-lg flex flex-col justify-center items-center py-4 h-56 md:w-[80%] lg:w-fit">
						<div class="-mt-20 ">
						<div className="avatar">
  <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src="https://i.pinimg.com/474x/7a/ce/f9/7acef90c1570a79367ef23228cc32f26.jpg" />
  </div>
</div>
						</div>
						<p class="text-center text-sm p-5">"An enriching experience! This website beautifully encapsulates the essence of Islam as practiced in Amol. From its engaging articles to its captivating multimedia content, every aspect resonates with authenticity and reverence. A true beacon of enlightenment in the digital realm."</p>
						<div class="flex flex-col lg:flex-row justify-center text-center lg:space-x-3">
							 <h1 class="text-orange-500 text-lg font-semibold">Rahi</h1>
							 <p class="text-black text-sm lg:mt-[5px]">Worker</p>
						</div>
				  </div>

			 </div>
		</div>
  </div> 
	);
};

export default Testimonial;