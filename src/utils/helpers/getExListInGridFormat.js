

export function getExListInGridFormat(list) {
    const formatedData = [];
    list.forEach((item) => {
      const { name, tempo, type } = item;
      const formatedItem = [name, tempo, type,null];
      formatedData.push(formatedItem);
    });
  
    return formatedData
  }
  
