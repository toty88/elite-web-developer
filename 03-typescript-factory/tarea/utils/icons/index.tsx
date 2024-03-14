type Props = {
    disabled: boolean,
    onClick: (e: any) => void,
}

const BackWIcon = () => <img src="/svg/back.svg" alt="back"/>
const ForWIcon = () => <img src="/svg/next.svg" alt="next"/>

export const PrevIcon = ({ onClick, disabled }: Props) => (
    <div className="flex flex-col">

        <button type="button" className=" mb-4 bg-green-400 hover:bg-green-950 text-2xl text-white text-center font-bold  rounded-full"
            onClick={onClick}
            disabled={disabled}
        >
            <div><BackWIcon /> </div>
        </button>
    </div>
)

export const NextIcon = ({ onClick, disabled }: Props) => (
    <div className="flex flex-col">
        <button type="button"
            className=" bg-green-400 hover:bg-green-950 text-2xl text-white text-center font-bold rounded-full"
            onClick={onClick}
            disabled={disabled}
        >
            <div className=''><ForWIcon /> </div>
        </button>
    </div>
)