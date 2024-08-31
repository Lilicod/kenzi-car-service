import { CoordinatesContext } from '@/context/CoordinatesContext';
import React from 'react'
import { useContext } from 'react';

export default function DistanceTime() {
    const {
        directionData,
        setDirectionData,
      } = useContext(CoordinatesContext);
  return (
    directionData?.routes &&(
    <div className='bg-[#f5f5f5] p-2 rounded-md flex justify-between items-center gap-2 font-poppins '>
        <p><span className='font-bold'>Distance:</span> {(directionData?.routes[0]?.distance*0.000621371192).toFixed(2)} Miles</p>
        <p><span className='font-bold'>Duration:</span> {(directionData?.routes[0]?.duration/60).toFixed(2)} Min</p>
    </div>
    )
  )
}
