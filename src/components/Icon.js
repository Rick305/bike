import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWallet } from '@fortawesome/free-solid-svg-icons';
import { faSeedling } from '@fortawesome/free-solid-svg-icons';
import { faIceCream } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

function Icon(props) {

    const [icon, setIcon] = useState('');
    const [unit, setUnit] = useState('');
    const [count, setCount] = useState(0);

    //determen whitch icon is to be set
    useEffect(() => {
    switch (props.unit) {
        case 'euro':
            setUnit('Euro')
            setIcon(faWallet)
            break;
        case 'gram':
            setUnit('gram')
            setIcon(faSeedling)
            break;
        case 'cal':
            setUnit('cal')
            setIcon(faIceCream)
          break;
        default:
          console.log(`Error`);
      }
    }, []);

    //count up animation for number under icon
    // useEffect( () => {
    //     let frame = 0;
    //     const counter =  setInterval(() => {
    //        frame++
    //         setCount(frame);
    //         if ( frame === parseInt(props.amount) ) {
	// 			clearInterval(counter);
	// 		}
    //     }, 10)
    // }, [])
      
    return (

                <div>
                    <div className=" m-2 rounded-full bg-orange">
                        <div className='w-20 h-20 flex items-center justify-center'>
                            <FontAwesomeIcon icon={icon} className='text-green w-1/2 h-1/2'  />
                            </div>
                        </div>
                    <div className="text-center text-base">{props.amount} {unit}</div>
                </div>

    )
}
export default Icon;