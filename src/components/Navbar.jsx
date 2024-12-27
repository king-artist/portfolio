import React from 'react'

const Navbar = () => {
  return (
    <div className='fixed z-[999] w-full px-20 py-8 flex items-center justify-between'>
        <div className="logo font-roboto text-2xl font-bold text-white ">
            Reratul Azime
        </div>

        <div className="links flex gap-10">
    {[
        { name: 'Home', href: '/' },
        { name: 'About', href: './About.jsx' },
        { name: 'Services', href: '/services' },
        { name: 'Contact', href: '/contact' },
    ].map((link, index) => (
        <a
            key={index}
            href={link.href}
            className={`text-lg font-semibold ${index === 3 && "ml-32"}`}
        >
            {link.name}
        </a>
    ))}
</div>

    </div>
  )
}

export default Navbar