import React, { useEffect, useState } from 'react'
const Front = () => {
    let total=0;
    const [arr, setArr] = useState([]);
    const [charge, setCharge] = useState('');
    const [amount, setAmount] = useState('');
    const [btnName,setBtnName]=useState('Submit');
    const [key,setKey]=useState();
    const onsubmit = (event) => {
        event.preventDefault();
    }
    const onchange = (event) => {
        let value = event.target.value;
        if ((event.target.name) === 'charge') {
            setCharge(value);
            // console.log("charge",charge);
        }
        else if ((event.target.name) === 'amount') {

            setAmount(value);
            // console.log("amount",amount);
        }
        //console.log(value);
    };
    const both=()=>{
        if (btnName=='Submit'){
            push()
        console.log(arr);

            setCharge('')
            setAmount('')
        }
        else{
            // console.log("Dont know")
            console.log(key)
            arr.map(
                (el,id)=>{
                    if (id==key){
                        // console.log(el[0])
                        // console.log(el[1])
                        setArr(pre=>[...pre.slice(0,key),[charge,amount],...pre.slice(key+1,pre.length+1)])
                        
                    }
                }
            )
            // setArr();
            setBtnName('Submit')
            setCharge('')
            setAmount('')
        }
    }
    const push = () => {
        if (charge=='' || amount==''){
            alert('Empty')
        }
        else{
        setArr(oldArray => [...oldArray, [charge, amount]]);}
    }
    const editing=(key)=>{
        // console.log(arr[key]);
        setCharge(arr[key][0]);
        setAmount(arr[key][1]);
        setBtnName('Edit')
        setKey(key);
    }
    const deleting=(key)=>{
        setKey(key);
        // console.log(key);
        let newArr=[...arr];
        newArr.splice(key,1);
        setArr(newArr);
        // console.log(newArr)
        // console.log(arr);
    }
    return (
        <>
            <form onSubmit={onsubmit}>
                <label htmlFor="Charge">Charge: </label>
                <input value={charge} name='charge' onChange={onchange} type="text" placeholder=' E.g. rent' />
                <br />
                <label htmlFor="Amount">Amount: </label>
                <input value={amount} name='amount' onChange={onchange} type="number" placeholder=' E.g. 100' />
                <button type='submit' className='btn btn-danger' onClick={both}>{btnName}</button>
            </form>
            <div>
                <table className='table table table-sm table-dark'>
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Charge</th>
                            <th scope="col">Amount</th>
                            <th scope="col">Edit</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                
                {
                    arr.map((element, key) => {
                        {/* console.log(element) */ }
                        return (
                            <>
                                    <tbody>
                                        <tr>
                                            <th scope="row">{key + 1}</th>
                                            <td>{element[0]}</td>
                                            <td>{element[1]}</td>
                                            <td><button onClick={()=>{editing(key)}} >EDIT</button></td>
                                            <td><button onClick={()=>{deleting(key)}} >DELETE</button></td>
                                        </tr>
                                    </tbody>
                            </>
                        )
                    })
                }
                </table>
            </div>
            <h1>Total {arr.map((element)=>{
                {/* console.log(element[1]) */}
                let num=parseInt(element[1]);
                total+=num;
                console.log(total);
            })}</h1>
            <h1>${total}</h1>
        </>

    )
}
export default Front;
