import { SetStateAction } from 'react';
import { FilterRadio } from '../FilterRadio';
import { RickMortyApi } from '@/utils/types';
import { PrevIcon, NextIcon } from '@/utils/icons';

interface Props {
    radioName: string[],
    radiosValues: string[][],
    isPlaceholderData: boolean,
    data: RickMortyApi | undefined,
    setPage: (value: SetStateAction<number>) => void,
    handleRadioChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
export const FilterPanel = ({ ...props }: Props) => {
    const { setPage, data, isPlaceholderData, radioName, radiosValues, handleRadioChange } = props;

    return (
        <div className="flex justify-center  min-w-40">
            <div className="flex justify-evenly w-1/2">
                <PrevIcon
                    onClick={() => { if (!isPlaceholderData && data?.info?.prev) { setPage(c => c - 1) } }}
                    disabled={isPlaceholderData || !data?.info?.prev}
                />
                {
                    radiosValues.map((radioValues, key) => {
                        return <FilterRadio
                            key={key}
                            onClick={handleRadioChange}
                            radioName={radioName[key]}
                            radioValues={radioValues}
                        />
                    })
                }
                <NextIcon
                    onClick={() => { if (!isPlaceholderData && data?.info?.next) { setPage(c => c + 1) } }}
                    disabled={isPlaceholderData || !data?.info?.next}
                />
            </div>
        </div>
    )
}