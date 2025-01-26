import React from 'react'

type titleSectionProps = {
    label?: string;
}

const TitleSection = ({ label }: titleSectionProps) => {
    return (
        <>
            <div className="max-w-44 flex justify-center border border-primary-400 rounded-full py-2 px-4">
                <p className="text-primary-400 text-lg font-light">{label}</p>
            </div>
        </>
    )
}

export default TitleSection