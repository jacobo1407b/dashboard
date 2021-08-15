import  {FunctionComponent} from 'react'

interface IAvatar{
    src?:string,
    size?:string,
    border?:string,
    children?:string,
    alt?:string,
}
const Avatar:FunctionComponent<IAvatar>=({src,size,border,children,alt}):JSX.Element=>{
    return(
        <div>
            <div className="avatar">
                    <div 
                    className={`
                    ${size=== "large" && "w-24 h-24"}
                    ${!size && "w-14 h-14"}
                    ${size === "tiny" && "w-10 h-10"}
                    ${border === "full" && "rounded-full"}
                    ${border === "btn" && "rounded-btn"}
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
    border:"full"
}
export default Avatar;

//m-1
//https://i.pravatar.cc/500?img=32
/*rounded-full
w-10 h-10*/