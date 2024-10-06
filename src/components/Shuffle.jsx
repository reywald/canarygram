function Shuffle({ setItemsArray }) {
  const handleClick = () => {
    setItemsArray((currentItems) => {
      let newItemsArray = [...currentItems];
      const item = newItemsArray[0];
      newItemsArray = newItemsArray.slice(1);
      newItemsArray.push(item);

      return newItemsArray;
    });
  };

  return <button onClick={() => handleClick()}>Shuffle</button>;
}

export default Shuffle;
