import './Athlete.css';
import Header from '../Header/Header';
import AthleteProfile from './AthleteProfile/AthleteProfile';
import Bio from '../Bio/Bio'
import MobileAthleteStat from './MobileAthleteStat/MobileAthleteStat'
import { useEffect, useState } from 'react';
import { useWindowWidth } from '@react-hook/window-size'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

const Athlete = ({ data }) => {
  const [windowWidth, setWindowWidth] = useState(0)
  const [mobile, setMobile] = useState(false)
  // const [tablet, setTablet] = useState(false)
  const size = useWindowWidth()
  
  
  const handleWindow = () => {

    setWindowWidth(size)
    windowWidth >= 600 ? setMobile(false) : setMobile(true)
    // windowWidth <= 1024 ? setTablet(false) : setTablet(true)
  }

  const CarouselComp = () => {
    const { images } = data
    
    return (
      <>
        <Carousel interval={5000} autoPlay={true} centerMode={true} centerSlidePercentage={50} infiniteLoop={true} showThumbs={false} className='main-slide' showArrows={true} onClickItem={e => console.log(e)}>
            {
              images.map((image, index) => {
                return(
                  <div key={index}>
                    <img className='caro-img' src={image} />
                  </div>
                )
              })
            }
        </Carousel>
      </>
    );
  };

  useEffect(() => {
    handleWindow()
  }, [windowWidth, size])
  
  return (
    <>
      <Header />
        {
          !mobile ? 
            <main className='athlete-main'>
              <AthleteProfile athlete={data} />
              <div className='divider'></div>
              <CarouselComp />
              <div className='divider'></div>
              <Bio data={data} />
            </main>
          : 
            <MobileAthleteStat athlete={data}/>
        }
    </>
  );
}

export default Athlete;