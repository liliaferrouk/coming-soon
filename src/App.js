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
  const [erreur,setErreur] = useState(false);
  const [email,setEmail] = useState("");
  return (
    <div className="App">
      { isDesktop
        ? <MainDesktop
              erreur={erreur}
              setErreur={setErreur}
              email={email}
              setEmail={setEmail}
          />
        :<MainMobile
              erreur={erreur}
              setErreur={setErreur}
              email={email}
              setEmail={setEmail}
         />
      }
      {/* {!isDesktop && <Footer/>} */}
    </div>
  );
}

export default App;
