import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Our Team</h2>
        <p>
          We are a team of passionate developers dedicated to creating innovative
          solutions for urban mobility. Our fictional team members include:
        </p>
        <ul className="list-disc list-inside mt-2">
          <li>
            <strong>John Doe</strong> - Lead Developer. With over 10 years of
            experience in web development, John is the driving force behind our
            technical vision.
          </li>
          <li>
            <strong>Jane Smith</strong> - UI/UX Designer. Jane brings a creative
            touch to our projects, ensuring a seamless and enjoyable user
            experience.
          </li>
          <li>
            <strong>Peter Jones</strong> - Data Scientist. Peter's expertise in
            data analysis helps us make informed decisions and optimize our
            services.
          </li>
        </ul>
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-2">Contact Us</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block mb-2">
              Message
            </label>
            <textarea
              id="message"
              className="w-full p-2 border border-gray-300 rounded"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default AboutPage;
