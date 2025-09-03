import React from 'react';
import Welcome from './Welcome';
import Greeting from './Greeting';
import Clock from './Clock';
import UserCard from './UserCard';
import TodoList from './TodoList';


function ComponentExamples() {
    return (
        <div style={{
            maxWidth: '800px',
            margin: '0 auto',
            padding: '20px',
            fontFamily: 'Arial, sans-serif'
        }}>

            

            <section style={{
                marginBottom: '40px',
                padding: '10px',
                border: '1px solid #22cceeff',
                borderRadius: '50px',
                backgroundColor: '#fafafa'
            }}>
                <h1 style={{
                textAlign: 'center',
                color: '#f5087eff',
                marginBottom: '20px'
            }}>
                Welcome to my ToDoList
            </h1>
            </section>

           <section style={{
    marginBottom: '20px',
    border: '4px solid', 
    
    borderImage: 'linear-gradient(45deg, red, orange, yellow, green, blue, indigo, violet) 1',
    backgroundColor: '#ffffffff',
    padding: '20px'
}}>
    <Welcome />
    <Greeting />
    <Clock />
    <UserCard />
    <TodoList />
</section>

        </div>
    );
}

export default ComponentExamples;