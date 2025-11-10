import { useState, useCallback, useEffect, useRef } from 'react'

import "./App.css"

function App() {
  const [length, setlength] = useState(8);
  const [characterAllow, setcharacterAllow] = useState(false);
  const [numberAllow, setnumberAllow] = useState(false);
  const [password, setpassword] = useState();
  const passwordRef = useRef(null);

  const passwordGenrator = useCallback(() => {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let pass = "";
    if (numberAllow) {
      str += "0123456789";
    }
    if (characterAllow) {
      str += "!@#$%^&*~`_+-={}[]()";
    }
    for (let i = 0; i < length; i++) {
      let ch = Math.floor(Math.random() * str.length);
      pass += str.charAt(ch);

    }
    setpassword(pass);
  }, [length, characterAllow, numberAllow, setpassword]);

  useEffect(() => { passwordGenrator() }, [length, characterAllow, numberAllow, setpassword]);

  const copytoclip = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);

  }, [password]);


  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700 p-2 pt-5'>
        <h1 className='text-white text-center mb-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
            type='text'
            value={password}
            className='outline-none w-full py-1 px-3 bg-white text-black'
            placeholder='password'
            readOnly
            ref={passwordRef}
          />
          <button
            className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
            onClick={copytoclip}
          >
            Copy
          </button>

        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              onChange={(e) => setlength(Number(e.target.value))}
              className="w-max cursor-pointer appearance-none h-2 rounded-lg"
              style={{
                background: `linear-gradient(to right, #2563eb ${(length - 6) / (100 - 6) * 100}%, #d1d5db ${(length - 6) / (100 - 6) * 100}%)`,
                accentColor: '#2563eb'
              }}
            />
            <label>Length: {length}</label>


          </div>
          <div className='flex items-center gap-x-1'>
            <input type='checkbox' defaultChecked={numberAllow} id='numberInput' onChange={() => { setnumberAllow((prev) => !prev); }} />
            <label htmlFor='numberInput'>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type='checkbox' defaultChecked={characterAllow} id='characterInput' onChange={() => { setcharacterAllow((prev) => !prev); }} />
            <label htmlFor='characterInput'>Character</label>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
