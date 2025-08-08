import React from 'react';

// === JSX Examples - มาดูตัวอย่างการใช้ JSX กัน ===

function JSXExamples() {
    // 1. JSX พื้นฐาน - เหมือน HTML แต่อยู่ใน JavaScript
    const greeting = <h1>ยินดีต้อนรับ</h1>;
    
    // 2. ใช้ JavaScript Variables ใน JSX
    const name = 'พิชิตชัย';
    const age = 21;
    
    // 3. JavaScript Expressions ใน JSX (ใส่ใน {})
    const currentYear = new Date().getFullYear();
    
    // 4. เตรียมข้อมูลสำหรับ render
    const user = {
        firstName: 'พิชิตชัย',
        lastName: 'แจ่มจำจัส',
        age: 21,
        hobbies: ['เล่นเกม', 'ฟังเพลง']
    };
    
    // 5. Function ที่ return JSX
    const formatName = (user) => {
        return `${user.firstName} ${user.lastName}`;
    };
    
    // 6. Conditional Rendering
    const isLoggedIn = true;
    const hasNotification = 3;
    
    return (
        <div className="jsx-examples">
          
            
            {/* === 1. การแสดงผลข้อมูลพื้นฐาน === */}
            <section>
                <h2>📝 ข้อมูล</h2>
                {greeting}
                <p>สวัสดีคุณ {name} อายุ {age} ปี</p>
                <p>ปีนี้คือปี {currentYear}</p>
                <p>ชื่อเต็ม: {formatName(user)}</p>
            </section>
            
            {/* === 2. การใช้ Attributes === */}
            <section>
                
                {/* ใช้ className แทน class */}
                <div className="card">
                  {/* <p className="text-primary">ใช้ className แทน class</p> */}
                </div>
                
                {/* camelCase attributes */}
                <button 
                    onClick={() => alert('คลิกแล้ว!')}
                    onMouseEnter={() => console.log('เมาส์เข้า')}
                >
                    Hover หรือ Click ดู
                </button>
                
                {/* style attribute รับ object */}
                <div style={{
                    backgroundColor: '#E8F5E8',
                    padding: '15px',
                    borderRadius: '8px',
                    marginTop: '10px'
                }}>
                    <p style={{ color: '#2D4A2B', fontWeight: 'bold' }}>
                        Inline styles ใช้ object
                    </p>
                </div>
            </section>
            
            {/* === 3. Conditional Rendering === */}
            <section>
                {/* <h2>🔀 Conditional Rendering</h2> */}
                
                {/* ใช้ ternary operator */}
                <p>
                    สถานะ: {isLoggedIn ? '✅ ล็อกอินแล้ว' : '❌ ยังไม่ได้ล็อกอิน'}
                </p>
                
                {/* ใช้ && operator */}
                {hasNotification > 0 && (
                    <div className="notification">
                        🔔 คุณมี {hasNotification} การแจ้งเตือนใหม่
                    </div>
                )}
                
                {/* ใช้ if-else ผ่าน function */}
                {(() => {
                    if (user.age >= 18) {
                        return <p>✅ {formatName(user)} เป็นผู้ใหญ่แล้ว</p>;
                    } else {
                        return <p>👶 {formatName(user)} ยังเป็นเด็ก</p>;
                    }
                })()}
            </section>
            
            {/* === 4. Lists และ Keys === */}
            <section>
                <h2>📋 การแสดงผล Lists</h2>
                <h3>งานอดิเรกของ {user.firstName}:</h3>
                <ul>
                    {user.hobbies.map((hobby, index) => (
                        <li key={index}>
                            {index + 1}. {hobby}
                        </li>
                    ))}
                </ul>
                
                {/* ตัวอย่างที่ซับซ้อนขึ้น */}
                <div className="product-list">
                    <h3>รายการสินค้า</h3>
                    {[
                        { id: 1, name: 'โน๊ตบุ๊ค', price: 25000000, inStock: true },
                        { id: 2, name: 'เมาส์', price: 599990, inStock: true },
                        { id: 3, name: 'คีย์บอร์ด', price: 129000, inStock: false }
                    ].map(product => (
                        <div key={product.id} className="product-item">
                            <span>{product.name}</span>
                            <span> - ฿{product.price.toLocaleString()}</span>
                            <span className={product.inStock ? 'in-stock' : 'out-stock'}>
                                {product.inStock ? ' ✅ มีสินค้าไม่จำกัด' : ' ❌ สินค้าหมด'}
                            </span>
                        </div>
                    ))}
                </div>
                <div className="product-list">
                    <h3>ทรัพย์สิน</h3>
                    {[
                        { id: 1, name: 'บ้าน', price: 250000000, inStock: true },
                        { id: 2, name: 'รถ', price: 599990, inStock: true },
                        { id: 3, name: 'เงิน', price: 129000, inStock: true }
                    ].map(product => (
                        <div key={product.id} className="product-item">
                            <span>{product.name}</span>
                            <span> - จำนวน {product.price.toLocaleString()} </span>
                            <span className={product.inStock ? 'in-stock' : 'out-stock'}>
                                {product.inStock ? ' 🌟 มีไม่จำกัด' : ' ❌ สินค้าหมด'}
                            </span>
                        </div>
                    ))}
                </div>
            </section>
            
            {/* === 5. Fragment === */}
            <section>
                <h2>🧩 React Fragment</h2>
                {/* <p>ใช้เมื่อไม่ต้องการ wrapper element:</p> */}
                {/* Fragment แบบเต็ม */}
                <React.Fragment>
                    <h3>ความสารถ</h3>
                    <p>บิน</p>
                </React.Fragment>
                
                {/* Fragment แบบย่อ */}
                <>
                    <h3>รหัสนักศึกษา.</h3>
                    <p>660710728</p>
                </>
            </section>
            
            {/* === 6. การจัดการ Events === */}
            <section>
                <h2>🎯 Event Handling ใน JSX</h2>
                <input 
                    type="text" 
                    placeholder="พิมพ์อะไรก็ได้..."
                    onChange={(e) => console.log('พิมพ์:', e.target.value)}
                />
                
                <select onChange={(e) => alert(`เลือก: ${e.target.value}`)}>
                    <option value="">-- เลือกภาษา --</option>
                    <option value="js">JavaScript</option>
                    <option value="py">Python</option>
                    <option value="java">Java</option>
                    <option value="go">Go</option>
                </select>
            </section>
            
            {/* === 7. Comments ใน JSX === */}
            <section>
                <h2>💬 Comments ใน JSX</h2>
                {/* นี่คือ comment ใน JSX */}
                <p>Comment ใน JSX ต้องอยู่ใน {/* curly braces */}</p>
                {
                    // นี่ก็เป็น comment เช่นกัน
                    // แต่อยู่ใน JavaScript expression
                }
            </section>
        </div>
    );
}

export default JSXExamples;