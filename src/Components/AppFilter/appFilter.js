
import "./appFilter.scss";

const AppFilter = (props) => {
  const buttonsData = [
    { name: "all", label: "All" },
    { name: "Columbia", label: "Columbia" },
    { name: "Kenya", label: "Kenya" },
    { name: "Brazil", label: "Brazil" },
  ];

  const buttons = buttonsData.map(({ name, label }) => {
    const active = props.filter === name;
    // filter сюда приходит props-ом из OurCofee!
    const clazz = active ? "btn-light" : "btn-outline-light";
    // проверяем активность класса елемента верстки
    
    return (
      <button
        type="button"
        className={`ourbeens_btn_item-count ${clazz}`}
        key={name}
        onClick={() => {
          props.onFilterSelect(name);
          props.onUpdateCoffeeItems(name);
        }}
         //приходит props-ом из OurCofee!
      >
        {label}
      </button>
    );
  });

  return <div className="ourbeens_btn_item">
            <div className="ourbeens_btn_item-title">Or filter</div>
        {buttons}
  </div>;
};

export default AppFilter;
