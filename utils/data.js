import bcrypt from 'bcryptjs';
const data = {
  users: [
    {
      name: 'John',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Jane',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: 'Promax 40',
      slug: 'promax-40',
      category: 'Running',
      image: '/images/shoe1.png',
      price: 95,
      brand: 'EliteKicks',
      rating: 0,
      numReviews: 0,
      countInStock: 20,
      description:
        'Lightweight running shoe with excellent traction and bounce',
      featuredImage: '/images/shoe1-feature.png',
      isFeatured: true,
    },
    {
      name: 'Airwave Extreme',
      slug: 'airwave-extreme',
      category: 'Running',
      image: '/images/shoe2.png',
      price: 70,
      brand: 'Grimsby',
      rating: 0,
      numReviews: 0,
      countInStock: 20,
      description:
        'Uses adaptive foam technology to reduce fatigue and boost performance',
      featuredImage: '/images/shoe2-feature.png',
      isFeatured: true,
    },
    {
      name: 'Floatstep 3',
      slug: 'floatstep-3',
      category: 'Training',
      image: '/images/shoe3.png',
      price: 80,
      brand: 'Apollo',
      rating: 0,
      numReviews: 0,
      countInStock: 20,
      description:
        'Harnesses anti-gravity technology to physically make you lighter than air',
    },
    {
      name: 'Xtraflex Pro',
      slug: 'xtraflex-pro',
      category: 'Lifestyle',
      image: '/images/shoe4.png',
      price: 75,
      brand: 'EliteKicks',
      rating: 0,
      numReviews: 0,
      countInStock: 20,
      description:
        'Molded with stress-tested carbon fiber polymers to form fit your foot and enhance comfort',
      featuredImage: '/images/shoe4-feature.png',
      isFeatured: true,
    },
    {
      name: 'Wild Trek 6',
      slug: 'wild-trek-6',
      category: 'Training',
      image: '/images/shoe5.png',
      price: 70,
      brand: 'Apollo',
      rating: 0,
      numReviews: 0,
      countInStock: 20,
      description:
        'Titanium alloy enhanced sole improves durability and reduces drag',
    },
    {
      name: 'Vintage Renewed',
      slug: 'vintage-renewed',
      category: 'Lifestyle',
      image: '/images/shoe6.png',
      price: 55,
      brand: 'Grimsby',
      rating: 0,
      numReviews: 0,
      countInStock: 20,
      description:
        'A fresh new take on old style, revived with new advanced materials and manufacturing techniques',
    },
  ],
};
export default data;
