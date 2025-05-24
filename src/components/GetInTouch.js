"use client";

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { addSubmission } from '../store/formSlice';
import Popup from './Popup';

export default function GetInTouch() {
  const dispatch = useDispatch();
  const [showPopup, setShowPopup] = useState(false);

  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      subject: '',
      message: '',
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required('Full Name is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      subject: Yup.string().required('Subject is required'),
      message: Yup.string().required('Message is required'),
    }),
    onSubmit: (values, { resetForm }) => {
      dispatch(addSubmission(values));
      setShowPopup(true);
      resetForm();
    },
  });

  return (
    <section className="bg-[#0067B1] text-white md:py-[150px] px-4 md:px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between">
        <div className="mb-8 md:mb-0">
          <h2 className="text-2xl md:text-3xl font-bold border-b-2 border-white pb-2 mb-4">
            Get in touch
          </h2>
          <p className="text-lg mb-2">For general enquiries</p>
          <p className="text-base mb-2">
            Address: 110, 16th Road, Chembur, Mumbai - 400071
          </p>
          <p className="text-base mb-2">Phone: +91 22 25208822</p>
          <p className="text-base">
            Email: <a href="mailto:info@supremegroup.co.in" className="underline">info@supremegroup.co.in</a>
          </p>
        </div>

        <form onSubmit={formik.handleSubmit} className="w-full md:w-1/2 space-y-4">
          <div>
            <input
              type="text"
              name="fullName"
              placeholder="Full name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.fullName}
              className="w-full bg-transparent border-b border-gray-300 text-white placeholder-gray-300 py-2 focus:outline-none"
            />
            {formik.touched.fullName && formik.errors.fullName ? (
              <p className="text-red-400 text-sm">{formik.errors.fullName}</p>
            ) : null}
          </div>

          <div>
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className="w-full bg-transparent border-b border-gray-300 text-white placeholder-gray-300 py-2 focus:outline-none"
            />
            {formik.touched.email && formik.errors.email ? (
              <p className="text-red-400 text-sm">{formik.errors.email}</p>
            ) : null}
          </div>

          <div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.subject}
              className="w-full bg-transparent border-b border-gray-300 text-white placeholder-gray-300 py-2 focus:outline-none"
            />
            {formik.touched.subject && formik.errors.subject ? (
              <p className="text-red-400 text-sm">{formik.errors.subject}</p>
            ) : null}
          </div>

          <div>
            <textarea
              name="message"
              placeholder="Message"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}
              className="w-full bg-transparent border-b border-gray-300 text-white placeholder-gray-300 py-2 focus:outline-none resize-none"
              rows="3"
            />
            {formik.touched.message && formik.errors.message ? (
              <p className="text-red-400 text-sm">{formik.errors.message}</p>
            ) : null}
          </div>

          <button
            type="submit"
            className="bg-white text-blue-700 px-6 py-2 rounded-full hover:bg-gray-200 transition"
          >
            Send
          </button>
        </form>
      </div>

      {showPopup && (
        <Popup
          message="Your message has been sent successfully!"
          onClose={() => setShowPopup(false)}
        />
      )}
    </section>
  );
}