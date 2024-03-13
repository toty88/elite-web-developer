import React from 'react'

interface Props {
    radioName: string,
    radioValues: string[],
    onClick: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

export const FilterRadio = ({ onClick, radioName, radioValues }: Props) => {

    const handleClick = (e: React.ChangeEvent<HTMLInputElement>) => onClick(e);
    const title = radioName[0].toUpperCase() + radioName.slice(1);

    return (
        <div className='max-w-25'>

            <div className='flex items-center justify-center border-4 mb-2 border-green-500 rounded-xl bg-green-200 opacity-80'>
                <h3 className="mb-4 font-semibold text-green-500 text-3xl ">{title}</h3>
            </div>
            <ul className="w-48 text-sm font-medium text-gray-900 bg-white border border-green-500 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                {
                    radioValues.map((opt: string, key: number) => {
                        return <li key={key} className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                            <div className="flex items-center ps-3">
                                <input id="list-radio-license" type="radio" value={opt.toLowerCase()} name={radioName}
                                    className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500 
                                    dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 
                                    dark:border-gray-600"
                                    onChange={(e) => handleClick(e)} />
                                <label htmlFor="list-radio-license"
                                    className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{opt} </label>
                            </div>
                        </li>
                    })
                }
            </ul>
        </div>
    )
}