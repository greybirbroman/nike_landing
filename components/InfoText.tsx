import React, { FC } from 'react';

interface IText {
    text: string;
    customClass: string;
}

const InfoText: FC<IText> = ({ customClass, text }) => {
    return <p className={`info-text max-lg:max-w-lg ${customClass}`}>{text}</p>;
};

export default InfoText;
