import { motion } from 'framer-motion';

export default function Grid() {
  return (
    <motion.div
      className="absolute inset-0 z-[-2] bg-background bg-center bg-[linear-gradient(to_right,oklch(from_var(--foreground)_l_c_h_/_10%)_1px,transparent_1px),linear-gradient(to_bottom,oklch(from_var(--foreground)_l_c_h_/_10%)_1px,transparent_1px)] bg-[size:16rem_16rem]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.5 }}
      transition={{ duration: 2, delay: 1 }}
    />
  );
}
