/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import { useState } from "react";
import { useMemo } from "react";

const withSearch = (Component) => ({ list, ...rest }) => {
    const [search, setSearch] = useState('');


    const matches = useMemo(() => {
        return list.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    }, [search, list])


    // useEffect(() => {
    //     setFiltered(
    //         list.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    //     )
    // }, [search, list])

    return (
        <>
            <input
                type="text"
                value={search}
                onChange={({ target }) => setSearch(target.value)}
            />
            <Component list={matches} {...rest} />
        </>
    )
}

const List = ({ list }) => {
    return (
        <ul>
            {
                list.map(item => (
                    <li key={item.id}>

                        {item.name}
                    </li>
                ))
            }
        </ul>
    )
}

const SearchableList = withSearch(List);