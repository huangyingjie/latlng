import { useState, useEffect } from 'react'
import './map.css'
function App() {
  const [position, setPosition] = useState()
  const [init, setInit] = useState(null);
  let map;
  useEffect(function() {
    map = new AMap.Map('container', {
      center: [116.397428, 39.90923],
      defaultCursor: 'crosshair',
      zoom: 13
    });
    map.on('click', function(ev) {
      const { lng, lat } = ev.lnglat;
      setPosition([lng, lat].join(','));
    });
    return () => {
      map.destroy();
    }
  }, [init]);
  
  return (<div>
      <div id="container"></div>
      <div id="panel">
        <span>您选中的位置：</span>
        <span>{position}</span>
      </div>
    </div>)
}
export default App
