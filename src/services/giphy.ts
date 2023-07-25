import { ApiConfig } from "../config";
import axios from "axios";
import { IGifData } from "../types/GifData";
export default class GiphyService {
    private ApiKey: string;
    public data: IGifData[] = [];
    
    public constructor() {
        this.ApiKey = ApiConfig.GIPHY_API_KEY;
    }
    public getImagesByName(search: string) {
        if (search.length === 0) return;
        try {
            axios.get('https://api.giphy.com/v1/gifs/search',
                {
                    params: {
                        api_key: this.ApiKey,
                        q: search,
                        limit: 10,
                    }
                }).then((response:any) => {
                    if(!response.data) throw Error("No Data");
                    console.log(response);
                    this.data = response.data.data;
                });

        } catch (error) {

        }
    }

    public getSavedImages(){
        return this.data;
    }
}