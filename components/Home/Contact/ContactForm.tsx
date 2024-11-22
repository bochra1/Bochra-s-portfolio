import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';

// Define the type for the form data
interface FormData {
 from_name: string;
 last_name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    from_name: '',
    last_name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const formRef = useRef<HTMLFormElement>(null);

  // Handle input change and update the corresponding formData
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formRef.current) {
      emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
        formRef.current as HTMLFormElement,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID || ""
      )
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        alert('Your message has been sent!');
      })
      .catch((error) => {
        console.error('Error sending email:', error.text);
        alert('Something went wrong. Please try again later.');
      });
    }
  };

  return (
    <div className='bg-[#140c1c] rounded-lg p-4 sm:p-10'>
      <h1 className='text-bg text-2xl md:text-3xl lg:text-[2.5rem] font-bold'>Let's Work Together!</h1>
      <p className='text-gray-200 mt-3 lg:text-base text-xs md:text-sm'>Lorem Ipsum</p>
      <form ref={formRef} onSubmit={handleSubmit} className='mt-8 block w-full overflow-hidden'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-4'>
          <input
            type="text"
            name="from_name"
            value={formData.from_name}
            onChange={handleChange}
            placeholder='First Name'
            className='flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-opacity-15 outline-none w-full'
          />
          <input
            type="text"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
            placeholder='Last Name'
            className='flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-opacity-15 outline-none w-full'
          />
        </div>
        <div className='flex mt-5 flex-col md:flex-row items-center justify-between gap-4'>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder='Email Address'
            className='flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-opacity-15 outline-none w-full'
          />
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder='Phone Number'
            className='flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-opacity-15 outline-none w-full'
          />
        </div>
        <div>
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className='w-full mt-5 bg-black text-white placeholder:text-gray-600 px-4 py-3.5 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none cursor-pointer'
          >
            <option value="" disabled>Select an option</option>
            <option value="frontend">Frontend Development</option>
            <option value="backend">Backend Development</option>
            <option value="fullstack">Full Stack Development</option>
          </select>
        </div>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          className='w-full mt-5 bg-black text-white placeholder:text-gray-600 px-4 py-3.5 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none'
          rows={7}
          placeholder='Message'
        />
        <div className='mt-4'>
          <button
            type="submit"
            className='px-8 py-3.5 bg-[#7947df] text-white hover:bg-[#5c2fb7] transition-all duration-50 rounded-full'
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
