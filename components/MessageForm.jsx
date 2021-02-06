import React, { useEffect, useState } from 'react';

const MessageForm = () => {
    const [name, handleName] = useState('');
    const [email, handleEmail] = useState('');
    const [messageBody, handleMessageBody] = useState('');

    return (
        <div className='flex justify-center'>
            <div className='w-3/5'>
                <div className='items-center -mx-2 md:flex'>
                    <div className='w-full mx-2'>
                        <label className='block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200'>
                            Name
                        </label>

                        <input
                            className='block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
                            type='text'
                            onChange={(event) => handleName(event.target.value)}
                        />
                    </div>

                    <div className='w-full mx-2 mt-4 md:mt-0'>
                        <label className='block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200'>
                            {' '}
                            Recipient E-mail
                        </label>

                        <input
                            className='block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
                            type='email'
                            onChange={(event) =>
                                handleEmail(event.target.value)
                            }
                        />
                    </div>
                </div>

                <div className='w-full mt-4 '>
                    <label className='block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200'>
                        Post
                    </label>

                    <textarea
                        className='block w-full h-40 px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
                        onChange={(event) =>
                            handleMessageBody(event.target.value)
                        }
                    ></textarea>
                </div>
                <br />
                <div class='grid grid-cols-3 gap-4'>
                    <div>
                        <img src='https://lh3.googleusercontent.com/fife/ABSRlIpMJxVFloFUJEju9OqoryG9RbhKPukkhJl4W6UGIyCzYjXKM1WwjvGWXtG4CAr8KsoWZUwiqwLACF0ZkAfEiO6dyaA4a3vwhBtJ5rGP0MwRcU7ZsJDt07VM21wi7pqLvbjBhvSMgY1HW7ox5hRmS1pLKeLG94xbJZSFgGjfFMfRmaeSL0Nj9LqMW1vb6-8LqHX8hSRpYmRhKfBNFT33jabYSqPfU7s6MA2OND-bBSTxPUAYXH2AQOZ-obA19yypue7vAb3VRYv_CpyMbKULFbQuasICq2K2kVYAxPunXhbjZzv7MMQTqxrju6GwfITrtUVCB49ZY5ZGxmcr_SE8Eb1fOpFQYaTmSxnqntexMO5PxZjT85tZ9yCYzokECweSGQvLSjT-9Le5V4t-pQUlfmcMn1BOJ70NyshSKzVCXEQLAYu6-wjamLK9iJg1DOfU5g-EEYQDvLaQu-55hBQqroJFJ2gTjTd7z1RF_z_sh2WQ_kcm2NGlCGu8CwE82CsHN2iTtA6gqKq14QMd3E_DSdmA8FNenITv_IbLFWsManBnBczU8AIf91hwKb3RndhJ_muUtOo1rb-_wHTNR54JTFworbSlhQVJm5vHaRim9eLu2cKkKhBJu2moVp_ROJt4vo3TDpTo2jOwX3jqfgij7ZXuTYZRPaHF5bRKUlvh30KYHHgsnEXe4hdG9KhCRdTg4QoTF2HRpB98IpS9sxgZcSGlLh3zCfb2SK0=w1600-h775-ft'></img>
                    </div>
                    <div>
                        <img src='https://lh3.googleusercontent.com/fife/ABSRlIpMJxVFloFUJEju9OqoryG9RbhKPukkhJl4W6UGIyCzYjXKM1WwjvGWXtG4CAr8KsoWZUwiqwLACF0ZkAfEiO6dyaA4a3vwhBtJ5rGP0MwRcU7ZsJDt07VM21wi7pqLvbjBhvSMgY1HW7ox5hRmS1pLKeLG94xbJZSFgGjfFMfRmaeSL0Nj9LqMW1vb6-8LqHX8hSRpYmRhKfBNFT33jabYSqPfU7s6MA2OND-bBSTxPUAYXH2AQOZ-obA19yypue7vAb3VRYv_CpyMbKULFbQuasICq2K2kVYAxPunXhbjZzv7MMQTqxrju6GwfITrtUVCB49ZY5ZGxmcr_SE8Eb1fOpFQYaTmSxnqntexMO5PxZjT85tZ9yCYzokECweSGQvLSjT-9Le5V4t-pQUlfmcMn1BOJ70NyshSKzVCXEQLAYu6-wjamLK9iJg1DOfU5g-EEYQDvLaQu-55hBQqroJFJ2gTjTd7z1RF_z_sh2WQ_kcm2NGlCGu8CwE82CsHN2iTtA6gqKq14QMd3E_DSdmA8FNenITv_IbLFWsManBnBczU8AIf91hwKb3RndhJ_muUtOo1rb-_wHTNR54JTFworbSlhQVJm5vHaRim9eLu2cKkKhBJu2moVp_ROJt4vo3TDpTo2jOwX3jqfgij7ZXuTYZRPaHF5bRKUlvh30KYHHgsnEXe4hdG9KhCRdTg4QoTF2HRpB98IpS9sxgZcSGlLh3zCfb2SK0=w1600-h775-ft'></img>
                    </div>
                    <div>
                        <img src='https://lh3.googleusercontent.com/fife/ABSRlIpMJxVFloFUJEju9OqoryG9RbhKPukkhJl4W6UGIyCzYjXKM1WwjvGWXtG4CAr8KsoWZUwiqwLACF0ZkAfEiO6dyaA4a3vwhBtJ5rGP0MwRcU7ZsJDt07VM21wi7pqLvbjBhvSMgY1HW7ox5hRmS1pLKeLG94xbJZSFgGjfFMfRmaeSL0Nj9LqMW1vb6-8LqHX8hSRpYmRhKfBNFT33jabYSqPfU7s6MA2OND-bBSTxPUAYXH2AQOZ-obA19yypue7vAb3VRYv_CpyMbKULFbQuasICq2K2kVYAxPunXhbjZzv7MMQTqxrju6GwfITrtUVCB49ZY5ZGxmcr_SE8Eb1fOpFQYaTmSxnqntexMO5PxZjT85tZ9yCYzokECweSGQvLSjT-9Le5V4t-pQUlfmcMn1BOJ70NyshSKzVCXEQLAYu6-wjamLK9iJg1DOfU5g-EEYQDvLaQu-55hBQqroJFJ2gTjTd7z1RF_z_sh2WQ_kcm2NGlCGu8CwE82CsHN2iTtA6gqKq14QMd3E_DSdmA8FNenITv_IbLFWsManBnBczU8AIf91hwKb3RndhJ_muUtOo1rb-_wHTNR54JTFworbSlhQVJm5vHaRim9eLu2cKkKhBJu2moVp_ROJt4vo3TDpTo2jOwX3jqfgij7ZXuTYZRPaHF5bRKUlvh30KYHHgsnEXe4hdG9KhCRdTg4QoTF2HRpB98IpS9sxgZcSGlLh3zCfb2SK0=w1600-h775-ft'></img>
                    </div>
                </div>

                <div className='flex justify-center mt-6'>
                    <button className='px-4 py-2 text-white bg-gray-700 rounded hover:bg-gray-600 focus:outline-none focus:bg-gray-600'>
                        Submit Message
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MessageForm;
