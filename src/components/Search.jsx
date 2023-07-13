export default function Search ({search, onSearch}){
    return (
        <div>
            <input type="text" onChange={(e) => onSearch(e.target.value ) } value={search}/>
        </div>
    );
}