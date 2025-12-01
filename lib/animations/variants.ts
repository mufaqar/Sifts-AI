export const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const staggerChildren = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};
