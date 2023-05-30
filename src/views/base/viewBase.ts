import { Vue } from "vue-facing-decorator";
import { Api } from "../../utils/api";

export class ViewBase extends Vue {

    protected get(url: string, params: any) {
        return Api.get(Api.Request, url, {
            headers: {
                Authorization: "" // TODO: insert header
            },
            params: params
        });
    }

    protected post(url: string, params: any, data: any) {
        return Api.post(Api.Request, url, data, {
            headers: {
                Authorization: "" // TODO: insert header
            },
            params: params
        });
    }

    protected put(url: string, params: any, data: any) {
        return Api.put(Api.Request, url, data, {
            headers: {
                Authorization: "" // TODO: insert header
            },
            params: params
        });
    }

    protected delete(url: string, params: any) {
        return Api.delete(Api.Request, url, {
            headers: {
                Authorization: "" // TODO: insert header
            },
            params: params
        });
    }

    protected getFile(url: string, params: any) {
        return Api.get(Api.FileRequest, url, {
            headers: {
                Authorization: "" // TODO: insert header
            },
            params: params
        });
    }

    protected postFile(url: string, params: any) {
        return Api.post(Api.FileRequest, url, {
            headers: {
                Authorization: "" // TODO: insert header
            },
            params: params
        });
    }

}