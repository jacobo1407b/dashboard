import { FunctionComponent } from 'react'
interface IProgress {
    value?: number,
    max?: number,
    primary?:boolean,
    secondary?:boolean,
    accent?:boolean
}
// 
const Progress: FunctionComponent<IProgress> = ({
    value,
    max,
    primary,
    secondary,
    accent
}) => {
    return (
        <div>
            <div className="p-6 space-y-2 artboard phone">
                <progress
                    className={`
                    progress 
                    ${primary && "progress-primary "}
                    ${secondary && "progress-secondary "}
                    ${accent && "progress-accent"}
                    `}
                    value={value}
                    max={max}
                ></progress>
            </div>
        </div>
    )
}

Progress.defaultProps = {
    value: 0,
    max: 100
}


export default Progress;