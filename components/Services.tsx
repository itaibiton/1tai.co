import { motion } from 'framer-motion';

const services = [
  {
    title: "Websites",
    description: "Stunning, modern websites that convert.",
  },
  {
    title: "Web Apps",
    description: "Powerful and scalable web applications.",
  },
  {
    title: "Video Edits",
    description: "Creative and professional video editing.",
  },
  {
    title: "AI Services",
    description: "Cutting-edge AI solutions for your business.",
  },
];

export default function Services() {
  return (
    <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
      {services.map((service, index) => (
        <motion.a
          key={service.title}
          href="#"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-border hover:bg-accent hover:dark:border-border hover:dark:bg-accent/50"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <h2 className="mb-3 text-2xl font-semibold">{service.title}</h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            {service.description}
          </p>
        </motion.a>
      ))}
    </div>
  );
}
