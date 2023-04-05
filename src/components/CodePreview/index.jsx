import React from "react";
import OpenTag from "./OpenTag";
import CloseTag from "./CloseTag";
import ReactTyped from "react-typed";
import PerfectScrollbar from "react-perfect-scrollbar";
import "./PerfectScrollBar.css";

const CodePreview = () => {
  return (
    <div className="bg-nd-code-bg-4/5 rounded-[15px] border border-nd-white-1/10">
      <div className="flex gap-[6px] border-b-[1px] p-3 w-full border-nd-white-1/10">
        <span className="w-2 h-2 rounded-full bg-nd-primary" />
        <span className="w-2 h-2 rounded-full bg-nd-code-class" />
        <span className="w-2 h-2 rounded-full bg-nd-code-property" />
      </div>
      <pre>
        <PerfectScrollbar>
          <code>
            <div className="flex flex-row">
              <div className="flex flex-col text-nd-white text-sm sm:text-base items-end p-3">
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
                <div>6</div>
                <div>7</div>
                <div>8</div>
                <div>9</div>
                <div>10</div>
                <div>11</div>
                <div>12</div>
                <div>13</div>
                <div>14</div>
              </div>
              <div className="flex flex-col p-3 text-nd-light text-sm sm:text-base">
                <div>
                  <OpenTag
                    nameTag={"div"}
                    classProperty="flex flex-col gap-y-5"
                  />
                </div>
                <div className="ml-5">
                  <OpenTag
                    nameTag={"h3"}
                    classProperty={"text-nd-white text-xl"}
                  />
                </div>
                <div className="ml-10">
                  <ReactTyped
                    strings={[
                      "Halo! Nama saya",
                      "Hi! My name is",
                      "Bonjour! mon nom est",
                      "¡Hola! mi nombre es",
                    ]}
                    typeSpeed={80}
                    backSpeed={60}
                    backDelay={2000}
                    loop
                  />
                </div>
                <div className="ml-5">
                  <CloseTag nameTag={"h3"} />
                </div>
                <div className="ml-5">
                  <OpenTag
                    nameTag={"h1"}
                    classProperty={"text-nd-primary text-6xl font-bold"}
                  />
                </div>
                <div className="ml-10">Muhammad Naufal Dzaki.</div>
                <div className="ml-5">
                  <CloseTag nameTag={"h1"} />
                </div>
                <div className="ml-5">
                  <OpenTag
                    nameTag={"h2"}
                    classProperty={"text-nd-white text-3xl"}
                  />
                </div>
                <div className="ml-10">
                  I'm Junior Web Developer based On Surabaya.
                </div>
                <div className="ml-5">
                  <CloseTag nameTag={"h2"} />
                </div>
                <div className="ml-5">
                  <OpenTag
                    nameTag={"button"}
                    classProperty={"button-outline"}
                  />
                </div>
                <div className="ml-10">Resume</div>
                <div className="ml-5">
                  <CloseTag nameTag={"button"} />
                </div>
                <div>
                  <CloseTag nameTag={"div"} />
                </div>
              </div>
            </div>
          </code>
        </PerfectScrollbar>
      </pre>
    </div>
  );
};

export default CodePreview;
