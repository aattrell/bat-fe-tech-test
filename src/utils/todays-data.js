export default function todaysData(reservations) {
  // const today = new Date();
  // let day = today.getDate();
  // let month = today.getMonth()+1;
  // const year = today.getFullYear();
  // if (day < 10) {
  //   day = '0' + day;
  // } 
  // if (month < 10) {
  //   month = '0' + month;
  // } 
  // const formattedDate = `${year}-${month}-${day}`;

  const mockDate = '2017-03-13'; // this is the only date in the json file

  const [ data ] = reservations && reservations.filter((reservation) => {
    return reservation.date === mockDate
  });

  return data;
};
