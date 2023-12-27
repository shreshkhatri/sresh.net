import dayjs from 'dayjs';

export function formatDate(inputDateString:string|null) {
    // Parse the input date string
    const parsedDate = dayjs(inputDateString);
  
    // Format the date in 'MMMM, YYYY' format
    const formattedDate = parsedDate.format('MMM, YYYY');
    return formattedDate;
  }