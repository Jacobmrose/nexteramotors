export const navLinks = [
  {
    id: 1,
    name: 'Next Era Motors',
    href: '/',
  },
  {
    id: 2,
    name: 'New',
    href: '/new',
    dropdown: true,
    subItems: [
      { id: 'new1', name: 'Shop New Inventory', href: '/new/inventory' },
      { id: 'new2', name: 'Schedule Test Drive', href: '/new/test-drive' },
      { id: 'new3', name: 'New Vehicle Specials', href: '/new/specials' },
      { id: 'new4', name: 'Get Pre-Qualified', href: '/finance/pre-qualify' },
    ],
  },
  {
    id: 3,
    name: 'Shop Online',
    href: '/shoponline',
  },
  {
    id: 4,
    name: 'Used',
    href: '/used',
    dropdown: true,
    subItems: [
      { id: 'used1', name: 'Shop Used Inventory', href: '/used/inventory' },
      { id: 'used2', name: 'Certified Pre-Owned', href: '/used/certified' },
      { id: 'used3', name: 'Value Your Trade', href: '/tools/trade-in' },
      { id: 'used4', name: 'Used Car Specials', href: '/used/specials' },
    ],
  },
  {
    id: 5,
    name: 'Specials',
    href: '/specials',
  },
  {
    id: 6,
    name: 'Finance',
    href: '/finance',
    dropdown: true,
    subItems: [
      { id: 'finance1', name: 'Finance Center', href: '/finance' },
      { id: 'finance2', name: 'Apply for Financing', href: '/finance/apply' },
      {
        id: 'finance3',
        name: 'Payment Calculator',
        href: '/tools/payment-calculator',
      },
      {
        id: 'finance4',
        name: 'Credit Score Estimator',
        href: '/tools/credit-score',
      },
    ],
  },
  {
    id: 7,
    name: 'Service & Parts',
    href: '/service',
    dropdown: true,
    subItems: [
      { id: 'service1', name: 'Schedule Service', href: '/service/schedule' },
      { id: 'service2', name: 'Order Parts', href: '/service/order-parts' },
      { id: 'service3', name: 'Service Specials', href: '/service/specials' },
      { id: 'service4', name: 'Check Recalls', href: '/service/recalls' },
    ],
  },
  {
    id: 8,
    name: 'Tools',
    href: '/tools',
    dropdown: true,
    subItems: [
      {
        id: 'tools1',
        name: 'Car Payment Calculator',
        href: '/tools/payment-calculator',
      },
      { id: 'tools2', name: 'Trade-In Estimator', href: '/tools/trade-in' },
      {
        id: 'tools3',
        name: 'Fuel Savings Calculator',
        href: '/tools/fuel-savings',
      },
      {
        id: 'tools4',
        name: 'Loan & Lease Guide',
        href: '/tools/loan-lease-guide',
      },
    ],
  },
  {
    id: 9,
    name: 'About',
    href: '/about',
  },
  {
    id: 10,
    name: 'Contact',
    href: '/contact',
  },
]

export const clientReviews = [
  {
    id: 1,
    name: 'Sophia Reynolds',
    position: 'Automotive Enthusiast & Reviewer',
    img: 'assets/review1.png',
    review:
      'This is how car buying should be in the 21st century! The futuristic designs, the easy online application, and the personalized virtual consultations made the experience outstanding. Next Era Motors is ahead of its time!',
  },
  {
    id: 2,
    name: 'Michael Thompson',
    position: 'CEO of Velocity AI',
    img: 'assets/review2.png',
    review:
      'I’ve never experienced such an effortless way to reserve a vehicle. The futuristic models blew me away, and the ability to customize my car in real time was a game-changer. The team made financing quick and stress-free. 10/10 experience!',
  },
  {
    id: 3,
    name: 'David Lawson',
    position: 'Lead Engineer at FutureTech Labs',
    img: 'assets/review3.png',
    review:
      'The level of innovation at Next Era Motors is unreal! From the ultra-modern showroom experience to the AI-assisted purchasing process, everything felt smooth and intuitive. I can’t wait to drive my new EV once it’s released!',
  },
  {
    id: 4,
    name: 'Ryan Patel',
    position: 'Co-Founder of Quantum Mobility',
    img: 'assets/review4.png',
    review:
      'Next Era Motors made me feel like I was buying a car from the future. The entire process, from reserving my model to securing financing, took less than an hour. The interactive 3D previews are stunning and truly immersive!',
  },
]
