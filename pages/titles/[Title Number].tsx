import React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { getTitles } from '../../services/getTitles'
import { ITitles } from '../../services/titles';
import styles from '../../styles/pages/TitleNumber.module.css'
import { GoogleMap, useLoadScript, MarkerF } from '@react-google-maps/api';

interface ITTitlePageProps {
  title: ITitles[]
}

function TitleNumber({ title }: ITTitlePageProps) {
  const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: API_KEY as string
  })
  const titleInformation = title[0]
  const center = {lat: titleInformation.Y, lng: titleInformation.X}

  return (
    <>
    {!isLoaded ? <h1>Loading...</h1> : 
      <div className={`${styles.titlePageContainer} grid max-w-3xl mx-auto gap-3`}>
        <main>
          <div className="flex gap-4 items-center mb-4">
            <h1>{titleInformation['Title Number']}</h1>
            <span className="py-2 px-4 shadow-md no-underline rounded-full bg-blue-400 text-white font-sans font-semibold text-sm border-blue-400 btn-primary hover:text-white">{titleInformation.Tenure}</span>
          </div>
          <p className="mb-8">{titleInformation['Property Address']}</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
            ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
            sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </main>
        <GoogleMap zoom={20} center={center} mapContainerClassName={styles.map}>
          <MarkerF position={center} visible={true} />
        </GoogleMap>
      </div>
    }
    </>
  )
}
export const getStaticPaths: GetStaticPaths = async () => {

  const titles = await getTitles();

  const paths = titles.map(path => ({
    params: {"Title Number": path['Title Number']}
  }))

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async (context) => {

  const titles = await getTitles();

  const params = context.params!;

  const title = titles.filter(title => {
    return title['Title Number'] === params['Title Number'];
  });

  return {
    // Passed to the page component as props
    props: { title },
  }
}



export default TitleNumber