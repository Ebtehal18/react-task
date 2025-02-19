import React, { useState } from "react";
import axios from "axios";
import * as Yup from 'yup';
import { useFormik } from "formik";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

export default function Contact() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const initialValues = {   email: "",phone: "",name: "" };

  // Validation schema
  const validate = Yup.object().shape({
    email: Yup.string().required('Email is required').email('Email is not valid'),
    name: Yup.string().required('Name is required').min(3, 'Min characters are 3'),
    phone: Yup.string().required('Phone is required')
      .matches(/^01[0125][0-9]{8}$/, 'Phone must be a valid Egyptian number')
  });

  // Submit function
  async function submitForm(values) {
    console.log(values);
    setLoading(true);
    try {
      const res = await axios.post(`https://upskilling-egypt.com:3001/contact`, values);
      console.log(res);
    } catch (err) {
      console.log(err.message);
      setError(err.message)

    } finally {
      setLoading(false);
    }
  }

  // Formik Hook
  const formik = useFormik({
    initialValues,
    validationSchema: validate,
    onSubmit: submitForm
  });

  return (
    <section className="mt-[60px]">
<h3 className="heading-page mx-auto text-center w-fit relative p-4 overflow-hidden">
  Contact Us
  <span className="absolute inset-0 border-2 border-blue-500 rotate-[-185deg] "></span>
</h3>



      <div className="max-w-5xl mx-auto md:flex mt-[50px] justify-between px-4 md:px-0">
        <div className="md:w-1/2">
          <form className="flex flex-col gap-[14px]" onSubmit={formik.handleSubmit}>
{/* catching the error */}
          {error&&  <div className="p-4 mb-5 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 text-center" role="alert">
  {error}
</div>}
{/* name fied+ it's error */}

            <input type="text" className="input" placeholder="Name" id="name"
              value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} />
            {formik.errors.name && formik.touched.name ? (
              <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50">
                {formik.errors.name}
              </div>
            ) : null}
{/* email fied+ it's error */}
            <input type="email" className="input" placeholder="Email" id="email"
              value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} />
            {formik.errors.email && formik.touched.email ? (
              <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50">
                {formik.errors.email}
              </div>
            ) : null}
{/* phone fied+ it's error */}
            <input type="tel" className="input" placeholder="Phone" id="phone"
              value={formik.values.phone} onChange={formik.handleChange} onBlur={formik.handleBlur} />
            {formik.errors.phone && formik.touched.phone ? (
              <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50">
                {formik.errors.phone}
              </div>
            ) : null}

            <button className="btn btn-submit" type="submit">
              {loading ? 'Loading...' : 'Send'}
            </button>
          </form>
        </div>


        <div className="flex flex-col justify-center mt-[20px] md:mt-0">

          <div className="flex gap-[20px] mb-[30px] ">
            <span className="text-[#5180F6]"><IoMail size={24} /></span>
            <span className="text-[14px]">upskilling.eg1@gmail.com</span>
          </div>
          <div className="flex gap-[20px]">
            <span className="text-[#5180F6]"><FaPhoneAlt size={24} /></span>
            <span className="text-[14px]">+20 123 456 7890</span> {/* Corrected */}
          </div>
        </div>
      </div>
    </section>
  );
}
