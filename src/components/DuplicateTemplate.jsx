import React, { useEffect } from "react";
import { useState } from "react";
import Switch from "./Switch";
import { v4 as uuidv4 } from "uuid";
import { datasets } from "./dataset";
import { deepCloneArray } from "../utils/TrueCopy";

export default function DuplicateTemplate() {
  const [checked, setChecked] = useState(false);
  const [wholeDataSets, setWholeDataSets] = useState([]);

  let findStartIndex = datasets?.findIndex(
    (data) => data?.id == "85c392d3-ae99-4c72-9fbe-d642f4409386"
  );
  let findStartObjectParent = datasets?.find(
    (data) => data?.id == "85c392d3-ae99-4c72-9fbe-d642f4409386"
  )?.parent;

  let endArraySet = datasets?.filter(
    (data) => data?.parent === findStartObjectParent
  );

  console.log({ endArraySet });

  let endArraySetItemIndex = endArraySet?.findIndex(
    (end) => end?.id === "85c392d3-ae99-4c72-9fbe-d642f4409386"
  );

  let lastItem = endArraySet[endArraySetItemIndex + 1] || undefined;
  //   if not last item
  // last item id =>
  // last item find index => dataset
  // dataset slice =>

  let myData = [];
  console.log({ lastItem });

  if (!lastItem) {
    myData = datasets.slice(findStartIndex);
  } else {
    let findLastItemId = datasets.findIndex((set) => set.id == lastItem.id);
    myData = datasets.slice(findStartIndex, findLastItemId);
  }

  console.log({ myData });

  //   console.log(
  //     { endArraySet },
  //     { findStartIndex },
  //     { endArraySetItemIndex },
  //     { lastItem }
  //   );

  //   console.log(
  //     { endArraySet },
  //     { findStartIndex },
  //     { findStartObjectParent },
  //     { endArraySetItemIndex }
  //   );

  let filteredArray = myData;

  const updateObjects = (objects, oldId, newId) => {
    const updatedObjects = objects.map((obj) => {
      if (obj.id === oldId) {
        obj.id = newId;
      }
      return obj;
    });

    updatedObjects.forEach((obj) => {
      if (obj.parent === oldId) {
        // updateObjects(updatedObjects, obj.id, `${newId}_${obj.id}`);
        const jj = uuidv4();
        obj.id = jj;
        obj.parent = `${newId}`;
      }
    });

    return updatedObjects;
  };

  useEffect(() => {
    if (checked) {
      console.log({ filteredArray });
      let clonedArr = deepCloneArray(filteredArray);
      //   clonedArr[0].SectionName = "hello";
      //   console.log(clonedArr);
      //   console.log(datasets);
      //   console.log(newArr);
      //   console.log(datasets);
      const newUId = uuidv4();
      console.log(
        updateObjects(clonedArr, "ea3d48db-9d3e-43e2-a753-b5024c425430", newUId)
      );
    }
  }, [checked]);

  const objects = [
    { id: "1", parent: null },
    { id: "2", parent: "1" },
    { id: "3", parent: "2" },
    { id: "10", parent: "3" },
    { id: "10", parent: "10" },
    { id: "6", parent: "30" },
  ];

  //   console.log({ objects });

  return (
    <>
      <Switch checked={checked} setChecked={setChecked} />
      {datasets.map((data, i) => {
        return <div>sec</div>;
      })}
      ============ Dublicate=============
      {wholeDataSets.map((data, i) => {
        return <div>sec</div>;
      })}
      {/* <button onClick={() => {}}>Change Value</button> */}
    </>
  );
}
