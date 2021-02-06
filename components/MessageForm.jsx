import { images } from '@/data/images';
import { useForm } from 'react-hook-form';

const MessageForm = ({
    form,
    handleFormOnChange,
    handleImageClick,
    handleSubmitMessage,
}) => {
    const { from, to, msg, imageKey } = form;
    const { register, handleSubmit, errors } = useForm();
    // const onSubmit = (data) => console.log(data);
    return (
        <form
            onSubmit={handleSubmit(handleSubmitMessage)}
            className='flex justify-center'
        >
            <div className='w-full max-w-2xl py-5 space-y-5'>
                <div>
                    <h2>Send your love</h2>
                </div>
                <div className='w-full'>
                    <label
                        className='block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200'
                        htmlFor='to'
                    >
                        To
                    </label>

                    <input
                        className='block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
                        name='to'
                        type='text'
                        value={to}
                        ref={register({ required: true })}
                        onChange={handleFormOnChange}
                    />
                    {errors.to && 'To is required'}
                </div>

                <div className='w-full'>
                    <label
                        htmlFor='from'
                        className='block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200'
                    >
                        From
                    </label>

                    <input
                        className='block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
                        name='from'
                        type='text'
                        value={from}
                        onChange={handleFormOnChange}
                    />
                </div>

                <div className='w-full'>
                    <label
                        className='block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200'
                        htmlFor='message'
                    >
                        Message
                    </label>

                    <textarea
                        htmlFor='message'
                        rows='5'
                        className='block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
                        name='msg'
                        value={msg}
                        ref={register({ required: true })}
                        onChange={handleFormOnChange}
                    ></textarea>
                    {errors.msg && 'Message is required'}
                </div>

                <div className='grid grid-cols-3 gap-10'>
                    {Object.keys(images).map((key) => (
                        <div
                            key={key}
                            className={`${
                                imageKey === key ? 'selected' : ''
                            } h-full shadow-md`}
                            onClick={() => handleImageClick(key)}
                        >
                            <img src={images[key].front}></img>
                        </div>
                    ))}
                    <style jsx>{`
                        .selected {
                            border: green solid 1px;
                        }
                    `}</style>
                </div>

                <div className='flex justify-center'>
                    <button
                        type='sumbit'
                        className='px-4 py-2 text-white bg-gray-700 rounded hover:bg-gray-600 focus:outline-none focus:bg-gray-600'
                    >
                        Submit Message
                    </button>
                </div>
            </div>
        </form>
    );
};

export default MessageForm;
