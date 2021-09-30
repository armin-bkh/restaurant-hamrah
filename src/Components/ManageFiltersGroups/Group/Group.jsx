import { useEffect } from "react";

const Group = ({ title, group }) => {
    useEffect(()=>{
        console.log(group)
    }, [])
    return ( 
        <article>
            <h1 className={`text-gray-9000 font-bold text-2xl my-5 Dirooz`}>دسته بندی {title}</h1>
            <ul>
                {
                    group.map((it => <li key={it.id}>{it.label}</li>))
                }
            </ul>
        </article>
     );
}
 
export default Group;