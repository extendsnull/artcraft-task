import Countdown from 'countdown-js';
import { pluralize } from 'numeralize-ru';

const formatter = new Intl.NumberFormat('ru', {
  minimumIntegerDigits: 2,
});
const daysPlural = ['день', 'дня', 'дней'];

const timers = document.querySelectorAll('[data-timer]');

timers.forEach(timer => {
  const end = new Date(timer.dataset.timer).getTime();
  Countdown.timer(end, timeLeft => {
    const { days, hours, minutes, seconds } = timeLeft;

    const formatType = timer.dataset.format;
    switch (formatType) {
      case 'days':
        timer.textContent = `${formatter.format(days)} ${pluralize(
          days,
          ...daysPlural
        )}`;
        break;

      case 'days-h-m':
        timer.textContent = `${formatter.format(days)} ${pluralize(
          days,
          ...daysPlural
        )} ${formatter.format(hours)}ч. ${formatter.format(minutes)}м.`;
        break;

      case 'time':
        timer.textContent = `${formatter.format(hours)}:${formatter.format(
          minutes
        )}:${formatter.format(seconds)}`;
        break;

      default:
        timer.textContent = `${formatter.format(days)} ${pluralize(
          days,
          ...daysPlural
        )} ${formatter.format(hours)}ч. ${formatter.format(
          minutes
        )}м. ${formatter.format(seconds)}c.`;
    }
  });
});
