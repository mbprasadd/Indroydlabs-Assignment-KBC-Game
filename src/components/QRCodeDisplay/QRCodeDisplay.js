import React from 'react';
import { QRCodeCanvas } from 'qrcode.react';

const QRCodeDisplay = ({ value }) => {
    return (
        <div>
            <QRCodeCanvas value={value} size={128} />
        </div>
    );
};

export default QRCodeDisplay;
