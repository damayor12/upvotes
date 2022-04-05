import React, {useState} from 'react';

const categories = [
  {
    id: 'random',
    name: 'Any Category',
  },
  { id: 1, name: 'General' },
  { id: 2, name: 'Politics' },
  { id: 3, name: 'Books' },
];



const Selector = () => {

  const [selectedOption, setSelectedOption] = useState(categories[0].value);
  
  return (
    <div className="category-selector" >
      <p>Select Category</p>
      {/* <select value={category} onChange={(e) => chooseCategory(e.target.value)}> */}
      <select onChange={(e) => console.log(e)}>
        {categories.map((category, index) => (
          <option
            key={index}
            value={category.id}
            dangerouslySetInnerHTML={{ __html: category.name }}
          />
        ))}
      </select>
    </div>
  );
};

export default Selector;
