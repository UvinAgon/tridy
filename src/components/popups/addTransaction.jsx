import React, { Component } from 'react';
import Dropdown from './dropdown';

class AddTransaction extends Component {
    constructor(props){
        super(props);
        this.state = {
            typeLabel: "",
            OpenModal: true,
            setOpenModal: true,
            setTrigger: true,
            tagColor: "",
            data: {
                date: "",
                amount: "",
                description: "",
                category: "",
                method: ""
            }
        }
    }
    saveTransaction(aa){
        // this.setState({
        //     data: {
        //         date: document.getElementById("trans-date"),
        //         amount: document.getElementById("trans-amount"),
        //         description: document.getElementById("trans-description"),
        //         category: document.getElementById("trans-category"),
        //         method: document.getElementById("trans-method")
        //     }
        // })
        alert("Transaction saved "+this.state + "response : "+aa)
        // this.transaction.date = document.getElementById("trans-date")
        // this.transaction.amount = document.getElementById("trans-amount")
        // this.transaction.description = document.getElementById("trans-description")
        // this.transaction.category = document.getElementById("trans-category")
        // this.transaction.method = document.getElementById("trans-method")
        // this.transactions.push(this.transaction)
        // alert("Transaction saved "+this.transactions)
    }
    cancel(){
        alert("Transaction cancelled")}
    reset(){
        alert("Transaction reset")
    }
    // handle(e) {
    //     console.log(e)
    //     const newdata = { ...this.state.data }
    //     newdata[e.target.id] = e.target.value
    //     setDate(newdata)
    //     console.log(newdata)
    // }
    render() { 
        // switch (this.typeLabel) {
        //     case "Income":
        //         this.tagColor = "linear-gradient(45deg,#050e1d 80%, #53ff15c3 20%)";
        //         break;
        //     case "Expense":
        //         this.tagColor =  "linear-gradient(45deg,#050e1d 80%, #ff0000f9 20%)";
        //         break;
        //     default:
        //         this.tagColor =  "linear-gradient(45deg,#050e1d 80%, #ffffffc3 20%)";
        // }
        
        return (
            <div style={{display: `flex`, flexDirection: `row`,width: `500px`, height: `340px`}}>
                <div style={{backgroundImage: `linear-gradient(135deg,#2b66a0 15%,#041023 65%)`, padding:'10px'}} className='col-md-11'>
                    <div style={{height:'50px',padding:7,color:'#b9cbe0f8'}}>
                        <label htmlFor=""><b>Add {this.props.typeLabel}</b></label>
                    </div>

                    <form action="">

                    <div className='input-group mb-3'>
                        <div style={{width:'110px'}} className='input-group-prepend'>
                            <span className='input-group-text' id='inputGroup-sizing-default'>Date</span>
                        </div>
                        <input id='trans-date' value={this.state.data.date} type="date" className='form-control' aria-label='Small' aria-describedby='inputGroup-sizing-sm'
                            onChange={(e)=> this.setState({data: {date:e.target.value}})} />
                    </div>

                    <div className='input-group mb-3'>
                        <div style={{width:'110px'}} className='input-group-prepend'>
                            <span className='input-group-text' id='inputGroup-sizing-default'>Amount</span>
                        </div>
                        <input id='trans-amount' type="number" className='form-control' aria-label='Small' aria-describedby='inputGroup-sizing-sm'
                            value={this.state.data.amount} onChange={(e)=> this.setState({data: {amount:e.target.value}})} />
                    </div>

                    <div className='input-group mb-3'>
                        <div style={{width:'110px'}} className='input-group-prepend'>
                            <span className='input-group-text' id='inputGroup-sizing-default'>Description</span>
                        </div>
                        <input id='trans-description' type="text" className='form-control' aria-label='Small' aria-describedby='inputGroup-sizing-sm'
                            value={this.state.data.description} onChange={(e)=> this.setState({data: {description:e.target.value}})} />
                    </div>
                    
                    <div style={{display: `flex`, flexDirection: `row`,justifyContent: 'space-between'}} >
                        <div style={{width:'49%'}}>
                            <Dropdown id='trans-category' selected={this.state.selected} setSelected={this.state.setSelected} dropdownLabel='Category'
                                value={this.state.data.category} onChange={(e)=> this.setState({data: {category:e.target.value}})} />
                        </div>
                        <div style={{width:'49%'}}>
                            <Dropdown id='trans-method' dropdownLabel='Method'
                                value={this.state.data.method} onChange={(e)=> this.setState({data: {method:e.target.value}})} />
                        </div>
                    </div>

                    <div style={{display: `flex`,flexDirection: `row-reverse`,paddingTop:20}}>
                        <button style={{ width: '80px',marginLeft:5}} className="btn btn-success btn-sm"
                         onClick={(aa) => this.saveTransaction(aa)}><b>Save</b></button>
                        <button style={{ width: '80px',marginLeft:5}} className="btn btn-danger btn-sm" onClick={this.cancel}><b>Cancel</b></button>
                        <button style={{ width: '80px',marginLeft:5}} className="btn btn-secondary btn-sm" onClick={this.reset}><b>Reset</b></button>
                    </div>
                    </form>
                </div>
                <div style={{backgroundImage: `linear-gradient(45deg,#050e1d 80%, #53ff15c3 20%)`, padding:'5px',borderEndEndRadius:15}} className='col-md-1'></div>
            </div>
        );
    }
}
// #53ff15c3 , #ff0000f9
export default AddTransaction;