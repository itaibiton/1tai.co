import { motion } from 'framer-motion';

export default function Header() {
  return (
    <motion.div
      className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <p className="fixed left-0 top-0 flex w-full justify-center border-b border-border bg-gradient-to-b from-muted/50 pb-6 pt-8 backdrop-blur-2xl dark:border-border dark:bg-background/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-secondary lg:p-4 lg:dark:bg-secondary/30">
        Get ready for something amazing...
      </p>
      <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-background via-background dark:from-background dark:via-background lg:static lg:size-auto lg:bg-none">
        <a
          className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
          href="https://1tai.co"
          target="_blank"
          rel="noopener noreferrer"
        >
          By 1tai
        </a>
      </div>
    </motion.div>
  );
}
