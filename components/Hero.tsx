import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  return (
    <motion.div
      className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-background before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-primary/20 after:via-primary/20 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-primary/50 before:dark:opacity-10 after:dark:from-primary/50 after:dark:via-primary/90 after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]"
      initial={{ opacity: 0, scale: 0.4 }}
      animate={{ opacity: 1, scale: [0.4, 1.2, 1] }}
      transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}
    >
      <Image
        src="/1tai-logo/Logo/PNGs/logo-full--512px.png"
        alt="1tai.co Logo"
        width={200}
        height={200}
      />
    </motion.div>
  );
}
