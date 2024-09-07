import './App.css'
import CallBackTutorial from './Components/CallBack/CallBackTutorial';
import ContextTuturial from './Components/Context/ContextTuturial';
import EffectTuturial from './Components/EffectTuturial';
import ImperativeHandle from './Components/ImperativeHandle/ImperativeHandle';
import LayoutEffectTuturial from './Components/LayoutEffectTuturial';
import MemoTutorial from './Components/MemoTutorial';
import ReducerTuturial from './Components/ReducerTutorial';
import RefTuturial from './Components/RefTuturial';
import StateTutorial from './Components/StateTutorial';

function App() {

  return (
    <div className='tutorial'>
      {/* <StateTutorial />
      <ReducerTuturial />
      <EffectTuturial />
      <RefTuturial /> 
      <LayoutEffectTuturial />
      <ImperativeHandle />
      <ContextTuturial /> 
      <MemoTutorial />*/}
      <CallBackTutorial />
    </div>
  )
}

export default App
