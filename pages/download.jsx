import react, { useEffect, useState } from 'react';
import Card from '@/components/Card';
import domtoimage from 'dom-to-image';

export default function newCard() {
    const download = () => {
        const node = document.getElementById('back');

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
                <button onClick={() => download()}>Download</button>
            </div>
        </div>
    );
}
