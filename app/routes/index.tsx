import { useState } from "react";
import Option from "~/components/Option";

const firstOptions = [
  {
    "id": "638dc8bd31246903467a7b1a",
    "private": {
      "title": "This and that 1",
      "body": "Something to explain"
    },
    "public": {
      "title": "yolo 1",
      "body": "whasup"
    },
    "icon": "someincon",
    "tags": [
      "test 1",
      "sample 1",
      "hi 1"
    ]
  },
  {
    "id": "638dc8bd31246903467a7b1b",
    "private": {
      "title": "This and that 2",
      "body": "Something to explain"
    },
    "public": {
      "title": "yolo 2",
      "body": "whasup"
    },
    "icon": "someincon",
    "tags": [
      "test 2",
      "sample 2",
      "hi 2"
    ]
  },
  {
    "id": "638dc8bd31246903467a7b1c",
    "private": {
      "title": "This and that 3",
      "body": "Something to explain"
    },
    "public": {
      "title": "yolo 3",
      "body": "whasup"
    },
    "icon": "someincon",
    "tags": [
      "test 3",
      "sample 3",
      "hi 3"
    ]
  },
]



export default function Index() {
  const [chosenOptions, setChosenOptions] = useState<Array<string>>([]);

  function clickOnOption(id: string) {
    setChosenOptions((current: Array<string>) => [...current, id]);
  }

  return (
    <div className="font-sans relative w-screen h-screen bg-[#f3f3f3] flex">
      {chosenOptions?.map(option => {
        console.log(option);

        return (
          <div key={option}>
            <div key={option} className="animate-shrink transition-all w-[250px] bg-white h-screen border-r-4 relative">
              <p>{option}</p>
            </div>
          </div>
        )
      })}
      <div className="w-[250px] bg-white h-screen border-r-4 relative">
        <div className="h-[90%] overflow-y-scroll">
          {firstOptions.map((option, index) => {
            return (
              <Option key={index} onClick={clickOnOption} title={option.private.title} tags={option.tags} optionId={option.id} />
            )
          })}
        </div>
        <button className="w-full h-[10vh] mt-auto absolute bottom-0 border-b flex items-center justify-center text-4xl font-bold bg-gray-100 hover:bg-slate-200">+</button>
      </div>
    </div>
  );
}
