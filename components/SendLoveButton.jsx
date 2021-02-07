import Button from './Button';

export default function SendLoveButton() {
    return (
        <Button href='/send-love'>
            <img className='w-4' src='/images/heart-white.svg' alt='Heart' />
            <p>Send Love</p>
        </Button>
    );
}
