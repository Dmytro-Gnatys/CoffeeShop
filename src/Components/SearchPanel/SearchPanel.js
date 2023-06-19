import "./searchPanel.scss";


const SearchPanel = ({ term, onUpdateSearch }) => {

    const onUpdateSearchTerm = (e) => {
        const searchTerm = e.target.value;
        onUpdateSearch(searchTerm);
      }; 

    return (
        <div className="ourbeens_form_item">
        <div className="ourbeens_form_item-title">Lookiing for</div>
        <form className="ourbeens_form_item-look">
            <input 
            type="text"
            className="ourbeens_form_item-looking" 
            placeholder=" start typing here..."
            name="name"
            value={term}
            onChange={onUpdateSearchTerm} 
            />
        </form>
    </div>
    )
}

export default SearchPanel;