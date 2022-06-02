import react, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";
const allcategories = ["all", ...new Set(items.map((item) => item.category))];

function App() {
  const [menuItem, setmenuItem] = useState(items);
  const [categories, setcatagories] = useState(allcategories);
  const filterItems = (category) => {
    if (category === "all") {
      setmenuItem(items);
      return;
    }
    const newItem = items.filter((item) => item.category === category);
    setmenuItem(newItem);
  };
  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>Menu</h2>
          <div className='underline'></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItem} />
      </section>
    </main>
  );
}

export default App;
