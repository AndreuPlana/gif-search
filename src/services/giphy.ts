import { ApiConfig } from "../config";
import axios from "axios";
export default class GiphyService {
    public ApiKey: string;

    public constructor() {
        this.ApiKey = ApiConfig.GIPHY_API_KEY;
    }
    public getImagesByName(search: string) {
        if (search.length === 0) return;
        try {
            axios.get('api.giphy.com/v1/gifs/search	',
                {
                    params: {
                        api_key: this.ApiKey,
                        q: search,
                        limit: 10,
                    }
                }).then(function (response) {
                    debugger;
                    console.log(response);
                });

        } catch (error) {

        }
    }
}