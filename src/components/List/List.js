import React from 'react';

function List(props) {
    return (
        <ul>
            {props.list.map((item, i) => (  // чого кругli дужки
                <li key={i} >
                    {item}

                    <i className="fas fa-check btn btn-done"
                        onClick={props.funcDone}
                    >
                    </i>

                    <i className="fas fa-window-close btn btn-delete"
                        onClick={props.funcDelete}
                    >
                    </i>

                </li >
            ))
            }
        </ul >
    );
}


export default List