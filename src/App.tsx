import React from 'react'

interface TodoListItemProps {
    todo: {
        text:string;
        complete:boolean;
    };
    
}

export const TodoListItem = props => {
    return <li>Content</li>;
}


const App: React.FC = () => {
    return <div> Hello </div>;
};

export default App;