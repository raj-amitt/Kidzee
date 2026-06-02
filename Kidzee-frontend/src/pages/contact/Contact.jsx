import React, { useState } from "react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import API from "../../api/axios";

/* YOU WILL IMPORT THESE */
import phoneIcon from "../../assets/call.png";
import emailIcon from "../../assets/email.png";
import locationIcon from "../../assets/location.png";
import clockIcon from "../../assets/clock.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    parentName: "",
    childName: "",
    age: "",
    phone: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await API.post("/contact", formData);

      alert("Form submitted!");

      setFormData({
        parentName: "",
        childName: "",
        age: "",
        phone: "",
        email: "",
        message: "",
      });
    } catch (err) {
      console.log(err);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-gradient-to-r from-[#7B5AA6] to-[#8E6BBE] py-16 px-6 text-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
        {/* LEFT - FORM */}
        <div className="w-full lg:w-1/2 bg-[#F3EDF7] text-black rounded-2xl shadow-lg p-6 md:p-8">
          <h2 className="font-heading text-xl md:text-2xl mb-6">
            Enquiry Form
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Parent Name */}
            <div>
              <label className="font-body text-sm text-gray-700">
                Parent’s Name
              </label>
              <input
                type="text"
                name="parentName"
                value={formData.parentName}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 text-sm outline-none"
              />
            </div>

            {/* Child Name */}
            <div>
              <label className="font-body text-sm text-gray-700">
                Child’s Name
              </label>
              <input
                type="text"
                name="childName"
                value={formData.childName}
                onChange={handleChange}
                placeholder="Enter child name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 text-sm outline-none"
              />
            </div>

            {/* Age */}
            <div>
              <label className="font-body text-sm text-gray-700">
                Child’s Age
              </label>
              <select
                name="age"
                value={formData.age}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 text-sm outline-none"
              >
                <option value="">Select age group</option>
                <option>1.5 - 2.5 yrs</option>
                <option>2.5 - 3.5 yrs</option>
                <option>3.5 - 4.5 yrs</option>
                <option>4.5 - 6 yrs</option>
              </select>
            </div>

            {/* Phone */}
            <div>
              <label className="font-body text-sm text-gray-700">
                Phone Number
              </label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 text-sm outline-none"
              />
            </div>

            {/* Email */}
            <div>
              <label className="font-body text-sm text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 text-sm outline-none"
              />
            </div>

            {/* Message */}
            <div>
              <label className="font-body text-sm text-gray-700">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Any specific question or requirements?"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 text-sm h-28 outline-none"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#8E6BBE] text-white py-3 rounded-lg font-heading hover:opacity-90"
            >
              {loading ? "Sending..." : "Submit Enquiry"}
            </button>
          </form>
        </div>

        {/* RIGHT - INFO */}
        <div className="w-full lg:w-1/2">
          <div className="flex justify-between items-center">
            <h2 className="font-heading text-3xl">Get In Touch</h2>

            <div className="flex gap-4 text-xl">
              <a
                href="https://wa.me/917415750940"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="cursor-pointer" />
              </a>

              <a
                href="https://www.instagram.com/kidzeeshiprasuncity/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="cursor-pointer" />
              </a>
            </div>
          </div>

          <p className="font-body text-gray-200 mt-4 max-w-md">
            Ready to give your child the best start? Fill out the form and we’ll
            get back to you shortly
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
            <div className="flex gap-4 items-start">
              <img src={phoneIcon} alt="" />
              <div>
                <p className="font-heading">Phone</p>
                <a href="tel:+919953050614" className="text-sm text-gray-200">
                  +91 9953050614
                </a>{" "}
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <img src={emailIcon} alt="" />
              <div>
                <p className="font-heading">Email</p>
                <p className="text-sm text-gray-200">kidzee.shiprasuncity@gmail.com</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <img src={locationIcon} alt="" />
              <div>
                <p className="font-heading">Address</p>
                <p className="text-sm text-gray-200">
                  Shipra Suncity, Indirapuram, Ghaziabad
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <img src={clockIcon} alt="" />
              <div>
                <p className="font-heading">Working Hours</p>
                <p className="text-sm text-gray-200">
                  Monday – Friday, Morning Hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Google Map Section */}
<div className="max-w-7xl mx-auto mt-16">

  <div className="text-center mb-8">
    <h2 className="font-heading text-3xl text-white">
      Visit Kidzee Shipra Suncity, Indirapuram
    </h2>

    <p className="font-body text-gray-200 mt-3">
      8/3 & 8/4 Palm Road, Shipra Suncity,
      Indirapuram, Ghaziabad, Uttar Pradesh
    </p>
  </div>

  <div className="overflow-hidden rounded-2xl shadow-2xl">
    <iframe
      title="Kidzee Preschool & Daycare in Shipra Suncity Indirapuram"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14007.7758506275!2d77.36218129714571!3d28.63144154460116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5ae370a1dc5%3A0x3b699682a75395e5!2sKidzee%20Preschool%20%26%20Daycare%20in%20Shipra%20Suncity%2C%20Indirapuram%2C%20Ghaziabad!5e0!3m2!1sen!2sin!4v1780382137315!5m2!1sen!2sin"
      width="100%"
      height="450"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  </div>

</div>
    </section>
  );
};

export default Contact;
