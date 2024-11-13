// src/components/Tabs.jsx
import React from 'react';
import { Tab } from '@headlessui/react';
import Button from './Button';
import { PhoneIcon } from '@heroicons/react/16/solid';


function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const TabData = () => {
  const tabContent = [
    {
      title: "About",
      content: {
        heading: "EXCEPTIONAL CULINARY EXPERIENCE AND DELICIOUS FOOD",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non sed est cursus. Vel hac convallis ipsum, facilisi odio pellentesque bibendum viverra tempus. Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore magna minim veniam nostrud exercitation.",
        buttonText: "ABOUT MORE",
        contact: "+88 3426 739 485",
      },
    },
    {
      title: "Experience",
      content: {
        heading: "OUR EXPERIENCE IN CULINARY ARTS",
        description:
          "With years of experience, our team is dedicated to bringing you the finest culinary delights. From appetizers to desserts, our expertise ensures every dish is crafted to perfection.",
        buttonText: "LEARN MORE",
        contact: "+88 3426 739 485",
      },
    },
    {
      title: "Contact",
      content: {
        heading: "GET IN TOUCH WITH US",
        description:
          "Reach out to us for inquiries, reservations, and more. We are here to provide you with an exceptional dining experience.",
        buttonText: "CONTACT US",
        contact: "+88 3426 739 485",
      },
    },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto py-10 px-6 bg-white">
      <Tab.Group>
        <Tab.List className="flex space-x-8 border-b border-[#B52B1D]">
          {tabContent.map((tab, index) => (
            <Tab
              key={index}
              className={({ selected }) =>
                classNames(
                  "py-2.5 text-lg font-semibold",
                  selected ? "bg-[#B52B1D] !border-none  p-4 text-white" : "text-gray-700 hover:text-red-600 !border-none !rounded-none"
                )
              }
            >
              {tab.title}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-6">
          {tabContent.map((tab, index) => (
            <Tab.Panel key={index} className="space-y-4">
              <h2 className="text-3xl font-bold text-gray-800">{tab.content.heading}</h2>
              <p className="text-gray-600 leading-relaxed">{tab.content.description}</p>
              <div className="flex items-center space-x-4">
                <Button text={tab.content.buttonText} />
                <div className="flex items-center space-x-2 text-gray-700">
                  <PhoneIcon className="h-5 w-5 text-red-600" />
                  <span>{tab.content.contact}</span>
                </div>
              </div>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default TabData;
