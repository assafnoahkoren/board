import './App.css'
import ParticlesBackground from './ParticlesBackground'

function App() {

  return (
    <div dir='rtl' className="w-full h-full flex-col relative bg-dark p-10 box-border">
      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
        <ParticlesBackground />
      </div>
      <div className="text-white w-full h-full grid grid-cols-2 grid-rows-2">
        <div className="px-2">
          <div className="p-4 flex flex-col gap-4 border border-[#ffffff33] border-e-solid border-e-[0.2rem] h-full box-border">
            <div className="text-7xl fw-900">
              קומה 1
            </div>
            <div className="text-5xl fw-300">
              מבחני תאוריה - אנקורי
            </div>
          </div>
        </div>
        <div className="px-2">
          <div className="p-4 flex flex-col gap-4">
            <div className="text-7xl fw-900">
              קומה 2
            </div>
            <div className="text-5xl fw-300">
              מבחני תאוריה - אנקורי
            </div>
          </div>
        </div>
        <div className="px-2">
          <div className="p-4 flex flex-col gap-4 border border-[#ffffff33] border-e-solid border-e-[0.2rem] h-3/4 box-border">
            <div className="text-7xl fw-900">
              קומה 3
            </div>
            <div className="text-5xl fw-300">
              מבחני תאוריה - אנקורי
            </div>
          </div>
        </div>
        <div className="px-2">
          <div className="p-4 flex flex-col gap-4 ">
            <div className="text-7xl fw-900">
              קומה 4
            </div>
            <div className="text-5xl fw-300">
              מבחני תאוריה - אנקורי
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
