import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import PhoneCard from './PhoneCard';

const Phone = () => {

    const [phone, setPhone] = useState({});
    // const [isTrue, setIsTrue] = useState(false); 

    const {id}= useParams();
    // console.log(id );

    const phones = useLoaderData();
    // console.log(phones);


    useEffect(() => {
        // console.log('button clicked');
    
        const findPhone = phones?.find((phone) => phone.id === id);
    
        setPhone(findPhone);
      }, [id, phones]);
    //   }, [id, phones, isTrue]);

    return (
        <div>
            <PhoneCard phone={phone}></PhoneCard>
            {/* <button onClick={()=> setIsTrue(isTrue)}>click</button> */}
        </div>
    );
};

export default Phone;