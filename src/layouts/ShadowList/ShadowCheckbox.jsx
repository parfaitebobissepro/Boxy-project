import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateCheckbox } from '../../features/shadows'

export default function ShadowCheckbox({ name, shadowID }) {
    const checkboShadow = useSelector(state => state.shadows.find(shadow => shadow.id === shadowID));
    const dispatch = useDispatch();

    return (
        <>
            <input className='h-4 w-4 border-gray-300 rounded mr-2' onChange={() => dispatch(updateCheckbox({ shadowID, name }))} checked={checkboShadow[name]} id={`checkbox-${name}-${shadowID}`} type="checkbox" />
            <label className='leading-4 mr-5' htmlFor="">
                {name.charAt(0).toUpperCase() + name.slice(1)}
            </label>
        </>
    )
}
