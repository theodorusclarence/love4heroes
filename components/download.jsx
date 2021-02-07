import react, { useEffect, useState } from 'react';
import Card from '@/components/Card';
import domtoimage from 'dom-to-image';
import Button from './Button';

export default function newCard() {
    const download = () => {
        const node = document.getElementById('back');
        console.log(node);

        domtoimage
            .toJpeg(document.getElementById('back'))
            .then(function (dataUrl) {
                var link = document.createElement('a');
                link.download = 'love-4-heroes.jpeg';
                link.href = dataUrl;
                link.click();
            });
    };

    return (
        <div>
            <div className='flex items-center justify-center'>
                <Button btn onClick={() => download()}>
                    Download
                </Button>
            </div>
        </div>
    );
}
