import React from 'react';

const AgreementForm = () => {
    return (
        <form className='mt-6'>
            <input type='checkbox' className='w-12 h-14 border-4 border-gray-900'/>
            <label>Согласие на обработку персональных данных</label>
        </form>
    );
};

export default AgreementForm;
