import React from "react";

function JSXExamples() {

    const greeting = <h1>Hello, React with JSX</h1>;
    const name = 'สามชาย';
    const age = 25;
    const currentYear = new Date().getFullYear();

    const user = {
        firstName: 'พิชิตชัย',
        lastName: 'แจ่มจำจัส',
        age: 21,
        hoobies: ['เล่นเกม', 'ฟังเพลง']
    };

    const formatName = (user) => {
        return `${user.firstName} ${user.lastName}`;
    };

    const isLoggedIn = true;
    const hasNotification = 3;

    return (
        <div className="jsx-examples">
            <h1>JSXExamples</h1>

            <section>
                <h2>การแสดงผลข้อมูล</h2>
                {greeting}
                <p>สวัสดีคุณ {name} อายุ {age} ปี</p>
                <p>ปีนี้คือปี {currentYear}</p>
                <p>ชื่อจริง: {formatName(user)}</p>
            </section>

            <section>
                <h2>Attributes ใน JSX</h2>
                <div className="card">
                    <p className="text-primary">ใช้ className แทน class</p>
                </div>

                <button
                    onClick={() => alert('Button Clicked!')}
                    onMouseEnter={() => console.log('Mouse Entered')}
                >
                    Hover me or Click me!
                </button>

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

            <section>
                <h2>Conditional Rendering</h2>
                <p>สถานะ: {isLoggedIn ? 'ออนไลน์' : 'ออฟไลน์'}</p>
                {hasNotification > 0 && (
                    <div className="notification">
                        คุณมีการแจ้งเตือน {hasNotification} รายการ
                    </div>
                )}

                {(() => {
                    if (user.age >= 18) {
                        return <p>{formatName(user)} คุณเป็นผู้ใหญ่</p>;
                    } else {
                        return <p>{formatName(user)} คุณยังไม่บรรลุนิติภาวะ</p>;
                    }
                })()}
            </section>
        </div>
    );
}

export default JSXExamples;
