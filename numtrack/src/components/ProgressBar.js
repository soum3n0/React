import { Circle } from 'rc-progress';
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faUndo, faRedo } from '@fortawesome/free-solid-svg-icons';

const ProgressBar = ({ initialValue }) => {
    const [value, setValue] = useState(initialValue || 0);
    const [history, setHistory] = useState([initialValue || 0]);
    const [pointer, setPointer] = useState(0);

    useEffect(() => {
        if (initialValue !== null && initialValue >= 0 && initialValue <= 150) {
            setValue(initialValue);
            setHistory([initialValue]);
            setPointer(0);
        }
    }, [initialValue]);

    const percentage = (value / 150) * 100;

    const increment = () => {
        if (value < 150) {
            const newValue = value + 1;
            setValue(newValue);
            // Update history and pointer
            setHistory(prevHistory => {
                const updatedHistory = prevHistory.slice(0, pointer + 1);
                updatedHistory.push(newValue);
                return updatedHistory;
            });
            setPointer(prevPointer => prevPointer + 1);
        }
    }

    const decrement = () => {
        if (value > 0) {
            const newValue = value - 1;
            setValue(newValue);
            // Update history and pointer
            setHistory(prevHistory => {
                const updatedHistory = prevHistory.slice(0, pointer + 1);
                updatedHistory.push(newValue);
                return updatedHistory;
            });
            setPointer(prevPointer => prevPointer + 1);
        }
    }

    const handleUndo = () => {
        if (pointer > 0) {
            setPointer(prevPointer => {
                const newPointer = prevPointer - 1;
                setValue(history[newPointer]);
                return newPointer;
            });
        }
    }

    const handleRedo = () => {
        if (pointer < history.length - 1) {
            setPointer(prevPointer => {
                const newPointer = prevPointer + 1;
                setValue(history[newPointer]);
                return newPointer;
            });
        }
    }

    return (
        <div className='flex flex-col items-center gap-5'>
            <div className='flex justify-center items-center gap-5 md:gap-10'>
                <button onClick={decrement} className={`bg-blue-800 px-6 md:px-8 py-2 text-xs md:text-base text-white rounded-lg ${value === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'}`} disabled={value === 0}><FontAwesomeIcon icon={faMinus} /></button>
                <div className='relative aspect-square w-36 md:w-40 flex justify-center items-center'>
                    <span className='absolute text-2xl text-white'>{value}</span>
                    <Circle percent={percentage} strokeWidth={6} trailWidth={6} strokeColor="#0000ff" strokeLinecap="butt" trailColor='#9CA3AF' />
                </div>
                <button onClick={increment} className={`bg-blue-800 px-6 md:px-8 py-2 text-xs md:text-base text-white rounded-lg ${value === 150 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'}`} disabled={value === 150}><FontAwesomeIcon icon={faPlus} /></button>
            </div>
            <div className='flex gap-4'>
                <button className={`bg-blue-800 px-4 py-2 text-sm md:text-base text-white rounded-lg ${pointer === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'}`} onClick={handleUndo} disabled={pointer === 0}>Undo <FontAwesomeIcon icon={faUndo} /></button>
                <button className={`bg-blue-800 px-4 py-2 text-sm md:text-base text-white rounded-lg ${pointer === history.length - 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'}`} onClick={handleRedo} disabled={pointer === history.length - 1}><FontAwesomeIcon icon={faRedo} /> Redo</button>
            </div>
        </div>
    );
}

export default ProgressBar;
