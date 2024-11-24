import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';

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
  
  const [isSent, setIsSent] = useState(false); // New state to track submission
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

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
        setFormData({
          from_name: "",
          last_name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        }); // Clear form
        setIsSent(true); // Set state to true after successful submission
      })
      .catch((error) => {
        setIsSent(false); // Reset in case of failure
      });
    }
  };

  return (
    <div className='bg-[#140c1c] rounded-lg p-4 sm:p-10'>
      <h1 className='text-bg text-2xl md:text-3xl lg:text-[2.5rem] font-bold'>Let's Work Together!</h1>
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
            disabled={isSent} // Disable the button once the form is submitted
            className={`px-8 py-3.5 ${isSent ? 'bg-[#7947df] animate-pulse' : 'bg-[#7947df]'} text-white hover:bg-[#5c2fb7] transition-all duration-50 rounded-full`}
          >
            {isSent ? "Thank you  🎉!" : "Send Message"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
