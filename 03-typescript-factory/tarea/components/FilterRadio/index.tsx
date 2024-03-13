import React from 'react'

interface Props {
    onClick: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const FilterRadio = ({onClick}: Props) => {

    const handleClick = (e: React.ChangeEvent<HTMLInputElement>) =>  {
        // e.preventDefault();
        onClick(e);
    }
    
    return (
        <div className='max-w-25'>

            <h3 className="mb-4 font-semibold text-white text-2xl">Status</h3>
            <ul className="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                    <div className="flex items-center ps-3">
                        <input id="list-radio-license" type="radio" value="alive" name="status"
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 
                        dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 
                        dark:bg-gray-600 dark:border-gray-500" 
                        onChange={(e) => handleClick(e)}/>
                        <label htmlFor="list-radio-license"
                            className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Alive </label>
                    </div>
                </li>
                <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                    <div className="flex items-center ps-3">
                        <input id="list-radio-id" type="radio" value="dead" name="status"
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 
                        dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 
                        dark:bg-gray-600 dark:border-gray-500" 
                        onChange={(e) => handleClick(e)}/>
                        <label htmlFor="list-radio-id"
                            className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Dead</label>
                    </div>
                </li>
                <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                    <div className="flex items-center ps-3">
                        <input id="list-radio-military" type="radio" value="unknown" name="status"
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 
                        dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 
                        dark:bg-gray-600 dark:border-gray-500" 
                        onChange={(e) => handleClick(e)}/>
                        <label htmlFor="list-radio-military"
                            className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Unknown</label>
                    </div>
                </li>
            </ul>
        </div>
    )
}



