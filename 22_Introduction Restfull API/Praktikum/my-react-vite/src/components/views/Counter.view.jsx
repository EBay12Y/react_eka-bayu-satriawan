import React from 'react'
import { Navbar, Footer } from "../organism";
import { useDispatch, useSelector } from 'react-redux';
import { counterAction } from '../../config/redux/counter/counterSlice';

const Counter = () => {
    const state = useSelector((state) => state.angka);
    const dispatch = useDispatch();
    return (
        <div>
            <Navbar />
            <section className='d-flex justify-content-center'>
                Counter {state}
            </section>
            <section className='d-flex justify-content-center'>
                <button
                    onClick={() => {
                        dispatch(counterAction.increment());
                    }}
                    type="button" className='m-2'>+</button>
                <button
                    onClick={() => {
                        dispatch(counterAction.decrement());
                    }}
                    type="button" className='m-2'>-</button>
                <button
                    onClick={() => {
                        dispatch(counterAction.reset());
                    }}
                    type="button" className='m-2'>Reset</button>
            </section>
        </div>
    )
};

export default Counter