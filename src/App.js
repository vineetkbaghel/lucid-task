import { useState } from "react";
import "./App.css";

function App() {
  const [tags, setTags] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const formula = [
    {
      id: crypto.randomUUID(),
      name: "Payment Processing Fees",
      flag: "calculation",
    },
    {
      id: crypto.randomUUID(),
      name: "Payroll Bonus COGS",
      flag: "currency",
    },
    {
      id: crypto.randomUUID(),
      name: "Payroll Bonus G&A",
      flag: "currency",
    },
    {
      id: crypto.randomUUID(),
      name: "SUM",
      flag: "function",
    },
    {
      id: crypto.randomUUID(),
      name: "GSuite per Employee",
      flag: "currency",
    },
    {
      id: crypto.randomUUID(),
      name: "Payroll Bonus S&M",
      flag: "currency",
    },
    {
      id: crypto.randomUUID(),
      name: "Salary Increase Month",
      flag: "number",
    },
    {
      id: crypto.randomUUID(),
      name: "Gross Margin %",
      flag: "calculation",
    },
    {
      id: crypto.randomUUID(),
      name: "ABSOLUTE_VALUE",
      flag: "function",
    },
    {
      id: crypto.randomUUID(),
      name: "Payroll Tax COGS",
      flag: "currency",
    },
    {
      id: crypto.randomUUID(),
      name: "Company Headcount",
      flag: "calculation",
    },
  ]
  const [filteredData, setFilteredData] = useState([]);
  const handleChange = (e) => {
    setInputValue(e.target.value);
    if (
      e.target.value === "+" ||
      e.target.value === "-" ||
      e.target.value === "*" ||
      e.target.value === "/" ||
      e.target.value === "%" ||
      e.target.value === "(" ||
      e.target.value === ")" ||
      e.target.value === "="
    ) {
      setTags([...tags, e.target.value]);
      setFilteredData([]);
      setInputValue("");
    }
    const query = e.target.value.toLowerCase();

    let datas = formula.filter((data) =>
      data.name.toLowerCase().includes(query)
    );
    setFilteredData(datas);
  };
  const addTabInInput = (params) => {
    setTags([...tags, params]);
    setFilteredData([]);
    setInputValue("");
  };
  const deleteTag =(id)=>{
  const filteredTag = tags.filter((d, i)=> d.id !== id)
  setTags(filteredTag)
  }
  return (
    <div className="App">
      <div className="input-container">
        <div className="tag-input">
          {tags.length > 0 &&
            tags.map((d, i) => {
              if (
                d === "+" ||
                d === "-" ||
                d === "*" ||
                d === "/" ||
                d === "%" ||
                d === "(" ||
                d === ")" ||
                d === "="
              ) {
                  return <span className="symbol">{d}</span>
              }
              return (
                <div className="tag" key={i}>
                  <span>{d.name}</span>
                  {(d.flag !== "function" && d.flag !=='number') && <span className="icon" onClick={()=> deleteTag(d.id)}>x</span>}
                </div>
              );
            })}

          <input
            type="text"
            className="formula-input"
            onChange={handleChange}
            value={inputValue}
          />
        </div>

        <ul>
          {filteredData.length > 0 &&
            filteredData?.map((item) => {
              return (
                <li
                  key={item.id}
                  className="filtered-el"
                  onClick={() => addTabInInput(item)}
                >
                  <span>{item.name}</span>
                  <span className="flag">{item.flag}</span>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
}

export default App;
