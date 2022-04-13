import { useState, useEffect } from 'react'
import axios from 'axios'
import "./SearchCompany.css"
import AddressBox from '../AdressBox/AddressBox'
import NavBar from '../NavBar/NavBar'
import searchIcon from '../../searchbar.png'


function SearchCompany() {

    // let [data, setData] = useState([])
    // const [inputData, setInputData] = useState("")
    // const [details, setDetails] = useState([])

    // useEffect(() => {
    //     const fetch = async () => {
    //         const res = await axios.get('/search/company')
    //         setData(res.data.msg)
    //     }
    //     fetch()
    // }, [])




    // const handleChange = (e) => {
    //     setInputData(e.target.value)
    //     const result = data.filter((item) => {
    //         if (item.company_name.toLowerCase().includes(inputData.toLocaleLowerCase())) {
    //             return item
    //         }

    //     })
    //     setDetails(result)
    // }



    return (
        <>
            <NavBar />
            <div className="search__section">
                <div className="search__box">
                    <input className="search__field" type='search'  placeholder="Enter Company Name." />
                    <img className="search__icon" src={searchIcon} alt='searchIcon' />
                </div>
                <div className='address__section'>
                    {/* {details.map((item, i) =>
                        <AddressBox key={i} item={item} i={i} />
                    )} */}
                </div>
            </div>
        </>
    )
}

export default SearchCompany