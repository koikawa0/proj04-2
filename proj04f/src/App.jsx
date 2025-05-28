import React, {useState, useEffect} from "react"
import Title from "./components/Title.jsx"
import Field from "./components/Field.jsx"
import Content from "./components/Content.jsx"
import axios from "axios"


export default function Main(){
  const [codes, defineCodes] = useState([])
  const [contents, defineContents] = useState({})

  useEffect(function () {
    axios.get("http://localhost:4000/api")
        .then(function (resposta) {
            const dados = resposta.data
            const lista = Object.keys(dados)
            defineCodes(lista)
            defineContents(dados)
        })
        .catch(function (erro) {
            console.log(erro)
        })

})

  
  return<>
  <Title
  name="Hell"
  image="https://images.wallpapersden.com/image/wxl-black-gray-minimalist-art_77633.jpg"/>

  <Field>
    {
    codes.map(function(code){
      return <Content
      key={code}
      cover={contents[code].cover}
      title={contents[code].title}
      genre={contents[code].genre}
      year={contents[code].year}
      writer={contents[code].writer}
      />
    })
    }
  </Field>
  </>
}