import { Carousel } from "@material-tailwind/react";
import walp from './Minimal Modern Travel Vlogger Youtube Channel Art.png'
import walp1 from './Blue & Yellow Minimalist School Admission Facebook Cover.png'
import wal2 from './White Gray Photo Work Quotes Desktop Wallpaper.png' 

export function CarouselTransition() {
  return (
	
    <Carousel transition={{ duration: 2 }} className="text-black">
      <img
        src={walp1}
        alt="image 1"
        className="h- w-full object-cover"
      />
      <img
        src={walp}
        alt="image 1"
        className="h- w-full object-cover"
      />
      <img
        src={wal2}
        alt="image 1"
        className="h- w-full object-cover"
      />
      
    </Carousel>
  );
}