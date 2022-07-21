export default function sortingHealth(arr) {
  return arr.sort((prev, next) => next.health - prev.health);
}
