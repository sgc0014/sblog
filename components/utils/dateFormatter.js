

 //format date => 13 July,2020

const formatFunction = new Intl.DateTimeFormat("en-GB", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  });

  const dateFormatter = (date) => {
    
    return formatFunction.format(Date.parse(date))

  } 

  export default dateFormatter