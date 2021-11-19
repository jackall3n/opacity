import { add, differenceInMilliseconds, Duration } from 'date-fns';

function set(from: Date, to: Date) {
  const now = new Date();
  const total = differenceInMilliseconds(to, from);
  const current = differenceInMilliseconds(to, now);

  const opacity = Math.min(Math.max(current / total, 0), 1);

  window.document.body.style.opacity = opacity.toFixed(5);
  // window.document.body.style.transition = "opacity 0.5s linear";

  return opacity === 0;
}

export function enable(from: Date, to: Duration | Date, animated?: boolean) {
  if (typeof window === 'undefined') {
    return;
  }

  window.document.body.style.opacity = "0";

  let animation: number;

  function update() {
    const finished = set(from, to instanceof Date ? to : add(from, to))

    if (!animated || finished) {
      return;
    }

    animation = window.requestAnimationFrame(update);
  }

  update()

  return () => {
    if (animation !== undefined) {
      cancelAnimationFrame(animation)
    }
  }
}

export default enable;
