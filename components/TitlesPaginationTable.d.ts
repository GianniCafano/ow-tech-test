import { ITitles } from '../services/titles'

type TTitles = Pick<ITitles, "Title Number" | "Tenure"> 

export interface ITitlePaginationTable {
    titles: TTitles[];
    defaultPage: number;
}

