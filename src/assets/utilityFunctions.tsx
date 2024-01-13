import moment from 'moment';

export function formatDate(inputDateString:string|null) {
    // Parse the input date string
    const parsedDate = moment(inputDateString);
  
    // Format the date in 'MMMM, YYYY' format
    const formattedDate = parsedDate.format('MMM, YYYY');
    return formattedDate;
  }