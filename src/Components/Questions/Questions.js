import React from 'react';
import './Questions.css'

const Questions = () => {
    return (
        <div className='container qa-section'>
            <h1 className='title '>question and anawer</h1>
            <div className="row row-cols-md-2 row-cols-1">
                <div className="col">
                    <h2 className='text-center question'>How react works?</h2>
                    <h4 className='ans'>React works a declarative paradigm. it makes  easier to reason about my application.React use virtual dom. Resulting of our code execute very fast. When we add element in the UI .react creact a virtual dom node on this tree.If the state of any of these elements changes, a new virtual DOM tree is created. Then it change ui.</h4>
                </div>
                <div className="col">
                    <h2 className='text-center question'>State vs props?</h2>
                    <h4 className='ans'>Using props we can pass data from one component to other component. But  using state we can not passed data one component to another component. We can not to modifiy props data but we can modifiy state data. we can only read props data  but we can read and write state data. props can use with state. But state can use only with state components.</h4>
                </div>
            </div>
        </div>
    );
};

export default Questions;



