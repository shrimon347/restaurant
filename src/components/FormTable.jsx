import { CalendarIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../components/shared/style.css";
import Button from "./shared/Button";
import Heading from "./shared/Heading";
import bg from "../assets/bg.webp"

const FormTable = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    people: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDateChange = (date) => {
    setFormData({ ...formData, date: date });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted:", formData);
    setFormData({
      name: "",
      email: "",
      date: "",
      people: "",
      message: "",
    });
  };

  return (
    <div
      className="relative w-full bg-cover bg-no-repeat "
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="max-w-7xl mx-auto p-4 md:flex items-center justify-between min-h-[500px]">
        <div className="md:w-1/2 space-y-6 text-white py-6 mt-10">
          <Heading title={"Book Now"} desc={"Book Your Table"} />
          <p className="text-gray-300">
            Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo
            molestie vel, ornare non id blandit netus.
          </p>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name *"
                className="w-full p-3 border border-gray-400 bg-transparent text-white placeholder-gray-500 focus:outline-none"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full p-3 border border-gray-400 bg-transparent text-white placeholder-gray-500 focus:outline-none"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative w-full border  !border-gray-400 ">
                <DatePicker
                  selected={formData.date}
                  onChange={handleDateChange}
                  placeholderText="Reservation Date"
                  className="w-full block p-3 bg-transparent outline-none text-white placeholder-gray-500"
                  dateFormat="yyyy-MM-dd"
                  required
                />
                <CalendarIcon className="absolute top-3 right-3 h-5 text-gray-500" />
              </div>
              <div className="relative ">
                <input
                  type="number"
                  name="people"
                  placeholder="Total People"
                  className="w-full  p-3 border border-gray-400 bg-transparent text-white placeholder-gray-500 focus:outline-none"
                  value={formData.people}
                  onChange={handleChange}
                />
              </div>
            </div>
            <textarea
              name="message"
              placeholder="Message"
              className="w-full p-3 border border-gray-400 bg-transparent text-white placeholder-gray-500 focus:outline-none"
              rows="4"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <Button text={"Book Now"} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormTable;
