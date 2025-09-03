import React from 'react';
import profile from './image_user/knight.avif'

// Component ย่อยๆ
const Avatar = () => (
    <img 
        src={profile}
        alt="User Avatar"
        style={{
            borderRadius: '50%',
            width: '150px',
            height: '140px',
            border: '2px solid #667eea'
        }}
    />
);

const UserName = () => (
    <h3 style={{ color: '#0c237cff', margin: '10px 0' }}>
        นาย พิชิตชัย แจ่มจำรัส
    </h3>
);

const UserID = () => (
    <h3 style={{ color: '#1f3dc2ff', margin: '10px 0' }}>
        660710728
    </h3>
);

const UserBio = () => (
    <p style={{ color: '#666', fontSize: '14px' }} className='ibm-regular'>
        ชอบการเงิน อยากรวย เริ่มไม่ค่อยชอบ IT แล้ว T_T
    </p>
);

// Component หลักที่ประกอบจาก components ย่อย
const UserCard = () => {
    return (
        <div style={{
            border: '1px solid #ddd',
            padding: '20px',
            borderRadius: '12px',
            textAlign: 'center',
            backgroundColor: '#ffffffff',
            maxWidth: '300px',
            margin: '20px auto'
        }}>
            <Avatar />
            <UserName />
            <UserBio />
            <UserID />
        </div>
    );
};

export default UserCard;