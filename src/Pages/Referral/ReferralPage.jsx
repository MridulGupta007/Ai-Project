import React, { useEffect, useState } from "react";
// import { Plus, Filter } from "lucide-react";
import profilePic from "../../assets/profile.png";
import logo from "../../assets/Logo.png";
import Axios from "axios";
//professionalism, word limit, number of paragraphs
function ReferralPage() {
  const [keyWords, setKeywords] = useState([]);
  const [keywordField, setKeywordField] = useState("");
  // const [sample, setSample] = useState(0);
  const [numberOfParagraph, setNumberOfParagraph] = useState(1);
  const [wordLimit, setWordLimit] = useState(100);
  const [professionalism, setProfessionalism] = useState(10);
  const [word, setWord] = useState("");
  const [phrase, setPhrase] = useState("");
  const [prompt, setPrompt] = useState("");
  // const [initialFetch, setInitialFetch] = useState(false)
  const fetchReferral = async () => {
    // setInitialFetch(true)
    let tokens;
    setWord("Loading .....");
    try {
      const response = await Axios.post("http://localhost:3001/generate", {
        name: "Mridul",
        numberOfParagraph: numberOfParagraph,
        wordLimit: wordLimit,
        professionalism: professionalism,
      });

      console.log(response);
      setPhrase(response.data);
      setPrompt(response.data.prompt);
      tokens = response.data.reply.split("");
    } catch (error) {
      console.log("Error in Post request", error);
    }
    console.log(tokens);
    let i = 0;
    const timer = setInterval(() => {
      if (i <= tokens.length) {
        let newArr = tokens.slice(0, i);
        setWord(newArr.join(""));
        i += 1;
      } else {
        clearInterval(timer);
      }
    }, 50);
  };

  return (
    <div className="flex mx-2 shadow-xl h-[80vh] px-3 py-2 gap-x-2">
      <div className="w-[75%] rounded-xl shadow-lg overflow-y-auto overflow-x-hidden relative px-3 py-2">
        {/* Conversation Box for AI and User */}

        <div className="border h-[80%] rounded-xl px-3 py-2 space-y-3 overflow-y-scroll">
          <div className="flex items-center gap-x-4">
            {prompt && (
              <img src={profilePic} alt="user" className="h-10 w-10" />
            )}
            {prompt}
          </div>
          <div className="flex  gap-x-4">
            {word && <img src={logo} alt="Ai" className="h-10 w-10" />}
            {word}
          </div>
        </div>

        <button
          onClick={fetchReferral}
          className="bg-black text-white hover:text-black hover:bg-white duration-500 ease-in-out px-3 py-2 rounded-md hover:border hover:border-black absolute bottom-4 left-[45%]"
        >
          Generate referral
        </button>
      </div>
      <div className="flex flex-col shadow-xl w-[24%] px-5 py-3 rounded-xl gap-y-4">
        <h1 className="text-center text-[25px] font-light mb-5">FILTER</h1>
        <div className="flex flex-col gap-y-2">
          {/* Custom Filter application */}
          <label htmlFor="professionalism">Professionalism</label>
          <input
            type="range"
            name="professionalism"
            id="professionalism"
            min="10"
            max="100"
            step="10"
            value={professionalism}
            className="border"
            onChange={(event) => setProfessionalism(event.target.value)}
          />
          <span className="text-[14px] font-light font-inter">{`Professionalism set at: ${professionalism}%`}</span>
        </div>
        <div className="flex flex-col gap-y-2">
          <label htmlFor="professionalism">Word Limit</label>
          <input
            type="range"
            name="professionalism"
            id="professionalism"
            min="100"
            max="500"
            step="50"
            value={wordLimit}
            className="border"
            onChange={(event) => setWordLimit(event.target.value)}
          />
          <span className="text-[14px] font-light font-inter">{`Word-Limit set at: ${wordLimit} words`}</span>
        </div>
        <div className="flex flex-col gap-y-2">
          <label htmlFor="professionalism">Number Of Paragraphs</label>
          <input
            type="range"
            name="professionalism"
            id="professionalism"
            min="1"
            max="3"
            step="1"
            className="border"
            value={numberOfParagraph}
            onChange={(event) => setNumberOfParagraph(event.target.value)}
          />
          <span className="text-[14px] font-light font-inter">{`Number of Paragraphs: ${numberOfParagraph}`}</span>
        </div>
        <div className="relative">
          {/* Custom Keyword Addition, keeping maxlength at 30 characters */}
          <input
            type="text"
            placeholder={
              keyWords.length === 3 ? "Max Limit reached" : "Add Keywords"
            }
            maxLength={30}
            className="px-2 min-h-10 w-full active:outline-none focus:outline-none border-b"
            value={keywordField}
            onChange={(event) => setKeywordField(event.target.value)}
            disabled={keyWords.length === 3 ? true : false}
          />
          {keyWords.length < 3 && (
            <span className="absolute top-4 right-[70px] text-slate-500 text-[12px]">
              {keyWords.length}/3
            </span>
          )}

          {keyWords.length < 3 && (
            <button
              className="bg-[#202020]/90 hover:bg-black duration-500 ease-in-out rounded-md text-white px-3 py-1 absolute right-2 top-1"
              onClick={() => {
                setKeywords((prev) => [...prev, keywordField]);
                setKeywordField("");
              }}
            >
              Add
            </button>
          )}
        </div>
        <div className="border min-h-10 flex items-center justify-evenly flex-wrap gap-x-5 gap-y-2 py-1 px-1">
          {keyWords.map((elem) => (
            <span className="bg-[#F6F5F5] inter text-[#000000]/60 font-semibold px-1 text-[14px]">
              {elem}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ReferralPage;
