import { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState('olive');
  const data = [
    {
      colorName: 'Red',
      colorValue: 'red',
      textColor: 'white',
    },
    {
      colorName: 'Blue',
      colorValue: 'blue',
      textColor: 'white',
    },
    {
      colorName: 'Green',
      colorValue: 'green',
      textColor: 'white',
    },
    {
      colorName: 'Grey',
      colorValue: 'grey',
      textColor: 'white',
    },
    {
      colorName: 'Olive',
      colorValue: 'olive',
      textColor: 'white',
    },
    {
      colorName: 'Purple',
      colorValue: 'purple',
      textColor: 'white',
    },
    {
      colorName: 'Yellow',
      colorValue: 'yellow',
      textColor: 'black',
    },
    {
      colorName: 'Pink',
      colorValue: 'pink',
      textColor: 'black',
    },
    {
      colorName: 'Lavender',
      colorValue: 'lavender',
      textColor: 'black',
    },
    {
      colorName: 'White',
      colorValue: 'white',
      textColor: 'black',
    },
    {
      colorName: 'Black',
      colorValue: 'black',
      textColor: 'white',
    },
  ];
  return (
    <>
      <div className="w-full h-screen duration-100" style={{ backgroundColor: color }}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex bg-slate-100 rounded-3xl flex-wrap justify-center gap-3 px-4 py-2 shadow-lg">
            {data.map((colorObj, index) => (
              <button
                key={index}
                onClick={() => setColor(colorObj.colorValue)}
                className="outline-none px-4 py-1 rounded-3xl "
                style={{
                  backgroundColor: colorObj.colorValue,
                  color: colorObj.textColor,
                }}
              >
                {colorObj.colorName}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
