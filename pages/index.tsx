import { useEffect, useState } from "react";
import TitlesTable from "../components/TitlesPaginationTable"
import { getTitles } from "../services/getTitles";
import { ITitles } from "../services/titles";

interface IHomePageProps {
  data: ITitles[]
}

export default function Home({ data }: IHomePageProps) {
  const titles = data;

  return (
    <>
      <TitlesTable titles={titles} defaultPage={1} />
    </>
     
  )
}

export async function getStaticProps() {
  const data = await getTitles()
  return {
    props: {
      data
    }
  }
}