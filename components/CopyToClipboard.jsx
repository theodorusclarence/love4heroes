import React from 'react';
import Button from './Button';

import { useState } from 'react';

const CopyToClipboard = ({ textToCopy }) => {
    const [copyStatus, setCopyStatus] = useState('Save Link');

    const clickToCopy = (e) => {
        e.preventDefault();
        navigator.clipboard.writeText(textToCopy);
        setCopyStatus('Copied to clipboard');
        setTimeout(() => setCopyStatus('Save Link'), 1500);
    };
    return (
        <Button btn onClick={clickToCopy}>
            {copyStatus}
        </Button>
    );
};

export default CopyToClipboard;
