import { ITitles } from './titles'

export async function getTitles(): Promise<ITitles[]> {
    const data: ITitles[] =  await fetch('https://owfetechtask.blob.core.windows.net/titledata/testdata.json')
        .then((response) => response.json())
        .then((data) => {
            return data
        })
        .catch((error) => {
            console.error('Error:', error);
        });

    return data;
}