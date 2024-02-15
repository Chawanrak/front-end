import React from 'react';

export const Header = () => {
    const headerStyle = {
        width: '100%',
        padding: '2%',
        backgroundColor: "#6495ED",
        color: "#EEEEEE",
        textAlign: 'center',
        textTransform: 'uppercase', // แปลงตัวอักษรเป็นตัวพิมพ์ใหญ่
        letterSpacing: '2px', // เพิ่มระยะห่างระหว่างตัวอักษร
        fontWeight: 'bold', // ทำให้ตัวอักษรมีน้ำหนักหนา
        fontSize: '2rem', // ขนาดตัวอักษร
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' // เพิ่มเอฟเฟกท์ box shadow
    };

    return (
        <div style={headerStyle}>
            <h1>List Create Movie </h1>
        </div>
    );
};
