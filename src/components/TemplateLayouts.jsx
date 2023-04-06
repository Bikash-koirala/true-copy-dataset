import React, {useState} from 'react'
import './TemplateLayouts.css'

export default function TemplateLayouts() {
const [initialValue, setInitialValue] = useState([
    {
      id: "0005",
      name: "question-1",
      position: "1",
      parent: "0001",
      type: "text",
      response_type: "1",
      component: "question",
      value: null,
      default: null,
      label: "Question 1",
      placeholder: "Enter your new question",
      options: [],
      logics: {},
      notes: "",
      media: [],
      validators: {
        required: true,
        max_length: 120,
        unique: true
      },
      isHeaderDisplayed: true
    }
]);

  const createNewQuestion = (qPosition) => {
    let tempArr = [...initialValue];
    tempArr.splice(qPosition + 1, 0, {
      ...initialValue[0],
      isHeaderDisplayed: true
    });
    setInitialValue(tempArr);
  };

  const createNewSection = (sPosition) => {
    let tempArr = [...initialValue];
    tempArr.splice(sPosition + 1, 0, {
      ...initialValue[0],
      isSectionDisplayed: true
    });
    setInitialValue(tempArr);
  };

  // tooltip contents
  const [toolTipItems, setToolTipItems] = useState([
    {
      id: 1,
      name: "Add Question"
    },
    {
      id: 2,
      name: "Add Section"
    }
    // {
    //   id: 3,
    //   name: "Delete"
    // },
    // {
    //   id: 4,
    //   name: "Import Questions"
    // },
    // {
    //   id: 5,
    //   name: "Upload"
    // }
  ]);

  const clickTooltipHandler = (index) => {
    if (index === 0) {
      createNewQuestion(index);
    } else if (index === 1) {
      createNewSection(index);
    }
  };

  return (
    <>
      <div className="App">
      <div>
        <div className="template-wrapper">
          <div className="template-box">
            {initialValue?.map((val, index) => {
              return (
                <div className="box-wrapper" key={index}>
                 <div>
                     {val?.isHeaderDisplayed && (
                    <div className="template-box-inner">
                      {val?.label}
                      {` index ==> ${index}`}
                    </div>
                  )}
                  {/* sections contents */}
                  {val?.isSectionDisplayed && (
                    <div className="seciton-wrapper">section is displayed</div>
                  )}
                 </div>

                  <div className="template-hover-container">
                    {toolTipItems?.map((tooltip, index) => {
                      const { id, name } = tooltip;
                      return (
                        <div
                          className="template-tooltip"
                          key={index}
                          onClick={() => clickTooltipHandler(index)}
                        >
                          {name}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
