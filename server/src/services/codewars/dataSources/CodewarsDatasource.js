import {DataSource} from "apollo-datasource";
import axios from "axios";

class CodewarsDatasource extends DataSource {
    constructor() {
        super();
        this.user = 'devdudeio'
        this.baseUrl = 'https://www.codewars.com/api/v1/';
    }

    async getMyCodewarsUser() {
        const config = {
            method: 'get',
            url: `${this.baseUrl}users/${this.user}`,
        }

        return await axios(config)
            .then(({data}) =>  data)
            .catch(error => error)
    }
}

export default CodewarsDatasource;