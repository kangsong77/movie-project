export default function getDateFormat(releaseDate) {
  var d = new Date(releaseDate);
  var months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  return d.getDate() + ' ' + months[d.getMonth()];
}
