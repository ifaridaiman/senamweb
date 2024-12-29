import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
interface FormData {
  name: string;
  email: string;
  phone: string;
}

const Section2: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
  });

  const [errors, setErrors] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' })); // Clear errors on typing
  };

  const validateForm = (): boolean => {
    const newErrors: FormData = {
      name: '',
      email: '',
      phone: '',
    };
    let isValid = true;

    if (!formData.name) {
      newErrors.name = 'Name is required.';
      isValid = false;
    }
    if (!formData.email) {
      newErrors.email = 'Email is required.';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format.';
      isValid = false;
    }
    if (!formData.phone) {
      newErrors.phone = 'Phone is required.';
      isValid = false;
    } else if (!/^\d+$/.test(formData.phone)) {
      newErrors.phone = 'Phone must be numeric.';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/presale', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success('Form submitted successfully!');
        setFormData({ name: '', email: '', phone: '' }); // Clear form
      } else {
        toast.error(`Error: ${result.error}`);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('An unexpected error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="md:max-w-[1600px] mx-auto text-black" data-aos="fade-up">
      <Toaster />
      <div className="h-auto md:h-screen flex flex-col justify-top items-center py-28 px-8 ">
        <h2 className="text-6xl">BE THE FIRST TO KNOW</h2>
        <p className="text-4xl">WHEN SENAM PRE-SALE DROPS</p>
        <form onSubmit={handleSubmit} className="mt-20 w-full md:w-[800px]">
          <div className="flex flex-col mb-4">
            <label className="text-xl font-black mb-2">Name *</label>
            <input
              className={`p-2 w-full rounded border ${
                errors.name ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Enter your name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
            {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
          </div>

          <div className="flex flex-col mb-4">
            <label className="text-xl font-black mb-2">Phone *</label>
            <input
              className={`p-2 w-full rounded border ${
                errors.phone ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Enter your phone"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
            />
            {errors.phone && <span className="text-red-500 text-sm">{errors.phone}</span>}
          </div>

          <div className="flex flex-col mb-4">
            <label className="text-xl font-black mb-2">Email *</label>
            <input
              className={`p-2 w-full rounded border ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Enter your email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
          </div>

          <div>
            <button
              className="w-full p-4 mt-10 bg-black text-white rounded text-xl hover:bg-slate-950 transition-all duration-200 ease-in-out"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Details'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Section2;
