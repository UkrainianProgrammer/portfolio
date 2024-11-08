import { gridItems, companies } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

const Grid = () => {
  return (
    <div id="about">
        <BentoGrid className="w-full py-20">
            {gridItems.map((item, i) => (
                <BentoGridItem
                    id={item.id}
                    key={i}
                    title={item.title}
                    description={item.description}
                    // remove icon prop
                    // remove original classname condition
                    className={item.className}
                    img={item.img}
                    imgClassName={item.imgClassName}
                    titleClassName={item.titleClassName}
                    spareImg={item.spareImg}
                />
            ))}
        </BentoGrid>
        <div className='flex flex-wrap items-center justify-center mt-5 mb-5 gap-4 md:gap-16 max-lg:mt-10'>
            {companies.map(({id, img, name, nameImg}) => (
                <div key={id} className='flex md:max-w-60
                    max-w-30 gap-2'>
                        <img src={img} alt={name} className='md:w-10 w-5' />
                        <img src={nameImg} alt={name} className='md:w-21 w-15' />
                </div>
            ))}
        </div>
    </div>
  );
};

export default Grid;