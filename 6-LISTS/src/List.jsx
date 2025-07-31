

function List(props){

    const category = props.category;
    const itemList = props.items;

    //itemList.sort((a, b) => a.name.localeCompare(b.name)); // SORT ALPHABETICAL
    //itemList.sort((a, b) => a.calories - b.calories); // SORT BY CALORIES
    //const lowCalItem = itemList.filter(item => item.calories < 100); // FILTER LOW CALORIES
    //const highCalItem = itemList.filter(item => item.calories >= 100); // FILTER HIGH CALORIES

    const listItems = itemList.map(item =>  <li key={item.id}>
                                                                          {item.name}: &nbsp;
                                                                          <b>{item.calories}</b></li>);
    
    return( <>
                    <h3 className="list-category">{category}</h3>
                    <ol className="list-items">{listItems}</ol>
                </>);
}

List.defaultProps = {
    category: "Category",
    items: [],
}
export default List
