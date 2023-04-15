import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const SignupFormik = () => {
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            firstname: '',
            lastname: '',
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
        // validation schema
        validationSchema: Yup.object({
            firstname: Yup.string()
                .min(3, 'First name minimum 3 characters')
                .required(),
            lastname: Yup.string()
                .min(3, 'Last name minimum 3 characters')
                .required(),
            username: Yup.string()
                .required(),
            email: Yup.string()
                .required()
                .email('Invalid email format'),
            password: Yup.string()
                .required()
                .min(8, 'Should more than 8 characters'),
            confirmPassword: Yup.string()
                .required()
                .oneOf([Yup.ref('password')], 'Password must match'),
        }),
        // handle submission
        onSubmit: (values) => {
            formik.resetForm();
            alert("Register success")
            console.log('form values', (values))
            const dataUser = {
                firstname: values.firstname,
                lastname: values.lastname,
                username: values.username,
                email: values.email,
                password: values.password,
                confirmPassword: values.confirmPassword
            };
            localStorage.setItem("dataUser", JSON.stringify(dataUser));
            navigate('/login')
        }
    });
    return (
        <div>
            <div className="container pt-5 pb-5">
                <div className="row justify-content-center">
                    <h2 className='text-center'>Register Form</h2>
                    <div className="col-lg-6">
                        <hr />
                        <form onSubmit={formik.handleSubmit}>
                            <div className="form-group mb-3">
                                <label htmlFor="firstname">First Name</label>
                                <input type="text" className="form-control" name="firstname" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.firstname} />
                                {formik.touched.firstname && formik.errors.firstname && <div className='error text-danger'>{formik.errors.firstname}</div>}
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="lastname">Last Name</label>
                                <input type="text" className="form-control" name="lastname" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.lastname} />
                                {formik.touched.lastname && formik.errors.lastname && <div className='error text-danger'>{formik.errors.lastname}</div>}
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="username">Username</label>
                                <input type="text" className="form-control" name="username" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.username} />
                                {formik.touched.username && formik.errors.username && <div className='error text-danger'>{formik.errors.username}</div>}
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="email">Email</label>
                                <input type="email" className="form-control" name="email" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} />
                                {formik.touched.email && formik.errors.email && <div className='error text-danger'>{formik.errors.email}</div>}
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="password">Password</label>
                                <input type="password" className="form-control" name="password" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} />
                                {formik.touched.password && formik.errors.password && <div className='error text-danger'>{formik.errors.password}</div>}
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="confirmPassword">Confirm Password</label>
                                <input type="password" className="form-control" name="confirmPassword" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.confirmPassword} />
                                {formik.touched.confirmPassword && formik.errors.confirmPassword && <div className='error text-danger'>{formik.errors.confirmPassword}</div>}
                            </div>
                            <p className='mt-2'>Sudaah memiliki akun? <Link to={'/login'}>Login sekarang!</Link></p>
                            <div className="form-group text-center">
                                <button
                                    type="submit"
                                    className="btn btn-primary mt-3 submit"
                                    name="submit-button"
                                    width="200px"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignupFormik;
