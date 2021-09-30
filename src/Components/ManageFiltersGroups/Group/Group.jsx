import { useEffect } from "react";
import GroupItem from "./GroupItem/GroupItem";

const Group = ({ title, group }) => {
    return ( 
        <article className={`boxShadow rounded-md p-5 mt-5`}>
            <h1 className={`text-gray-9000 font-bold text-2xl mb-5 Dirooz`}>دسته بندی {title}</h1>
            <ul>
                {
                group.map(((it, index) => <GroupItem key={it.id} index={index + 1} label={it.value} />))
                }
            </ul>
        </article>
     );
}
 
export default Group;