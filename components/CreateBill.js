import React from "react"
import firebase from 'firebase/app';
import 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import initFirebase from '../services/firebase';
import 'firebase/firestore';
    
initFirebase();
// const auth = firebase.auth(),
// user: useAuthState(auth),
const db = firebase.firestore()


class CreateBill extends React.Component {

    state = {
        commodities: [{name:"", price:""}],

    }
    
    handleChange = (e) => {
        if (["name", "price"].includes(e.target.className) ) {
            let commodities = [...this.state.commodities]
            commodities[e.target.dataset.id][e.target.className] = e.target.value;
            this.setState({ commodities }, () => console.log(this.state.commodities))
        } else {
            this.setState({ [e.target.name]: e.target.value.toUpperCase() })
        }
    }

    addCommodity = (e) => {
        e.preventDefault()
        this.setState((prevState) => ({
            commodities: [...prevState.commodities, {name:"", price:""}],
        }));
    }

    handleSubmit = (e) => {
        e.preventDefault()
        // console.log(this.state.commodities)
        let sum = 0
        this.state.commodities.forEach(commodity => {
            sum += parseInt(commodity.price)
        })
        // alert(e.target.email.value)
        alert(sum);
        db.collection('bills').doc(`${this.props.user}`).set({
            email: e.target.email.value,
            amount: sum
        })
    }

    render() {
        let {name, email, commodities} = this.state
        return (
        <form onSubmit={this.handleSubmit} onChange={this.handleChange} >
            <label htmlFor="name">Consumer Name</label> 
            <input type="text" name="name" id="name" value={name} />
            <label htmlFor="email">Consumer Email</label> 
            <input type="email" name="email" id="email" value={email} />
            <button onClick={this.addCommodity}>Add new Commodity</button>
            {
            commodities.map((val, idx)=> {
                let commodityId = `commodityId-${idx}`, priceId = `age-${idx}`
                return (
                    <div key={idx}>
                        <label htmlFor={commodityId}>{`Commodity #${idx + 1}`}</label>
                        <input
                        type="text"
                        name={commodityId}
                        data-id={idx}
                        id={commodityId}
                        value={commodities[idx].name} 
                        className="name"
                        />
                        <label htmlFor={priceId}>Price</label>
                        <input
                        type="text"
                        name={priceId}
                        data-id={idx}
                        id={priceId}
                        value={commodities[idx].price} 
                        className="price"
                        />
                    </div>
                )
            })
            }
            <input type="submit" value="Submit" /> 
        </form>
        )
    }
}
export default CreateBill