import React from 'react'


function Form(props) {
    let {name} = props
    let {Title} = props


    function AddnewPost(e) {
        e.preventDefault()
        const newPost = {
            id: Math.random(),
            name,
            Title
        }
        props.onChangearr([...props.arr, newPost])

    }


    return (
        <form className='flex flex-col gap-3 items-start w-[700px] h-[200px]'>
            <input
                className='w-[700px] h-10 p-5 border-2 rounded-lg'
                type="text"
                placeholder='Name'
                defaultValue={props.name}
                onChange={(e) => props.onChangename(e.target.value)}
            />
            <input
                className='w-[700px] h-10 p-5 border-2 rounded-lg'
                type="text"
                placeholder='Title'
                defaultValue={props.Title}
                onChange={(e) => props.onChangeTitle(e.target.value)}
            />
            <button onClick={AddnewPost} className='w-[150px] bg-inherit border-2 border-cyan-600 rounded-lg h-10 text-cyan-600'>Создать пость</button>
        </form>
    )
}

export default Form