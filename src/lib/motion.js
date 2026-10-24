export function enterProps(reduceMotion, { delay = 0, y = 20, duration = 0.8 } = {}) {
  if (reduceMotion) return {};
  return {
    initial: { opacity: 0, y },
    animate: { opacity: 1, y: 0 },
    transition: { duration, delay },
  };
}

export function revealProps(reduceMotion, { delay = 0, y = 20, x = 0, duration = 0.5 } = {}) {
  if (reduceMotion) return {};
  return {
    initial: { opacity: 0, y, x },
    whileInView: { opacity: 1, y: 0, x: 0 },
    transition: { duration, delay },
    viewport: { once: true },
  };
}
