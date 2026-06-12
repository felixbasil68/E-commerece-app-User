import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';

function CartTotal() {
    const { currency, delivery_fee, getCartAmount } = useContext(ShopContext);
    return (
        <>
            <div className='w-full max-w-md bg-white rounded-2xl shadow-md p-6'>

                <div className='text-2xl mb-4'>
                    <Title text1={'CART '} text2={'TOTALS'} />
                </div>

                <div className='flex flex-col gap-4 text-sm text-gray-700'>

                    <div className='flex justify-between'>
                        <span>Subtotal</span>
                        <span className='font-medium'>
                            {currency} {getCartAmount()}.00
                        </span>
                    </div>

                    <div className='border-t'></div>

                    <div className='flex justify-between'>
                        <span>Shipping Fee</span>
                        <span className='font-medium'>
                            {currency} {delivery_fee}.00
                        </span>
                    </div>

                    <div className='border-t'></div>

                    <div className='flex justify-between items-center text-base'>
                        <b>Total</b>
                        <b className='text-lg text-black'>
                            {currency} {getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee}.00
                        </b>
                    </div>

                </div>

            </div>




        </>
    )
}

export default CartTotal