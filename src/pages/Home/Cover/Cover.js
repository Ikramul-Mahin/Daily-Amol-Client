import React from 'react';

const Cover = () => {
    return (
        <section class="text-gray-600 body-font mt-10 mb-10">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">সততা, সৎ কাজের আদেশ ও মন্দ কাজে নিষেধ 
      </h1>
      <p class="mb-8 leading-relaxed">উবাদা বিন সাবিত রাদ্বিয়াল্লাহু আনহু থেকে বর্ণিত, রাসূল সাল্লাল্লাহু আলাইহি ওয়া সাল্লাম বলেছেন: “তোমরা আমার জন্য ছয়টি জিনিসের জামিন হও, আমি তোমাদের জন্য জান্নাতের জামিন হবো। (১) যখন কথা বলবে, তখন সত্য কথা বলবে, (২) যখন ওয়াদা করবে, তখন তা পুর্ণ করবে, (৩) তোমাদের কাছে আমানত রাখা হলে, তা রক্ষা করবে, (৪) লজ্জাস্থান হেফাযত করবে, (৫) দৃষ্টি অবনত রাখবে এবং (৬) তোমাদের হাতকে সংযত রাখবে।”[1]</p>
    
    </div>

    {/* videos */}
    <div class="lg:max-w-lg lg:w-full md:w-1/2 sm:w-fit ">
    <iframe width="500" height="315" src="https://www.youtube.com/embed/3BP17mXNfHw?si=pDQckRAC14V4g-gI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  </div>
</section>
    );
};

export default Cover;