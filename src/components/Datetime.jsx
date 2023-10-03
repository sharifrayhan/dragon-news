

const Datetime = () => {
    let getDate = new Date();
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let formattedDate = getDate.toLocaleDateString(undefined, options);
   
    
    
    return (
        <div>
            {formattedDate}
        </div>
    );
};

export default Datetime;