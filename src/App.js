import Footer from './Footer';
import MainDesktop from './MainDesktop';
import MainMobile from './MainMobile';
import { useEffect, useState } from 'react';

function App() {
  const [isDesktop,setIsDesktop] = useState(true);
  useEffect(()=>{
    const checkIsDestop = ()=>{
      setIsDesktop(window.innerWidth >= 1060);
    }
    checkIsDestop();
    window.addEventListener('resize', checkIsDestop);

    //cleaning:
    return ()=>{
      window.removeEventListener('resize',checkIsDestop);
    }

  },[])
  return (
    <div className="App">
      {isDesktop ? <MainDesktop/> :<MainMobile/>}
      {!isDesktop && <Footer/>}
    </div>
  );
}

export default App;
