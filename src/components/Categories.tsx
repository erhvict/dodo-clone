import PropTypes from 'prop-types';

function Categories({ value, onClickCategory }) {
  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  return (
    <div className="categories">
      <ul>
        {categories.map((categoryName, i) => (
          <li
            onClick={() => onClickCategory(i)}
            className={value === i ? 'active' : ''}
            key={`${categoryName}_${i}`}>
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
}

Categories.propTypes = {
  value: PropTypes.number.isRequired,
  onClickCategory: PropTypes.func.isRequired,
};

export default Categories;
