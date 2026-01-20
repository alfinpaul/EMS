import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 border-t py-4 mt-8">
      <div className="container mx-auto px-6 text-center">
        <p className="text-gray-600 text-sm">
          © {currentYear} EmployeeHub. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;