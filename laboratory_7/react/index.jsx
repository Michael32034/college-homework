import { useState } from "react"
import { createRoot } from "react-dom/client"

function animate_text(text_variation, setText, text){
  let order = [1,2,0];
  setText(text_variation[order[text_variation.indexOf(text)]]);
  setTimeout(animate_text, 2000, text_variation, setText, text);
}

function Header({ text_variation }){
  let [text, setText] = useState(text_variation[0]);
  setTimeout(animate_text, 2000, text_variation, setText, text);
  return <>
      <header>
        <h1>{text}</h1>
      </header>
    </>
};

function Description({ text }){
  return <>
      <section id="description">
        <p>{text}</p>
      </section>
    </>
}

function Feautures({ list }){
  return <>
      <section id="feautures">
        {
          list.map((item)=>{
            return <div>
                <p>
                  { item["name"] }
                </p>
              </div>
          })
        }
      </section>
    </>
}

function Details({ list }){
  return <>
      <section id="details">
        {
          list.map((item)=>{
            return <div>
                <p>
                  { item["name"] }: { item["value"] }
                </p>
              </div>
          })
        }
      </section>
    </>
}

function Main({ content }){
  return <>
      <main>
        <Description text={content["description"]}/>
        <Feautures list={content["feautures"]}/>
        <Details list={
          [
            {"name": content["label_founded"], "value": content["founded"]},
            {"name": content["label_lib_size"], "value": content["lib_size"]}
          ]
        }/>
      </main>
    </>
}

function App({ content }){
  return <>
      <Header text_variation={content["name"]}/>
      <Main content={content}/>
    </>
}


document.addEventListener("DOMContentLoaded", async () => {
  let content = await fetch("./content.json").then(r => r.json());
  let app = createRoot(document.body);
  app.render(<App content={content} />)
})
