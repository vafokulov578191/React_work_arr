import React from 'react';

const MyComponent = ({name, Title}) => {
    return (
        <div className="flex justify-between w-[700px] h-[70px] border-2 border-cyan-600 items-center p-5 rounded-lg">
            <div className="flex flex-col">
            <span>Name: <strong>{name}</strong></span>
            <span>Title: <strong>{Title}</strong></span>
            </div>
            <button className="w-[100px] h-7 rounded-lg bg-red-800 text-white">Remove</button>
        </div>
    );
};

export default MyComponent;
