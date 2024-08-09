import React from 'react';
import Paragraph from './common/Paragraph';
import parse from 'html-react-parser';
import Button from './common/Button';
import Input from './Input';

const FooterSection = () => {
    const logo = "/icons/logo.svg";
    const paragraph = "In today's data-driven world, information is your most valuable asset. But what happens when that information is locked away in complex documents, unstructured data, or legacy formats? Enter <strong style='font-weight: 700; color: black;'>Lucidis.ai</strong>, where data is at the heart of everything we do. Lucidis.ai – your key to unlocking the full potential of your organization's data.";
    const links1 = [
        { href: "#", text: "Home" },
        { href: "#", text: "About Us" },
        { href: "#", text: "Services" },
        { href: "#", text: "Contact" },
        { href: "#", text: "Privacy Policy" },
        { href: "#", text: "Terms of Service" },
        { href: "#", text: "FAQ" },
        { href: "#", text: "Blog" }
    ];
    const links2 = [
        { href: "#", text: "Documentation" },
        { href: "#", text: "API Reference" },
        { href: "#", text: "Support" },
        { href: "#", text: "Partners" },
        { href: "#", text: "Affiliate Program" },
        { href: "#", text: "Careers" },
        { href: "#", text: "Sitemap" },
        { href: "#", text: "Events" }
    ];
    const newsletterHeading = "Newsletter";

    const handleSubscribe = (e) => {
        e.preventDefault();
        console.log('Subscribed');
    };

    return (
        <footer className="w-full text-black pt-12">
            {/* First Section */}
            <div className="container mx-auto flex flex-col md:flex-row justify-between mb-8">
                {/* Column 1 */}
                <div className="flex-1 flex flex-col mb-8 md:mb-0">
                    <img src={logo} alt="Company Logo" className="mb-4 w-32" />
                    <Paragraph variant="sm" >
                        {parse(paragraph)}
                    </Paragraph>


                </div>

                {/* Column 2 */}
                <div className="flex-1 flex flex-col mb-8 md:mb-0 ml-16">
                    <h3 className="mb-4 text-gray font-bold">Quick Links</h3>
                    {links1.map((link, index) => (
                        <a key={index} href={link.href} className="mb-2 font-medium">
                            {link.text}
                        </a>
                    ))}
                </div>

                {/* Column 3 */}
                <div className="flex-1 flex flex-col mb-8 md:mb-0">
                    <h3 className="mb-4  text-gray font-bold">Resources</h3>
                    {links2.map((link, index) => (
                        <a key={index} href={link.href} className="mb-2 font-medium">
                            {link.text}
                        </a>
                    ))}
                </div>

                {/* Column 4 */}
                <div className="flex-1 flex flex-col mb-8 md:mb-0">
                    <h3 className="mb-4  text-gray font-bold">{newsletterHeading}</h3>
                    <form onSubmit={handleSubscribe} className='flex flex-col gap-4'>
                        <Input
                            type="text"
                            placeholder="Enter your text"
                            value={""}
                            onChange={() => {}}
                        />
                        <Button variant="primary">Subscribe Now</Button>
                    </form>
                </div>
            </div>

            {/* Second Section */}
            <div className="border-t-slate border-t py-8">
                <p className="text-center font-medium">© Copyright 2022, All Rights Reserved by Lucidis.ai</p>
            </div>
        </footer>
    );
};

export default FooterSection;
