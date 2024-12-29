// app/landing/page.tsx
import { FaUser, FaBook, FaHeadset } from "react-icons/fa";

const LandingPage = () => {
  const cards = [
    { title: "User Management", link: "/users", icon: <FaUser size={36} /> },
    { title: "Posts Management", link: "/posts", icon: <FaBook size={36} /> },
    { title: "Customer Support Management", link: "/customersupport", icon: <FaHeadset size={36} /> },
  ];

  return (
    <div className="min-h-screen bg-black text-center text-white flex flex-col items-center justify-center">
      {/* Header */}
      <header className="mb-12">
        <h1 className="text-4xl font-bold text-gray-100">Maximus Dashboard</h1>
      </header>

      {/* Cards Section */}
      <div className="flex flex-wrap justify-center items-center gap-6 w-full px-4">
        {cards.map((card, index) => (
          <a
            key={index}
            href={card.link}
            className="flex flex-col justify-center items-center w-64 h-40 bg-black border border-white rounded-md shadow-lg hover:bg-white hover:border-cyan-300 hover:text-black transition duration-200"
          >
            {/* Icon */}
            <div className="mb-4">{card.icon}</div>
            {/* Text */}
            <h2 className="text-xl font-semibold">{card.title}</h2>
          </a>
        ))}
      </div>
    </div>
  );
};

export default LandingPage;
