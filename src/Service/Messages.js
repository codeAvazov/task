export function Msg() {
  return [
    {
      title: "Shu vazifani korib bering",
      task: "2-topshiriq",
      size: "3.9 MB",
      type: "file",
      author: "user",
      date:
        new Date().toLocaleDateString() +
        " / " +
        new Date().getHours() +
        ":" +
        new Date().getMinutes(),
    },
    {
      title: "Mana shu faylad toliq korsatilgan",
      type: "file",
      task: "2-topshiriq.javobi",
      size: "5 MB",
      author: "Mentor",
      date:
        new Date().toLocaleDateString() +
        " / " +
        new Date().getHours() +
        ":" +
        new Date().getMinutes(),
    },
  ];
}
