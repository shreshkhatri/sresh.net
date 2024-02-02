import moment from "moment";
import _ from "lodash";

export function formatDate(inputDateString: string | null) {
  // Parse the input date string
  const parsedDate = moment(inputDateString);

  // Format the date in 'MMMM, YYYY' format
  const formattedDate = parsedDate.format("MMM, YYYY");
  return formattedDate;
}



export function CapitalizeWords(words: string) {
  const items: string[] | [] = (words.length > 0 && words.split(" ")) || [];

  if (_.isEmpty(items)) {
    return "";
  }

  let capitalizedWords = "";

  return items.reduce((previousValue: string, currentValue: string) => {
    return (
      previousValue +
      currentValue.charAt(0).toUpperCase() +
      currentValue.substring(1) +
      " "
    );
  }, capitalizedWords);
}
