let count = 0;

export function lockScroll() {
  if (++count === 1) document.body.style.overflow = "hidden";
}

export function unlockScroll() {
  if (--count <= 0) {
    count = 0;
    document.body.style.overflow = "";
  }
}
