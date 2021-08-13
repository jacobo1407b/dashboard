import Avatar from 'components/Avatar'
import Camp from 'Icons/Camp';
import { FunctionComponent } from 'react'
interface IApp {
    title?: string
}

const Appbar: FunctionComponent<IApp> = ({ title }): JSX.Element => {
    return (

        <div className="navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-box">
            <div className="flex-none lg:flex">
                <button className="btn btn-square btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
            <div className="flex-1 hidden px-2 mx-2 lg:flex">
                <span className="text-lg font-bold">
                    {title}
                </span>
            </div>

            <div className="flex-none hidden lg:flex">
                <button className="btn btn-square btn-ghost">
                    <Camp/>
                </button>
            </div>
            <div className="flex-none hidden lg:flex">
                <Avatar
                    src="https://i.pravatar.cc/500?img=32"
                    size="tiny"
                    border="full"
                />
            </div>
        </div>
    )
}

export default Appbar;