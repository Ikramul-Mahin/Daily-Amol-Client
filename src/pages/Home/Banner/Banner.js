import { Carousel } from "@material-tailwind/react";
import walp from './Minimal Modern Travel Vlogger Youtube Channel Art.png' 
export function CarouselTransition() {
  return (
	
    <Carousel transition={{ duration: 2 }} className="">
      <img
        src={walp}
        alt="image 1"
        className="h- w-full object-cover"
      />
      
    </Carousel>
  );
}