import React from 'react'
import logoBS from '../assets/img/bootstrap-logo.svg'

const CreateProductForm = () => {
    return (
        <div>
            <section className='d-grid justify-content-center py-5'>
                <div className='text-center'>
                <img src={logoBS} alt='logo'/>
                    <h1 className='mt-4'>Create Product</h1>
                    <p>
                        Below is an example form built entirely with Bootstrap's form controls.
                        Each required form group has a validation state that can be triggered by
                        attempting to submit the form without completing it.
                    </p>
                </div>
                <form action='#' method='post' className='container-fluid mt-5'>
                    <h3 className='mb-4'>Detail Product</h3>
                    <div className='mb-3 col-md-4 col-sm-8 has-validation'>
                        <label htmlFor='validationProductName' className='form-label'>
                            Product Name
                        </label>
                        <input
                            type='text'
                            name='product-name'
                            className='form-control'
                            id='validationProductName'
                            required=''
                        />
                        <div className='valid-feedback'>Looks good!</div>
                    </div>
                    <div className='mb-3 col-md-4 col-sm-6 has-validation'>
                        <label htmlFor='product-category' className='form-label'>
                            Product Category
                        </label>
                        <select name='product-category' className='form-select' required=''>
                            <option selected='' disabled='' value=''>
                                Pilih kategori produk
                            </option>
                            <option value='category 1'>Category 1</option>
                            <option value='category 2'>Category 2</option>
                            <option value='category 3'>Category 3</option>
                        </select>
                        <div className='invalid-feedback'>Please select a valid state.</div>
                        <div className='valid-feedback'>Looks good!</div>
                    </div>
                    <div className='mb-3 col-md-4 col-sm-6 has-validation'>
                        <label htmlFor='product-category' className='form-label'>
                            Image of Product
                        </label>
                        <input type='file' name='image' required='' className='form-control' />
                        <div className='invalid-feedback'>Please provide a valid image.</div>
                        <div className='valid-feedback'>Looks good!</div>
                    </div>
                    <div className='mb-3 col-md-4 col-sm-6'>
                        <label className='pb-1 form-label'>Product Freshness</label>
                        <div className='form-check'>
                            <input
                                type='radio'
                                className='form-check-input'
                                id='validationProductBrandNew'
                                name='radio-stacked'
                                required=''
                            />
                            <label
                                htmlFor='validationProductBrandNew'
                                className='form-check-label'
                            >
                                Brand New
                            </label>
                            <div className='invalid-feedback'>Please choose one</div>
                        </div>
                        <div className='form-check'>
                            <input
                                type='radio'
                                className='form-check-input'
                                id='validationSecondHand'
                                name='radio-stacked'
                                required=''
                            />
                            <label htmlFor='validationSecondHand' className='form-check-label'>
                                Second Hand
                            </label>
                            <div className='invalid-feedback'>Please choose one</div>
                        </div>
                        <div className='form-check'>
                            <input
                                type='radio'
                                className='form-check-input'
                                id='validationRefurbrished'
                                name='radio-stacked'
                                required=''
                            />
                            <label htmlFor='validationRefurbrished' className='form-check-label'>
                                Refurbrished
                            </label>
                            <div className='invalid-feedback'>Please choose one</div>
                        </div>
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Additional Description</label>
                        <textarea
                            className='form-control'
                            rows={5}
                            required=''
                            defaultValue={''}
                        />
                        <div className='invalid-feedback'>Please provide a description</div>
                        <div className='valid-feedback'>Looks good!</div>
                    </div>
                    <div className='mb-5 has-validation'>
                        <label htmlFor='validationProductPrice' className='form-label'>
                            Product Price
                        </label>
                        <input
                            type='number'
                            name='price'
                            className='form-control'
                            id='validationProductPrice'
                            placeholder='$1'
                            required=''
                        />
                    </div>
                    <button
                        type='submit'
                        className='btn btn-primary w-100 mb-5'
                        id='btn-submit'
                        data-toggle='modal'
                        data-target='#myModal'
                    >
                        Submit
                    </button>
                </form>
            </section>
        </div>
    )
}

export default CreateProductForm