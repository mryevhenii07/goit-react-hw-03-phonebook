export const Filter = ({ value, changeFilter }) => {
  return (
    <label>
      Filtr
      <input type="text" value={value} onChange={changeFilter} />
    </label>
  );
};
