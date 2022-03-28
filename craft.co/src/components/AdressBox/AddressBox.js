import "./AddressBox.css"

function AddressBox({item,i}) {
    return(
        <div className="address__box">
            <h1 className='comp__name'>Company Name : {item.company_name}</h1>
            <p className="comp__loc">Location :  {item.location.replace(/[{} "]/g,"")}</p>
        </div>
    )
}

export default AddressBox