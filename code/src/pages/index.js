import api from "@/services/api"
import { useEffect, useState } from "react";

const Home = () => {

  const [work, setWork] = useState();

  const getWork = async () => {
    const res = await fetch(`${api}work/1`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); // Isso converte a resposta em formato JSON
      })
      .then(data => {
        console.log(data); // Aqui você pode trabalhar com os dados retornados
      })
  }

  useEffect(() => {
    console.log('work', work)
  }, [work])

  useEffect(() => {
    getWork();
  }, [])

  return (
    <></>
  )
}

export default Home