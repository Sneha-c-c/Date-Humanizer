const months = ["January" , "February" , "March", "April" , "May" , "June" ,
                        "July", "August" ,"September", "October", "November", "December"];


function toHumanDate(input){
    try {
        const date = new Date(input);
        if(isNaN(date.getTime())) throw new Error("Invalid date");
        const day = date.getDate();
        const month = months[date.getMonth()];
        const year = date.getFullYear();

        return `${day}  ${month}  ${year}`;
    }
    catch(error){
        console.log(error.message);
        return "Invalid Date";
    }
}

module.exports = {
    toHumanDate
};
