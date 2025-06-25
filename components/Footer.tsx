import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <motion.div
      className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 1 }}
    >
      <a
        href="#"
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-border hover:bg-accent hover:dark:border-border hover:dark:bg-accent/50"
      >
        <h2 className="mb-3 text-2xl font-semibold">
          Websites
        </h2>
        <p className="m-0 max-w-[30ch] text-sm opacity-50">
          Stunning, modern websites that convert.
        </p>
      </a>

      <a
        href="#"
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-border hover:bg-accent hover:dark:border-border hover:dark:bg-accent/50"
      >
        <h2 className="mb-3 text-2xl font-semibold">
          Web Apps
        </h2>
        <p className="m-0 max-w-[30ch] text-sm opacity-50">
          Powerful and scalable web applications.
        </p>
      </a>

      <a
        href="#"
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-border hover:bg-accent hover:dark:border-border hover:dark:bg-accent/50"
      >
        <h2 className="mb-3 text-2xl font-semibold">
          Video Edits
        </h2>
        <p className="m-0 max-w-[30ch] text-sm opacity-50">
          Creative and professional video editing.
        </p>
      </a>

      <a
        href="#"
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-border hover:bg-accent hover:dark:border-border hover:dark:bg-accent/50"
      >
        <h2 className="mb-3 text-2xl font-semibold">
          AI Services
        </h2>
        <p className="m-0 max-w-[30ch] text-sm opacity-50">
          Cutting-edge AI solutions for your business.
        </p>
      </a>
    </motion.div>
  );
}
