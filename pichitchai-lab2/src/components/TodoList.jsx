import React, { useState } from 'react';

const TodoList = () => {
  // ข้อมูลเริ่มต้น
  const initialTodos = [
    {id: 1, text: 'Day 1 ขายของ', completed: true},
    {id: 2, text: 'Day 2 เรียนcode', completed: true},
    {id: 3, text: 'Day 3 อ่านหนังสือ', completed: true},
    {id: 4, text: 'Day 4 ฟังเพลง', completed: true},
    {id: 5, text: 'Day 5 หาของ', completed: false},
    {id: 6, text: 'Day 6 ซื้อของ', completed: false},
    {id: 7, text: 'Day 7 ลงคลิป', completed: false}
  ];

  const [todos, setTodos] = useState(initialTodos);

  // ฟังก์ชัน toggle completed
  const toggleCompleted = (id) => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // คำนวณสถิติ
  const completedCount = todos.filter(todo => todo.completed).length;
  const totalCount = todos.length;
  const percentage = Math.round((completedCount / totalCount) * 100);

  return (
    <div style={{ maxWidth: '500px', margin: '20px auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h3>📝 TodoList</h3>

      {/* Progress Bar */}
      <div style={{
        backgroundColor: '#f0f0f0',
        borderRadius: '20px',
        padding: '3px',
        margin: '15px 0'
      }}>
        <div style={{
          backgroundColor: '#4caf50',
          width: `${percentage}%`,
          textAlign: 'center',
          borderRadius: '17px',
          padding: '8px 0',
          color: 'white',
          fontWeight: 'bold',
          transition: 'width 0.3s ease'
        }}>
          {percentage}%
        </div>
      </div>

      {/* Todo Items */}
      <div style={{ margin: '20px 0' }}>
        {todos.map(todo => (
          <div 
            key={todo.id}
            onClick={() => toggleCompleted(todo.id)}
            style={{
              padding: '12px',
              margin: '8px 0',
              borderRadius: '8px',
              border: '1px solid #ddd',
              display: 'flex',
              alignItems: 'center',
              backgroundColor: todo.completed ? '#e8f5e8' : '#fff',
              transition: 'all 0.3s ease',
              cursor: 'pointer' // เพิ่ม cursor pointer
            }}
          >
            <span style={{ marginRight: '12px', fontSize: '18px' }}>
              {todo.completed ? '✅' : '💢'}
            </span>
            <span style={{
              flex: 1,
              textDecoration: todo.completed ? 'line-through' : 'none',
              color: todo.completed ? '#666' : '#333'
            }}>
              {todo.text}
            </span>
          </div>
        ))}
      </div>

      {/* Summary */}
      <div style={{
        marginTop: '20px',
        textAlign: 'center',
        padding: '15px',
        background: 'linear-gradient(45deg, #667eea, #764ba2)',
        color: 'white',
        borderRadius: '8px',
        fontWeight: 'bold'
      }}>
        ✨ ทำเสร็จแล้ว {completedCount} จาก {totalCount} รายการ
      </div>
    </div>
  );
};

export default TodoList;
