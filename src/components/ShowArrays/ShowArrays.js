import React from 'react';
import List from '../List/List';


class ShowArrays extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            list: ['Зробити ToDo List', 'Зробити стилі'],
        };
        this.onAddItem = this.onAddItem.bind(this);
        this.onChangeValue = this.onChangeValue.bind(this);
        this.onMakeDone = this.onMakeDone.bind(this);
        this.onDelete = this.onDelete.bind(this);
    }
    onChangeValue(e) {
        this.setState({ value: e.target.value });
    };
    onAddItem() {
        this.setState(state => {
            const list = [...state.list, state.value];
            return {
                list,
                value: '',
            };
        });
        console.log(this.state.list);
    };
    onMakeDone(e) {
        let li = e.target.parentNode;
        li.classList.add('done');
        // let index = this.state.list.indexOf(li.innerText);
        // this.setState(
        //     this.state.list.splice(index, 1)
        // );
        // this.setState(state => {
        //     const list = [...state.list, li.innerText];
        //     return {
        //         list,
        //         value: '',
        //     };
        // });

    };
    onDelete(e) {
        let index = this.state.list.indexOf(e.target.parentNode.innerText);
        console.log(index);
        this.setState(
            this.state.list.splice(index, 1)
        );
    };
    render() {
        return (
            <div>
                <List list={this.state.list} funcDone={this.onMakeDone} funcDelete={this.onDelete} />
                <input
                    type="text"
                    value={this.state.value}
                    onChange={this.onChangeValue}
                />
                <button
                    className="btn-add"
                    type="button"
                    onClick={this.onAddItem}
                    disabled={!this.state.value}
                >
                    Add
               </button>
            </div>
        );
    }
}




export default ShowArrays