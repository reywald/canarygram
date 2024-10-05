function SelectedItem({ image, name }) {
  return (
    <div className="selectedItem">
      <p>{name}</p>
      <img src={Image} alt={name} />
    </div>
  );
}

export default SelectedItem;
