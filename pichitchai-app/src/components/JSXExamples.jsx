import React from "react";

function JSXExamples() { 

const greeting = <h1>Hello,React with JSX</h1>
const name = 'สามชาย';
const age = 25;

const user = {
    fristname: 'พิชิตชัย',
    lastname: 'แจ่มจำจัส',
    age: 21,
    hoobies: ['เล่นเกม', 'ฟังเพลง']
};

const formatname = (user) => {
    return '${user.fristname} ${user.lastname}';

}
const isLoggedIn = true;
const hasNotification = 3;

return (
        <div className="jsx-examples">
        <h1>JSX-Examples</h1>
        <section>
            <h2>การแสดงผลข้อมูล</h2>
            {greeting}
            <p>สวัสดีคุณ {name} อายุ {age} ปี</p>
            <p>นี่คือปี 2060 </p>
            <p>ชื่อจริง:{formatname(user)}</p>
        </section>
        <section>
            <h2>Attributes ใน JSX</h2>
            <div className="card">
                <p className="text-primary">ใช้ classname แทน class</p>
            </div>
        </section>
    </div>
    

)}
