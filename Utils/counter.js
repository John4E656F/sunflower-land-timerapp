export default function counter(interval, value, setValue) {
  interval = setTimeout(() => {
    setValue(value - 1);
  }, 1000);
}
