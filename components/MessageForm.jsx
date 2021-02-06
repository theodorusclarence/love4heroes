import React, { useEffect, useState } from 'react';

const MessageForm = () => {
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [message, setMessage] = useState('');
    const [imageId, setImageId] = useState(1);

    const handleImageClick = (id) => {
        setImageId(id);
    };

    return (
        <div className='flex justify-center'>
            <div className='w-11/12 max-w-3xl py-5 space-y-5'>
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
                        onChange={(event) => setTo(event.target.value)}
                    />
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
                        onChange={(event) => setFrom(event.target.value)}
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
                        className='block w-full h-40 px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
                        onChange={(event) => setMessage(event.target.value)}
                    ></textarea>
                </div>

                <div className='flex space-x-5'>
                    <div
                        className={imageId === 1 ? 'selected' : ''}
                        onClick={() => handleImageClick(1)}
                    >
                        <img src='https://lh3.googleusercontent.com/fife/ABSRlIpMJxVFloFUJEju9OqoryG9RbhKPukkhJl4W6UGIyCzYjXKM1WwjvGWXtG4CAr8KsoWZUwiqwLACF0ZkAfEiO6dyaA4a3vwhBtJ5rGP0MwRcU7ZsJDt07VM21wi7pqLvbjBhvSMgY1HW7ox5hRmS1pLKeLG94xbJZSFgGjfFMfRmaeSL0Nj9LqMW1vb6-8LqHX8hSRpYmRhKfBNFT33jabYSqPfU7s6MA2OND-bBSTxPUAYXH2AQOZ-obA19yypue7vAb3VRYv_CpyMbKULFbQuasICq2K2kVYAxPunXhbjZzv7MMQTqxrju6GwfITrtUVCB49ZY5ZGxmcr_SE8Eb1fOpFQYaTmSxnqntexMO5PxZjT85tZ9yCYzokECweSGQvLSjT-9Le5V4t-pQUlfmcMn1BOJ70NyshSKzVCXEQLAYu6-wjamLK9iJg1DOfU5g-EEYQDvLaQu-55hBQqroJFJ2gTjTd7z1RF_z_sh2WQ_kcm2NGlCGu8CwE82CsHN2iTtA6gqKq14QMd3E_DSdmA8FNenITv_IbLFWsManBnBczU8AIf91hwKb3RndhJ_muUtOo1rb-_wHTNR54JTFworbSlhQVJm5vHaRim9eLu2cKkKhBJu2moVp_ROJt4vo3TDpTo2jOwX3jqfgij7ZXuTYZRPaHF5bRKUlvh30KYHHgsnEXe4hdG9KhCRdTg4QoTF2HRpB98IpS9sxgZcSGlLh3zCfb2SK0=w1600-h775-ft'></img>
                    </div>
                    <div
                        className={imageId === 2 ? 'selected' : ''}
                        onClick={() => handleImageClick(2)}
                    >
                        <img src='https://lh3.googleusercontent.com/fife/ABSRlIpMJxVFloFUJEju9OqoryG9RbhKPukkhJl4W6UGIyCzYjXKM1WwjvGWXtG4CAr8KsoWZUwiqwLACF0ZkAfEiO6dyaA4a3vwhBtJ5rGP0MwRcU7ZsJDt07VM21wi7pqLvbjBhvSMgY1HW7ox5hRmS1pLKeLG94xbJZSFgGjfFMfRmaeSL0Nj9LqMW1vb6-8LqHX8hSRpYmRhKfBNFT33jabYSqPfU7s6MA2OND-bBSTxPUAYXH2AQOZ-obA19yypue7vAb3VRYv_CpyMbKULFbQuasICq2K2kVYAxPunXhbjZzv7MMQTqxrju6GwfITrtUVCB49ZY5ZGxmcr_SE8Eb1fOpFQYaTmSxnqntexMO5PxZjT85tZ9yCYzokECweSGQvLSjT-9Le5V4t-pQUlfmcMn1BOJ70NyshSKzVCXEQLAYu6-wjamLK9iJg1DOfU5g-EEYQDvLaQu-55hBQqroJFJ2gTjTd7z1RF_z_sh2WQ_kcm2NGlCGu8CwE82CsHN2iTtA6gqKq14QMd3E_DSdmA8FNenITv_IbLFWsManBnBczU8AIf91hwKb3RndhJ_muUtOo1rb-_wHTNR54JTFworbSlhQVJm5vHaRim9eLu2cKkKhBJu2moVp_ROJt4vo3TDpTo2jOwX3jqfgij7ZXuTYZRPaHF5bRKUlvh30KYHHgsnEXe4hdG9KhCRdTg4QoTF2HRpB98IpS9sxgZcSGlLh3zCfb2SK0=w1600-h775-ft'></img>
                    </div>
                    <div
                        className={imageId === 3 ? 'selected' : ''}
                        onClick={() => handleImageClick(3)}
                    >
                        <img src='https://lh3.googleusercontent.com/fife/ABSRlIpMJxVFloFUJEju9OqoryG9RbhKPukkhJl4W6UGIyCzYjXKM1WwjvGWXtG4CAr8KsoWZUwiqwLACF0ZkAfEiO6dyaA4a3vwhBtJ5rGP0MwRcU7ZsJDt07VM21wi7pqLvbjBhvSMgY1HW7ox5hRmS1pLKeLG94xbJZSFgGjfFMfRmaeSL0Nj9LqMW1vb6-8LqHX8hSRpYmRhKfBNFT33jabYSqPfU7s6MA2OND-bBSTxPUAYXH2AQOZ-obA19yypue7vAb3VRYv_CpyMbKULFbQuasICq2K2kVYAxPunXhbjZzv7MMQTqxrju6GwfITrtUVCB49ZY5ZGxmcr_SE8Eb1fOpFQYaTmSxnqntexMO5PxZjT85tZ9yCYzokECweSGQvLSjT-9Le5V4t-pQUlfmcMn1BOJ70NyshSKzVCXEQLAYu6-wjamLK9iJg1DOfU5g-EEYQDvLaQu-55hBQqroJFJ2gTjTd7z1RF_z_sh2WQ_kcm2NGlCGu8CwE82CsHN2iTtA6gqKq14QMd3E_DSdmA8FNenITv_IbLFWsManBnBczU8AIf91hwKb3RndhJ_muUtOo1rb-_wHTNR54JTFworbSlhQVJm5vHaRim9eLu2cKkKhBJu2moVp_ROJt4vo3TDpTo2jOwX3jqfgij7ZXuTYZRPaHF5bRKUlvh30KYHHgsnEXe4hdG9KhCRdTg4QoTF2HRpB98IpS9sxgZcSGlLh3zCfb2SK0=w1600-h775-ft'></img>
                    </div>
                    <style jsx>{`
                        .selected {
                            border: green solid 1px;
                            box-shadow: 0px 12px 22px 1px #333;
                        }
                    `}</style>
                </div>

                <div className='flex justify-center'>
                    <button className='px-4 py-2 text-white bg-gray-700 rounded hover:bg-gray-600 focus:outline-none focus:bg-gray-600'>
                        Submit Message
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MessageForm;
