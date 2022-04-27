import './styles/Searchbar.css'

export default function Searchbar({searchQuery, setSearchQuery}) {
    return(
        <form action="/" method="get">
            <input
                type="text"
                value={searchQuery}
                onInput={event => setSearchQuery(event.target.value)}
                id="header-search"
                placeholder="search"
            />
        </form>
    )
}
