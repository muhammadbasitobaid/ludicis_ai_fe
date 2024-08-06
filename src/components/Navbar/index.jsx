import React from 'react';
import Image from '../common/Image';
import Link from '../common/Link';
import Button from '../common/Button';
import Container from '../common/Container';
import Divider from '../common/Divider';

const Navbar = () => {
    return (
        <Container sticky>
            <nav className="flex items-center justify-between py-5 px-6 border border-lightGray rounded-full bg-white/30 bg-opacity-70 backdrop-blur-sm my-4">
                {/* Logo Section */}
                <div className="flex items-center">
                    <Image src="/icons/logo.svg" alt="Company Logo" width="40" height="40" />
                </div>

                {/* Links Section */}
                <div className="flex space-x-4">
                    <Link text="Product" href="#product" />
                    <Link text="Use Cases" href="#use-cases" />
                    <Link text="Resources" href="#resources" />
                    <Link text="Pricing" href="#pricing" />
                    <Divider variant="vertical" />
                    <Link text="Dashboard" href="#dashboard" />
                    <Link text="Extract" href="#extract" />
                </div>

                {/* Buttons Section */}
                <div className="flex space-x-2">
                    <Button variant="secondary">Log In</Button>
                    <Button variant="primary">Sign Up</Button>
                </div>
            </nav>
        </Container>
    );
};

export default Navbar;
