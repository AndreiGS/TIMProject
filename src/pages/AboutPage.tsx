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
        <table className="min-w-full divide-y divide-gray-200 mt-4">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Role
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Description
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">John Doe</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">Lead Developer</div>
              </td>
              <td className="px-6 py-4">
                <div className="text-sm text-gray-500">With over 10 years of experience in web development, John is the driving force behind our technical vision.</div>
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">Jane Smith</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">UI/UX Designer</div>
              </td>
              <td className="px-6 py-4">
                <div className="text-sm text-gray-500">Jane brings a creative touch to our projects, ensuring a seamless and enjoyable user experience.</div>
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">Peter Jones</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">Data Scientist</div>
              </td>
              <td className="px-6 py-4">
                <div className="text-sm text-gray-500">Peter&#39;s expertise in data analysis helps us make informed decisions and optimize our services.</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AboutPage;
