import  {FunctionComponent} from 'react'

interface IAvatar{
    src?:string,
    size?:string,
    border?:string,
    children?:string,
    alt?:string,
    sizeNumber?:number,
    className?:string,
    onClick?:any
    extra?:any
}
const Avatar:FunctionComponent<IAvatar>=({
    onClick,
    sizeNumber,
    src,
    size,
    border,
    extra,
    children,
    alt,
    className
}):JSX.Element=>{
    return(
        <div {...extra} className={className} onClick={onClick}>
            <div className="avatar">
                    <div 
                    className={`
                    ${size=== "large " && `w-${sizeNumber} h-${sizeNumber} `}
                    ${!size && "w-14 h-14 "}
                    ${size === "tiny" && "w-10 h-10 "}
                    ${border === "full" && "rounded-full "}
                    ${border === "btn" && "rounded-btn "} 
                    
                    `}
                     >
                         {src? (
                             <img src={src} alt={alt} />
                         ):(
                            <span>{children}</span>
                         )}
                        
                    </div>
                </div>
        </div>
    )
}
Avatar.defaultProps={
    border:"full",
    sizeNumber:24
}
export default Avatar;

//m-1
//https://i.pravatar.cc/500?img=32
/*rounded-full
w-10 h-10*/