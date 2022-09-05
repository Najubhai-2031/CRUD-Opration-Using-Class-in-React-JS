import React from 'react'

class CRUDUsingClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mytext: '',
            myarray: [],
        };
    }

    handleChange(event) {
        this.setState({
            mytext: event,
        });
    }

    handleSubmit() {
        const mytext = {
            value: this.state.mytext,
            id: Date.now()
        };

        const myarray = [...this.state.myarray];

        myarray.push(mytext)


        this.setState({
            mytext: '',
            myarray: myarray,
        });

    }


    handleDelete(event) {
        const myarray = [...this.state.myarray];
        const afterDeletedList = myarray.filter(item => item.id !== event)
        this.setState({
            myarray: afterDeletedList,
        });
    }

    handleUpdate(id) {
        let myarray = [...this.state.myarray];
        let updatedList = myarray.find(item => item.id === id);
        this.setState({
            mytext: updatedList.value,
        });
    }

    editTask = (id) => {
        const text = prompt("Task Name");
        const myData = this.state.myarray.map(x => {
            if (x.id === id) {
                return {
                    ...x,
                    value: text,
                    id: id
                }
            }
            return x;
        });

        this.setState({
            myarray: myData
        })
    }

    render() {
        return (
            <React.Fragment>
                Enter Value:- <input name='mytext' type='text' onChange={(e) => this.handleChange(e.target.value)} value={this.state.mytext} />&nbsp;
                <button onClick={() => this.handleSubmit()}>Add</button> &nbsp;&nbsp;

                <h5>{this.state.myarray.map((item) =>
                    <li key={item.value}>
                        {item.value} &nbsp;&nbsp;
                        <button onClick={() => this.editTask(item.id)}> Edit </button>&nbsp;&nbsp;
                        <button onClick={() => this.handleDelete(item.id)}> Delete </button>
                    </li>)}
                </h5>
            </React.Fragment>
        );
    }
}

export default CRUDUsingClass;