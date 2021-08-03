import React from 'react';

const AgreementForm = () => {
    return (
        <form className='mt-6 flex items-center justify-center'>
            <input type='checkbox' className='w-12 h-14 border-4 border-gray-900'/>
            <label className='ml-6'>Согласие на обработку персональных данных</label>
        </form>
    );
};

export default AgreementForm;
