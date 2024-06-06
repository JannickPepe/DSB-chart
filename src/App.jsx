import { useState } from 'react'
import Errorbar from "./components/charts/Errorbar"
import VerticalChart from "./components/charts/Radar"
import BarGraph from './components/charts/Bar';



function App() {
  
  const [toggle, setToggle] = useState(true);
  const [toggletwo, setToggletwo] = useState(true);

  const handleClick = () => {
    setToggle(!toggle);
  };

  const handleClicktwo = () => {
    setToggletwo(!toggletwo);
  };


  return (
    <main>
      <h1 className="font-bold text-3xl text-red-400 text-center mt-20">Example of DSB Chart UI</h1>
      <section className='grid grid-cols-2 grid-rows-1 max-w-7xl mx-auto gap-10'>
        
        <div className='mb-10 grid-cols-1'>
          <h2 className='font-semibold text-2xl text-center mt-10'>Category: <span className='text-red-400 text-lg font-bold border-b border-slate-600'>Time Conflicts</span></h2>
          {toggle ?
            <>
              <VerticalChart />
            </>
            :
            <>
            <Errorbar />
            </>
          }
          <div className='flex justify-center'>
            <button onClick={handleClick} className="ring-2 rounded-md ring-red-400 px-2 py-1">
              Switch Graph
            </button>
          </div>
        </div>

        <div className='mb-10 grid-cols-1'>
          <h2 className='font-semibold text-2xl text-center mt-10'>Category: <span className='text-red-400 text-lg font-bold border-b border-slate-600'>Damage cost</span></h2>
          {toggletwo ?
            <>
              <BarGraph />
            </>
            :
            <>
            <Errorbar />
            </>
          }
          <div className='flex justify-center'>
            <button onClick={handleClicktwo} className="ring-2 rounded-md ring-red-400 px-2 py-1">
              Switch Graph
            </button>
          </div>
        </div>

      </section>
        
      <section>

      </section>
    </main>
  )
}

export default App
