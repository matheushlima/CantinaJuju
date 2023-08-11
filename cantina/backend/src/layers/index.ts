import axios, { AxiosInstance } from "axios";
import { LayersUserRelated } from "./interface";
export default class LayersAPI {
  private appToken: string;
  private appCommunity: string;
  private appId: string;
  private apiUrl: string;
  private Axios: AxiosInstance;

  constructor(token: string, community: string, appId: string, apiUrl: string) {
    this.appToken = token;
    this.appId = appId;
    this.appCommunity = community;
    this.apiUrl = apiUrl;
    this.Axios = axios.create({
      baseURL: this.apiUrl,
      headers: {
        Authorization: token,
        "Community-Id": community,
      },
    });
  }

  async checkStatus(): Promise<string> {
    const data: string = (await this.Axios.get("/status")).data;
    return data;
  }

  async getUserRelated(
    id: string,
    community: string
  ): Promise<LayersUserRelated> {
    const { data: related } = await this.Axios.get(`/users/${id}/related`, {
      headers: {
        "community-id": community,
      },
    });
    return related;
  }
}
