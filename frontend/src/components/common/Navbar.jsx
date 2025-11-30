import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
    Menu, X, ArrowUpRight, ChevronDown,
    Car, HardHat, Stethoscope, Fan, HeartPulse, Shield, Scale, Home, Wrench,
    Plane, Hammer, Brush, Sofa, Film, Truck, Cog,
    Utensils, Sprout, Dumbbell, ChefHat, Brain, Coffee, Flower2, Pill,
    Baby, Construction, Flame, Wallet, Bug, Scissors, PawPrint,
    GraduationCap, Gem, ShoppingBag, Bed, TreeDeciduous, Camera, Move, Leaf, MapPin
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../../context/AuthContext';
import { LogOut, User as UserIcon, LayoutDashboard, Settings } from 'lucide-react';
import { PERMISSION_IDS } from '../../utils/permissions';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [expandedMobileCategories, setExpandedMobileCategories] = useState({});
    const { user, logout, hasPermission } = useAuth();

    const [leaveTimeout, setLeaveTimeout] = useState(null);

    const handleMouseEnter = (name) => {
        if (leaveTimeout) clearTimeout(leaveTimeout);
        setActiveDropdown(name);
    };

    const toggleMobileCategory = (categoryTitle) => {
        setExpandedMobileCategories(prev => ({
            ...prev,
            [categoryTitle]: !prev[categoryTitle]
        }));
    };

    const handleMouseLeave = () => {
        const timeout = setTimeout(() => {
            setActiveDropdown(null);
        }, 200);
        setLeaveTimeout(timeout);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const megaMenuData = {
        'Case Studies': [
            {
                title: 'Popular Markets',
                items: [
                    { name: 'Automotive SEO', slug: 'automotive-seo', icon: <Car size={16} />, color: 'text-green-500' },
                    { name: 'Construction SEO', slug: 'construction-seo', icon: <HardHat size={16} />, color: 'text-blue-500' },
                    { name: 'Dental SEO', slug: 'dental-seo', icon: <Stethoscope size={16} />, color: 'text-emerald-500' },
                    { name: 'HVAC SEO', slug: 'hvac-seo', icon: <Fan size={16} />, color: 'text-cyan-500' },
                    { name: 'Healthcare SEO', slug: 'healthcare-seo', icon: <HeartPulse size={16} />, color: 'text-red-500' },
                    { name: 'Insurance SEO', slug: 'insurance-seo', icon: <Shield size={16} />, color: 'text-indigo-500' },
                    { name: 'Lawyer SEO', slug: 'lawyer-seo', icon: <Scale size={16} />, color: 'text-slate-500' },
                    { name: 'Real Estate SEO', slug: 'real-estate-seo', icon: <Home size={16} />, color: 'text-orange-500' },
                    { name: 'Plumber SEO', slug: 'plumbing-seo', icon: <Wrench size={16} />, color: 'text-blue-500' },
                ]
            },
            {
                title: 'Automobile & Home',
                items: [
                    { name: 'Aviation SEO', slug: 'aviation-seo', icon: <Plane size={16} />, color: 'text-sky-500' },
                    { name: 'Home Remodeling SEO', slug: 'home-remodeling-seo', icon: <Hammer size={16} />, color: 'text-amber-600' },
                    { name: 'Cleaning SEO', slug: 'cleaning-seo', icon: <Brush size={16} />, color: 'text-blue-400' },
                    { name: 'Furniture SEO', slug: 'furniture-seo', icon: <Sofa size={16} />, color: 'text-orange-400' },
                    { name: 'Entertainment SEO', slug: 'entertainment-seo', icon: <Film size={16} />, color: 'text-purple-500' },
                    { name: 'Logistic SEO', slug: 'logistic-seo', icon: <Truck size={16} />, color: 'text-blue-600' },
                    { name: 'Appliance Repair SEO', slug: 'appliance-repair-seo', icon: <Cog size={16} />, color: 'text-gray-500' },
                ]
            },
            {
                title: 'Food & Health',
                items: [
                    { name: 'Restaurant SEO', slug: 'restaurant-seo', icon: <Utensils size={16} />, color: 'text-red-400' },
                    { name: 'Agriculture SEO', slug: 'agriculture-seo', icon: <Sprout size={16} />, color: 'text-green-600' },
                    { name: 'Fitness SEO', slug: 'fitness-seo', icon: <Dumbbell size={16} />, color: 'text-blue-500' },
                    { name: 'Kitchen Remodeler SEO', slug: 'kitchen-remodeler-seo', icon: <ChefHat size={16} />, color: 'text-slate-400' },
                    { name: 'Therapist SEO', slug: 'therapist-seo', icon: <Brain size={16} />, color: 'text-indigo-400' },
                    { name: 'Catering SEO', slug: 'catering-seo', icon: <Coffee size={16} />, color: 'text-amber-500' },
                    { name: 'Yoga SEO', slug: 'yoga-seo', icon: <Flower2 size={16} />, color: 'text-pink-400' },
                    { name: 'Pharma SEO', slug: 'pharma-seo', icon: <Pill size={16} />, color: 'text-blue-400' },
                ]
            },
            {
                title: 'Service Sector',
                items: [
                    { name: 'Daycare SEO', slug: 'daycare-seo', icon: <Baby size={16} />, color: 'text-pink-500' },
                    { name: 'Contractors SEO', slug: 'contractors-seo', icon: <Construction size={16} />, color: 'text-orange-500' },
                    { name: 'Fire Protection SEO', slug: 'fire-protection-seo', icon: <Flame size={16} />, color: 'text-red-500' },
                    { name: 'Financial SEO', slug: 'financial-seo', icon: <Wallet size={16} />, color: 'text-green-500' },
                    { name: 'Pest Control SEO', slug: 'pest-control-seo', icon: <Bug size={16} />, color: 'text-amber-700' },
                    { name: 'Salons SEO', slug: 'salons-seo', icon: <Scissors size={16} />, color: 'text-purple-400' },
                    { name: 'Veterinary SEO', slug: 'veterinary-seo', icon: <PawPrint size={16} />, color: 'text-orange-400' },
                ]
            },
            {
                title: 'Others',
                items: [
                    { name: 'Education SEO', slug: 'education-seo', icon: <GraduationCap size={16} />, color: 'text-blue-500' },
                    { name: 'Jewelry SEO', slug: 'jewelry-seo', icon: <Gem size={16} />, color: 'text-yellow-500' },
                    { name: 'Retail SEO', slug: 'retail-seo', icon: <ShoppingBag size={16} />, color: 'text-red-500' },
                    { name: 'Hospitality SEO', slug: 'hospitality-seo', icon: <Bed size={16} />, color: 'text-blue-700' },
                    { name: 'Tree Service SEO', slug: 'tree-service-seo', icon: <TreeDeciduous size={16} />, color: 'text-green-500' },
                    { name: 'Photography SEO', slug: 'photography-seo', icon: <Camera size={16} />, color: 'text-slate-600' },
                    { name: 'Movers SEO', slug: 'movers-seo', icon: <Move size={16} />, color: 'text-blue-400' },
                    { name: 'Cannabis SEO', slug: 'cannabis-seo', icon: <Leaf size={16} />, color: 'text-green-400' },
                    { name: 'Travel SEO', slug: 'travel-seo', icon: <MapPin size={16} />, color: 'text-blue-500' },
                ]
            }
        ]
    };

    const navLinks = [
        { name: 'Services', path: '/services' },
        { name: 'Pricing', path: '/pricing' },
        { name: 'Case Studies', path: '/case-studies', hasDropdown: true },
        { name: 'SEO Audit', path: '/audit' },
        { name: 'About', path: '/about' },
    ];

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${isScrolled ? 'py-3 md:py-4' : 'py-4 md:py-8'}`}>
            <div className="container mx-auto px-4 md:px-6">
                <div className={`flex items-center justify-between px-4 md:px-8 py-3 md:py-4 rounded-full transition-all duration-700 relative ${isScrolled ? 'glass shadow-xl shadow-indigo-500/5 backdrop-blur-3xl border-black/5' : 'bg-transparent border-transparent'}`}>

                    {/* Logo */}
                    <NavLink to="/" className="flex items-center gap-2 md:gap-3 shrink-0">
                        <div className="w-8 h-8 md:w-9 md:h-9 bg-[#0071e3] text-white rounded-full flex items-center justify-center font-black text-base md:text-lg">
                            S
                        </div>
                        <span className={`text-lg md:text-xl font-bold tracking-tight text-[#1d1d1f]`}>SeoIndia</span>
                    </NavLink>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-10">
                        {navLinks.map((link) => (
                            <div
                                key={link.name}
                                className="relative py-2"
                                onMouseEnter={() => link.hasDropdown ? handleMouseEnter(link.name) : setActiveDropdown(null)}
                                onMouseLeave={handleMouseLeave}
                            >
                                <NavLink
                                    to={link.path}
                                    className={({ isActive }) =>
                                        `text-[13px] font-semibold tracking-wide uppercase transition-all duration-300 flex items-center gap-1.5 ${isActive || (link.hasDropdown && activeDropdown === link.name) ? 'text-[#0071e3]' : 'text-[#86868b]'}`
                                    }
                                >
                                    {link.name}
                                    {link.hasDropdown && <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === link.name ? 'rotate-180' : ''}`} />}
                                </NavLink>
                            </div>
                        ))}

                        {user ? (
                            <div className="flex items-center gap-4 border-l border-gray-100 pl-4 py-2">
                                <div className="relative" onMouseEnter={() => handleMouseEnter('UserMenu')} onMouseLeave={handleMouseLeave}>
                                    <button className="flex items-center gap-2 group">
                                        <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 border border-blue-100 group-hover:bg-blue-600 group-hover:text-white transition-all overflow-hidden">
                                            {user.profileImage && user.profileImage !== 'default_profile.png' ? (
                                                <img
                                                    src={user.profileImage.startsWith('http') ? user.profileImage : `${import.meta.env.VITE_API_URL.replace('/api', '')}/public/${user.profileImage}`}
                                                    alt={user.name}
                                                    className="w-full h-full object-cover"
                                                />
                                            ) : (
                                                <UserIcon size={16} />
                                            )}
                                        </div>
                                        <ChevronDown size={14} className={`text-gray-400 group-hover:text-gray-600 transition-all ${activeDropdown === 'UserMenu' ? 'rotate-180' : ''}`} />
                                    </button>

                                    <AnimatePresence>
                                        {activeDropdown === 'UserMenu' && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 10 }}
                                                className="absolute top-full right-0 mt-2 w-48 bg-white rounded-2xl shadow-2xl border border-gray-100 p-2 pointer-events-auto"
                                            >
                                                <div className="px-4 py-3 border-b border-gray-50 mb-2">
                                                    <p className="text-sm font-black text-gray-900 truncate">{user.name}</p>
                                                    <p className="text-[10px] font-medium text-gray-400 truncate tracking-tight">{user.email}</p>
                                                </div>
                                                {PERMISSION_IDS.some(perm => hasPermission(perm)) && (
                                                    <Link to="/admin" className="flex items-center gap-3 px-4 py-2 text-[13px] font-bold text-indigo-600 hover:bg-indigo-50 rounded-xl transition-all mb-1">
                                                        <Shield size={14} /> Admin Dashboard
                                                    </Link>
                                                )}
                                                <Link to="/profile" className="flex items-center gap-3 px-4 py-2 text-[13px] font-bold text-gray-600 hover:bg-gray-50 hover:text-blue-600 rounded-xl transition-all">
                                                    <LayoutDashboard size={14} /> My Audits
                                                </Link>
                                                <Link to="/settings" className="flex items-center gap-3 px-4 py-2 text-[13px] font-bold text-gray-600 hover:bg-gray-50 hover:text-blue-600 rounded-xl transition-all">
                                                    <Settings size={14} /> Settings
                                                </Link>
                                                <button onClick={logout} className="w-full flex items-center gap-3 px-4 py-2 text-[13px] font-bold text-red-600 hover:bg-red-50 rounded-xl transition-all">
                                                    <LogOut size={14} /> Logout
                                                </button>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </div>
                        ) : (
                            <div className="flex items-center gap-4 border-l border-gray-100 pl-4 py-2">
                                <Link to="/login" className="text-[13px] font-black uppercase tracking-widest text-[#86868b] hover:text-[#1d1d1f] transition-all">
                                    Login
                                </Link>
                                <Link to="/signup" className="premium-button-primary scale-90 px-8 py-2.5">
                                    Join Free <ArrowUpRight size={14} />
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* Mobile Toggle */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="p-2 text-[#1d1d1f]"
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Desktop Mega Menu - Rendered at Nav Level for Full Width Alignment */}
            <AnimatePresence>
                {activeDropdown && megaMenuData[activeDropdown] && (
                    <motion.div
                        initial={{ opacity: 0, y: 15, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 15, scale: 0.98 }}
                        transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                        className="absolute top-full left-0 w-full flex justify-center pt-4 pb-8 pointer-events-none"
                        onMouseEnter={() => handleMouseEnter(activeDropdown)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div className="w-[75vw] max-w-[950px] bg-white rounded-[32px] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] border border-[#000000]/[0.02] p-6 md:p-8 backdrop-blur-2xl pointer-events-auto relative">
                            {/* Content */}
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-10">
                                {megaMenuData[activeDropdown].map((category) => (
                                    <div key={category.title} className="flex flex-col">
                                        <h3 className="text-[#0071e3] font-bold text-[10px] mb-6 tracking-[0.2em] uppercase opacity-80">{category.title}</h3>
                                        <div className="space-y-4">
                                            {category.items.map((item) => (
                                                <Link
                                                    key={item.name}
                                                    to={`/case-studies/${item.slug}`}
                                                    className="flex items-center gap-3 group/item cursor-pointer transition-all duration-300"
                                                >
                                                    <div className={`p-1.5 rounded-lg bg-gray-50/80 border border-black/[0.02] group-hover/item:bg-white group-hover/item:border-[#0071e3]/20 group-hover/item:shadow-md group-hover/item:shadow-indigo-500/5 transition-all duration-500 ${item.color}`}>
                                                        {item.icon}
                                                    </div>
                                                    <span className="text-[12px] font-semibold text-[#1d1d1f]/70 group-hover/item:text-[#1d1d1f] group-hover/item:translate-x-1 transition-all duration-300 whitespace-nowrap">
                                                        {item.name}
                                                    </span>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Decorative top nub/arrow - nicely blended */}
                            <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-t border-l border-black/[0.02] rotate-45" />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed inset-0 z-40 bg-white md:hidden overflow-y-auto"
                    >
                        <div className="min-h-full flex flex-col p-8 pt-24">
                            <div className="flex flex-col gap-8 mb-12">
                                {navLinks.map((link, i) => (
                                    <div key={link.name}>
                                        <NavLink
                                            to={link.path}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className="text-4xl font-bold tracking-tighter text-[#1d1d1f] hover:text-[#0071e3] transition-colors"
                                        >
                                            {link.name}
                                        </NavLink>

                                        {link.hasDropdown && (
                                            <div className="mt-8 space-y-4">
                                                {megaMenuData[link.name].map(cat => (
                                                    <div key={cat.title} className="overflow-hidden">
                                                        <button
                                                            onClick={() => toggleMobileCategory(cat.title)}
                                                            className="w-full flex items-center justify-between py-4 group/cat"
                                                        >
                                                            <h4 className={`text-base font-bold transition-colors ${expandedMobileCategories[cat.title] ? 'text-[#0071e3]' : 'text-[#1d1d1f]'}`}>
                                                                {cat.title}
                                                            </h4>
                                                            <ChevronDown
                                                                size={18}
                                                                className={`text-[#86868b] transition-transform duration-500 ${expandedMobileCategories[cat.title] ? 'rotate-180' : ''}`}
                                                            />
                                                        </button>

                                                        <AnimatePresence>
                                                            {expandedMobileCategories[cat.title] && (
                                                                <motion.div
                                                                    initial={{ height: 0, opacity: 0 }}
                                                                    animate={{ height: 'auto', opacity: 1 }}
                                                                    exit={{ height: 0, opacity: 0 }}
                                                                    transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                                                                >
                                                                    <div className="grid grid-cols-1 gap-4 pt-2 pb-6 pl-4 border-l border-gray-100 ml-1">
                                                                        {cat.items.map(item => (
                                                                            <Link
                                                                                key={item.name}
                                                                                to={`/case-studies/${item.slug}`}
                                                                                className="flex items-center gap-4 py-2 group/mobile active:scale-95 transition-transform"
                                                                                onClick={() => setIsMobileMenuOpen(false)}
                                                                            >
                                                                                <div className={`p-2 rounded-xl bg-gray-50 border border-black/[0.02] ${item.color}`}>
                                                                                    {item.icon}
                                                                                </div>
                                                                                <span className="text-[15px] font-semibold text-[#1d1d1f]/60 active:text-[#0071e3] transition-colors">{item.name}</span>
                                                                            </Link>
                                                                        ))}
                                                                    </div>
                                                                </motion.div>
                                                            )}
                                                        </AnimatePresence>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-col gap-4 mt-auto">
                                {user ? (
                                    <>
                                        <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-[30px]">
                                            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-black text-lg overflow-hidden border border-blue-200">
                                                {user.profileImage && user.profileImage !== 'default_profile.png' ? (
                                                    <img
                                                        src={user.profileImage.startsWith('http') ? user.profileImage : `${import.meta.env.VITE_API_URL.replace('/api', '')}/public/${user.profileImage}`}
                                                        alt={user.name}
                                                        className="w-full h-full object-cover"
                                                    />
                                                ) : (
                                                    user.name.charAt(0)
                                                )}
                                            </div>
                                            <div>
                                                <p className="font-black text-gray-900 text-lg">{user.name}</p>
                                                <p className="text-sm font-medium text-gray-400">{user.email}</p>
                                            </div>
                                        </div>
                                        {PERMISSION_IDS.some(perm => hasPermission(perm)) && (
                                            <Link to="/admin" className="w-full text-center py-5 bg-indigo-600 text-white rounded-[25px] font-black uppercase tracking-widest text-sm shadow-xl shadow-indigo-500/20" onClick={() => setIsMobileMenuOpen(false)}>
                                                Admin Dashboard
                                            </Link>
                                        )}
                                        <Link to="/profile" className="w-full text-center py-5 bg-gray-100 rounded-[25px] font-black uppercase tracking-widest text-sm" onClick={() => setIsMobileMenuOpen(false)}>
                                            My Dashboard
                                        </Link>
                                        <button onClick={() => { logout(); setIsMobileMenuOpen(false); }} className="w-full py-5 bg-red-50 text-red-600 rounded-[25px] font-black uppercase tracking-widest text-sm">
                                            Logout
                                        </button>
                                    </>
                                ) : (
                                    <>
                                        <NavLink to="/login" onClick={() => setIsMobileMenuOpen(false)} className="w-full text-center py-5 border border-gray-200 rounded-[25px] font-black uppercase tracking-widest text-sm text-gray-600">
                                            Login
                                        </NavLink>
                                        <NavLink to="/signup" onClick={() => setIsMobileMenuOpen(false)} className="premium-button-primary text-xl px-12 py-5">
                                            Join Free
                                        </NavLink>
                                    </>
                                )}
                            </div>
                        </div>
                        <button
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="absolute top-10 right-10 p-2 text-[#1d1d1f] glass rounded-full"
                        >
                            <X size={32} />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
